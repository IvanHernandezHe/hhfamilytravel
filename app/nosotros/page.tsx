import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { h1Page, h2Section, lead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "HH Family Travel nació de nuestros propios viajes con niños.",
};

const valores = [
  { t: "Trato personal", d: "Una sola persona lleva tu viaje de principio a fin y conoce a tu familia." },
  { t: "Precios claros", d: "Te damos el total desde el inicio, con todo lo que incluye y lo que no." },
  { t: "Siempre disponibles", d: "Durante el viaje respondemos por WhatsApp ante cualquier imprevisto." },
];

export default function NosotrosPage() {
  return (
    <div className="flex flex-col gap-[88px] pb-[104px] pt-16">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-14">
        <div className="flex flex-col gap-5">
          <h1 className={h1Page}>Somos familia planeando viajes para familias.</h1>
          <p className={lead}>
            HH Family Travel nació de nuestros propios viajes con niños: los vuelos con escalas imposibles, los hoteles
            sin cunas, las filas eternas. Hoy usamos esa experiencia para que tu familia solo se ocupe de disfrutar.
          </p>
        </div>
        <Photo
          src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1"
          alt="Familia al atardecer"
          className="aspect-[4/3] rounded-[36px]"
          sizes="(min-width: 1040px) 600px, 100vw"
          priority
        />
      </div>

      <section className="flex flex-col gap-10">
        <h2 className={h2Section}>Lo que nos importa</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
          {valores.map((v) => (
            <div key={v.t} className="flex flex-col gap-[10px] rounded-[28px] bg-tint p-8">
              <div className="size-3 rounded-full bg-orange" />
              <div className="text-[21px] font-bold text-head">{v.t}</div>
              <p className="m-0 text-[16px] leading-[1.6] text-muted">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
