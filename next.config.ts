import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio estático para GitHub Pages: `npm run build` genera la carpeta out/.
  output: "export",
  // Cada ruta como carpeta/index.html (/destinos/ → destinos/index.html).
  trailingSlash: true,
  images: {
    // GitHub Pages no tiene servidor para optimizar imágenes.
    unoptimized: true,
  },
};

export default nextConfig;
