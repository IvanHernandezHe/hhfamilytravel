// Eventos de GA4 y Meta Pixel. Si los scripts no están cargados (sin IDs configurados), no hace nada.
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const metaStandard: Record<string, string> = {
  cotizacion_enviada: "Lead",
  click_whatsapp: "Contact",
  newsletter_suscrito: "Subscribe",
};

export function track(event: "cotizacion_enviada" | "click_whatsapp" | "quiz_completado" | "favorito_agregado" | "newsletter_suscrito", params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
    if (window.fbq) {
      if (metaStandard[event]) window.fbq("track", metaStandard[event], params);
      else window.fbq("trackCustom", event, params);
    }
  } catch {}
}
