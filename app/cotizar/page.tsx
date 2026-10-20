import type { CSSProperties } from "react";
import { Figtree } from "next/font/google";
import Cotizador from "@/components/cotizador/Cotizador";
import { pageMeta } from "@/lib/seo";

// El prototipo del cotizador sí carga Figtree 500.
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata = pageMeta("/cotizar", "Cotiza tu viaje", "Cuéntanos cómo es tu viaje ideal en 2 minutos y recibe una propuesta a la medida de tu familia.");

export default function Page() {
  return (
    <div style={{ "--font-body": `${figtree.style.fontFamily}, system-ui, sans-serif` } as CSSProperties}>
      <Cotizador />
    </div>
  );
}
