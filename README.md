<div align="center">
  <img src="./public/favicon.svg" alt="V4noX Logo" width="96" height="96" />
  <h1>V4noX — AI Sound Architecture (`v4nox.eu`)</h1>
  <p>
    <strong>Offizielle Artist-Plattform & interaktive AI-Jukebox von Dominik Hahn (<a href="https://suno.com/@dome_hahn">@dome_hahn</a>)</strong><br />
    100 % KI-generierte Musikproduktion: Lyrics, Dramaturgie & Style-Prompts via <strong>ChatGPT</strong> × Audio-Synthese via <strong>Suno AI (V6 / chirp-hawk)</strong>.
  </p>

  <p>
    <a href="https://v4nox.eu"><img src="https://img.shields.io/badge/Website-v4nox.eu-2997ff?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Website v4nox.eu" /></a>
    <a href="https://suno.com/@dome_hahn"><img src="https://img.shields.io/badge/Suno_Profile-@dome__hahn-bf5af2?style=for-the-badge&logo=musicbrainz&logoColor=white" alt="Suno @dome_hahn" /></a>
    <img src="https://img.shields.io/badge/Tracks-210_Original_Songs-30d158?style=for-the-badge" alt="210 Original Songs" />
    <img src="https://img.shields.io/badge/Engine-ChatGPT_%C3%97_Suno_V6-64d2ff?style=for-the-badge" alt="ChatGPT x Suno V6" />
  </p>
</div>

---

## Überblick

**V4noX** (`v4nox.eu`) ist eine im **Apple Mac Pro / Keynote Scrollytelling-Design** gestaltete Web-Applikation und Musik-Jukebox für das KI-Musikprojekt von **Dominik Hahn (`@dome_hahn`)**.

Die Seite vereint alle **210 veröffentlichten Original-Songs** von [`suno.com/@dome_hahn`](https://suno.com/@dome_hahn) in einer interaktiven Jukebox mit Echtzeit-Audio-Streaming, einem **ChatGPT × Suno Studio-Inspektor** (der für jeden einzelnen Song die echten Lyrics, Struktur-Cues, positiven/negativen Style-Prompts und Suno-Slider-Einstellungen offenlegt) sowie rechtssicherem **Impressum (§ 5 DDG / § 18 MStV)** und **Datenschutzerklärung (DSGVO)** für den Betrieb über **STRATO** & **Cloudflare**.

---

## Kern-Features

- **Apple Keynote Scrollytelling & Parallax-HUDs**:
  - **Hero-Stage**: Rotierender 3D Sound-Core (`hero-orb.png`) mit gegenläufigen Parallax-Telemetrie-Karten beim Scrollen.
  - **Sticky macOS Studio-UI-Frame (`#studio`)**: Bleibt beim Scrollen fixiert und wechselt synchron durch die 3 Produktionsstufen:
    1. `01. Lyrics & Cues` (Original ChatGPT-Songtext & Regie-Tags wie `[Intro – 16 Bars]`, `[Pre-Chorus]`, `[One-Beat Silence]`, `[32-Bar Final Drop]`)
    2. `02. Style & Negative` (Exakter positiver ChatGPT-Style-Prompt & ausgeschlossene Genres/Negative-Tags)
    3. `03. Suno Settings` (Echte Suno-Parameter pro Track: Modell `V6 chirp-hawk`, `MAX Mode`, `Style Weight`, `Weirdness Constraint`, `Aug Creativity`, `Vox Render Mode: strict`)
- **Interaktive AI-Jukebox (`#jukebox`) mit allen 210 Original-Songs**:
  - **Echtes Suno-CDN-Streaming**: Spielt alle 210 Tracks direkt über die offiziellen, unverschlüsselten Suno-Streams (`cdn1.suno.ai/<id>.mp4`) ab – inklusive Web Audio API Echtzeit-Frequenzspektrum (60 FPS Canvas) und persistentem Apple-Music-Dock-Player.
  - **Volltextsuche & Sprachfilter**: Sofortiges Filtern über alle 210 Lieder nach Titel, Textzeile, BPM oder Sprache:
    - **Alle (`210`)**
    - **Deutsch 🇩🇪 (`84`)** – Party-Rap, Festival-EDM, Partyschlager, Club-Tracks
    - **Spanisch 🇪🇸 (`75`)** – Electro-Reggaeton, Latin Club, Afro-Latin
    - **Englisch 🇬🇧 (`51`)** – Tropical Afro Club House, Melodic Bass House, Summer Dance-Pop
  - **Direktverlinkung zu Suno**: Jedes der 210 Lieder ist sowohl in der Playlist als auch im Direktlink-Verzeichnis direkt mit `https://suno.com/song/<id>` verknüpft.
- **100 % DSGVO- & DDG-konform (STRATO + Cloudflare)**:
  - Kein externes Font-Tracking, keine Werbe-/Analyse-Cookies.
  - Vollständiges **Impressum** (inkl. Hinweis auf KI-Generierung & GEMA-Freiheit) und **Datenschutzerklärung** (abgestimmt auf STRATO GmbH AVV v3.6 & Cloudflare Customer DPA).

---

## Projektstruktur

```text
v4nox/
├── index.html              # Hauptanwendung (Hero, 210-Song Jukebox, Sticky Studio UI, Bento Grid, Rechtliches)
├── public/
│   ├── favicon.svg         # V4noX Vektor-Logo & Favicon
│   └── assets/             # 3D-Visuals & Artwork-Assets
├── src/
│   ├── main.js             # UI-Steuerung, Jukebox-Filter, Studio-Inspektor, Scrollytelling & 60-FPS-Visualizer
│   ├── audioEngine.js      # HTML5/Web-Audio Streaming-Engine mit Echtzeit-Frequenzanalyse
│   ├── tracks.js           # Kompletter Katalog aller 210 Original-Songs inkl. Lyrics, Styles & Suno-Settings
│   ├── style.css           # Apple Dark-Mode Glassmorphism Design-System & Responsive Layout
│   └── worker.ts           # Cloudflare Worker Entrypoint mit Security-Headern & /api/artist Endpunkt
├── scripts/
│   ├── dev-server.mjs      # Zero-Dependency lokaler Entwicklungsserver (Port 5173)
│   └── build.mjs           # Statischer Build-Generator nach ./dist
├── wrangler.jsonc          # Cloudflare Workers / Static Assets Konfiguration
└── package.json            # NPM-Skripte für Dev, Build & Cloudflare Deployment
```

---

## Lokale Entwicklung & Build

Das Projekt benötigt für die lokale Ausführung und den statischen Build **keine externen Runtime-Dependencies** (reines, schnelles Vanilla ES-Modul-Setup mit Node.js):

```bash
# Lokalen Entwicklungsserver starten (http://localhost:5173)
npm run dev

# Statischen Produktions-Build im Ordner ./dist erzeugen
npm run build
```

---

## Deployment (STRATO & Cloudflare auf `v4nox.eu`)

### Variante A: Hosting auf STRATO Webspace + Cloudflare CDN (Proxy)
1. Führe `npm run build` aus.
2. Lade den Inhalt des generierten Ordners `./dist` per SFTP auf deinen STRATO-Webspace für `v4nox.eu` hoch.
3. Aktiviere in Cloudflare für `v4nox.eu` den DNS-Proxy (orangene Wolke) sowie SSL/TLS (`Full (Strict)`).

### Variante B: Direktes Edge-Deployment über Cloudflare Workers Static Assets
```bash
npx wrangler login
npm run deploy
```

---

## Urheberrecht & Lizenz

- **Website-Code**: © 2026 Dominik Hahn (`V4noX` / `@dome_hahn`). Alle Rechte vorbehalten.
- **Musik & Texte**: Alle 210 verlinkten und gestreamten Musiktitel wurden mithilfe von ChatGPT (Lyrics & Style) und Suno AI (`https://suno.com/@dome_hahn`) generiert und sind GEMA-frei.
