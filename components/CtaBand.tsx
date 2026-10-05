import { site } from "@/config/site";
import { btnOrangeLg } from "./ui";

export default function CtaBand() {
  return (
    <section className="mb-10 flex flex-wrap items-center justify-between gap-7 rounded-[32px] bg-band px-[clamp(28px,5vw,64px)] py-[clamp(32px,5vw,56px)] text-white">
      <div className="flex flex-col gap-2">
        <h2 className="m-0 text-[clamp(28px,3.4vw,38px)] font-bold tracking-[-0.02em] text-white text-balance">
          Cuéntanos de tu próximo viaje
        </h2>
        <div className="text-[17px] text-band-muted">
          <a href={site.phoneUrl} className="text-inherit no-underline hover:text-white">{site.phoneDisplay}</a>
          {" · "}
          <a href={site.emailUrl} className="text-inherit no-underline hover:text-white">{site.email}</a>
        </div>
      </div>
      <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={btnOrangeLg}>
        Abrir WhatsApp
      </a>
    </section>
  );
}
