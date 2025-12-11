import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// __dirname für ESM herstellen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Optional: cartographer nur dynamisch in Dev + Replit
async function loadCartographer() {
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    const mod = await import("@replit/vite-plugin-cartographer");
    return mod.cartographer();
  }
  return null;
}

export default defineConfig(async () => {
  const cartographer = await loadCartographer();

  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...(cartographer ? [cartographer] : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    root: path.resolve(__dirname, "client"),

    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },

    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
