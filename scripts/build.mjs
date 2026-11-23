import { cpSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");

if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true });
}
mkdirSync(dist, { recursive: true });
mkdirSync(resolve(dist, "src"), { recursive: true });

// Copy index.html
cpSync(resolve(root, "index.html"), resolve(dist, "index.html"));

// Copy frontend assets from src/ (excluding worker.ts)
for (const file of ["style.css", "main.js", "tracks.js", "audioEngine.js", "i18n.js"]) {
  cpSync(resolve(root, "src", file), resolve(dist, "src", file));
}

// Copy public/ contents into dist/
if (existsSync(resolve(root, "public"))) {
  cpSync(resolve(root, "public"), dist, { recursive: true });
}

console.log("✔ Built static assets into ./dist ready for Cloudflare deployment.");
