import { TRACKS, WORKFLOW_STEPS } from "./tracks.js";
import { SunoAudioEngine } from "./audioEngine.js";

const audioEngine = new SunoAudioEngine();
let activeTrackIndex = 0;
let activeLangFilter = "ALL";
let searchQuery = "";

function formatSeconds(sec) {
  const s = Math.max(0, Math.floor(sec));
  const mins = Math.floor(s / 60);
  const rem = s % 60;
  return `${mins}:${rem < 10 ? "0" : ""}${rem}`;
}

function buildSettingsHtml(track) {
  const s = track.settings || {};
  const styleWeightPct =
    s.styleWeight !== null && s.styleWeight !== undefined
      ? `${Math.round(s.styleWeight * 100)}% (${s.styleWeight})`
      : "Auto (Standard V6)";
  const styleWeightWidth =
    s.styleWeight !== null && s.styleWeight !== undefined
      ? Math.round(s.styleWeight * 100)
      : 75;

  const weirdnessPct =
    s.weirdnessConstraint !== null && s.weirdnessConstraint !== undefined
      ? `${Math.round(s.weirdnessConstraint * 100)}% (${s.weirdnessConstraint})`
      : "Auto (Standard V6)";
  const weirdnessWidth =
    s.weirdnessConstraint !== null && s.weirdnessConstraint !== undefined
      ? Math.round(s.weirdnessConstraint * 100)
      : 30;

  const augVal = s.augCreativity ?? 0;
  const augWidth = augVal ? 100 : 25;

  return `
    <div class="setting-meter-card">
      <span class="smc-label">SUNO ENGINE / MODE</span>
      <span class="smc-val">${s.modelVersion || "V6"} (${s.engineName || "chirp-hawk"})${s.isMaxMode ? " • MAX" : ""}</span>
      <div class="smc-bar"><div class="smc-fill" style="width: 100%"></div></div>
    </div>
    <div class="setting-meter-card">
      <span class="smc-label">STYLE WEIGHT SLIDER</span>
      <span class="smc-val">${styleWeightPct}</span>
      <div class="smc-bar"><div class="smc-fill" style="width: ${styleWeightWidth}%"></div></div>
    </div>
    <div class="setting-meter-card">
      <span class="smc-label">WEIRDNESS CONSTRAINT</span>
      <span class="smc-val">${weirdnessPct}</span>
      <div class="smc-bar"><div class="smc-fill" style="width: ${weirdnessWidth}%"></div></div>
    </div>
    <div class="setting-meter-card">
      <span class="smc-label">AUG CREATIVITY</span>
      <span class="smc-val">Level ${augVal} (${augVal === 1 ? "High" : "Focused"})</span>
      <div class="smc-bar"><div class="smc-fill" style="width: ${augWidth}%"></div></div>
    </div>
    <div class="setting-meter-card">
      <span class="smc-label">VOX RENDER MODE</span>
      <span class="smc-val">${(s.voxRenderMode || "strict").toUpperCase()} (Exakte Lyrics)</span>
      <div class="smc-bar"><div class="smc-fill" style="width: 100%"></div></div>
    </div>
    <div class="setting-meter-card">
      <span class="smc-label">TEMPO &amp; ENCODING</span>
      <span class="smc-val">${track.bpm} BPM • ${s.deliveryEncoding || "m4a-opus"}</span>
      <div class="smc-bar"><div class="smc-fill" style="width: 92%"></div></div>
    </div>
  `;
}

/* ========================================================
   1. RENDER SCROLLYTELLING WORKFLOW STEPS
   ======================================================== */
function renderWorkflowSteps() {
  const container = document.getElementById("scrolly-steps-container");
  if (!container) return;

  container.innerHTML = WORKFLOW_STEPS.map(
    (item, idx) => `
    <article class="scrolly-step-card ${idx === 0 ? "is-active" : ""}" data-step-index="${idx}">
      <div class="step-badge-row">
        <span class="step-num">${item.step}</span>
        <span class="step-badge-text">${item.badge}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.subtitle}</p>
      <div class="step-metrics-grid">
        ${item.metrics
          .map(
            (m) => `
          <div>
            <span class="sm-label">${m.label}</span>
            <span class="sm-val">${m.value}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </article>
  `
  ).join("");
}

/* ========================================================
   2. UPDATE STUDIO UI FRAME WITH SELECTED SONG'S PROMPTS & SETTINGS
   ======================================================== */
function updateStudioInspector(track, isPlaying) {
  if (!track) return;

  const songSelect = document.getElementById("studio-song-select");
  if (songSelect && songSelect.value !== String(activeTrackIndex)) {
    songSelect.value = String(activeTrackIndex);
  }

  // Sidebar info
  const studioCover = document.getElementById("studio-active-cover");
  const studioSpinCover = document.getElementById("studio-spin-cover");
  const studioTitle = document.getElementById("studio-active-title");
  const studioMeta = document.getElementById("studio-active-meta");
  const sidebarPlayLabel = document.getElementById("studio-sidebar-play-label");

  if (studioCover) studioCover.src = track.thumbUrl;
  if (studioSpinCover) studioSpinCover.src = track.thumbUrl;
  if (studioTitle) studioTitle.textContent = track.title;
  if (studioMeta) studioMeta.textContent = `${track.bpm} BPM • ${track.language}`;
  if (sidebarPlayLabel) {
    sidebarPlayLabel.textContent = isPlaying ? "Pause" : "Track abspielen";
  }

  // Stage 0: Lyrics & Cues
  const s0Badge = document.getElementById("studio-s0-badge");
  const s0Cues = document.getElementById("studio-s0-cues");
  const s0Lyrics = document.getElementById("studio-s0-lyrics");

  if (s0Badge) {
    s0Badge.textContent = `${track.title} • ${track.language} • ${track.bpm} BPM`;
  }
  if (s0Cues) {
    const cues = track.structureCues || [];
    s0Cues.innerHTML = cues
      .map((c) => `<span class="cue-chip">[${c}]</span>`)
      .join("");
  }
  if (s0Lyrics) {
    s0Lyrics.textContent = track.lyrics;
  }

  // Stage 1: Positive Style Prompt & Negative Tags
  const s1DisplayTags = document.getElementById("studio-s1-display-tags");
  const s1Positive = document.getElementById("studio-s1-positive");
  const s1Negative = document.getElementById("studio-s1-negative");

  if (s1DisplayTags) s1DisplayTags.textContent = track.displayTags || track.shortStyle;
  if (s1Positive) s1Positive.textContent = track.stylePrompt;
  if (s1Negative) s1Negative.textContent = track.negativeTags || "Keine Ausschlüsse";

  // Stage 2: Exact Suno V6 Settings & Control Sliders
  const s2ModelTag = document.getElementById("studio-s2-model-tag");
  const s2Grid = document.getElementById("studio-s2-settings-grid");
  const s2Title = document.getElementById("studio-s2-title");
  const s2Sub = document.getElementById("studio-s2-sub");
  const s2Badges = document.getElementById("studio-s2-badges");

  const s = track.settings || {};
  if (s2ModelTag) {
    s2ModelTag.textContent = `${s.modelVersion || "V6"} • ${(s.engineName || "chirp-hawk").toUpperCase()}${s.isMaxMode ? " • MAX MODE" : ""}`;
  }
  if (s2Grid) {
    s2Grid.innerHTML = buildSettingsHtml(track);
  }
  if (s2Title) {
    s2Title.textContent = `${track.title} (${track.duration})`;
  }
  if (s2Sub) {
    s2Sub.textContent = `Style: ${track.shortStyle}`;
  }
  if (s2Badges) {
    const badges = [
      `vox: ${s.voxRenderMode || "strict"}`,
      `aug_creativity: ${s.augCreativity ?? 0}`,
      s.isMaxMode ? "is_max_mode: true" : "standard_mode",
    ];
    if (s.styleWeight !== null && s.styleWeight !== undefined) {
      badges.push(`style_weight: ${s.styleWeight}`);
    }
    if (s.weirdnessConstraint !== null && s.weirdnessConstraint !== undefined) {
      badges.push(`weirdness: ${s.weirdnessConstraint}`);
    }
    s2Badges.innerHTML = badges
      .map((b) => `<span class="m-badge">${b}</span>`)
      .join("");
  }
}

/* ========================================================
   3. RENDER INTERACTIVE 20-SONG JUKEBOX
   ======================================================== */
function getFilteredTracks() {
  return TRACKS.map((track, originalIndex) => ({ track, originalIndex })).filter(
    ({ track }) => {
      const matchesLang =
        activeLangFilter === "ALL" || track.language === activeLangFilter;
      if (!matchesLang) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        track.title.toLowerCase().includes(q) ||
        track.stylePrompt.toLowerCase().includes(q) ||
        track.lyrics.toLowerCase().includes(q) ||
        String(track.bpm).includes(q)
      );
    }
  );
}

function renderJukeboxPlaylist() {
  const listEl = document.getElementById("jukebox-tracklist");
  if (!listEl) return;

  const filtered = getFilteredTracks();
  if (filtered.length === 0) {
    listEl.innerHTML = `<div style="padding: 24px; color: var(--text-secondary); font-size: 0.85rem;">Keine Songs für diesen Filter gefunden.</div>`;
    return;
  }

  listEl.innerHTML = filtered
    .map(({ track, originalIndex }) => {
      const isSelected = originalIndex === activeTrackIndex;
      const isPlaying =
        audioEngine.isPlaying &&
        audioEngine.currentTrack &&
        audioEngine.currentTrack.id === track.id;

      return `
      <div
        class="jb-track-item ${isSelected ? "is-selected" : ""} ${isPlaying ? "is-playing" : ""}"
        data-jb-index="${originalIndex}"
        role="option"
        tabindex="0"
        aria-selected="${isSelected}"
      >
        <span class="jbi-num">${isPlaying ? "▶" : "#" + track.number}</span>
        <img src="${track.thumbUrl}" alt="${track.title}" class="jbi-thumb" loading="lazy" />
        <div class="jbi-info">
          <div class="jbi-title">${track.title}</div>
          <div class="jbi-sub">${track.bpm} BPM • ${track.shortStyle}</div>
        </div>
        <div class="jbi-right">
          <div class="jbi-meta-top">
            <span class="jbi-lang">${track.language}</span>
            <span class="jbi-dur">${track.duration}</span>
          </div>
          <a
            href="${track.sunoUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="jbi-suno-link"
            title="${track.title} direkt auf Suno öffnen"
            onclick="event.stopPropagation();"
          >
            <span>Suno</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
      </div>
    `;
    })
    .join("");

  listEl.querySelectorAll("[data-jb-index]").forEach((row) => {
    const activateRow = () => {
      const idx = parseInt(row.getAttribute("data-jb-index"), 10);
      activeTrackIndex = idx;
      audioEngine.playTrack(TRACKS[idx]);
      updateJukeboxInspector(TRACKS[idx], audioEngine.isPlaying);
      updateStudioInspector(TRACKS[idx], audioEngine.isPlaying);
      renderJukeboxPlaylist();
    };
    row.addEventListener("click", activateRow);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateRow();
      }
    });
  });
}

function updateJukeboxInspector(track, isPlaying) {
  if (!track) return;

  const coverEl = document.getElementById("jb-active-cover");
  const numEl = document.getElementById("jb-active-num");
  const bpmEl = document.getElementById("jb-active-bpm");
  const durEl = document.getElementById("jb-active-dur");
  const modelEl = document.getElementById("jb-active-model");
  const titleEl = document.getElementById("jb-active-title");
  const shortStyleEl = document.getElementById("jb-active-short-style");
  const lyricsEl = document.getElementById("jb-active-lyrics");
  const stylePromptEl = document.getElementById("jb-active-style-prompt");
  const negTagsEl = document.getElementById("jb-active-negative-tags");
  const settingsGridEl = document.getElementById("jb-active-settings-grid");
  const songLinkEl = document.getElementById("jb-suno-song-link");
  const urlTextEl = document.getElementById("jb-active-url-text");
  const mainPlayLabel = document.getElementById("jb-main-play-label");
  const coverIconPlay = document.getElementById("jb-cover-icon-play");
  const coverIconPause = document.getElementById("jb-cover-icon-pause");
  const statusBadge = document.getElementById("jukebox-status-badge");

  if (coverEl) coverEl.src = track.coverUrl;
  if (numEl) numEl.textContent = `#${track.number}`;
  if (bpmEl) bpmEl.textContent = `${track.bpm} BPM`;
  if (durEl) durEl.textContent = track.duration;
  if (modelEl) modelEl.textContent = track.model;
  if (titleEl) titleEl.textContent = track.title;
  if (shortStyleEl) shortStyleEl.textContent = track.shortStyle;
  if (lyricsEl) lyricsEl.textContent = track.lyrics;
  if (stylePromptEl) stylePromptEl.textContent = track.stylePrompt;
  if (negTagsEl) negTagsEl.textContent = track.negativeTags || "Keine";
  if (settingsGridEl) settingsGridEl.innerHTML = buildSettingsHtml(track);
  if (songLinkEl) songLinkEl.href = track.sunoUrl;
  if (urlTextEl) {
    urlTextEl.href = track.sunoUrl;
    urlTextEl.textContent = track.sunoUrl;
  }

  if (mainPlayLabel) {
    mainPlayLabel.textContent = isPlaying
      ? "Pausieren"
      : "Jetzt in Jukebox abspielen";
  }

  if (coverIconPlay && coverIconPause) {
    coverIconPlay.style.display = isPlaying ? "none" : "block";
    coverIconPause.style.display = isPlaying ? "block" : "none";
  }

  if (statusBadge) {
    statusBadge.textContent = isPlaying
      ? `ON AIR // ${track.title}`
      : "SUNO V6 DIRECT STREAM";
  }
}

function setupJukeboxAndStudioControls() {
  const searchInput = document.getElementById("jukebox-search");
  const filterBtns = document.querySelectorAll("[data-lang-filter]");
  const tabBtns = document.querySelectorAll("[data-jb-tab]");
  const paneLyrics = document.getElementById("jb-pane-lyrics");
  const paneStyle = document.getElementById("jb-pane-style");
  const mainPlayBtn = document.getElementById("jb-main-play-btn");
  const coverPlayBtn = document.getElementById("jb-cover-play-btn");
  const songSelect = document.getElementById("studio-song-select");
  const studioSidebarPlayBtn = document.getElementById("studio-sidebar-play-btn");

  // Populate Studio Song Dropdown with all 20 tracks
  if (songSelect) {
    songSelect.innerHTML = TRACKS.map(
      (t, i) => `<option value="${i}">#${t.number} — ${t.title} (${t.bpm} BPM • ${t.language})</option>`
    ).join("");

    songSelect.addEventListener("change", (e) => {
      const idx = parseInt(e.target.value, 10);
      activeTrackIndex = idx;
      audioEngine.selectTrackWithoutAutoplay(TRACKS[idx]);
      updateJukeboxInspector(TRACKS[idx], false);
      updateStudioInspector(TRACKS[idx], false);
      renderJukeboxPlaylist();
    });
  }

  if (studioSidebarPlayBtn) {
    studioSidebarPlayBtn.addEventListener("click", () => {
      audioEngine.playTrack(TRACKS[activeTrackIndex]);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderJukeboxPlaylist();
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeLangFilter = btn.getAttribute("data-lang-filter") || "ALL";
      filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderJukeboxPlaylist();
    });
  });

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-jb-tab");
      tabBtns.forEach((b) => b.classList.toggle("active", b === btn));
      if (paneLyrics && paneStyle) {
        paneLyrics.classList.toggle("active", tab === "lyrics");
        paneStyle.classList.toggle("active", tab === "style");
      }
    });
  });

  const toggleActive = () => {
    audioEngine.playTrack(TRACKS[activeTrackIndex]);
  };

  if (mainPlayBtn) mainPlayBtn.addEventListener("click", toggleActive);
  if (coverPlayBtn) coverPlayBtn.addEventListener("click", toggleActive);

  // Initialize with Track 01 ("NACHT AUF ANSCHLAG")
  audioEngine.selectTrackWithoutAutoplay(TRACKS[0]);
  updateJukeboxInspector(TRACKS[0], false);
  updateStudioInspector(TRACKS[0], false);
  renderJukeboxPlaylist();

  // Populate All 20 Direct Suno Links Grid
  const allLinksGrid = document.getElementById("all-suno-links-grid");
  if (allLinksGrid) {
    allLinksGrid.innerHTML = TRACKS.map(
      (t) => `
      <a href="${t.sunoUrl}" target="_blank" rel="noopener noreferrer" class="suno-direct-pill">
        <div class="sdp-left">
          <span class="sdp-num">#${t.number}</span>
          <span class="sdp-title">${t.title}</span>
        </div>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="flex-shrink:0; color:var(--accent-cyan);"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
      </a>
    `
    ).join("");
  }
}

/* ========================================================
   4. SYNC PLAYER DOCK & STUDIO UI STATE
   ======================================================== */
function setupAudioUI() {
  const dockPlayBtn = document.getElementById("dock-play-btn");
  const dockPrevBtn = document.getElementById("dock-prev-btn");
  const dockNextBtn = document.getElementById("dock-next-btn");
  const dockCover = document.getElementById("dock-cover");
  const dockTitle = document.getElementById("dock-title");
  const dockBpm = document.getElementById("dock-bpm");
  const dockIconPlay = document.getElementById("dock-icon-play");
  const dockIconPause = document.getElementById("dock-icon-pause");
  const dockTimeCur = document.getElementById("dock-time-current");
  const dockTimeTot = document.getElementById("dock-time-total");
  const dockScrubber = document.getElementById("dock-scrubber-input");
  const dockSunoLink = document.getElementById("dock-suno-link");
  const studioAudioState = document.getElementById("studio-audio-state");

  if (dockPlayBtn) {
    dockPlayBtn.addEventListener("click", () => {
      audioEngine.playTrack(TRACKS[activeTrackIndex]);
    });
  }

  if (dockPrevBtn) {
    dockPrevBtn.addEventListener("click", () => {
      activeTrackIndex = (activeTrackIndex - 1 + TRACKS.length) % TRACKS.length;
      audioEngine.playTrack(TRACKS[activeTrackIndex]);
    });
  }

  if (dockNextBtn) {
    dockNextBtn.addEventListener("click", () => {
      activeTrackIndex = (activeTrackIndex + 1) % TRACKS.length;
      audioEngine.playTrack(TRACKS[activeTrackIndex]);
    });
  }

  audioEngine.onEnded = () => {
    activeTrackIndex = (activeTrackIndex + 1) % TRACKS.length;
    audioEngine.playTrack(TRACKS[activeTrackIndex]);
  };

  if (dockScrubber) {
    dockScrubber.addEventListener("input", (e) => {
      const ratio = parseFloat(e.target.value) / 100;
      audioEngine.seek(ratio);
    });
  }

  audioEngine.onStateChange = (track, isPlaying) => {
    if (!track) return;
    if (dockCover) dockCover.src = track.thumbUrl;
    if (dockTitle) dockTitle.textContent = track.title;
    if (dockBpm) dockBpm.textContent = `${track.bpm} BPM`;
    if (dockTimeTot) dockTimeTot.textContent = track.duration;
    if (dockSunoLink) dockSunoLink.href = track.sunoUrl;

    if (dockIconPlay && dockIconPause) {
      dockIconPlay.style.display = isPlaying ? "none" : "block";
      dockIconPause.style.display = isPlaying ? "block" : "none";
    }

    if (studioAudioState) {
      studioAudioState.textContent = isPlaying
        ? `NOW PLAYING: ${track.title} (${track.bpm} BPM)`
        : `INSPEKTOR AKTIV: ${track.title}`;
    }

    updateJukeboxInspector(track, isPlaying);
    updateStudioInspector(track, isPlaying);
    renderJukeboxPlaylist();
  };

  audioEngine.onTick = (elapsed, total) => {
    if (dockTimeCur) dockTimeCur.textContent = formatSeconds(elapsed);
    if (total > 0 && dockScrubber) {
      dockScrubber.value = String(Math.min(100, (elapsed / total) * 100));
    }
  };
}

/* ========================================================
   5. APPLE MAC STYLE SCROLLYTELLING & PARALLAX ENGINE
   ======================================================== */
function setupScrollChoreography() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal-up").forEach((el) => revealObserver.observe(el));

  const uiFrame = document.getElementById("studio-ui-frame");
  const stagePill = document.getElementById("ui-stage-pill");
  const stepCards = document.querySelectorAll(".scrolly-step-card");
  const sidebarItems = document.querySelectorAll("[data-stage-indicator]");
  const uiLayers = document.querySelectorAll("[data-ui-layer]");

  const stageLabels = [
    "STAGE 01 // CHATGPT LYRICS",
    "STAGE 02 // CHATGPT STYLE",
    "STAGE 03 // SUNO V6 SETTINGS"
  ];

  function activateStudioStage(idx) {
    stepCards.forEach((c, i) => c.classList.toggle("is-active", i === idx));
    sidebarItems.forEach((s, i) => s.classList.toggle("active", i === idx));
    uiLayers.forEach((l, i) => l.classList.toggle("active", i === idx));
    if (uiFrame) uiFrame.setAttribute("data-active-stage", String(idx));
    if (stagePill && stageLabels[idx]) stagePill.textContent = stageLabels[idx];
  }

  // Allow clicking sidebar items inside the Studio UI frame directly
  sidebarItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-stage-indicator"), 10);
      activateStudioStage(idx);
    });
  });

  const stepObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.getAttribute("data-step-index"), 10);
          activateStudioStage(idx);
        }
      });
    },
    { rootMargin: "-30% 0px -35% 0px", threshold: 0.1 }
  );

  stepCards.forEach((card) => stepObserver.observe(card));

  const heroOrb = document.getElementById("hero-orb-container");
  const parallaxHudList = document.querySelectorAll("[data-parallax]");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      if (scrollY < 1100) {
        if (heroOrb) {
          const scale = 1 + Math.min(0.28, scrollY * 0.00045);
          const rot = scrollY * 0.06;
          heroOrb.style.transform = `scale(${scale.toFixed(3)}) rotate(${rot.toFixed(1)}deg)`;
        }
        parallaxHudList.forEach((hud) => {
          const speed = parseFloat(hud.getAttribute("data-parallax") || "0.15");
          const yOffset = scrollY * speed;
          hud.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0)`;
        });
      }
    },
    { passive: true }
  );
}

/* ========================================================
   6. REALTIME CANVAS VISUALIZERS (STUDIO + DOCK + AMBIENT)
   ======================================================== */
function startCanvasVisualizers() {
  const studioCanvas = document.getElementById("studio-visualizer-canvas");
  const dockCanvas = document.getElementById("dock-mini-eq");
  const ambientCanvas = document.getElementById("ambient-canvas");

  const studioCtx = studioCanvas ? studioCanvas.getContext("2d") : null;
  const dockCtx = dockCanvas ? dockCanvas.getContext("2d") : null;
  const ambCtx = ambientCanvas ? ambientCanvas.getContext("2d") : null;

  function resizeAmbient() {
    if (!ambientCanvas) return;
    ambientCanvas.width = window.innerWidth;
    ambientCanvas.height = window.innerHeight;
  }
  resizeAmbient();
  window.addEventListener("resize", resizeAmbient);

  let phase = 0;

  function renderFrame() {
    phase += 0.035;
    const freqData = audioEngine.getFrequencyData();

    if (studioCtx && studioCanvas) {
      const w = studioCanvas.width;
      const h = studioCanvas.height;
      studioCtx.clearRect(0, 0, w, h);

      const barCount = 48;
      const barWidth = w / barCount - 3;

      for (let i = 0; i < barCount; i++) {
        let ratio;
        if (freqData) {
          ratio = (freqData[i % freqData.length] || 12) / 255;
        } else {
          ratio = 0.14 + Math.sin(phase + i * 0.25) * 0.08 + Math.cos(phase * 0.6 - i * 0.15) * 0.05;
        }

        const barHeight = Math.max(4, ratio * (h - 10));
        const x = i * (barWidth + 3);
        const y = h - barHeight;

        const grad = studioCtx.createLinearGradient(0, y, 0, h);
        grad.addColorStop(0, "#64d2ff");
        grad.addColorStop(0.5, "#2997ff");
        grad.addColorStop(1, "#bf5af2");

        studioCtx.fillStyle = grad;
        studioCtx.beginPath();
        studioCtx.roundRect(x, y, barWidth, barHeight, 3);
        studioCtx.fill();
      }
    }

    if (dockCtx && dockCanvas) {
      const w = dockCanvas.width;
      const h = dockCanvas.height;
      dockCtx.clearRect(0, 0, w, h);
      const bars = 8;
      const bw = 5;
      for (let i = 0; i < bars; i++) {
        const val = freqData
          ? (freqData[i * 3] || 20) / 255
          : 0.2 + Math.sin(phase * 1.4 + i) * 0.12;
        const bh = Math.max(3, val * (h - 4));
        dockCtx.fillStyle = freqData ? "#2997ff" : "#515158";
        dockCtx.fillRect(i * (bw + 2), h - bh, bw, bh);
      }
    }

    if (ambCtx && ambientCanvas) {
      const aw = ambientCanvas.width;
      const ah = ambientCanvas.height;
      ambCtx.clearRect(0, 0, aw, ah);

      const x1 = aw * (0.5 + Math.sin(phase * 0.2) * 0.18);
      const y1 = ah * (0.28 + Math.cos(phase * 0.15) * 0.1);
      const g1 = ambCtx.createRadialGradient(x1, y1, 10, x1, y1, Math.max(aw, ah) * 0.42);
      g1.addColorStop(0, "rgba(41, 151, 255, 0.11)");
      g1.addColorStop(0.5, "rgba(191, 90, 242, 0.05)");
      g1.addColorStop(1, "rgba(0, 0, 0, 0)");

      ambCtx.fillStyle = g1;
      ambCtx.fillRect(0, 0, aw, ah);
    }

    requestAnimationFrame(renderFrame);
  }

  requestAnimationFrame(renderFrame);
}

/* ========================================================
   7. LEGAL MODAL (IMPRESSUM & DATENSCHUTZ)
   ======================================================== */
function setupLegalModal() {
  const backdrop = document.getElementById("legal-modal-backdrop");
  const closeBtn = document.getElementById("legal-modal-close");
  const openTriggers = document.querySelectorAll("[data-modal-open]");
  const tabBtns = document.querySelectorAll("[data-legal-tab]");
  const paneImpressum = document.getElementById("legal-pane-impressum");
  const paneDatenschutz = document.getElementById("legal-pane-datenschutz");

  function switchTab(tabName) {
    tabBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-legal-tab") === tabName);
    });
    if (paneImpressum && paneDatenschutz) {
      paneImpressum.classList.toggle("active", tabName === "impressum");
      paneDatenschutz.classList.toggle("active", tabName === "datenschutz");
    }
  }

  function openModal(tabName) {
    if (!backdrop) return;
    switchTab(tabName);
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!backdrop) return;
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(btn.getAttribute("data-modal-open") || "impressum");
    });
  });

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab(btn.getAttribute("data-legal-tab"));
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop && backdrop.classList.contains("is-open")) {
      closeModal();
    }
  });

  if (window.location.hash === "#impressum") openModal("impressum");
  if (window.location.hash === "#datenschutz") openModal("datenschutz");
}

/* ========================================================
   INITIALIZE APPLICATION
   ======================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderWorkflowSteps();
  setupJukeboxAndStudioControls();
  setupAudioUI();
  setupScrollChoreography();
  startCanvasVisualizers();
  setupLegalModal();
});
