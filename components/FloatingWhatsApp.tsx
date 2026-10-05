import { site } from "@/config/site";
import { MessageCircle } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex size-[60px] items-center justify-center rounded-full bg-orange text-white shadow-float transition-colors hover:bg-orange-hover"
    >
      <MessageCircle size={28} />
    </a>
  );
}
