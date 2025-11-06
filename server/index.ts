import express, { type Request, Response, NextFunction } from "express";
import path from "node:path";
import fs from "node:fs";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite"; // serveStatic bewusst entfernt

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// einfache API-Access-Logs
app.use((req, res, next) => {
  const start = Date.now();
  const reqPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json.bind(res);
  res.json = function (bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson, ...args);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      let logLine = `${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // DEV: Vite Dev-Server einhängen
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // PROD: statische Dateien aus dem gebauten Client ausliefern
    // Hinweis: Diese Datei läuft nach dem Build unter dist/server/index.js
    // -> der gebaute Client liegt relativ dazu unter dist/client
    const ROOT = path.resolve(import.meta.dirname, "..");
    // Optional ENV overrides, aber immer sichere Defaults verwenden
    const CLIENT_DIR =
      (process.env.CLIENT_DIR && path.resolve(process.env.CLIENT_DIR)) ||
      path.join(ROOT, "client");

    // static ohne auto-index, SPA-Fallback unten
    app.use(express.static(CLIENT_DIR, { index: false }));

    // SPA-Fallback auf index.html (nur wenn vorhanden)
    app.get("*", (_req, res, next) => {
      const indexFile = path.join(CLIENT_DIR, "index.html");
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        next(); // falls es wirklich keine index.html gibt (z. B. API-only)
      }
    });
  }

  // Port-Konfiguration (Render setzt PORT)
  const port = Number.parseInt(process.env.PORT || "5000", 10);
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    }
  );
})();
