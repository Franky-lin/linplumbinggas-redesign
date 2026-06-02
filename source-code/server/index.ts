import compression from "compression";
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // P3: Enable Gzip/Brotli compression for all responses
  // This reduces CSS/JS transfer size by ~70%, saving ~90KB on the main CSS bundle
  app.use(compression({
    level: 6,       // Balance between compression ratio and CPU usage
    threshold: 1024 // Only compress responses > 1KB
  }));

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // P6: Serve static assets with long-term cache headers
  // Vite adds content hashes to JS/CSS filenames, so max-age=1year is safe
  app.use("/assets", express.static(path.join(staticPath, "assets"), {
    maxAge: "1y",
    immutable: true,
    etag: false,
  }));

  // P6: Serve manus-storage images with long-term cache (they have content-hash names)
  app.use("/manus-storage", express.static(path.join(staticPath, "manus-storage"), {
    maxAge: "1y",
    immutable: true,
    etag: false,
  }));

  // Serve other static files (favicon, robots.txt, sitemap.xml) with short cache
  app.use(express.static(staticPath, {
    maxAge: "1d",
    etag: true,
    // index.html must NOT be cached long-term (SPA entry point)
    setHeaders: (res, filePath) => {
      if (filePath.endsWith("index.html")) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
      }
    },
  }));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
