import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Se publica en Vercel: rutas API (/api/cotizacion, /api/viaje, /api/pago) con servidor.
  poweredByHeader: false,
};

export default nextConfig;
