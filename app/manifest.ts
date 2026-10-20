import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HH Family Travel",
    short_name: "HH Travel",
    description: "Agencia de viajes para familias.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFBFC",
    theme_color: "#04264D",
    lang: "es-MX",
    icons: [
      { src: "/brand/favicon-180.png", sizes: "180x180", type: "image/png" },
      { src: "/brand/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
