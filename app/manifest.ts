import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    lang: "es",
    start_url: "/",
    display: "standalone",
    background_color: "#04264D",
    theme_color: "#04264D",
    icons: [
      { src: "/brand/favicon-180.png", sizes: "180x180", type: "image/png" },
      { src: "/brand/favicon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
