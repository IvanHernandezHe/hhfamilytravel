import type { Metadata } from "next";
import Link from "next/link";
import PageIntro, { Lead } from "@/components/PageIntro";
import Photo from "@/components/Photo";
import { kicker } from "@/components/ui";
import { paquetes } from "@/content/paquetes";

export const metadata: Metadata = {
  title: "Paquetes",
  description: "Puntos de partida. Cada paquete se ajusta a tus fechas, edades y presupuesto.",
};

export default function PaquetesPage() {
  return (
    <div className="flex flex-col gap-10 pb-[104px] pt-16">
      <PageIntro title="Paquetes">
        <Lead>Puntos de partida. Cada paquete se ajusta a tus fechas, edades y presupuesto.</Lead>
        {paquetes.some((p) => !p.price) && (
          <div className="inline-flex items-center gap-[10px] self-start rounded-[24px] bg-tint px-[18px] py-[10px] text-[15px] font-semibold text-head sm:rounded-full">
            <span className="size-2 flex-none rounded-full bg-orange" />
            Estamos agregando precios y nuevos paquetes. Mientras tanto, cotiza sin compromiso por WhatsApp.
          </div>
        )}
      </PageIntro>

      <div className="flex flex-col gap-5">
        {paquetes.map((p) => (
          <Link
            key={p.slug}
            href={`/paquetes/${p.slug}`}
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-center gap-7 rounded-[32px] border border-line bg-card p-4 no-underline transition-colors hover:border-line2"
          >
            <Photo src={p.img} className="aspect-[16/10] rounded-[22px]" sizes="(min-width: 1040px) 400px, (min-width: 640px) 50vw, 100vw" />
            <div className="flex flex-col gap-2 p-2">
              <div className={kicker}>{p.type}</div>
              <div className="text-[26px] font-bold tracking-[-0.01em] text-head">{p.name}</div>
              <div className="text-[16px] text-muted">{p.nights} · {p.ages}</div>
            </div>
            <div className="flex flex-col items-start gap-3 p-2">
              <div className="text-[14px] text-soft">{p.price ? "Desde" : "Precio"}</div>
              <div className="text-[30px] font-bold leading-none text-head">{p.price ?? "Próximamente"}</div>
              {p.price && <div className="-mt-1 text-[14px] text-soft">por persona</div>}
              <span className="inline-flex whitespace-nowrap rounded-full border-2 border-head px-5 py-[10px] text-[15px] font-bold text-head">
                Ver detalle
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
