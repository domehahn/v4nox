const STORAGE_KEY = "v4nox-locale";
const SUPPORTED_LOCALES = ["de", "en"];

const messages = {
  de: {
    auto: "Auto (Standard V6)", high: "High", focused: "Focused",
    exactLyrics: "Exakte Lyrics", noExclusions: "Keine Ausschlüsse", none: "Keine",
    playTrack: "Track abspielen", pause: "Pause", pauseAction: "Pausieren",
    playJukebox: "Jetzt in Jukebox abspielen", noSongs: "Keine Songs für diesen Filter gefunden.",
    openOnSuno: "direkt auf Suno öffnen", all: "Alle", tracks: "Tracks",
    search: "Unter {count} Songs nach Titel, Text, Style oder BPM suchen...",
    inspectorActive: "INSPEKTOR AKTIV: {title}", nowPlaying: "NOW PLAYING: {title} ({bpm} BPM)",
    synced: "SUNO DIRECT STREAM • {count} TRACKS LIVE SYNCHRONISIERT",
    stage1: "STAGE 01 // CHATGPT LYRICS", stage2: "STAGE 02 // CHATGPT STYLE",
    stage3: "STAGE 03 // SUNO V6 SETTINGS"
  },
  en: {
    auto: "Auto (V6 default)", high: "High", focused: "Focused",
    exactLyrics: "Exact lyrics", noExclusions: "No exclusions", none: "None",
    playTrack: "Play track", pause: "Pause", pauseAction: "Pause",
    playJukebox: "Play in jukebox now", noSongs: "No songs found for this filter.",
    openOnSuno: "open directly on Suno", all: "All", tracks: "Tracks",
    search: "Search {count} songs by title, lyrics, style or BPM...",
    inspectorActive: "INSPECTOR ACTIVE: {title}", nowPlaying: "NOW PLAYING: {title} ({bpm} BPM)",
    synced: "SUNO DIRECT STREAM • {count} TRACKS LIVE SYNCED",
    stage1: "STAGE 01 // CHATGPT LYRICS", stage2: "STAGE 02 // CHATGPT STYLE",
    stage3: "STAGE 03 // SUNO V6 SETTINGS"
  }
};

const englishHtml = {
  ".nav-links .nav-link:nth-child(2)": "AI Jukebox (All <span class=\"dyn-song-count\">216</span> Songs)",
  ".nav-links .nav-link:nth-child(4)": "Architecture",
  ".nav-actions > a:last-child .nav-btn-text-full": "@dome_hahn on Suno",
  ".status-pill": "<span class=\"pulse-dot\"></span>100% AI-GENERATED • CHATGPT LYRICS &amp; STYLE × SUNO V6",
  ".gradient-text": "Every lyric. Every beat. Pure AI.",
  ".hero-subline": "Welcome to the sonic universe of <strong>Dominik Hahn (@dome_hahn)</strong>. All <strong><span class=\"dyn-song-count\">216</span> songs</strong> on this site are real releases from my Suno profile—with lyrics, dramatic structure and style prompts designed by <strong>ChatGPT</strong> and brought to life by <strong>Suno AI</strong>.",
  "#hero-jukebox-btn .hero-btn-full": "Launch jukebox (All <span class=\"dyn-song-count\">216</span> original songs)",
  "#hero-jukebox-btn .hero-btn-short": "Launch jukebox (<span class=\"dyn-song-count\">216</span> songs)",
  ".hero-cta-group > a:last-child .hero-btn-full": "Suno profile (@dome_hahn)",
  ".hud-left .hud-sub": "Lyrics, metatags &amp; arrangement",
  ".hud-right .hud-title": "SUNO CATALOG",
  ".hud-right .hud-code": "<span class=\"dyn-song-count\">216</span> Real releases • @dome_hahn",
  ".scroll-indicator > span": "Scroll to the interactive jukebox",
  "#jukebox .section-intro .eyebrow": "FULL @DOME_HAHN CATALOG (<span class=\"dyn-song-count\">216</span> SONGS)",
  "#jukebox .display-title": "The v4nox AI jukebox.",
  "#jukebox .section-lead": "Choose from all <strong><span class=\"dyn-song-count\">216</span> released original songs</strong> by <a href=\"https://suno.com/@dome_hahn\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-accent-link\">suno.com/@dome_hahn</a>. Listen to the real Suno stream while exploring the full <strong>ChatGPT-generated lyrics</strong>, exact <strong>ChatGPT style prompt and Suno settings</strong> for every song.",
  ".jukebox-frame .window-title-full": "v4nox Jukebox Pro — All <span class=\"dyn-song-count\">216</span> original tracks (@dome_hahn)",
  ".jukebox-frame .window-title-short": "v4nox Jukebox (<span class=\"dyn-song-count\">216</span> songs)",
  "[data-lang-filter=\"ALL\"]": "All (216)",
  ".jn-action-row a span": "Open directly on Suno",
  "[data-jb-tab=\"lyrics\"] .tab-label-full": "ChatGPT lyrics &amp; direction tags",
  "[data-jb-tab=\"lyrics\"] .tab-label-short": "Lyrics &amp; direction",
  "[data-jb-tab=\"style\"] .tab-label-full": "ChatGPT style prompt &amp; AI details",
  "[data-jb-tab=\"style\"] .tab-label-short": "Style &amp; prompt",
  "#jb-pane-lyrics .jb-pane-header > span:first-child": "FULL CHATGPT LYRICS (INCLUDING METATAGS)",
  "#jb-pane-style .jb-pane-header > span:first-child": "CHATGPT STYLE PROMPT &amp; SUNO V6 SETTINGS",
  "#jb-pane-style .style-block:nth-child(2) .sb-label": "NEGATIVE TAGS (EXCLUDED ELEMENTS)",
  "#jb-pane-style .style-block:nth-child(3) .sb-label": "SUNO V6 ENGINE &amp; CONTROL SLIDERS (THIS SONG)",
  "#jb-pane-style .style-block:nth-child(4) .sb-label": "DIRECT SUNO SONG LINK",
  ".all-suno-links-header .eyebrow": "ALL <span class=\"dyn-song-count\">216</span> DIRECT SUNO LINKS",
  ".all-suno-links-header h3": "Go directly to each of your <span class=\"dyn-song-count\">216</span> songs on suno.com/@dome_hahn",
  ".all-suno-links-header a span": "Full @dome_hahn profile",
  "#studio > .section-intro .display-title": "Real prompts, styles &amp; settings for all <span class=\"dyn-song-count\">216</span> songs.",
  "#studio > .section-intro .section-lead": "Select one of your <strong><span class=\"dyn-song-count\">216</span> songs</strong> in the Studio window (or the jukebox above). As you scroll, the macOS-style interface reveals the <strong>original ChatGPT direction</strong>, the <strong>exact style and negative prompts</strong>, and the selected song’s <strong>Suno settings (control sliders, Max Mode and Vox Render Mode)</strong>.",
  ".studio-sidebar .sidebar-group-title:first-child": "INSPECTOR VIEW",
  ".sidebar-group-track": "SELECTED TRACK",
  "[data-ui-layer=\"0\"] .layer-tag": "01 // ORIGINAL CHATGPT DIRECTION TAGS &amp; LYRICS",
  "[data-ui-layer=\"1\"] .layer-tag": "02 // ORIGINAL CHATGPT STYLE PROMPT &amp; NEGATIVE TAGS",
  ".studio-prompt-card.negative .spc-label": "NEGATIVE TAGS (EXCLUDED STYLES)",
  "[data-ui-layer=\"2\"] .layer-tag": "03 // REAL SUNO V6 PARAMETERS &amp; CONTROL SLIDERS",
  ".master-stats #studio-s2-sub": "Released on suno.com/@dome_hahn",
  ".meter-header #studio-audio-state": "READY — SELECT OR PLAY A SONG",
  "#architecture .eyebrow": "PROFILE &amp; INFRASTRUCTURE",
  "#architecture .display-title": "Real AI art. Ready for v4nox.eu.",
  ".bento-span-8 .bento-tag": "OFFICIAL STREAMING &amp; ARTIST CHANNELS",
  ".bento-span-8 .bento-content > p": "Listen to <strong>v4nox</strong> on global streaming platforms or experience all <strong><span class=\"dyn-song-count\">216</span> tracks</strong> on the original Suno channel. Every release is born entirely from the creative AI partnership of Dominik Hahn (@dome_hahn).",
  ".bento-span-8 .bento-actions a:nth-child(1) span": "v4nox on Spotify",
  ".bento-span-8 .bento-actions a:nth-child(2) span": "v4nox on Amazon Music",
  ".bento-span-8 .bento-actions a:nth-child(3) span": "Visit the Suno profile (@dome_hahn)",
  ".bento-span-4 h3": "Entirely AI-generated.",
  ".bento-span-4 .bento-content p": "The complete lyrics and direction, as well as the detailed style prompts, were developed with ChatGPT and then turned into music with Suno V6.",
  ".bento-span-4 .bm-value": "<span class=\"dyn-song-count\">216</span> songs",
  ".bento-span-4 .bm-label": "Original tracks by @dome_hahn",
  ".footer-desc": "Official artist platform of Dominik Hahn (@dome_hahn).<br>100% AI-generated songs (lyrics &amp; style via ChatGPT, audio via Suno).",
  ".footer-nav-col:nth-child(2) a:nth-of-type(1)": "Home &amp; vision",
  ".footer-nav-col:nth-child(2) a:nth-of-type(2)": "AI Jukebox (all songs)",
  ".footer-nav-col:nth-child(2) a:nth-of-type(4)": "Profile &amp; info",
  ".footer-nav-col:nth-child(3) h4": "Platforms",
  ".footer-nav-col:nth-child(4) h4": "Legal information",
  "[data-modal-open=\"impressum\"]": "Legal notice",
  "[data-modal-open=\"datenschutz\"]": "Privacy policy",
  ".footer-bottom p": "© 2026 v4nox (Dominik Hahn). All rights reserved. Delivered via Cloudflare on v4nox.eu.",
  ".btn-dock-suno span": "Song on Suno",
  "[data-legal-tab=\"impressum\"]": "Legal notice",
  "[data-legal-tab=\"datenschutz\"]": "Privacy policy"
};

const attributeEnglish = {
  ".brand-logo": { "aria-label": "v4nox home" },
  ".nav-links": { "aria-label": "Main navigation" },
  ".language-switcher": { "aria-label": "Choose language" },
  "#jukebox-search": { "aria-label": "Search songs" },
  ".jukebox-lang-filters": { "aria-label": "Filter by language" },
  "#jukebox-tracklist": { "aria-label": "Song selection" },
  "#jb-active-cover": { alt: "Current cover" },
  "#jb-cover-play-btn": { "aria-label": "Play or pause" },
  "#studio-song-select": { "aria-label": "Choose a song for the Studio inspector" },
  "#dock-prev-btn": { "aria-label": "Previous track" },
  "#dock-play-btn": { "aria-label": "Play or pause" },
  "#dock-next-btn": { "aria-label": "Next track" },
  "#dock-scrubber-input": { "aria-label": "Playback position" },
  "#legal-modal-close": { "aria-label": "Close" }
};

const englishLegal = {
  "#legal-pane-impressum": `
    <h2 id="legal-modal-title">Legal notice</h2>
    <h3>Information pursuant to Section 5 DDG (German Digital Services Act)</h3>
    <p><strong>Dominik Hahn</strong><br>Artist name / project: <strong>v4nox (@dome_hahn)</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Germany</p>
    <h3>Contact</h3>
    <p>Email: <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a><br>Spotify: <a href="https://open.spotify.com/intl-de/artist/3Qsyrq3U8VNdCQzaEav3mf" target="_blank" rel="noopener noreferrer">v4nox on Spotify</a><br>Amazon Music: <a href="https://www.amazon.com/music/player/artists/B0HQYFFZ9L/v4nox" target="_blank" rel="noopener noreferrer">v4nox on Amazon Music</a><br>Suno artist profile: <a href="https://suno.com/@dome_hahn" target="_blank" rel="noopener noreferrer">https://suno.com/@dome_hahn</a><br>Website: <a href="https://v4nox.eu">https://v4nox.eu</a></p>
    <h3>Editorial responsibility</h3>
    <p>Responsible for journalistic and editorial content pursuant to Section 18(2) of the German State Media Treaty (MStV):<br><strong>Dominik Hahn</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Germany</p>
    <h3>Notice concerning AI-generated content (ChatGPT &amp; Suno AI) and GEMA status</h3>
    <p>All music presented on this website under the artist name <strong>v4nox (@dome_hahn)</strong> was created entirely using artificial intelligence. Lyrics, structural direction and style prompts were generated with <em>ChatGPT (OpenAI)</em>; musical composition and audio synthesis were produced with <em>Suno AI (suno.com)</em>.</p>
    <p><strong>GEMA / collecting-society notice:</strong> All music and lyrics provided on <strong>v4nox.eu</strong> are <strong>not registered with GEMA</strong> or any other collecting society and contain no protected samples or third-party compositions from the GEMA repertoire. Usage and exploitation rights are governed by the Suno AI licence terms or are held by the website operator.</p>
    <h3>EU dispute resolution &amp; consumer arbitration</h3>
    <p>We are neither willing nor obliged to participate in dispute-resolution proceedings before a consumer arbitration board.</p>
  `,
  "#legal-pane-datenschutz": `
    <h2>Privacy policy</h2>
    <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px;">Last updated: November 2026</p>
    <h3>1. Controller</h3>
    <p>The controller within the meaning of the General Data Protection Regulation (GDPR) and other data-protection legislation is:<br><br><strong>Dominik Hahn</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Germany<br>Email: <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a></p>
    <h3>2. General information about data processing</h3>
    <p>Personal data means any information relating to an identified or identifiable natural person. This may include IP addresses, communication data and technical usage data. We process personal data only where necessary to provide, secure and optimise this website (<strong>v4nox.eu</strong>), respond to enquiries or comply with legal obligations. This website uses no analytics or advertising trackers.</p>
    <h3>3. Accessing and providing the website</h3>
    <p>When you visit this website, technically necessary information is exchanged between your device, browser and the web infrastructure. Without this processing, the site cannot be delivered to your device. The following data may be processed:</p>
    <ul><li>IP address of the accessing device,</li><li>date and time of access,</li><li>requested address or URL,</li><li>transferred data volume, HTTP method and status code,</li><li>referrer URL, if transmitted by the browser,</li><li>browser type and version, operating system and user agent,</li><li>technical information needed to connect, deliver and secure the website.</li></ul>
    <p>Processing is based on Article 6(1)(f) GDPR. Our legitimate interest is the secure, stable, performant and error-free provision of our online service.</p>
    <h3>4. Hosting &amp; domain infrastructure at STRATO</h3>
    <p>Our domain (<strong>v4nox.eu</strong>) and the underlying hosting, server and email infrastructure are provided by the German hosting provider <strong>STRATO GmbH</strong>, Otto-Ostrowski-Straße 7, 10249 Berlin, Germany.</p>
    <p>When you visit the site or contact us by email, STRATO processes technically necessary connection, content and log data on our behalf in ISO 27001-certified data centres in Germany or the European Union.</p>
    <p>The legal basis is Article 6(1)(f) GDPR. We have concluded a data-processing agreement with STRATO pursuant to Article 28(3) GDPR. STRATO and its contractually bound technical subprocessors, including IONOS SE, may process personal data only on our documented instructions and subject to Article 32 GDPR safeguards. More information: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer">STRATO privacy policy</a>.</p>
    <h3>5. Cloudflare CDN, edge delivery and security</h3>
    <p>For fast worldwide delivery and protection against attacks, this website is delivered through <strong>Cloudflare</strong>. Relevant providers include <strong>Cloudflare, Inc.</strong>, 101 Townsend Street, San Francisco, CA 94107, USA, and <strong>Cloudflare Germany GmbH</strong>, c/o Design Offices München Atlas, Rosenheimer Straße 143C, 81671 Munich, Germany.</p>
    <p>Requests to <strong>v4nox.eu</strong> pass through Cloudflare's network, which processes the technical access data described in section 3. The legal basis is Article 6(1)(f) GDPR.</p>
    <p>Processing on our behalf is governed by the <strong>Cloudflare Data Processing Addendum</strong>, including the EU Standard Contractual Clauses and certification under the EU–US Data Privacy Framework. See Cloudflare's <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">privacy policy</a> and <a href="https://www.cloudflare.com/cloudflare-customer-dpa/" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a>.</p>
    <h3>6. Server and security logs; retention</h3>
    <p>STRATO and Cloudflare process technical log and security data to deliver the website, analyse errors, detect attacks and maintain infrastructure stability. Visitor logs and diagnostic data are retained for no more than <strong>7 days</strong> and then erased or anonymised; other technical system and email logs are retained for no more than 6 to 12 months.</p>
    <h3>7. Suno audio streams &amp; cover artwork</h3>
    <p>The interactive jukebox loads original cover images and, after you press play, audio/media streams directly from Suno content-delivery servers (<code>cdn1.suno.ai</code>, <code>cdn2.suno.ai</code>; Suno, Inc., Cambridge, MA, USA). Your IP address and browser information are transmitted for technical delivery. The legal basis is Article 6(1)(f) GDPR and your explicit request to use the jukebox. More information: <a href="https://suno.com/privacy" target="_blank" rel="noopener noreferrer">Suno privacy policy</a>.</p>
    <h3>8. Contact by email</h3>
    <p>If you contact us at <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a>, we process your email address, message and other information you provide to handle and answer your enquiry. Processing is based on Article 6(1)(b) GDPR for pre-contractual enquiries and otherwise on Article 6(1)(f) GDPR. Data is erased once the enquiry has been fully handled unless statutory retention obligations apply.</p>
    <h3>9. External links</h3>
    <p>This website links to external services, particularly <a href="https://suno.com/@dome_hahn" target="_blank" rel="noopener noreferrer">suno.com/@dome_hahn</a>. You leave v4nox.eu only after actively clicking an external link. The operator of the external service is responsible for subsequent processing.</p>
    <h3>10. Recipients &amp; third-country transfers</h3>
    <p>Potential recipients include <strong>STRATO GmbH</strong> and its contractually bound subprocessors, <strong>Cloudflare</strong> and affiliated companies, and <strong>Suno, Inc.</strong> when media streams load. For transfers outside the EEA, Cloudflare is certified under the <strong>EU–US Data Privacy Framework</strong>; the EU Standard Contractual Clauses additionally apply.</p>
    <h3>11. Your rights</h3>
    <p>Where the statutory requirements are met, you have rights to access (Article 15 GDPR), rectification (Article 16), erasure (Article 17), restriction (Article 18), data portability (Article 20) and objection (Article 21). To exercise them, email <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a>.</p>
    <h3>12. Right to lodge a complaint</h3>
    <p>Under Article 77 GDPR you may complain to a data-protection supervisory authority. The authority generally responsible for the controller is:<br><br><strong>The State Commissioner for Data Protection and Freedom of Information of Rhineland-Palatinate</strong><br>Hintere Bleiche 34<br>55116 Mainz<br>Germany<br>Email: <a href="mailto:poststelle@datenschutz.rlp.de">poststelle@datenschutz.rlp.de</a><br>Website: <a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer">www.datenschutz.rlp.de</a></p>
    <h3>13. Automated decision-making</h3>
    <p>No automated decision-making, including profiling within the meaning of Article 22 GDPR, takes place.</p>
  `
};

const englishWorkflow = [
  { step: "01", badge: "STAGE 01 // CHATGPT LYRICS & DIRECTION TAGS", title: "Lyrics and bar-by-bar dramatic structure from ChatGPT.", subtitle: "Choose one of your songs in the Studio window above (or in the jukebox). The Studio frame instantly displays the real ChatGPT direction—such as [Intro – 16 Bars], [Pre-Chorus Build] or [32-Bar Final Drop]—and the original lyrics for that track.", metrics: [{ label: "Full catalog", value: "All original songs" }, { label: "Catalog languages", value: "German • English • Spanish" }] },
  { step: "02", badge: "STAGE 02 // CHATGPT STYLE & NEGATIVE TAGS", title: "Positive style prompts and precise exclusions.", subtitle: "In the second stage, ChatGPT passes the exact sonic fingerprint to Suno: BPM, drum programming, bassline character, vocal timbre and the real negative tags that keep every song firmly within its intended genre.", metrics: [{ label: "Style definition", value: "Individual for every song" }, { label: "Negative filtering", value: "Active genre boundaries" }] },
  { step: "03", badge: "STAGE 03 // SUNO ENGINE & CONTROL SLIDERS", title: "The real Suno parameters and sliders for every song.", subtitle: "Stage 3 displays the selected song’s exact Suno settings: model generation (up to V6 chirp-hawk), MAX Mode status, Style Weight, Weirdness Constraint, creativity augmentation and vocal rendering.", metrics: [{ label: "Suno engine", value: "Up to V6 (chirp-hawk)" }, { label: "Audio streaming", value: "Every song playable directly" }] }
];

const originalHtml = new WeakMap();
const originalAttributes = new WeakMap();
let currentLocale = "de";

function requestedLocale() {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED_LOCALES.includes(query)) return query;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED_LOCALES.includes(saved)) return saved;
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "de";
}

function rememberHtml(el) {
  if (!originalHtml.has(el)) originalHtml.set(el, el.innerHTML);
}

function applyStaticTranslations(locale) {
  Object.entries(englishHtml).forEach(([selector, translation]) => {
    document.querySelectorAll(selector).forEach((el) => {
      rememberHtml(el);
      el.innerHTML = locale === "en" ? translation : originalHtml.get(el);
    });
  });

  Object.entries(englishLegal).forEach(([selector, translation]) => {
    const el = document.querySelector(selector);
    if (!el) return;
    rememberHtml(el);
    el.innerHTML = locale === "en" ? translation : originalHtml.get(el);
  });

  Object.entries(attributeEnglish).forEach(([selector, attributes]) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!originalAttributes.has(el)) {
        originalAttributes.set(el, Object.fromEntries(Object.keys(attributes).map((name) => [name, el.getAttribute(name)])));
      }
      Object.entries(attributes).forEach(([name, value]) => {
        const original = originalAttributes.get(el)[name];
        const next = locale === "en" ? value : original;
        if (next === null) el.removeAttribute(name); else el.setAttribute(name, next);
      });
    });
  });

  document.documentElement.lang = locale;
  document.title = locale === "en"
    ? "v4nox (@dome_hahn) — AI Jukebox | ChatGPT Lyrics & Suno V6 Music"
    : "v4nox (@dome_hahn) — AI Jukebox | ChatGPT Lyrics & Suno V6 Music";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = locale === "en"
    ? "Official artist site of v4nox (@dome_hahn). Explore original AI-generated songs with ChatGPT lyrics and style prompts and Suno V6 audio."
    : "Offizielle Artist-Seite von v4nox (@dome_hahn). Entdecke Original-Songs mit ChatGPT Lyrics und Style-Prompts sowie Suno V6 Audio.";
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = "v4nox (@dome_hahn) — AI Music Jukebox";
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = locale === "en"
    ? "Listen to original Suno songs by @dome_hahn in the interactive jukebox, including complete ChatGPT lyrics and style prompts."
    : "Höre die echten Suno-Songs von @dome_hahn direkt in der interaktiven Jukebox – inklusive kompletter ChatGPT-Lyrics und Style-Prompts.";

  document.querySelectorAll("[data-locale]").forEach((button) => {
    const active = button.dataset.locale === locale;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

export function getLocale() { return currentLocale; }
export function t(key, params = {}) {
  let value = messages[currentLocale]?.[key] ?? messages.de[key] ?? key;
  Object.entries(params).forEach(([name, replacement]) => { value = value.replaceAll(`{${name}}`, replacement); });
  return value;
}
export function getWorkflowSteps(fallback) { return currentLocale === "en" ? englishWorkflow : fallback; }

export function setLocale(locale, { updateUrl = true } = {}) {
  if (!SUPPORTED_LOCALES.includes(locale)) return;
  currentLocale = locale;
  localStorage.setItem(STORAGE_KEY, locale);
  applyStaticTranslations(locale);
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    history.replaceState({}, "", url);
  }
  window.dispatchEvent(new CustomEvent("v4nox:localechange", { detail: { locale } }));
}

export function initI18n() {
  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.addEventListener("click", () => setLocale(button.dataset.locale));
  });
  setLocale(requestedLocale(), { updateUrl: false });
  window.addEventListener("popstate", () => {
    const locale = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED_LOCALES.includes(locale)) setLocale(locale, { updateUrl: false });
  });
}
