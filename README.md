# v4nox — AI Music & Neural Sound Architecture (`v4nox.eu`)

Offizielle Artist-Website für **v4nox** (**Dominik Hahn** / [`@dome_hahn` auf Suno](https://suno.com/@dome_hahn)).
Entwickelt im modernen **Apple Mac Scrollytelling-Design** mit interaktiven UI-Frames, Echtzeit-Web-Audio-Synthesizer/Visualizer, rechtssicherem **Impressum (§ 5 DDG)** & **Datenschutzerklärung (DSGVO)** sowie direkter **Cloudflare Workers / Static Assets** Integration für `v4nox.eu`.

---

## Features im Überblick

- **Apple Keynote Scrollytelling & UI-Frames**:
  - **Hero Stage**: 3D Sound-Orb mit rotierenden Ringen und schwebenden Parallax-HUD-Karten beim Scrollen.
  - **Sticky Studio UI Frame (`#studio`)**: Ein feststehendes macOS-inspiriertes Studio-Fenster, das während des Scrollens automatisch durch 3 Produktionsphasen (*01 Prompt Matrix*, *02 Suno v4 Synthese*, *03 Spatial Master*) wechselt.
  - **Interaktive Web Audio Engine**: Klicke bei jedem Release oder im unteren Dock-Player auf Play, um eine in Echtzeit generierte Synthesizer-Vorschau samt 60-FPS-Frequenzspektrum zu hören – oder wechsle mit einem Klick direkt zum kompletten Song auf [`https://suno.com/@dome_hahn`](https://suno.com/@dome_hahn).
  - **Apple Bento Grid (`#architecture`)**: Präsentiert das verifizierte `@dome_hahn` Suno-Profil, den kreativen Prompt-Prozess und das Cloudflare Edge-Setup.
  - **Impressum & Datenschutz**: Direkt über Header, Footer oder die URL-Hashes `#impressum` und `#datenschutz` als barrierefreies Modal aufrufbar (keine externen Tracker, keine Google-Fonts-Nachladung, 100 % DSGVO-freundlich).

---

## Lokale Entwicklung

1. **Abhängigkeiten installieren**:
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten (Vite mit Hot-Reload)**:
   ```bash
   npm run dev
   ```

3. **Produktions-Build erstellen (`./dist`)**:
   ```bash
   npm run build
   ```

---

## Eigene Songs & Impressums-Adresse anpassen

- **Songs & Metadaten**: Öffne [`src/tracks.js`](./src/tracks.js). Dort kannst du jederzeit neue Suno-Tracks, BPM, Beschreibungen, Prompt-Tags oder direkte Suno-Song-Links ergänzen.
- **Impressum & Adresse**: Öffne [`index.html`](./index.html) (Suchbegriff `Musterstraße 1`) sowie [`src/tracks.js`](./src/tracks.js) und trage vor dem Livegang auf `v4nox.eu` deine echte Postadresse ein.

---

## Deployment auf Cloudflare (`v4nox.eu`)

Das Projekt ist bereits mit [`wrangler.jsonc`](./wrangler.jsonc) und [`src/worker.ts`](./src/worker.ts) für **Cloudflare Workers Static Assets** vorkonfiguriert.

1. **Bei Cloudflare anmelden** (falls noch nicht geschehen):
   ```bash
   npx wrangler login
   ```

2. **Bauen & auf Cloudflare deployen**:
   ```bash
   npm run deploy
   ```

3. **Custom Domain `v4nox.eu` verknüpfen**:
   - Entweder direkt im Cloudflare Dashboard unter **Workers & Pages → v4nox → Settings → Domains & Routes → Add → Custom Domain (`v4nox.eu` und `www.v4nox.eu`)**,
   - oder direkt in [`wrangler.jsonc`](./wrangler.jsonc) durch Hinzufügen von:
     ```jsonc
     "routes": [
       { "pattern": "v4nox.eu", "custom_domain": true },
       { "pattern": "www.v4nox.eu", "custom_domain": true }
     ]
     ```
