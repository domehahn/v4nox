const STORAGE_KEY = "v4nox-locale";
const SUPPORTED_LOCALES = ["de", "en", "es", "it", "fr"];

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
  },
  es: {
    auto: "Automático (V6 estándar)", high: "Alto", focused: "Enfocado",
    exactLyrics: "Letras exactas", noExclusions: "Sin exclusiones", none: "Ninguna",
    playTrack: "Reproducir pista", pause: "Pausa", pauseAction: "Pausar",
    playJukebox: "Reproducir ahora en la jukebox", noSongs: "No se encontraron canciones para este filtro.",
    openOnSuno: "abrir directamente en Suno", all: "Todas", tracks: "Pistas",
    search: "Buscar entre {count} canciones por título, letra, estilo o BPM...",
    inspectorActive: "INSPECTOR ACTIVO: {title}", nowPlaying: "REPRODUCIENDO: {title} ({bpm} BPM)",
    synced: "STREAMING DIRECTO DE SUNO • {count} PISTAS SINCRONIZADAS EN VIVO",
    stage1: "ETAPA 01 // LETRAS DE CHATGPT", stage2: "ETAPA 02 // ESTILO DE CHATGPT",
    stage3: "ETAPA 03 // AJUSTES DE SUNO V6"
  },
  it: {
    auto: "Auto (predefinito V6)", high: "Alto", focused: "Focalizzato",
    exactLyrics: "Testi esatti", noExclusions: "Nessuna esclusione", none: "Nessuna",
    playTrack: "Riproduci traccia", pause: "Pausa", pauseAction: "Metti in pausa",
    playJukebox: "Riproduci ora nel jukebox", noSongs: "Nessun brano trovato per questo filtro.",
    openOnSuno: "apri direttamente su Suno", all: "Tutti", tracks: "Tracce",
    search: "Cerca tra {count} brani per titolo, testo, stile o BPM...",
    inspectorActive: "ISPETTORE ATTIVO: {title}", nowPlaying: "IN RIPRODUZIONE: {title} ({bpm} BPM)",
    synced: "STREAMING DIRETTO SUNO • {count} TRACCE SINCRONIZZATE LIVE",
    stage1: "FASE 01 // TESTI CHATGPT", stage2: "FASE 02 // STILE CHATGPT",
    stage3: "FASE 03 // IMPOSTAZIONI SUNO V6"
  },
  fr: {
    auto: "Auto (par défaut V6)", high: "Élevé", focused: "Focalisé",
    exactLyrics: "Paroles exactes", noExclusions: "Aucune exclusion", none: "Aucune",
    playTrack: "Lire la piste", pause: "Pause", pauseAction: "Mettre en pause",
    playJukebox: "Écouter dans le jukebox maintenant", noSongs: "Aucun morceau trouvé pour ce filtre.",
    openOnSuno: "ouvrir directement sur Suno", all: "Tous", tracks: "Pistes",
    search: "Rechercher parmi {count} morceaux par titre, paroles, style ou BPM...",
    inspectorActive: "INSPECTEUR ACTIF : {title}", nowPlaying: "LECTURE EN COURS : {title} ({bpm} BPM)",
    synced: "STREAMING DIRECT SUNO • {count} PISTES SYNCHRONISÉES EN DIRECT",
    stage1: "ÉTAPE 01 // PAROLES CHATGPT", stage2: "ÉTAPE 02 // STYLE CHATGPT",
    stage3: "ÉTAPE 03 // PARAMÈTRES SUNO V6"
  }
};

const htmlTranslations = {
  en: {
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
  },
  es: {
    ".nav-links .nav-link:nth-child(2)": "Jukebox IA (Las <span class=\"dyn-song-count\">216</span> canciones)",
    ".nav-links .nav-link:nth-child(4)": "Arquitectura",
    ".nav-actions > a:last-child .nav-btn-text-full": "@dome_hahn en Suno",
    ".status-pill": "<span class=\"pulse-dot\"></span>100% GENERADO POR IA • LETRAS Y ESTILO DE CHATGPT × SUNO V6",
    ".gradient-text": "Cada letra. Cada ritmo. Pura IA.",
    ".hero-subline": "Bienvenido al universo sonoro de <strong>Dominik Hahn (@dome_hahn)</strong>. Las <strong><span class=\"dyn-song-count\">216</span> canciones</strong> de este sitio son lanzamientos reales de mi perfil de Suno, con letras, estructura dramática y estilos diseñados por <strong>ChatGPT</strong> y musicalizados por <strong>Suno AI</strong>.",
    "#hero-jukebox-btn .hero-btn-full": "Abrir jukebox (Las <span class=\"dyn-song-count\">216</span> canciones originales)",
    "#hero-jukebox-btn .hero-btn-short": "Abrir jukebox (<span class=\"dyn-song-count\">216</span> canciones)",
    ".hero-cta-group > a:last-child .hero-btn-full": "Perfil de Suno (@dome_hahn)",
    ".hud-left .hud-sub": "Letras, metaetiquetas y arreglos",
    ".hud-right .hud-title": "CATÁLOGO DE SUNO",
    ".hud-right .hud-code": "<span class=\"dyn-song-count\">216</span> Lanzamientos reales • @dome_hahn",
    ".scroll-indicator > span": "Desplázate hacia la jukebox interactiva",
    "#jukebox .section-intro .eyebrow": "CATÁLOGO COMPLETO DE @DOME_HAHN (<span class=\"dyn-song-count\">216</span> CANCIONES)",
    "#jukebox .display-title": "La jukebox de IA de v4nox.",
    "#jukebox .section-lead": "Elige entre las <strong><span class=\"dyn-song-count\">216</span> canciones originales publicadas</strong> en <a href=\"https://suno.com/@dome_hahn\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-accent-link\">suno.com/@dome_hahn</a>. Escucha el streaming real de Suno mientras exploras las <strong>letras completas generadas por ChatGPT</strong>, el <strong>prompt exacto de estilo de ChatGPT y los ajustes de Suno</strong> de cada tema.",
    ".jukebox-frame .window-title-full": "v4nox Jukebox Pro — Las <span class=\"dyn-song-count\">216</span> pistas originales (@dome_hahn)",
    ".jukebox-frame .window-title-short": "v4nox Jukebox (<span class=\"dyn-song-count\">216</span> canciones)",
    "[data-lang-filter=\"ALL\"]": "Todas (216)",
    ".jn-action-row a span": "Abrir directamente en Suno",
    "[data-jb-tab=\"lyrics\"] .tab-label-full": "Letras de ChatGPT y etiquetas de dirección",
    "[data-jb-tab=\"lyrics\"] .tab-label-short": "Letras y dirección",
    "[data-jb-tab=\"style\"] .tab-label-full": "Prompt de estilo ChatGPT y detalles de IA",
    "[data-jb-tab=\"style\"] .tab-label-short": "Estilo y prompt",
    "#jb-pane-lyrics .jb-pane-header > span:first-child": "LETRAS COMPLETAS DE CHATGPT (INC. METATAGS)",
    "#jb-pane-style .jb-pane-header > span:first-child": "PROMPT DE ESTILO DE CHATGPT Y AJUSTES DE SUNO V6",
    "#jb-pane-style .style-block:nth-child(2) .sb-label": "ETIQUETAS NEGATIVAS (ELEMENTOS EXCLUIDOS)",
    "#jb-pane-style .style-block:nth-child(3) .sb-label": "MOTOR SUNO V6 Y CONTROLES DESLIZANTES (ESTA CANCIÓN)",
    "#jb-pane-style .style-block:nth-child(4) .sb-label": "ENLACE DIRECTO DE LA CANCIÓN EN SUNO",
    ".all-suno-links-header .eyebrow": "LOS <span class=\"dyn-song-count\">216</span> ENLACES DIRECTOS A SUNO",
    ".all-suno-links-header h3": "Accede directamente a cada una de tus <span class=\"dyn-song-count\">216</span> canciones en suno.com/@dome_hahn",
    ".all-suno-links-header a span": "Perfil completo de @dome_hahn",
    "#studio > .section-intro .display-title": "Prompts, estilos y ajustes reales para las <span class=\"dyn-song-count\">216</span> canciones.",
    "#studio > .section-intro .section-lead": "Selecciona una de tus <strong><span class=\"dyn-song-count\">216</span> canciones</strong> en la ventana Studio (o arriba en la jukebox). Al desplazarte, la interfaz estilo macOS revela las <strong>indicaciones originales de ChatGPT</strong>, los <strong>prompts exactos de estilo y negativos</strong>, así como los <strong>ajustes de Suno (controles deslizantes, Modo Max y Modo Vox Render)</strong> del tema elegido.",
    ".studio-sidebar .sidebar-group-title:first-child": "VISTA DEL INSPECTOR",
    ".sidebar-group-track": "PISTA SELECCIONADA",
    "[data-ui-layer=\"0\"] .layer-tag": "01 // ETIQUETAS DE DIRECCIÓN Y LETRAS ORIGINALES DE CHATGPT",
    "[data-ui-layer=\"1\"] .layer-tag": "02 // PROMPT DE ESTILO ORIGINAL Y ETIQUETAS NEGATIVAS DE CHATGPT",
    ".studio-prompt-card.negative .spc-label": "ETIQUETAS NEGATIVAS (ESTILOS EXCLUIDOS)",
    "[data-ui-layer=\"2\"] .layer-tag": "03 // PARÁMETROS REALES Y CONTROLES DESLIZANTES DE SUNO V6",
    ".master-stats #studio-s2-sub": "Publicado en suno.com/@dome_hahn",
    ".meter-header #studio-audio-state": "LISTO — SELECCIONA O REPRODUCE UNA CANCIÓN",
    "#architecture .eyebrow": "PERFIL E INFRAESTRUCTURA",
    "#architecture .display-title": "Arte con IA real. Listo para v4nox.eu.",
    ".bento-span-8 .bento-tag": "CANALES OFICIALES DE STREAMING Y ARTISTA",
    ".bento-span-8 .bento-content > p": "Escucha a <strong>v4nox</strong> en las plataformas de streaming globales o disfruta de las <strong><span class=\"dyn-song-count\">216</span> pistas</strong> en el canal oficial de Suno. Cada lanzamiento nace íntegramente de la creativa alianza con IA de Dominik Hahn (@dome_hahn).",
    ".bento-span-8 .bento-actions a:nth-child(1) span": "v4nox en Spotify",
    ".bento-span-8 .bento-actions a:nth-child(2) span": "v4nox en Amazon Music",
    ".bento-span-8 .bento-actions a:nth-child(3) span": "Visitar el perfil de Suno (@dome_hahn)",
    ".bento-span-4 h3": "Completamente generado por IA.",
    ".bento-span-4 .bento-content p": "Tanto las letras completas con sus directrices escénicas como los prompts detallados de estilo se desarrollaron con ChatGPT y posteriormente se musicalizaron con Suno V6.",
    ".bento-span-4 .bm-value": "<span class=\"dyn-song-count\">216</span> canciones",
    ".bento-span-4 .bm-label": "Pistas originales de @dome_hahn",
    ".footer-desc": "Plataforma oficial del artista Dominik Hahn (@dome_hahn).<br>Canciones 100% generadas por IA (letras y estilo vía ChatGPT, audio vía Suno).",
    ".footer-nav-col:nth-child(2) a:nth-of-type(1)": "Inicio y visión",
    ".footer-nav-col:nth-child(2) a:nth-of-type(2)": "Jukebox IA (todas las canciones)",
    ".footer-nav-col:nth-child(2) a:nth-of-type(4)": "Perfil e información",
    ".footer-nav-col:nth-child(3) h4": "Plataformas",
    ".footer-nav-col:nth-child(4) h4": "Información legal",
    "[data-modal-open=\"impressum\"]": "Aviso legal",
    "[data-modal-open=\"datenschutz\"]": "Política de privacidad",
    ".footer-bottom p": "© 2026 v4nox (Dominik Hahn). Todos los derechos reservados. Distribuido a través de Cloudflare en v4nox.eu.",
    ".btn-dock-suno span": "Canción en Suno",
    "[data-legal-tab=\"impressum\"]": "Aviso legal",
    "[data-legal-tab=\"datenschutz\"]": "Política de privacidad"
  },
  it: {
    ".nav-links .nav-link:nth-child(2)": "Jukebox AI (Tutti i <span class=\"dyn-song-count\">216</span> brani)",
    ".nav-links .nav-link:nth-child(4)": "Architettura",
    ".nav-actions > a:last-child .nav-btn-text-full": "@dome_hahn su Suno",
    ".status-pill": "<span class=\"pulse-dot\"></span>100% GENERATO DA IA • TESTI E STILE CHATGPT × SUNO V6",
    ".gradient-text": "Ogni testo. Ogni ritmo. Pura IA.",
    ".hero-subline": "Benvenuti nell'universo sonoro di <strong>Dominik Hahn (@dome_hahn)</strong>. Tutti i <strong><span class=\"dyn-song-count\">216</span> brani</span> presenti su questo sito sono uscite reali dal mio profilo Suno, con testi, struttura drammatica e prompt di stile ideati da <strong>ChatGPT</strong> e musicati da <strong>Suno AI</strong>.",
    "#hero-jukebox-btn .hero-btn-full": "Avvia jukebox (Tutti i <span class=\"dyn-song-count\">216</span> brani originali)",
    "#hero-jukebox-btn .hero-btn-short": "Avvia jukebox (<span class=\"dyn-song-count\">216</span> brani)",
    ".hero-cta-group > a:last-child .hero-btn-full": "Profilo Suno (@dome_hahn)",
    ".hud-left .hud-sub": "Testi, metatag e arrangiamenti",
    ".hud-right .hud-title": "CATALOGO SUNO",
    ".hud-right .hud-code": "<span class=\"dyn-song-count\">216</span> Uscite reali • @dome_hahn",
    ".scroll-indicator > span": "Scorri fino al jukebox interattivo",
    "#jukebox .section-intro .eyebrow": "CATALOGO COMPLETO DI @DOME_HAHN (<span class=\"dyn-song-count\">216</span> BRANI)",
    "#jukebox .display-title": "Il jukebox AI di v4nox.",
    "#jukebox .section-lead": "Scegli tra tutti i <strong><span class=\"dyn-song-count\">216</span> brani originali pubblicati</strong> su <a href=\"https://suno.com/@dome_hahn\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-accent-link\">suno.com/@dome_hahn</a>. Ascolta lo streaming autentico di Suno ed esplora i <strong>testi completi generati da ChatGPT</strong>, l'esatto <strong>prompt di stile ChatGPT e le impostazioni Suno</strong> per ciascun brano.",
    ".jukebox-frame .window-title-full": "v4nox Jukebox Pro — Tutti i <span class=\"dyn-song-count\">216</span> brani originali (@dome_hahn)",
    ".jukebox-frame .window-title-short": "v4nox Jukebox (<span class=\"dyn-song-count\">216</span> brani)",
    "[data-lang-filter=\"ALL\"]": "Tutti (216)",
    ".jn-action-row a span": "Apri direttamente su Suno",
    "[data-jb-tab=\"lyrics\"] .tab-label-full": "Testi ChatGPT e indicazioni di regia",
    "[data-jb-tab=\"lyrics\"] .tab-label-short": "Testi e regia",
    "[data-jb-tab=\"style\"] .tab-label-full": "Prompt di stile ChatGPT e dettagli IA",
    "[data-jb-tab=\"style\"] .tab-label-short": "Stile e prompt",
    "#jb-pane-lyrics .jb-pane-header > span:first-child": "TESTO COMPLETO DI CHATGPT (INCL. METATAG)",
    "#jb-pane-style .jb-pane-header > span:first-child": "PROMPT DI STILE CHATGPT E IMPOSTAZIONI SUNO V6",
    "#jb-pane-style .style-block:nth-child(2) .sb-label": "TAG NEGATIVI (ELEMENTI ESCLUSI)",
    "#jb-pane-style .style-block:nth-child(3) .sb-label": "MOTORE SUNO V6 E CURSORI DI CONTROLLO (QUESTO BRANO)",
    "#jb-pane-style .style-block:nth-child(4) .sb-label": "LINK DIRETTO AL BRANO SU SUNO",
    ".all-suno-links-header .eyebrow": "TUTTI I <span class=\"dyn-song-count\">216</span> LINK DIRETTI SUNO",
    ".all-suno-links-header h3": "Vai direttamente a ciascuno dei tuoi <span class=\"dyn-song-count\">216</span> brani su suno.com/@dome_hahn",
    ".all-suno-links-header a span": "Profilo completo di @dome_hahn",
    "#studio > .section-intro .display-title": "Prompt, stili e impostazioni reali per tutti i <span class=\"dyn-song-count\">216</span> brani.",
    "#studio > .section-intro .section-lead": "Seleziona uno dei tuoi <strong><span class=\"dyn-song-count\">216</span> brani</strong> nella finestra Studio (o nel jukebox in alto). Scorrendo la pagina, l'interfaccia in stile macOS svela le <strong>indicazioni di regia originali di ChatGPT</strong>, gli <strong>esatti prompt di stile e negativi</strong> e le <strong>impostazioni Suno (cursori di controllo, Max Mode e Vox Render Mode)</strong> del brano selezionato.",
    ".studio-sidebar .sidebar-group-title:first-child": "VISTA ISPETTORE",
    ".sidebar-group-track": "TRACCIA SELEZIONATA",
    "[data-ui-layer=\"0\"] .layer-tag": "01 // INDICAZIONI DI REGIA E TESTO ORIGINALI DI CHATGPT",
    "[data-ui-layer=\"1\"] .layer-tag": "02 // PROMPT DI STILE ORIGINALE E TAG NEGATIVI DI CHATGPT",
    ".studio-prompt-card.negative .spc-label": "TAG NEGATIVI (STILI ESCLUSI)",
    "[data-ui-layer=\"2\"] .layer-tag": "03 // PARAMETRI E CURSORI DI CONTROLLO REALI DI SUNO V6",
    ".master-stats #studio-s2-sub": "Pubblicato su suno.com/@dome_hahn",
    ".meter-header #studio-audio-state": "PRONTO — SELEZIONA O RIPRODUCI UN BRANO",
    "#architecture .eyebrow": "PROFILO E INFRASTRUTTURA",
    "#architecture .display-title": "Autentica arte IA. Pronta per v4nox.eu.",
    ".bento-span-8 .bento-tag": "CANALI UFFICIALI STREAMING E ARTISTA",
    ".bento-span-8 .bento-content > p": "Ascolta <strong>v4nox</strong> sulle piattaforme di streaming globali o scopri tutti i <strong><span class=\"dyn-song-count\">216</span> brani</strong> sul canale Suno originale. Ogni uscita nasce al 100% dalla collaborazione creativa con l'IA di Dominik Hahn (@dome_hahn).",
    ".bento-span-8 .bento-actions a:nth-child(1) span": "v4nox su Spotify",
    ".bento-span-8 .bento-actions a:nth-child(2) span": "v4nox su Amazon Music",
    ".bento-span-8 .bento-actions a:nth-child(3) span": "Visita il profilo Suno (@dome_hahn)",
    ".bento-span-4 h3": "Interamente generato dall'IA.",
    ".bento-span-4 .bento-content p": "Sia i testi completi con le indicazioni di regia che i dettagliati prompt di stile sono stati sviluppati con ChatGPT e poi trasformati in musica con Suno V6.",
    ".bento-span-4 .bm-value": "<span class=\"dyn-song-count\">216</span> brani",
    ".bento-span-4 .bm-label": "Tracce originali di @dome_hahn",
    ".footer-desc": "Piattaforma ufficiale dell'artista Dominik Hahn (@dome_hahn).<br>Brani generati al 100% da IA (testi e stile via ChatGPT, audio via Suno).",
    ".footer-nav-col:nth-child(2) a:nth-of-type(1)": "Home e visione",
    ".footer-nav-col:nth-child(2) a:nth-of-type(2)": "Jukebox AI (tutti i brani)",
    ".footer-nav-col:nth-child(2) a:nth-of-type(4)": "Profilo e informazioni",
    ".footer-nav-col:nth-child(3) h4": "Piattaforme",
    ".footer-nav-col:nth-child(4) h4": "Informazioni legali",
    "[data-modal-open=\"impressum\"]": "Note legali",
    "[data-modal-open=\"datenschutz\"]": "Informativa sulla privacy",
    ".footer-bottom p": "© 2026 v4nox (Dominik Hahn). Tutti i diritti riservati. Distribuito tramite Cloudflare su v4nox.eu.",
    ".btn-dock-suno span": "Brano su Suno",
    "[data-legal-tab=\"impressum\"]": "Note legali",
    "[data-legal-tab=\"datenschutz\"]": "Informativa sulla privacy"
  },
  fr: {
    ".nav-links .nav-link:nth-child(2)": "Jukebox IA (Tous les <span class=\"dyn-song-count\">216</span> morceaux)",
    ".nav-links .nav-link:nth-child(4)": "Architecture",
    ".nav-actions > a:last-child .nav-btn-text-full": "@dome_hahn sur Suno",
    ".status-pill": "<span class=\"pulse-dot\"></span>100% GÉNÉRÉ PAR IA • PAROLES &amp; STYLE CHATGPT × SUNO V6",
    ".gradient-text": "Chaque parole. Chaque rythme. Pure IA.",
    ".hero-subline": "Bienvenue dans l'univers sonore de <strong>Dominik Hahn (@dome_hahn)</strong>. Les <strong><span class=\"dyn-song-count\">216</span> morceaux</strong> de ce site sont de véritables sorties de mon profil Suno — avec paroles, structure dramatique et styles conçus par <strong>ChatGPT</strong> et mis en musique par <strong>Suno AI</strong>.",
    "#hero-jukebox-btn .hero-btn-full": "Lancer le jukebox (Tous les <span class=\"dyn-song-count\">216</span> morceaux originaux)",
    "#hero-jukebox-btn .hero-btn-short": "Lancer le jukebox (<span class=\"dyn-song-count\">216</span> morceaux)",
    ".hero-cta-group > a:last-child .hero-btn-full": "Profil Suno (@dome_hahn)",
    ".hud-left .hud-sub": "Paroles, métatags &amp; arrangements",
    ".hud-right .hud-title": "CATALOGUE SUNO",
    ".hud-right .hud-code": "<span class=\"dyn-song-count\">216</span> Sorties réelles • @dome_hahn",
    ".scroll-indicator > span": "Faites défiler jusqu'au jukebox interactif",
    "#jukebox .section-intro .eyebrow": "CATALOGUE COMPLET DE @DOME_HAHN (<span class=\"dyn-song-count\">216</span> MORCEAUX)",
    "#jukebox .display-title": "Le jukebox IA de v4nox.",
    "#jukebox .section-lead": "Choisissez parmi les <strong><span class=\"dyn-song-count\">216</span> morceaux originaux publiés</strong> sur <a href=\"https://suno.com/@dome_hahn\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-accent-link\">suno.com/@dome_hahn</a>. Écoutez le streaming authentique de Suno tout en découvrant les <strong>paroles intégrales générées par ChatGPT</strong>, le <strong>prompt de style exact et les réglages Suno</strong> de chaque titre.",
    ".jukebox-frame .window-title-full": "v4nox Jukebox Pro — Les <span class=\"dyn-song-count\">216</span> pistes originales (@dome_hahn)",
    ".jukebox-frame .window-title-short": "v4nox Jukebox (<span class=\"dyn-song-count\">216</span> morceaux)",
    "[data-lang-filter=\"ALL\"]": "Tous (216)",
    ".jn-action-row a span": "Ouvrir directement sur Suno",
    "[data-jb-tab=\"lyrics\"] .tab-label-full": "Paroles ChatGPT &amp; indications de mise en scène",
    "[data-jb-tab=\"lyrics\"] .tab-label-short": "Paroles &amp; direction",
    "[data-jb-tab=\"style\"] .tab-label-full": "Prompt de style ChatGPT &amp; détails IA",
    "[data-jb-tab=\"style\"] .tab-label-short": "Style &amp; prompt",
    "#jb-pane-lyrics .jb-pane-header > span:first-child": "PAROLES COMPLÈTES CHATGPT (AVEC MÉTAGS)",
    "#jb-pane-style .jb-pane-header > span:first-child": "PROMPT DE STYLE CHATGPT ET RÉGLAGES SUNO V6",
    "#jb-pane-style .style-block:nth-child(2) .sb-label": "TAGS NÉGATIFS (ÉLÉMENTS EXCLUS)",
    "#jb-pane-style .style-block:nth-child(3) .sb-label": "MOTEUR SUNO V6 &amp; CURSEURS DE CONTRÔLE (CE MORCEAU)",
    "#jb-pane-style .style-block:nth-child(4) .sb-label": "LIEN DIRECT DU MORCEAU SUR SUNO",
    ".all-suno-links-header .eyebrow": "TOUS LES <span class=\"dyn-song-count\">216</span> LIENS DIRECTS SUNO",
    ".all-suno-links-header h3": "Accédez directement à chacun de vos <span class=\"dyn-song-count\">216</span> morceaux sur suno.com/@dome_hahn",
    ".all-suno-links-header a span": "Profil complet de @dome_hahn",
    "#studio > .section-intro .display-title": "Prompts, styles et réglages réels pour les <span class=\"dyn-song-count\">216</span> morceaux.",
    "#studio > .section-intro .section-lead": "Sélectionnez l'un de vos <strong><span class=\"dyn-song-count\">216</span> morceaux</strong> dans la fenêtre Studio (ou dans le jukebox ci-dessus). Au fil du défilement, l'interface façon macOS révèle les <strong>indications originales de ChatGPT</strong>, les <strong>prompts de style et négatifs précis</strong> ainsi que les <strong>réglages Suno (curseurs, Mode Max et Mode Vox Render)</strong> du morceau sélectionné.",
    ".studio-sidebar .sidebar-group-title:first-child": "VUE INSPECTEUR",
    ".sidebar-group-track": "PISTE SÉLECTIONNÉE",
    "[data-ui-layer=\"0\"] .layer-tag": "01 // INDICATIONS DE DIRECTION ET PAROLES ORIGINALES DE CHATGPT",
    "[data-ui-layer=\"1\"] .layer-tag": "02 // PROMPT DE STYLE ORIGINAL ET TAGS NÉGATIFS DE CHATGPT",
    ".studio-prompt-card.negative .spc-label": "TAGS NÉGATIFS (STYLES EXCLUS)",
    "[data-ui-layer=\"2\"] .layer-tag": "03 // VRAIS PARAMÈTRES ET CURSEURS DE CONTRÔLE SUNO V6",
    ".master-stats #studio-s2-sub": "Publié sur suno.com/@dome_hahn",
    ".meter-header #studio-audio-state": "PRÊT — SÉLECTIONNEZ OU LANCEZ UN MORCEAU",
    "#architecture .eyebrow": "PROFIL &amp; INFRASTRUCTURE",
    "#architecture .display-title": "Art IA authentique. Prêt pour v4nox.eu.",
    ".bento-span-8 .bento-tag": "CANAUX OFFICIELS DE STREAMING ET D'ARTISTE",
    ".bento-span-8 .bento-content > p": "Écoutez <strong>v4nox</strong> sur les plateformes de streaming mondiales ou découvrez les <strong><span class=\"dyn-song-count\">216</span> morceaux</strong> sur la chaîne Suno originale. Chaque titre est né à 100 % du partenariat créatif avec l'IA de Dominik Hahn (@dome_hahn).",
    ".bento-span-8 .bento-actions a:nth-child(1) span": "v4nox sur Spotify",
    ".bento-span-8 .bento-actions a:nth-child(2) span": "v4nox sur Amazon Music",
    ".bento-span-8 .bento-actions a:nth-child(3) span": "Visiter le profil Suno (@dome_hahn)",
    ".bento-span-4 h3": "Entièrement généré par l'IA.",
    ".bento-span-4 .bento-content p": "Les paroles complètes ainsi que les indications de mise en scène et les prompts détaillés de style ont été créés avec ChatGPT puis mis en musique avec Suno V6.",
    ".bento-span-4 .bm-value": "<span class=\"dyn-song-count\">216</span> morceaux",
    ".bento-span-4 .bm-label": "Pistes originales de @dome_hahn",
    ".footer-desc": "Plateforme officielle de l'artiste Dominik Hahn (@dome_hahn).<br>Morceaux 100% générés par IA (paroles et style via ChatGPT, audio via Suno).",
    ".footer-nav-col:nth-child(2) a:nth-of-type(1)": "Accueil &amp; vision",
    ".footer-nav-col:nth-child(2) a:nth-of-type(2)": "Jukebox IA (tous les morceaux)",
    ".footer-nav-col:nth-child(2) a:nth-of-type(4)": "Profil &amp; infos",
    ".footer-nav-col:nth-child(3) h4": "Plateformes",
    ".footer-nav-col:nth-child(4) h4": "Informations légales",
    "[data-modal-open=\"impressum\"]": "Mentions légales",
    "[data-modal-open=\"datenschutz\"]": "Politique de confidentialité",
    ".footer-bottom p": "© 2026 v4nox (Dominik Hahn). Tous droits réservés. Diffusé via Cloudflare sur v4nox.eu.",
    ".btn-dock-suno span": "Morceau sur Suno",
    "[data-legal-tab=\"impressum\"]": "Mentions légales",
    "[data-legal-tab=\"datenschutz\"]": "Politique de confidentialité"
  }
};

const attributeTranslations = {
  en: {
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
  },
  es: {
    ".brand-logo": { "aria-label": "Inicio v4nox" },
    ".nav-links": { "aria-label": "Navegación principal" },
    ".language-switcher": { "aria-label": "Elegir idioma" },
    "#jukebox-search": { "aria-label": "Buscar canciones" },
    ".jukebox-lang-filters": { "aria-label": "Filtrar por idioma" },
    "#jukebox-tracklist": { "aria-label": "Selección de canciones" },
    "#jb-active-cover": { alt: "Portada actual" },
    "#jb-cover-play-btn": { "aria-label": "Reproducir o pausar" },
    "#studio-song-select": { "aria-label": "Elegir canción para el inspector de Studio" },
    "#dock-prev-btn": { "aria-label": "Pista anterior" },
    "#dock-play-btn": { "aria-label": "Reproducir o pausar" },
    "#dock-next-btn": { "aria-label": "Pista siguiente" },
    "#dock-scrubber-input": { "aria-label": "Posición de reproducción" },
    "#legal-modal-close": { "aria-label": "Cerrar" }
  },
  it: {
    ".brand-logo": { "aria-label": "Home v4nox" },
    ".nav-links": { "aria-label": "Navigazione principale" },
    ".language-switcher": { "aria-label": "Scegli la lingua" },
    "#jukebox-search": { "aria-label": "Cerca brani" },
    ".jukebox-lang-filters": { "aria-label": "Filtra per lingua" },
    "#jukebox-tracklist": { "aria-label": "Selezione dei brani" },
    "#jb-active-cover": { alt: "Copertina attuale" },
    "#jb-cover-play-btn": { "aria-label": "Riproduci o metti in pausa" },
    "#studio-song-select": { "aria-label": "Scegli un brano per l'ispettore Studio" },
    "#dock-prev-btn": { "aria-label": "Traccia precedente" },
    "#dock-play-btn": { "aria-label": "Riproduci o metti in pausa" },
    "#dock-next-btn": { "aria-label": "Traccia successiva" },
    "#dock-scrubber-input": { "aria-label": "Posizione di riproduzione" },
    "#legal-modal-close": { "aria-label": "Chiudi" }
  },
  fr: {
    ".brand-logo": { "aria-label": "Accueil v4nox" },
    ".nav-links": { "aria-label": "Navigation principale" },
    ".language-switcher": { "aria-label": "Choisir la langue" },
    "#jukebox-search": { "aria-label": "Rechercher des morceaux" },
    ".jukebox-lang-filters": { "aria-label": "Filtrer par langue" },
    "#jukebox-tracklist": { "aria-label": "Sélection des morceaux" },
    "#jb-active-cover": { alt: "Pochette actuelle" },
    "#jb-cover-play-btn": { "aria-label": "Lire ou mettre en pause" },
    "#studio-song-select": { "aria-label": "Choisir un morceau pour l'inspecteur Studio" },
    "#dock-prev-btn": { "aria-label": "Piste précédente" },
    "#dock-play-btn": { "aria-label": "Lire ou mettre en pause" },
    "#dock-next-btn": { "aria-label": "Piste suivante" },
    "#dock-scrubber-input": { "aria-label": "Position de lecture" },
    "#legal-modal-close": { "aria-label": "Fermer" }
  }
};

const legalTranslations = {
  en: {
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
  },
  es: {
    "#legal-pane-impressum": `
      <h2 id="legal-modal-title">Aviso legal</h2>
      <h3>Información conforme al artículo 5 de la Ley alemana de servicios digitales (DDG)</h3>
      <p><strong>Dominik Hahn</strong><br>Nombre artístico / proyecto: <strong>v4nox (@dome_hahn)</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Alemania</p>
      <h3>Contacto</h3>
      <p>Correo electrónico: <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a><br>Spotify: <a href="https://open.spotify.com/intl-de/artist/3Qsyrq3U8VNdCQzaEav3mf" target="_blank" rel="noopener noreferrer">v4nox en Spotify</a><br>Amazon Music: <a href="https://www.amazon.com/music/player/artists/B0HQYFFZ9L/v4nox" target="_blank" rel="noopener noreferrer">v4nox en Amazon Music</a><br>Perfil artístico en Suno: <a href="https://suno.com/@dome_hahn" target="_blank" rel="noopener noreferrer">https://suno.com/@dome_hahn</a><br>Sitio web: <a href="https://v4nox.eu">https://v4nox.eu</a></p>
      <h3>Responsabilidad editorial</h3>
      <p>Responsable del contenido periodístico y editorial de conformidad con el artículo 18, apartado 2 del Tratado de Estado sobre Medios de Comunicación (MStV):<br><strong>Dominik Hahn</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Alemania</p>
      <h3>Aviso sobre contenido generado por IA (ChatGPT y Suno AI) y situación de GEMA</h3>
      <p>Toda la música presentada en este sitio bajo el nombre artístico <strong>v4nox (@dome_hahn)</strong> ha sido creada íntegramente mediante inteligencia artificial. Las letras, indicaciones estructurales y prompts de estilo se crearon con <em>ChatGPT (OpenAI)</em>; la composición musical y síntesis de audio corrieron a cargo de <em>Suno AI (suno.com)</em>.</p>
      <p><strong>Aviso sobre GEMA / entidades de gestión colectiva:</strong> Toda la música y letras facilitadas en <strong>v4nox.eu</strong> están <strong>libres de GEMA</strong> y no están registradas en ninguna sociedad de gestión ni contienen muestras protegidas de terceros del repertorio de GEMA. Los derechos de explotación se rigen por los términos de licencia de Suno AI o pertenecen al titular del sitio web.</p>
      <h3>Resolución de litigios en línea de la UE</h3>
      <p>No estamos obligados ni dispuestos a participar en procedimientos de resolución de litigios ante una junta arbitral de consumo.</p>
    `,
    "#legal-pane-datenschutz": `
      <h2>Política de privacidad</h2>
      <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px;">Última actualización: Noviembre de 2026</p>
      <h3>1. Responsable del tratamiento</h3>
      <p>El responsable del tratamiento en el sentido del Reglamento General de Protección de Datos (RGPD) es:<br><br><strong>Dominik Hahn</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Alemania<br>Correo electrónico: <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a></p>
      <h3>2. Información general sobre el tratamiento de datos</h3>
      <p>Por datos personales se entiende cualquier información relativa a una persona física identificada o identificable. Procesamos datos personales únicamente en la medida necesaria para proporcionar, proteger y optimizar este sitio web (<strong>v4nox.eu</strong>). No utilizamos herramientas de análisis o seguimiento publicitario.</p>
      <h3>3. Acceso y provisión técnica del sitio web</h3>
      <p>Al visitar este sitio, se intercambia información técnica indispensable entre su dispositivo, su navegador y la infraestructura web (dirección IP, fecha y hora, URL solicitada, volumen de datos, código de estado HTTP, navegador y sistema operativo). La base jurídica es el art. 6, apdo. 1, letra f del RGPD (interés legítimo en la provisión segura y fluida del sitio).</p>
      <h3>4. Alojamiento e infraestructura en STRATO</h3>
      <p>Nuestro dominio (<strong>v4nox.eu</strong>) y los servicios de alojamiento y correo son prestados por <strong>STRATO GmbH</strong>, Otto-Ostrowski-Straße 7, 10249 Berlín, Alemania, en centros de datos con certificación ISO 27001 dentro de la UE. Se ha formalizado un contrato de encargo de tratamiento según el art. 28 del RGPD.</p>
      <h3>5. Red de distribución de contenidos (CDN) y seguridad con Cloudflare</h3>
      <p>Para garantizar una distribución rápida a nivel mundial y protección contra ataques (DDoS, WAF), el sitio utiliza <strong>Cloudflare</strong> (Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, EE. UU. y Cloudflare Germany GmbH). Base jurídica: art. 6, apdo. 1, letra f del RGPD, respaldado por el DPA de Cloudflare y la adhesión al marco de privacidad de datos UE-EE. UU.</p>
      <h3>6. Registros de servidor y conservación</h3>
      <p>Los archivos de registro y diagnóstico se conservan un máximo de <strong>7 días</strong> y posteriormente se eliminan o anonimizan.</p>
      <h3>7. Streams de audio e imágenes de Suno</h3>
      <p>Las portadas y los archivos de audio se cargan directamente desde los servidores de distribución de contenidos de <strong>Suno</strong> (<code>cdn1.suno.ai</code>, <code>cdn2.suno.ai</code>). Su dirección IP se transmite técnicamente para la reproducción. Más detalles en la <a href="https://suno.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad de Suno</a>.</p>
      <h3>8. Contacto por correo electrónico</h3>
      <p>Si se comunica por correo a <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a>, procesamos su información para tramitar la consulta (art. 6, apdo. 1, letras b y f del RGPD).</p>
      <h3>9. Enlaces externos</h3>
      <p>Este sitio incluye enlaces a plataformas externas (como suno.com). Al pulsar sobre ellos, abandona v4nox.eu y pasa a regirse por la política del operador externo.</p>
      <h3>10. Derechos de la persona interesada</h3>
      <p>Tiene derecho de acceso (art. 15 RGPD), rectificación (art. 16), supresión (art. 17), limitación (art. 18), portabilidad (art. 20) y oposición (art. 21). Puede ejercerlos escribiendo a <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a>.</p>
      <h3>11. Derecho a presentar una reclamación</h3>
      <p>Tiene derecho a presentar una reclamación ante la autoridad de control competente, en este caso el Comisionado Estatal de Protección de Datos de Renania-Palatinado (<a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer">www.datenschutz.rlp.de</a>).</p>
    `
  },
  it: {
    "#legal-pane-impressum": `
      <h2 id="legal-modal-title">Note legali</h2>
      <h3>Informazioni ai sensi dell'art. 5 della legge tedesca sui servizi digitali (DDG)</h3>
      <p><strong>Dominik Hahn</strong><br>Nome d'arte / progetto: <strong>v4nox (@dome_hahn)</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Germania</p>
      <h3>Contatto</h3>
      <p>E-mail: <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a><br>Spotify: <a href="https://open.spotify.com/intl-de/artist/3Qsyrq3U8VNdCQzaEav3mf" target="_blank" rel="noopener noreferrer">v4nox su Spotify</a><br>Amazon Music: <a href="https://www.amazon.com/music/player/artists/B0HQYFFZ9L/v4nox" target="_blank" rel="noopener noreferrer">v4nox su Amazon Music</a><br>Profilo artista Suno: <a href="https://suno.com/@dome_hahn" target="_blank" rel="noopener noreferrer">https://suno.com/@dome_hahn</a><br>Sito web: <a href="https://v4nox.eu">https://v4nox.eu</a></p>
      <h3>Responsabilità editoriale</h3>
      <p>Responsabile per i contenuti giornalistici ed editoriali ai sensi dell'art. 18 comma 2 del Trattato statale tedesco sui media (MStV):<br><strong>Dominik Hahn</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Germania</p>
      <h3>Informativa su contenuti generati da IA (ChatGPT e Suno AI) ed esenzione GEMA</h3>
      <p>Tutti i brani musicali presentati su questo sito sotto il nome d'arte <strong>v4nox (@dome_hahn)</strong> sono stati creati interamente con intelligenza artificiale: testi, indicazioni strutturali e prompt di stile sono stati generati con <em>ChatGPT (OpenAI)</em>, mentre la composizione e la sintesi audio provengono da <em>Suno AI (suno.com)</em>.</p>
      <p><strong>Avviso GEMA / società di gestione collettiva:</strong> Tutte le tracce e i testi presenti su <strong>v4nox.eu</strong> sono <strong>esenti da GEMA</strong>, non sono registrati presso alcuna società di gestione e non contengono campioni protetti. I diritti sono disciplinati dalle licenze di Suno AI o appartengono al titolare del sito.</p>
      <h3>Risoluzione delle controversie nell'UE</h3>
      <p>Non siamo disponibili né obbligati a partecipare a procedimenti di conciliazione davanti a un organo arbitrale per i consumatori.</p>
    `,
    "#legal-pane-datenschutz": `
      <h2>Informativa sulla privacy</h2>
      <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px;">Ultimo aggiornamento: Novembre 2026</p>
      <h3>1. Titolare del trattamento</h3>
      <p>Il titolare del trattamento ai sensi del Regolamento generale sulla protezione dei dati (GDPR) è:<br><br><strong>Dominik Hahn</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Germania<br>E-mail: <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a></p>
      <h3>2. Informazioni generali sul trattamento dei dati</h3>
      <p>I dati personali sono trattati esclusivamente nella misura necessaria per erogare, proteggere e ottimizzare questo sito web (<strong>v4nox.eu</strong>). Non utilizziamo cookie di tracciamento o strumenti pubblicitari.</p>
      <h3>3. Accesso e fornitura del sito web</h3>
      <p>Durante la navigazione vengono scambiate informazioni tecniche necessarie tra browser, dispositivo e server (indirizzo IP, data/ora, pagina richiesta, volume dati, codice di stato HTTP, user agent). La base giuridica è l'art. 6, par. 1, lett. f del GDPR (legittimo interesse alla fornitura sicura e stabile del servizio).</p>
      <h3>4. Hosting e infrastruttura STRATO</h3>
      <p>Il dominio (<strong>v4nox.eu</strong>) e l'infrastruttura server sono forniti da <strong>STRATO GmbH</strong>, Otto-Ostrowski-Straße 7, 10249 Berlino, Germania, in data center certificati ISO 27001 all'interno dell'UE, in conformità a un contratto di elaborazione dati ex art. 28 GDPR.</p>
      <h3>5. Cloudflare CDN ed edge security</h3>
      <p>Per la distribuzione globale sicura e la protezione anti-DDoS, il sito opera tramite <strong>Cloudflare</strong> (Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA). Base giuridica: art. 6, par. 1, lett. f del GDPR, integrato dal DPA di Cloudflare e dalla certificazione Data Privacy Framework UE-USA.</p>
      <h3>6. Log di sistema e conservazione</h3>
      <p>I file di log e diagnostica tecnica vengono conservati per un massimo di <strong>7 giorni</strong> e poi cancellati o anonimizzati.</p>
      <h3>7. Streaming audio e copertine Suno</h3>
      <p>Le immagini di copertina e i flussi audio vengono caricati direttamente dai server CDN di <strong>Suno</strong> (<code>cdn1.suno.ai</code>, <code>cdn2.suno.ai</code>). Per la consultazione completa si rimanda alla <a href="https://suno.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy di Suno</a>.</p>
      <h3>8. Contatto via e-mail</h3>
      <p>Inviando una e-mail a <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a>, i dati forniti vengono trattati per gestire e riscontrare la richiesta (art. 6, par. 1, lett. b e f del GDPR).</p>
      <h3>9. Diritti dell'interessato</h3>
      <p>L'utente ha diritto di accesso (art. 15 GDPR), rettifica (art. 16), cancellazione (art. 17), limitazione (art. 18), portabilità (art. 20) e opposizione (art. 21). È sufficiente inviare un'e-mail a <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a>.</p>
      <h3>10. Reclamo all'autorità di controllo</h3>
      <p>È possibile presentare reclamo all'autorità per la protezione dei dati competente (Commissario statale della Renania-Palatinato: <a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer">www.datenschutz.rlp.de</a>).</p>
    `
  },
  fr: {
    "#legal-pane-impressum": `
      <h2 id="legal-modal-title">Mentions légales</h2>
      <h3>Informations conformément à l'article 5 de la loi allemande sur les services numériques (DDG)</h3>
      <p><strong>Dominik Hahn</strong><br>Nom d'artiste / projet : <strong>v4nox (@dome_hahn)</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Allemagne</p>
      <h3>Contact</h3>
      <p>E-mail : <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a><br>Spotify : <a href="https://open.spotify.com/intl-de/artist/3Qsyrq3U8VNdCQzaEav3mf" target="_blank" rel="noopener noreferrer">v4nox sur Spotify</a><br>Amazon Music : <a href="https://www.amazon.com/music/player/artists/B0HQYFFZ9L/v4nox" target="_blank" rel="noopener noreferrer">v4nox sur Amazon Music</a><br>Profil artiste Suno : <a href="https://suno.com/@dome_hahn" target="_blank" rel="noopener noreferrer">https://suno.com/@dome_hahn</a><br>Site web : <a href="https://v4nox.eu">https://v4nox.eu</a></p>
      <h3>Responsabilité éditoriale</h3>
      <p>Responsable du contenu éditorial selon l'article 18 alinéa 2 du Traité d'État allemand sur les médias (MStV) :<br><strong>Dominik Hahn</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Allemagne</p>
      <h3>Remarque sur les contenus générés par IA (ChatGPT &amp; Suno AI) et statut GEMA / SACEM</h3>
      <p>Toutes les créations musicales présentées sur ce site sous le nom d'artiste <strong>v4nox (@dome_hahn)</strong> ont été entièrement conçues par intelligence artificielle : les textes, les indications de mise en scène et les prompts de style ont été générés avec <em>ChatGPT (OpenAI)</em> ; la composition musicale et la synthèse audio sont issues de <em>Suno AI (suno.com)</em>.</p>
      <p><strong>Avis sociétés d'auteurs (GEMA, SACEM, etc.) :</strong> Tous les morceaux et textes sur <strong>v4nox.eu</strong> sont <strong>libres de droits de gestion collective</strong> et ne sont inscrits auprès d'aucune société de gestion d'auteurs. Les droits d'exploitation relèvent des conditions de licence de Suno AI ou appartiennent à l'exploitant du site.</p>
      <h3>Règlement des litiges de l'Union européenne</h3>
      <p>Nous ne sommes ni disposés ni tenus de participer à des procédures de règlement des litiges devant un conseil d'arbitrage de la consommation.</p>
    `,
    "#legal-pane-datenschutz": `
      <h2>Politique de confidentialité</h2>
      <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px;">Dernière mise à jour : Novembre 2026</p>
      <h3>1. Responsable du traitement</h3>
      <p>Le responsable du traitement des données au sens du Règlement général sur la protection des données (RGPD) est :<br><br><strong>Dominik Hahn</strong><br>Raiffeisenstraße 4B<br>55491 Büchenbeuren<br>Allemagne<br>E-mail : <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a></p>
      <h3>2. Informations générales sur le traitement des données</h3>
      <p>Les données personnelles sont traitées uniquement dans la mesure indispensable pour fournir, sécuriser et améliorer ce site web (<strong>v4nox.eu</strong>). Ce site n'utilise aucun traceur publicitaire ou d'analyse statistique.</p>
      <h3>3. Consultation et fourniture technique du site</h3>
      <p>Lors de votre visite, des données techniques nécessaires sont échangées entre votre navigateur et notre infrastructure (adresse IP, date et heure, ressource demandée, volume de données, code de statut HTTP, système d'exploitation, navigateur). Base juridique : article 6, paragraphe 1, point f du RGPD (intérêt légitime à une diffusion stable et sécurisée).</p>
      <h3>4. Hébergement chez STRATO</h3>
      <p>Notre domaine (<strong>v4nox.eu</strong>) et les serveurs sont hébergés par <strong>STRATO GmbH</strong>, Otto-Ostrowski-Straße 7, 10249 Berlin, Allemagne, au sein de centres de données certifiés ISO 27001 dans l'Union européenne, avec un contrat de sous-traitance conforme à l'article 28 du RGPD.</p>
      <h3>5. CDN et protection Cloudflare</h3>
      <p>Ce site est distribué via le réseau de <strong>Cloudflare</strong> (Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis) pour garantir des performances optimales et une protection contre les attaques (DDoS, WAF). Base juridique : article 6, paragraphe 1, point f du RGPD, encadré par le DPA de Cloudflare et le Data Privacy Framework UE-USA.</p>
      <h3>6. Journaux de sécurité et durée de conservation</h3>
      <p>Les journaux de connexion et données techniques de diagnostic sont conservés pendant <strong>7 jours au maximum</strong>, puis supprimés ou anonymisés.</p>
      <h3>7. Flux audio et pochettes Suno</h3>
      <p>Les pochettes d'albums et les flux audio sont diffusés directement depuis les serveurs de distribution de <strong>Suno</strong> (<code>cdn1.suno.ai</code>, <code>cdn2.suno.ai</code>). Pour plus de détails, consultez la <a href="https://suno.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité de Suno</a>.</p>
      <h3>8. Prise de contact par e-mail</h3>
      <p>Lorsque vous nous écrivez à <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a>, vos données sont utilisées pour traiter votre demande (article 6, paragraphe 1, points b et f du RGPD).</p>
      <h3>9. Vos droits</h3>
      <p>Vous disposez des droits d'accès (art. 15 RGPD), de rectification (art. 16), d'effacement (art. 17), de limitation (art. 18), de portabilité (art. 20) et d'opposition (art. 21). Pour toute demande, écrivez à <a href="mailto:dhahn@v4nox.eu">dhahn@v4nox.eu</a>.</p>
      <h3>10. Droit de réclamation</h3>
      <p>Vous avez le droit d'introduire une réclamation auprès d'une autorité de contrôle de la protection des données (Commissariat de Rhénanie-Palatinat : <a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer">www.datenschutz.rlp.de</a>).</p>
    `
  }
};

const workflowTranslations = {
  en: [
    { step: "01", badge: "STAGE 01 // CHATGPT LYRICS & DIRECTION TAGS", title: "Lyrics and bar-by-bar dramatic structure from ChatGPT.", subtitle: "Choose one of your songs in the Studio window above (or in the jukebox). The Studio frame instantly displays the real ChatGPT direction—such as [Intro – 16 Bars], [Pre-Chorus Build] or [32-Bar Final Drop]—and the original lyrics for that track.", metrics: [{ label: "Full catalog", value: "All original songs" }, { label: "Catalog languages", value: "German • English • Spanish" }] },
    { step: "02", badge: "STAGE 02 // CHATGPT STYLE & NEGATIVE TAGS", title: "Positive style prompts and precise exclusions.", subtitle: "In the second stage, ChatGPT passes the exact sonic fingerprint to Suno: BPM, drum programming, bassline character, vocal timbre and the real negative tags that keep every song firmly within its intended genre.", metrics: [{ label: "Style definition", value: "Individual for every song" }, { label: "Negative filtering", value: "Active genre boundaries" }] },
    { step: "03", badge: "STAGE 03 // SUNO ENGINE & CONTROL SLIDERS", title: "The real Suno parameters and sliders for every song.", subtitle: "Stage 3 displays the selected song’s exact Suno settings: model generation (up to V6 chirp-hawk), MAX Mode status, Style Weight, Weirdness Constraint, creativity augmentation and vocal rendering.", metrics: [{ label: "Suno engine", value: "Up to V6 (chirp-hawk)" }, { label: "Audio streaming", value: "Every song playable directly" }] }
  ],
  es: [
    { step: "01", badge: "ETAPA 01 // LETRAS Y DIRECCIÓN DE CHATGPT", title: "Letras y estructura dramática compás a compás con ChatGPT.", subtitle: "Elige una de tus canciones en la ventana de Studio (o en la jukebox). El panel muestra de inmediato las indicaciones reales de ChatGPT — como [Intro – 16 Bars], [Pre-Chorus Build] o [32-Bar Final Drop] — y las letras originales de la pista.", metrics: [{ label: "Catálogo completo", value: "Todas las canciones originales" }, { label: "Idiomas del catálogo", value: "Alemán • Inglés • Español" }] },
    { step: "02", badge: "ETAPA 02 // ESTILO Y ETIQUETAS NEGATIVAS DE CHATGPT", title: "Prompts de estilo positivos y exclusiones precisas.", subtitle: "En la segunda etapa, ChatGPT transmite la huella sonora exacta a Suno: BPM, programación de batería, línea de bajo, timbre vocal y las etiquetas negativas que definen con precisión el género.", metrics: [{ label: "Definición de estilo", value: "Individual para cada canción" }, { label: "Filtrado negativo", value: "Límites activos de género" }] },
    { step: "03", badge: "ETAPA 03 // MOTOR Y CONTROLES SUNO", title: "Los parámetros y controles reales de Suno para cada canción.", subtitle: "La etapa 3 muestra los ajustes exactos de Suno de la canción: generación de modelo (hasta V6 chirp-hawk), estado de Modo MAX, Style Weight, Weirdness Constraint, creatividad aumentada y renderizado de voz.", metrics: [{ label: "Motor Suno", value: "Hasta V6 (chirp-hawk)" }, { label: "Streaming de audio", value: "Cada canción reproducible al instante" }] }
  ],
  it: [
    { step: "01", badge: "FASE 01 // TESTI E REGIA CHATGPT", title: "Testi e struttura drammatica battuta per battuta da ChatGPT.", subtitle: "Scegli uno dei tuoi brani nella finestra Studio (o nel jukebox). L'interfaccia visualizza subito le vere indicazioni di regia ChatGPT — come [Intro – 16 Bars], [Pre-Chorus Build] o [32-Bar Final Drop] — e il testo originale del brano.", metrics: [{ label: "Catalogo completo", value: "Tutti i brani originali" }, { label: "Lingue del catalogo", value: "Tedesco • Inglese • Spagnolo" }] },
    { step: "02", badge: "FASE 02 // STILE E TAG NEGATIVI CHATGPT", title: "Prompt di stile positivi ed esclusioni precise.", subtitle: "Nel secondo passaggio, ChatGPT trasmette l'esatta impronta sonora a Suno: BPM, batteria, linea di basso, timbro vocale e i veri tag negativi per mantenere ogni brano fedele al proprio genere.", metrics: [{ label: "Definizione dello stile", value: "Individuale per ogni brano" }, { label: "Filtro negativo", value: "Limiti attivi del genere" }] },
    { step: "03", badge: "FASE 03 // MOTORE SUNO E CURSORI", title: "Parametri e cursori Suno reali per ogni brano.", subtitle: "La fase 3 visualizza le impostazioni Suno esatte del brano: generazione del modello (fino a V6 chirp-hawk), stato MAX Mode, Style Weight, Weirdness Constraint, aumento creatività e rendering vocale.", metrics: [{ label: "Motore Suno", value: "Fino a V6 (chirp-hawk)" }, { label: "Streaming audio", value: "Ogni brano riproducibile direttamente" }] }
  ],
  fr: [
    { step: "01", badge: "ÉTAPE 01 // PAROLES & MISE EN SCÈNE CHATGPT", title: "Paroles et structure dramatique mesure par mesure avec ChatGPT.", subtitle: "Choisissez l'un de vos morceaux dans la fenêtre Studio (ou dans le jukebox). L'écran affiche instantanément les vraies indications de mise en scène ChatGPT — comme [Intro – 16 Bars], [Pre-Chorus Build] ou [32-Bar Final Drop] — et les paroles originales.", metrics: [{ label: "Catalogue complet", value: "Tous les morceaux originaux" }, { label: "Langues du catalogue", value: "Allemand • Anglais • Espagnol" }] },
    { step: "02", badge: "ÉTAPE 02 // STYLE & TAGS NÉGATIFS CHATGPT", title: "Prompts de style positifs et exclusions précises.", subtitle: "Dans un second temps, ChatGPT transmet l'empreinte sonore exacte à Suno : BPM, batterie, ligne de basse, timbre vocal et les tags négatifs qui garantissent le style musical souhaité.", metrics: [{ label: "Définition du style", value: "Personnalisée pour chaque morceau" }, { label: "Filtrage négatif", value: "Limites de genre actives" }] },
    { step: "03", badge: "ÉTAPE 03 // MOTEUR SUNO & CURSEURS", title: "Les paramètres et curseurs Suno réels de chaque morceau.", subtitle: "L'étape 3 visualise les réglages précis de Suno pour le titre actif : génération du modèle (jusqu'à V6 chirp-hawk), statut Mode MAX, Style Weight, Weirdness Constraint, créativité et rendu vocal.", metrics: [{ label: "Moteur Suno", value: "Jusqu'à V6 (chirp-hawk)" }, { label: "Streaming audio", value: "Chaque morceau écoutable directement" }] }
  ]
};

const metaTranslations = {
  titles: {
    de: "v4nox (@dome_hahn) — AI Jukebox | ChatGPT Lyrics & Suno V6 Music",
    en: "v4nox (@dome_hahn) — AI Jukebox | ChatGPT Lyrics & Suno V6 Music",
    es: "v4nox (@dome_hahn) — Jukebox de IA | Letras de ChatGPT y música de Suno V6",
    it: "v4nox (@dome_hahn) — Jukebox AI | Testi di ChatGPT e musica di Suno V6",
    fr: "v4nox (@dome_hahn) — Jukebox IA | Paroles ChatGPT & musique Suno V6"
  },
  descriptions: {
    de: "Offizielle Artist-Seite von v4nox (@dome_hahn). Entdecke den vollständigen Katalog KI-generierter Original-Songs mit ChatGPT Lyrics und Style-Prompts sowie Suno V6 Audio.",
    en: "Official artist site of v4nox (@dome_hahn). Explore original AI-generated songs with ChatGPT lyrics and style prompts and Suno V6 audio.",
    es: "Sitio web oficial de v4nox (@dome_hahn). Descubre canciones originales generadas por IA con letras y prompts de ChatGPT y audio de Suno V6.",
    it: "Sito ufficiale di v4nox (@dome_hahn). Scopri brani originali generati con IA con testi e prompt di ChatGPT e audio di Suno V6.",
    fr: "Site officiel de v4nox (@dome_hahn). Découvrez des morceaux originaux créés par IA avec paroles et styles de ChatGPT et audio de Suno V6."
  },
  ogDescriptions: {
    de: "Höre die echten Suno-Songs von @dome_hahn direkt in der interaktiven Jukebox – inklusive kompletter ChatGPT-Lyrics und Style-Prompts.",
    en: "Listen to original Suno songs by @dome_hahn in the interactive jukebox, including complete ChatGPT lyrics and style prompts.",
    es: "Escucha las canciones originales de Suno de @dome_hahn directamente en la jukebox interactiva, incluidas las letras completas y prompts de ChatGPT.",
    it: "Ascolta i brani originali Suno di @dome_hahn direttamente nel jukebox interattivo, inclusi i testi completi e i prompt di stile di ChatGPT.",
    fr: "Écoutez les morceaux Suno originaux de @dome_hahn directement dans le jukebox interactif, avec toutes les paroles et prompts de ChatGPT."
  }
};

const originalHtml = new WeakMap();
const originalAttributes = new WeakMap();
let currentLocale = "de";

function requestedLocale() {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED_LOCALES.includes(query)) return query;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED_LOCALES.includes(saved)) return saved;
  const nav = (navigator.language || "").toLowerCase();
  for (const loc of SUPPORTED_LOCALES) {
    if (nav.startsWith(loc)) return loc;
  }
  return "de";
}

function rememberHtml(el) {
  if (!originalHtml.has(el)) originalHtml.set(el, el.innerHTML);
}

function applyStaticTranslations(locale) {
  const selectors = Object.keys(htmlTranslations.en);
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      rememberHtml(el);
      if (locale === "de") {
        el.innerHTML = originalHtml.get(el);
      } else {
        const translation = htmlTranslations[locale]?.[selector] ?? htmlTranslations.en[selector];
        el.innerHTML = translation ?? originalHtml.get(el);
      }
    });
  });

  const legalSelectors = Object.keys(legalTranslations.en);
  legalSelectors.forEach((selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    rememberHtml(el);
    if (locale === "de") {
      el.innerHTML = originalHtml.get(el);
    } else {
      const translation = legalTranslations[locale]?.[selector] ?? legalTranslations.en[selector];
      el.innerHTML = translation ?? originalHtml.get(el);
    }
  });

  const attrSelectors = Object.keys(attributeTranslations.en);
  attrSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      const defaultAttrs = attributeTranslations.en[selector];
      if (!originalAttributes.has(el)) {
        originalAttributes.set(el, Object.fromEntries(Object.keys(defaultAttrs).map((name) => [name, el.getAttribute(name)])));
      }
      Object.keys(defaultAttrs).forEach((name) => {
        const original = originalAttributes.get(el)[name];
        if (locale === "de") {
          if (original === null) el.removeAttribute(name); else el.setAttribute(name, original);
        } else {
          const val = attributeTranslations[locale]?.[selector]?.[name] ?? defaultAttrs[name] ?? original;
          if (val === null) el.removeAttribute(name); else el.setAttribute(name, val);
        }
      });
    });
  });

  document.documentElement.lang = locale;
  document.title = metaTranslations.titles[locale] || metaTranslations.titles.de;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = metaTranslations.descriptions[locale] || metaTranslations.descriptions.de;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = "v4nox (@dome_hahn) — AI Music Jukebox";
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = metaTranslations.ogDescriptions[locale] || metaTranslations.ogDescriptions.de;

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

export function getWorkflowSteps(fallback) {
  if (currentLocale === "de") return fallback;
  return workflowTranslations[currentLocale] || workflowTranslations.en || fallback;
}

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
