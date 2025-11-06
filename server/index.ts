import express, { type Request, Response, NextFunction } from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";

// ESM-sichere Pfade
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// kleines API-Log
app.use((req, res, next) => {
  const start = Date.now();
  const p = req.path;
  let captured: unknown;

  const originalJson = res.json.bind(res);
  res.json = function (body: unknown, ...args: any[]) {
    captured = body;
    return originalJson(body, ...args);
  };

  res.on("finish", () => {
    if (!p.startsWith("/api")) return;
    const ms = Date.now() - start;
    let line = `${req.method} ${p} ${res.statusCode} in ${ms}ms`;
    if (captured) line += ` :: ${JSON.stringify(captured)}`;
    if (line.length > 80) line = line.slice(0, 79) + "…";
    log(line);
  });

  next();
});

function findClientDir(): string | null {
  // Diese Datei läuft als dist/server/index.js
  // Häufige Kandidaten, in sinnvoller Reihenfolge:
  const candidates = [
    path.join(__dirname, "..", "client"),      // dist/client (standard bei Vite SSR build)
    path.join(__dirname, "..", "public"),      // dist/public
    path.join(process.cwd(), "dist", "client"),
    path.join(process.cwd(), "client"),
    path.join(process.cwd(), "public"),
  ];

  for (const dir of candidates) {
    try {
      const indexHtml = path.join(dir, "index.html");
      if (fs.existsSync(indexHtml)) return dir;
    } catch {
      /* ignore */
    }
  }
  return null;
}

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // PRODUCTION: statisch ausliefern – ohne ENV, ohne resolve(undefined)
    const clientDir = findClientDir();

    if (clientDir) {
      log(`Static client dir: ${clientDir}`);
      app.use(express.static(clientDir, { index: false }));

      // SPA-Fallback
      app.get("*", (_req, res, next) => {
        const indexFile = path.join(clientDir, "index.html");
        if (fs.existsSync(indexFile)) res.sendFile(indexFile);
        else next();
      });
    } else {
      log("⚠️ Kein index.html gefunden (kein Client-Build). API läuft trotzdem.");
    }
  }

  const port = Number.parseInt(process.env.PORT || "5000", 10);
  server.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
    log(`serving on port ${port}`);
  });
})();
