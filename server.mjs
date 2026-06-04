import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = process.cwd();
const publicRoot = join(root, "public");
const port = Number(process.env.PORT || 4173);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm"
};

function resolvePath(url) {
  const cleanUrl = decodeURIComponent(url.split("?")[0]);
  const requested = cleanUrl === "/" ? "/index.html" : cleanUrl;
  const filePath = firstExistingFile([
    normalize(join(root, requested)),
    normalize(join(publicRoot, requested))
  ]);
  if (!filePath || !filePath.startsWith(root)) {
    return join(root, "index.html");
  }
  return filePath;
}

function firstExistingFile(paths) {
  return paths.find((filePath) => existsSync(filePath) && statSync(filePath).isFile());
}

createServer((req, res) => {
  const filePath = resolvePath(req.url || "/");
  res.setHeader("Content-Type", mime[extname(filePath)] || "application/octet-stream");
  res.setHeader("Cache-Control", "no-store");
  createReadStream(filePath).pipe(res);
}).listen(port, () => {
  console.log(`CrystalBall Studio running at http://localhost:${port}`);
});
