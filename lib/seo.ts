import type { Metadata } from "next";

// Metadatos por página. openGraph se reemplaza completo, por eso repite nombre, idioma e imagen.
export function pageMeta(path: string, title: string | null, description: string, image?: string): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      siteName: "HH Family Travel",
      locale: "es_MX",
      type: "website",
      url: path,
      title: title ? `${title} · HH Family Travel` : "HH Family Travel · Vacaciones en familia, planeadas con calma",
      description,
      images: [image ? { url: image } : { url: "/brand/og.png", width: 1200, height: 630, alt: "HH Family Travel · Agencia de viajes para familias" }],
    },
  };
}
