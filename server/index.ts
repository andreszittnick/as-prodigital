import express, { type Request, Response, NextFunction } from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";

// --- ESM-sichere __dirname/__filename herstellen ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  if (app.get("env") === "development") {
    // DEV: Vite-Dev-Server
    await setupVite(app, server);
  } else {
    // PROD: statische Dateien des gebauten Clients ausliefern
    // Diese Datei läuft als dist/server/index.js => Client liegt relativ dazu in dist/client
    const ROOT = path.resolve(__dirname, ".."); // dist/
    const DEFAULT_CLIENT_DIR = path.join(ROOT, "client"); // dist/client

    // Optional: Override über ENV, aber sicher auflösen
    const CLIENT_DIR = process.env.CLIENT_DIR
      ? path.resolve(process.env.CLIENT_DIR)
      : DEFAULT_CLIENT_DIR;

    // Statisch ausliefern, Index wird manuell als SPA-Fallback gesendet
    app.use(express.static(CLIENT_DIR, { index: false }));

    // SPA-Fallback
    app.get("*", (_req, res, next) => {
      const indexFile = path.join(CLIENT_DIR, "index.html");
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        next();
      }
    });
  }

  // Port (Render setzt PORT)
  const port = Number.parseInt(process.env.PORT || "5000", 10);
  server.listen(
    { port, host: "0.0.0.0", reusePort: true },
    () => { log(`serving on port ${port}`); }
  );
})();
