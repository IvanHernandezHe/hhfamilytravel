import Link from "next/link";
import { MessageCircle } from "@/components/Icons";
import Photo from "@/components/Photo";
import { btnOrangeLg, btnOutline, h2Section, lead } from "@/components/ui";
import { tiposDestacados } from "@/content/destinos";
import { site } from "@/config/site";

const pasos = [
  { n: "01", t: "Una conversación", d: "Por WhatsApp o teléfono: quiénes viajan, fechas, presupuesto y qué disfrutan." },
  { n: "02", t: "Una propuesta clara", d: "Dos o tres opciones con vuelos, hospedaje y precio total. Sin costos ocultos." },
  { n: "03", t: "Acompañamiento en el viaje", d: "Si hay un retraso o un cambio, nos escribes y lo resolvemos." },
];

export default function InicioPage() {
  return (
    <>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-14 pb-24 pt-16">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-[10px] text-[14px] font-bold uppercase tracking-[0.06em] text-otext">
            <span className="size-2 rounded-full bg-orange" />
            Agencia de viajes para familias
          </div>
          <h1 className="m-0 text-[clamp(42px,5.4vw,68px)] font-bold leading-[1.02] tracking-[-0.03em] text-head text-balance">
            Vacaciones en familia, planeadas con calma.
          </h1>
          <p className={`${lead} max-w-[480px]`}>
            Te escuchamos, armamos el viaje a la medida de tu familia y te acompañamos hasta el regreso.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={btnOrangeLg}>
              <MessageCircle size={20} />
              Escríbenos por WhatsApp
            </a>
            <a href={site.phoneUrl} className={`${btnOutline} px-6 py-[15px] text-[17px]`}>
              Llamar
            </a>
          </div>
          <div className="text-[14px] text-soft">{site.hours} · Respondemos el mismo día</div>
        </div>
        <Photo
          src="https://images.unsplash.com/photo-1551954590-71c4b7e6b2c7"
          alt="Familia en la playa"
          className="h-[clamp(360px,60vw,540px)] rounded-[36px]"
          sizes="(min-width: 1040px) 600px, 100vw"
          priority
        />
      </section>

      <section className="flex flex-col gap-9 pb-[104px]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className={h2Section}>¿Qué tipo de viaje buscan?</h2>
          <Link href="/destinos" className="whitespace-nowrap text-[16px] font-bold text-otext no-underline hover:underline">
            Ver destinos →
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-5">
          {tiposDestacados.map((t) => (
            <Link key={t.tipo} href={`/destinos?tipo=${t.tipo}`} className="group flex flex-col gap-[14px] no-underline">
              <Photo src={t.img} className="aspect-[4/5] rounded-[24px]" sizes="(min-width: 1040px) 300px, (min-width: 520px) 50vw, 100vw" />
              <div className="text-[19px] font-bold text-head group-hover:text-otext">{t.label}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-11 pb-[104px]">
        <h2 className={h2Section}>Así trabajamos</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-12">
          {pasos.map((p) => (
            <div key={p.n} className="flex flex-col gap-[10px]">
              <div className="text-[44px] font-bold leading-none text-orange">{p.n}</div>
              <div className="text-[21px] font-bold text-head">{p.t}</div>
              <p className="m-0 text-[16px] leading-[1.6] text-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
