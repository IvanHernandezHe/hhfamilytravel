// Datos de contacto y datos pendientes: único lugar para cambiarlos en todo el sitio.
// Busca "PENDIENTE" para ver lo que falta reemplazar antes del lanzamiento.

// WhatsApp: 52 (México) + 10 dígitos, sin espacios ni "+".
const whatsappNumber = "528132333323";

export const config = {
  name: "HH Family Travel",
  url: "https://hhfamilytravel.com",
  description:
    "Agencia de viajes para familias en México. Disney y parques, playa todo incluido, cruceros y Europa. Cotiza por WhatsApp al 81 3233 3323.",

  // ── Contacto ──
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  phoneDisplay: "81 3233 3323",
  phoneUrl: `tel:+${whatsappNumber}`,
  email: "hhfamilytravel@gmail.com",
  emailUrl: "mailto:hhfamilytravel@gmail.com",
  hoursDays: "Lunes a sábado",
  hoursTime: "9:00 a 19:00",
  ciudad: "Monterrey, Nuevo León",

  // Muestra los avisos "Ejemplo / Demo / Pendiente" del diseño. En producción va en false.
  marcarPendientes: false,
  // Muestra la etiqueta "Viaje verificado" en Viajes realizados.
  mostrarVerificado: false,

  // PENDIENTE: número real del Registro Nacional de Turismo (hoy es de muestra).
  rnt: "04190000000000",
  // PENDIENTE: confirmar con qué proveedores se reserva ("Reservamos con").
  socios: ["Disney Destinations", "Universal", "Royal Caribbean", "Disney Cruise Line", "Carnival", "Iberostar"],
  confianza: [
    { t: "Registro Nacional de Turismo", d: "RNT en trámite" }, // PENDIENTE: cambiar cuando haya RNT
    { t: "Pago seguro", d: "Tarjeta, transferencia y parcialidades" },
    { t: "Meses sin intereses", d: "Con tarjetas participantes" }, // PENDIENTE: confirmar meses sin intereses
    { t: "Asistencia 24/7 en viaje", d: "Por WhatsApp" },
  ],

  // PENDIENTE: reseñas reales de Google Business Profile. Las de content/resenas.json son de ejemplo:
  // no publicarlas con la marca de Google. Se pueden traer con la Places API (GOOGLE_PLACES_API_KEY).
  google: {
    rating: "5.0",
    count: 12,
    bars: [[5, "100%"], [4, "0%"], [3, "0%"], [2, "0%"], [1, "0%"]] as [number, string][],
    url: "https://www.google.com/search?q=HH+Family+Travel",
    reviewUrl: "https://www.google.com/search?q=HH+Family+Travel+rese%C3%B1as",
  },

  // PENDIENTE: dirección real y mapa (iframe de Google Maps → Compartir → Insertar un mapa).
  direccion: "Monterrey, Nuevo León · Atención en línea y con cita",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Monterrey%2C%20Nuevo%20Le%C3%B3n&z=12&output=embed",

  // PENDIENTE: URL del evento de Calendly (videollamada de 15 min).
  calendlyUrl: "https://calendly.com/hhfamilytravel/15min",

  // PENDIENTE: monto del anticipo para apartar (Mercado Pago). En pesos MXN.
  anticipoMXN: 2000,

  // PENDIENTE: confirmar cuenta de Instagram y reemplazar las fotos por las del feed real.
  instagram: {
    handle: "@hhfamilytravel",
    url: "https://instagram.com/hhfamilytravel",
    fotos: [
      "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=400&q=75&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=75&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484665754804-74b091211472?w=400&q=75&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=400&q=75&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=75&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=75&auto=format&fit=crop",
    ],
  },

  // PENDIENTE: precios por paquete (slug de content/paquetes.json). "Próximamente" mientras no haya precio.
  precios: {
    "orlando-parques-en-familia": "Próximamente",
    "crucero-por-el-caribe": "Próximamente",
    "riviera-maya-todo-incluido": "Próximamente",
    "espana-en-familia": "Próximamente",
  } as Record<string, string>,

  // PENDIENTE: ofertas de temporada y su fecha límite (cuenta regresiva).
  ofertas: {
    titulo: "Aparta tu viaje de verano 2027",
    fechaLimite: "2027-01-31T23:59:59",
    items: [
      { t: "Orlando en verano", d: "7 noches · parques + hotel", img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=300&q=75&auto=format&fit=crop" },
      { t: "Crucero Semana Santa", d: "5 noches · Caribe", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=300&q=75&auto=format&fit=crop" },
      { t: "Navidad en la playa", d: "6 noches · Riviera Maya", img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=300&q=75&auto=format&fit=crop" },
    ],
  },

  // PENDIENTE: rangos de presupuesto del cotizador (MXN).
  presupuestos: [
    ["Esencial", "Hasta $40,000"],
    ["Cómodo", "$40,000 – $80,000"],
    ["Especial", "$80,000 – $150,000"],
    ["Premium", "Más de $150,000"],
    ["Aún no sé", "Recomiéndenme"],
  ] as [string, string][],

  // PENDIENTE: políticas y aviso de privacidad (content/politicas.json) requieren revisión legal.
  // PENDIENTE: fotos propias en lugar de las temporales de Unsplash/Pexels (content/*.json).
  // PENDIENTE: fotos de los viajes realizados en content/viajes.json → "fotos" (3 por viaje, rutas en public/).
} as const;

export function waLink(message?: string) {
  return message ? `${config.whatsappUrl}?text=${encodeURIComponent(message)}` : config.whatsappUrl;
}
