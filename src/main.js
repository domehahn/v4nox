import { TRACKS, WORKFLOW_STEPS } from "./tracks.js";
import { SunoAudioEngine } from "./audioEngine.js";

const audioEngine = new SunoAudioEngine();
let currentTracks = [...TRACKS];
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
   3. RENDER INTERACTIVE JUKEBOX
   ======================================================== */
function getFilteredTracks() {
  return currentTracks.map((track, originalIndex) => ({ track, originalIndex })).filter(
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
      audioEngine.playTrack(currentTracks[idx]);
      updateJukeboxInspector(currentTracks[idx], audioEngine.isPlaying);
      updateStudioInspector(currentTracks[idx], audioEngine.isPlaying);
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

/* ========================================================
   DYNAMIC TRACK SYNC & DOM COUNTERS
   ======================================================== */
function updateTrackCountsInDOM() {
  const total = currentTracks.length;
  document.querySelectorAll(".dyn-song-count").forEach((el) => {
    el.textContent = String(total);
  });

  const deCount = currentTracks.filter((t) => t.language === "DE").length;
  const esCount = currentTracks.filter((t) => t.language === "ES").length;
  const enCount = currentTracks.filter((t) => t.language === "EN").length;

  const hudBreakdown = document.getElementById("hud-lang-breakdown");
  if (hudBreakdown) {
    hudBreakdown.textContent = `${deCount} DE • ${esCount} ES • ${enCount} EN Tracks`;
  }

  const btnAll = document.querySelector('[data-lang-filter="ALL"]');
  if (btnAll) btnAll.textContent = `Alle (${total})`;
  const btnDe = document.querySelector('[data-lang-filter="DE"]');
  if (btnDe) btnDe.textContent = `DE 🇩🇪 (${deCount})`;
  const btnEs = document.querySelector('[data-lang-filter="ES"]');
  if (btnEs) btnEs.textContent = `ES 🇪🇸 (${esCount})`;
  const btnEn = document.querySelector('[data-lang-filter="EN"]');
  if (btnEn) btnEn.textContent = `EN 🇬🇧 (${enCount})`;

  const searchInput = document.getElementById("jukebox-search");
  if (searchInput) {
    searchInput.placeholder = `Unter ${total} Songs nach Titel, Text, Style oder BPM suchen...`;
  }
}

function populateStudioDropdown() {
  const songSelect = document.getElementById("studio-song-select");
  if (!songSelect) return;
  const prevVal = songSelect.value;
  songSelect.innerHTML = currentTracks
    .map(
      (t, i) =>
        `<option value="${i}">#${t.number} — ${t.title} (${t.bpm} BPM • ${t.language})</option>`
    )
    .join("");
  if (prevVal !== undefined && prevVal !== null && prevVal !== "") {
    songSelect.value = prevVal;
  }
}

function populateSunoLinksGrid() {
  const allLinksGrid = document.getElementById("all-suno-links-grid");
  if (!allLinksGrid) return;
  allLinksGrid.innerHTML = currentTracks
    .map(
      (t) => `
      <a href="${t.sunoUrl}" target="_blank" rel="noopener noreferrer" class="suno-direct-pill">
        <div class="sdp-left">
          <span class="sdp-num">#${t.number}</span>
          <span class="sdp-title">${t.title}</span>
        </div>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="flex-shrink:0; color:var(--accent-cyan);"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
      </a>
    `
    )
    .join("");
}

async function syncLiveTracksFromApi() {
  try {
    const res = await fetch("/api/tracks");
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.success && Array.isArray(data.tracks) && data.tracks.length > 0) {
      const isCountChanged = data.tracks.length !== currentTracks.length;
      const isTopChanged = data.tracks[0]?.id !== currentTracks[0]?.id;

      currentTracks = data.tracks;
      updateTrackCountsInDOM();
      populateStudioDropdown();
      populateSunoLinksGrid();
      renderJukeboxPlaylist();

      const badge = document.getElementById("jukebox-status-badge");
      if (badge) {
        badge.textContent = `SUNO DIRECT STREAM • ${currentTracks.length} TRACKS LIVE SYNCED`;
        badge.style.borderColor = "var(--accent-cyan)";
        badge.style.color = "var(--accent-cyan)";
      }

      if (isCountChanged || isTopChanged) {
        console.info(`[v4nox] Live Suno track sync: Updated catalog to ${currentTracks.length} tracks.`);
      }
    }
  } catch (err) {
    console.warn("[v4nox] Live Suno track sync skipped:", err);
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

  // Populate Studio Song Dropdown with tracks
  if (songSelect) {
    populateStudioDropdown();

    songSelect.addEventListener("change", (e) => {
      const idx = parseInt(e.target.value, 10);
      activeTrackIndex = idx;
      audioEngine.selectTrackWithoutAutoplay(currentTracks[idx]);
      updateJukeboxInspector(currentTracks[idx], false);
      updateStudioInspector(currentTracks[idx], false);
      renderJukeboxPlaylist();
    });
  }

  if (studioSidebarPlayBtn) {
    studioSidebarPlayBtn.addEventListener("click", () => {
      audioEngine.playTrack(currentTracks[activeTrackIndex]);
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
    audioEngine.playTrack(currentTracks[activeTrackIndex]);
  };

  if (mainPlayBtn) mainPlayBtn.addEventListener("click", toggleActive);
  if (coverPlayBtn) coverPlayBtn.addEventListener("click", toggleActive);

  // Initialize with Track 01
  if (currentTracks.length > 0) {
    audioEngine.selectTrackWithoutAutoplay(currentTracks[0]);
    updateJukeboxInspector(currentTracks[0], false);
    updateStudioInspector(currentTracks[0], false);
  }
  renderJukeboxPlaylist();
  populateSunoLinksGrid();
  updateTrackCountsInDOM();
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
      audioEngine.playTrack(currentTracks[activeTrackIndex]);
    });
  }

  if (dockPrevBtn) {
    dockPrevBtn.addEventListener("click", () => {
      activeTrackIndex = (activeTrackIndex - 1 + currentTracks.length) % currentTracks.length;
      audioEngine.playTrack(currentTracks[activeTrackIndex]);
    });
  }

  if (dockNextBtn) {
    dockNextBtn.addEventListener("click", () => {
      activeTrackIndex = (activeTrackIndex + 1) % currentTracks.length;
      audioEngine.playTrack(currentTracks[activeTrackIndex]);
    });
  }

  audioEngine.onEnded = () => {
    activeTrackIndex = (activeTrackIndex + 1) % currentTracks.length;
    audioEngine.playTrack(currentTracks[activeTrackIndex]);
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
   8. HERO HEADLINE PROCEDURAL LIGHTNING SYSTEM
   ======================================================== */
function setupHeroLightning() {
  const wrap = document.getElementById("hero-lightning-wrap");
  const canvas = document.getElementById("hero-lightning-canvas");
  const flashOverlay = document.getElementById("lightning-flash-overlay");
  if (!wrap || !canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let logicalWidth = 0;
  let logicalHeight = 0;
  let activeAnimationId = null;
  let strikeTimeoutIds = [];

  function resizeCanvas() {
    const rect = wrap.getBoundingClientRect();
    logicalWidth = Math.max(340, Math.floor(rect.width + 120));
    logicalHeight = Math.max(160, Math.floor(rect.height + 80));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(logicalWidth * dpr);
    canvas.height = Math.floor(logicalHeight * dpr);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });

  function createBranch(x1, y1, x2, y2, displace, minLength = 9) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    if (len < minLength) {
      return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
    }
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const nx = -dy / len;
    const ny = dx / len;
    const offset = (Math.random() - 0.5) * displace;
    const newMidX = midX + nx * offset;
    const newMidY = midY + ny * offset;

    const left = createBranch(x1, y1, newMidX, newMidY, displace * 0.55, minLength);
    const right = createBranch(newMidX, newMidY, x2, y2, displace * 0.55, minLength);
    return left.slice(0, -1).concat(right);
  }

  function generateLightningTree(startX, startY, endX, endY, displace = 65, forkProb = 0.3) {
    const mainSegments = createBranch(startX, startY, endX, endY, displace);
    const branches = [{ path: mainSegments, weight: 1.0 }];

    const len = mainSegments.length;
    const mainAngle = Math.atan2(endY - startY, endX - startX);

    for (let i = 2; i < len - 2; i++) {
      if (Math.random() < forkProb) {
        const pt = mainSegments[i];
        const forkAngle = mainAngle + (Math.random() > 0.5 ? 1 : -1) * (0.4 + Math.random() * 0.55);
        const forkDist = 30 + Math.random() * (logicalWidth * 0.16);
        const forkEndX = pt.x + Math.cos(forkAngle) * forkDist;
        const forkEndY = pt.y + Math.sin(forkAngle) * forkDist;
        const subPath = createBranch(pt.x, pt.y, forkEndX, forkEndY, displace * 0.45, 6);
        branches.push({ path: subPath, weight: 0.55 });

        if (Math.random() < 0.35 && subPath.length > 3) {
          const midPt = subPath[Math.floor(subPath.length / 2)];
          const tinyAngle = forkAngle + (Math.random() > 0.5 ? 1 : -1) * 0.5;
          const tinyEndX = midPt.x + Math.cos(tinyAngle) * 35;
          const tinyEndY = midPt.y + Math.sin(tinyAngle) * 35;
          const tinyPath = createBranch(midPt.x, midPt.y, tinyEndX, tinyEndY, displace * 0.25, 4);
          branches.push({ path: tinyPath, weight: 0.3 });
        }
      }
    }
    return branches;
  }

  function drawTrees(trees, alpha = 1.0) {
    ctx.clearRect(0, 0, logicalWidth, logicalHeight);
    if (alpha <= 0) return;

    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    trees.forEach((branches) => {
      branches.forEach(({ path, weight }) => {
        if (!path || path.length < 2) return;

        // 1. Wide atmospheric bloom
        ctx.strokeStyle = `rgba(41, 151, 255, ${(0.32 * alpha * weight).toFixed(3)})`;
        ctx.lineWidth = Math.max(3, 9 * weight);
        ctx.shadowBlur = 28;
        ctx.shadowColor = "#2997ff";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) ctx.lineTo(path[i].x, path[i].y);
        ctx.stroke();

        // 2. High-energy cyan/violet neon line
        ctx.strokeStyle = `rgba(100, 210, 255, ${(0.85 * alpha * weight).toFixed(3)})`;
        ctx.lineWidth = Math.max(1.5, 3.8 * weight);
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#bf5af2";
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) ctx.lineTo(path[i].x, path[i].y);
        ctx.stroke();

        // 3. Hot white core arc
        ctx.strokeStyle = `rgba(255, 255, 255, ${(0.95 * alpha).toFixed(3)})`;
        ctx.lineWidth = Math.max(1, 1.6 * weight);
        ctx.shadowBlur = 5;
        ctx.shadowColor = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) ctx.lineTo(path[i].x, path[i].y);
        ctx.stroke();
      });
    });

    ctx.restore();
  }

  function triggerLightningStrike(intensity = 1.0) {
    if (activeAnimationId) cancelAnimationFrame(activeAnimationId);
    strikeTimeoutIds.forEach((t) => clearTimeout(t));
    strikeTimeoutIds = [];

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const w = logicalWidth;
    const h = logicalHeight;

    const setA = [
      generateLightningTree(w * 0.04, h * 0.18, w * 0.88, h * 0.45, 65 * intensity, 0.32),
      generateLightningTree(w * 0.94, h * 0.22, w * 0.12, h * 0.82, 70 * intensity, 0.34)
    ];

    const setB = [
      generateLightningTree(w * 0.15, h * 0.1, w * 0.75, h * 0.7, 60 * intensity, 0.28),
      generateLightningTree(w * 0.5, h * 0.05, w * 0.55, h * 0.9, 50 * intensity, 0.3)
    ];

    let currentSet = setA;

    function flashOn(alpha = 1.0) {
      wrap.classList.add("is-flashing");
      if (flashOverlay) flashOverlay.style.opacity = String(Math.min(1, alpha * intensity));
    }

    function flashOff() {
      wrap.classList.remove("is-flashing");
      if (flashOverlay) flashOverlay.style.opacity = "0";
    }

    if (prefersReducedMotion) {
      flashOn(0.4);
      drawTrees(setA, 0.5 * intensity);
      strikeTimeoutIds.push(
        setTimeout(() => {
          flashOff();
          ctx.clearRect(0, 0, w, h);
        }, 600)
      );
      return;
    }

    // Dynamic micro-strobe sequence simulating real thunderstorm arc discharges:
    // Frame 1: Initial leader spark
    drawTrees(setA, 0.35 * intensity);
    flashOn(0.3);

    // Frame 2: Darkness gap for maximum contrast
    strikeTimeoutIds.push(
      setTimeout(() => {
        ctx.clearRect(0, 0, w, h);
        flashOff();
      }, 55)
    );

    // Frame 3: MAIN RETURN STROKE 1
    strikeTimeoutIds.push(
      setTimeout(() => {
        currentSet = setA;
        drawTrees(setA, 1.0 * intensity);
        flashOn(1.0);
      }, 95)
    );

    // Frame 4: Partial dimming
    strikeTimeoutIds.push(
      setTimeout(() => {
        drawTrees(setA, 0.3 * intensity);
        flashOn(0.25);
      }, 165)
    );

    // Frame 5: RETURN STROKE 2 (different tree discharge)
    strikeTimeoutIds.push(
      setTimeout(() => {
        currentSet = setB;
        drawTrees(setB, 0.9 * intensity);
        flashOn(0.85);
      }, 215)
    );

    // Frame 6: Micro-flicker
    strikeTimeoutIds.push(
      setTimeout(() => {
        drawTrees(setB, 0.35 * intensity);
        flashOn(0.3);
      }, 285)
    );

    // Frame 7: Final pulse
    strikeTimeoutIds.push(
      setTimeout(() => {
        drawTrees(setB, 0.75 * intensity);
        flashOn(0.65);
      }, 335)
    );

    // Frame 8: Smooth plasma dissipation
    strikeTimeoutIds.push(
      setTimeout(() => {
        flashOff();
        let fadeAlpha = 0.5 * intensity;
        const fadeStart = performance.now();
        const fadeDuration = 450;

        function decayStep(now) {
          const elapsed = now - fadeStart;
          const progress = Math.min(1, elapsed / fadeDuration);
          const currentAlpha = fadeAlpha * (1 - progress);
          drawTrees(currentSet, currentAlpha);
          if (progress < 1) {
            activeAnimationId = requestAnimationFrame(decayStep);
          } else {
            ctx.clearRect(0, 0, w, h);
            activeAnimationId = null;
          }
        }
        activeAnimationId = requestAnimationFrame(decayStep);
      }, 390)
    );
  }

  // Click & Tap Interaction
  wrap.addEventListener("click", () => {
    triggerLightningStrike(1.0);
  });

  // Enter / Reload Trigger:
  // Fire briefly after the page is entered or reloaded
  setTimeout(() => {
    triggerLightningStrike(1.0);
  }, 260);

  // Trigger when headline enters viewport if user starts elsewhere and scrolls up
  let hasScrolledTriggered = false;
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrolledTriggered) {
            hasScrolledTriggered = true;
            setTimeout(() => {
              triggerLightningStrike(0.9);
            }, 150);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(wrap);
  }

  // Subtle ambient discharges every 11 seconds (soft, non-distracting distant flash)
  setInterval(() => {
    if (document.visibilityState === "visible") {
      const rect = wrap.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        triggerLightningStrike(0.42);
      }
    }
  }, 11000);
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
  setupHeroLightning();
  setupLegalModal();
  syncLiveTracksFromApi();
});
