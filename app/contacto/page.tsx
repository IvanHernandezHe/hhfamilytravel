import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle, Phone } from "@/components/Icons";
import PageIntro, { Lead } from "@/components/PageIntro";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Escríbenos por WhatsApp o llámanos al ${site.phoneDisplay}. ${site.hours}.`,
};

const card = "flex flex-col gap-7 rounded-[32px] p-8 no-underline transition-colors";

export default function ContactoPage() {
  return (
    <div className="flex flex-col gap-12 pb-[104px] pt-16">
      <PageIntro title="Hablemos de tu viaje">
        <Lead>La forma más rápida es WhatsApp. Respondemos el mismo día, de lunes a sábado de 9:00 a 19:00.</Lead>
      </PageIntro>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${card} bg-orange text-white hover:bg-orange-hover`}>
          <MessageCircle size={32} />
          <div>
            <div className="text-[24px] font-bold">WhatsApp</div>
            <div className="mt-1 text-[16px]">{site.phoneDisplay}</div>
          </div>
        </a>
        <a href={site.phoneUrl} className={`${card} bg-band text-white hover:bg-band-hover`}>
          <Phone size={32} />
          <div>
            <div className="text-[24px] font-bold">Llámanos</div>
            <div className="mt-1 text-[16px] text-band-muted">{site.phoneDisplay}</div>
          </div>
        </a>
        <a href={site.emailUrl} className={`${card} bg-tint text-head hover:bg-tint2`}>
          <Mail size={32} />
          <div>
            <div className="text-[24px] font-bold">Correo</div>
            <div className="mt-1 break-all text-[16px] text-muted">{site.email}</div>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-12 rounded-[36px] border border-line bg-card p-[clamp(28px,4vw,48px)]">
        <div className="flex flex-col gap-3">
          <h2 className="m-0 text-[32px] font-bold tracking-[-0.02em] text-head text-balance">¿Prefieres que te contactemos?</h2>
          <p className="m-0 text-[17px] leading-[1.6] text-muted">Déjanos tus datos y te escribimos por WhatsApp.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
