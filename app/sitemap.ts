import type { MetadataRoute } from "next";
import { config } from "@/content/config";
import destinos from "@/content/destinos.json";
import paquetes from "@/content/paquetes.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/destinos", "/paquetes", "/viajes", "/nosotros", "/blog", "/contacto", "/ayuda", "/quiz", "/cotizar"];
  return [
    ...pages.map(p => ({ url: config.url + p, changeFrequency: "weekly" as const, priority: p === "" ? 1 : p === "/cotizar" ? 0.9 : 0.7 })),
    ...destinos.map(d => ({ url: `${config.url}/destinos/${d.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...paquetes.map(p => ({ url: `${config.url}/paquetes/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
