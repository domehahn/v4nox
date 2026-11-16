import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const PORT = Number(process.env.PORT) || 5173;
const root = process.cwd();

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = createServer(async (req, res) => {
  const urlPath = (req.url || "/").split("?")[0];

  if (urlPath === "/api/artist") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(
      JSON.stringify({
        artist: "v4nox",
        creator: "Dominik Hahn (@dome_hahn)",
        sunoProfile: "https://suno.com/@dome_hahn",
        domain: "v4nox.eu",
        status: "online",
      })
    );
    return;
  }

  let candidatePaths = [];
  if (urlPath === "/") {
    candidatePaths.push(resolve(root, "index.html"));
  } else {
    candidatePaths.push(join(root, urlPath));
    candidatePaths.push(join(root, "public", urlPath));
  }

  for (const filePath of candidatePaths) {
    if (existsSync(filePath)) {
      try {
        const data = await readFile(filePath);
        const ext = extname(filePath).toLowerCase();
        res.writeHead(200, {
          "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
          "Cache-Control": "no-cache",
        });
        res.end(data);
        return;
      } catch {
        // continue
      }
    }
  }

  // SPA fallback to index.html
  const fallback = resolve(root, "index.html");
  const html = await readFile(fallback);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`v4nox Dev Server running at http://localhost:${PORT}`);
});
