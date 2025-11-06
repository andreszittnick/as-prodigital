import express, { type Request, Response, NextFunction } from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { registerRoutes } from "./routes";

// ---- kein Top-Level-Import von "./vite" mehr ----
const log = (...args: any[]) => console.log("[server]", ...args);

// ESM-sicheres __dirname / __filename
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
  // Läuft als dist/server/index.js -> typische Orte mit index.html prüfen
  const candidates = [
    path.join(__dirname, "..", "client"),              // dist/client
    path.join(__dirname, "..", "public"),              // dist/public
    path.join(process.cwd(), "dist", "client"),
    path.join(process.cwd(), "client"),
    path.join(process.cwd(), "public"),
  ];
  for (const dir of candidates) {
    try {
      if (fs.existsSync(path.join(dir, "index.html"))) return dir;
    } catch {}
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
    // Nur im DEV dynamisch laden, damit Production niemals "./vite" importiert
    try {
      const mod = await import("./vite");
      if (typeof mod.setupVite === "function") {
        await mod.setupVite(app, server);
        if (typeof mod.log === "function") (mod.log as any)("Vite dev server attached");
        else log("Vite dev server attached");
      } else {
        log("setupVite not found – skipping dev server");
      }
    } catch (e) {
      log("Vite import failed in dev – skipping:", e);
    }
  } else {
    // PRODUCTION: statisch ausliefern – ohne ENV, ohne path.resolve(undefined)
    const clientDir = findClientDir();
    if (clientDir) {
      log(`Serving static client from: ${clientDir}`);
      app.use(express.static(clientDir, { index: false }));
      app.get("*", (_req, res, next) => {
        const indexFile = path.join(clientDir, "index.html");
        if (fs.existsSync(indexFile)) res.sendFile(indexFile);
        else next();
      });
    } else {
      log("⚠️ Kein index.html gefunden – API-only Modus.");
    }
  }

  const port = Number.parseInt(process.env.PORT || "5000", 10);
  server.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
    log(`serving on port ${port}`);
  });
})();
