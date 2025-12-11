import express, { type Request, type Response, type NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Logging nur für /api
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJson: any = undefined;

  const originalJson = res.json;
  res.json = function (body, ...args) {
    capturedJson = body;
    return originalJson.apply(res, [body, ...args]);
  };

  res.on("finish", () => {
    if (path.startsWith("/api")) {
      let text = `${req.method} ${path} ${res.statusCode} in ${Date.now() - start}ms`;
      if (capturedJson) text += ` :: ${JSON.stringify(capturedJson)}`;
      if (text.length > 80) text = text.substring(0, 79) + "…";
      log(text);
    }
  });

  next();
});

(async () => {
  // API-Routen aktivieren
  const server = await registerRoutes(app);

  // Error Handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || 500;
    const msg = err.message || "Internal Server Error";
    res.status(status).json({ message: msg });
  });

  // Development → Vite Middleware
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // Production → statische Dateien aus /public
    serveStatic(app);
  }

  // Render Port (Pflicht)
  const port = parseInt(process.env.PORT || "5000", 10);

  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => log(`Server running on port ${port}`)
  );
})();
