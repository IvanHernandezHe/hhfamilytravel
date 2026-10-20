import destinos from "@/content/destinos.json";
import paquetes from "@/content/paquetes.json";

// Páginas del prototipo ↔ rutas del sitio.
export type Page =
  | "inicio" | "destinos" | "guia" | "paquetes" | "detalle" | "nosotros"
  | "viajes" | "blog" | "contacto" | "ayuda" | "quiz" | "mi-viaje";

const simple: Record<string, Page> = {
  "/": "inicio", "/destinos": "destinos", "/paquetes": "paquetes", "/nosotros": "nosotros",
  "/viajes": "viajes", "/blog": "blog", "/contacto": "contacto", "/ayuda": "ayuda",
  "/quiz": "quiz", "/mi-viaje": "mi-viaje",
};

export function parsePath(pathname: string): { page: Page; guia: number; pkg: number } {
  const p = pathname.replace(/\/+$/, "") || "/";
  const d = p.match(/^\/destinos\/([^/]+)$/);
  if (d) return { page: "guia", guia: Math.max(0, destinos.findIndex(x => x.slug === d[1])), pkg: 0 };
  const k = p.match(/^\/paquetes\/([^/]+)$/);
  if (k) return { page: "detalle", guia: 0, pkg: Math.max(0, paquetes.findIndex(x => x.slug === k[1])) };
  return { page: simple[p] ?? "inicio", guia: 0, pkg: 0 };
}

export function pathFor(page: Page, extra: { guia?: number; pkg?: number } = {}): string {
  if (page === "inicio") return "/";
  if (page === "guia") return "/destinos/" + destinos[extra.guia ?? 0].slug;
  if (page === "detalle") return "/paquetes/" + paquetes[extra.pkg ?? 0].slug;
  return "/" + page;
}
