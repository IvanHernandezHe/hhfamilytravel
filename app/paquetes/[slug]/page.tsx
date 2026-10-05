import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "@/components/Icons";
import Photo from "@/components/Photo";
import { btnOrange } from "@/components/ui";
import { getPaquete, paquetes } from "@/content/paquetes";
import { site, whatsappLink } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return paquetes.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pkg = getPaquete((await params).slug);
  return pkg ? { title: pkg.name, description: `${pkg.nights} · ${pkg.ages}. ${pkg.incluye.join(", ")}.` } : {};
}

const h2 = "m-0 text-[28px] font-bold text-head";

export default async function PaquetePage({ params }: Props) {
  const pkg = getPaquete((await params).slug);
  if (!pkg) notFound();

  return (
    <div className="flex flex-col gap-8 pb-[104px] pt-10">
      <Link href="/paquetes" className="self-start whitespace-nowrap text-[15px] font-semibold text-soft no-underline hover:text-orange">
        ← Todos los paquetes
      </Link>

      <div className="flex flex-col gap-3">
        <div className="text-[14px] font-bold uppercase tracking-[0.06em] text-otext">{pkg.type}</div>
        <h1 className="m-0 text-[clamp(36px,4.6vw,56px)] font-bold leading-[1.06] tracking-[-0.03em] text-head text-balance">{pkg.name}</h1>
        <div className="text-[17px] text-muted">{pkg.nights} · {pkg.ages}</div>
      </div>

      <div className="grid grid-cols-2 grid-rows-[220px_140px] gap-3 sm:grid-cols-[2fr_1fr] sm:grid-rows-[200px_200px] sm:gap-4">
        <Photo src={pkg.img} alt={pkg.name} className="col-span-2 rounded-[32px] sm:col-span-1 sm:row-span-2" sizes="(min-width: 640px) 66vw, 100vw" priority />
        <Photo src={pkg.gallery[0]} className="rounded-[28px]" sizes="(min-width: 640px) 33vw, 50vw" />
        <Photo src={pkg.gallery[1]} className="rounded-[28px]" sizes="(min-width: 640px) 33vw, 50vw" />
      </div>

      <div className="flex flex-wrap items-start gap-14">
        <div className="flex min-w-0 flex-[1.6_1_420px] flex-col gap-12">
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué incluye</h2>
            <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,240px),1fr))] gap-x-8 gap-y-[14px] p-0">
              {pkg.incluye.map((i) => (
                <li key={i} className="relative pl-5 text-[16px] leading-[1.5] text-text">
                  <span className="absolute left-0 top-2 size-2 rounded-full bg-orange" />
                  {i}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className={h2}>Itinerario sugerido</h2>
            <div className="flex flex-col">
              {pkg.dias.map((d) => (
                <div key={d.dia} className="grid grid-cols-[96px_1fr] gap-5 border-t border-line py-[18px]">
                  <div className="text-[15px] font-bold text-otext">{d.dia}</div>
                  <div className="text-[16px] leading-[1.55] text-text">{d.txt}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="sticky top-[110px] flex flex-[1_1_300px] flex-col gap-[18px] rounded-[32px] bg-band p-8 text-white">
          <div className="text-[15px] text-band-muted">{pkg.price ? "Desde" : "Precio"}</div>
          <div className="text-[40px] font-bold leading-none">{pkg.price ?? "Próximamente"}</div>
          <p className="m-0 text-[15px] leading-[1.55] text-band-muted">
            {pkg.price
              ? "Por persona. El precio final depende de tus fechas y de las edades de quienes viajan."
              : "Estamos preparando los precios de este paquete. Escríbenos y te cotizamos según tus fechas y edades."}
          </p>
          <a
            href={whatsappLink(`Hola, me interesa el paquete "${pkg.name}".`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnOrange} flex px-6 py-4 text-[17px]`}
          >
            <MessageCircle size={20} />
            Consultar por WhatsApp
          </a>
          <a
            href={site.phoneUrl}
            className="flex justify-center whitespace-nowrap rounded-full border-2 border-white px-6 py-[14px] text-[16px] font-bold text-white no-underline transition-colors hover:bg-band-hover"
          >
            Llamar al {site.phoneDisplay}
          </a>
        </aside>
      </div>
    </div>
  );
}
