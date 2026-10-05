// Datos de contacto: único lugar para cambiarlos en todo el sitio.
// Número de WhatsApp: 52 (México) + 10 dígitos, sin espacios ni "+". Lo usan todos los botones y el formulario.
const whatsappNumber = "528132333323";
const phoneDisplay = "81 3233 3323";
const email = "hhfamilytravel@gmail.com";

export const site = {
  name: "HH Family Travel",
  url: "https://hhfamilytravel.com",
  description:
    "Agencia de viajes para familias. Te escuchamos, armamos el viaje a la medida de tu familia y te acompañamos hasta el regreso.",
  whatsappNumber,
  phoneDisplay,
  email,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  phoneUrl: `tel:+${whatsappNumber}`,
  emailUrl: `mailto:${email}`,
  hours: "Lunes a sábado, 9:00 a 19:00",
  year: 2026,
} as const;

export function whatsappLink(message?: string) {
  return message ? `${site.whatsappUrl}?text=${encodeURIComponent(message)}` : site.whatsappUrl;
}

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/destinos", label: "Destinos" },
  { href: "/paquetes", label: "Paquetes" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;
