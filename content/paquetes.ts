import type { TipoDeViaje } from "./destinos";

export type Paquete = {
  slug: string;
  name: string;
  type: TipoDeViaje;
  nights: string;
  ages: string;
  /** Precio "desde" por persona, p. ej. "$24,900 MXN". null → se muestra "Próximamente". */
  price: string | null;
  img: string;
  gallery: [string, string];
  incluye: string[];
  dias: { dia: string; txt: string }[];
};

// Fotos temporales de Unsplash; reemplazar por fotos propias.
export const paquetes: Paquete[] = [
  {
    slug: "orlando-parques-en-familia",
    name: "Orlando: parques en familia",
    type: "Parques",
    nights: "7 noches",
    ages: "Ideal desde 3 años",
    price: null,
    img: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9",
    gallery: [
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec",
      "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda",
    ],
    incluye: ["Vuelos ida y vuelta", "Hotel cerca de los parques", "Entradas a 4 parques", "Auto de alquiler", "Seguro de viaje", "Asistencia por WhatsApp"],
    dias: [
      { dia: "Día 1", txt: "Llegada, recogida del auto y check-in. Tarde libre en la piscina." },
      { dia: "Días 2–5", txt: "Un parque por día, con mañanas tempranas y descanso al mediodía." },
      { dia: "Día 6", txt: "Día libre: compras, parque acuático o descanso." },
      { dia: "Día 7–8", txt: "Último parque y regreso a casa." },
    ],
  },
  {
    slug: "crucero-por-el-caribe",
    name: "Crucero por el Caribe",
    type: "Cruceros",
    nights: "5 noches",
    ages: "Todas las edades",
    price: null,
    img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce",
    gallery: [
      "https://images.unsplash.com/photo-1599640842225-85d111c60e6b",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19",
    ],
    incluye: ["Camarote familiar", "Todas las comidas a bordo", "Club infantil", "Propinas incluidas", "Seguro de viaje", "Asistencia por WhatsApp"],
    dias: [
      { dia: "Día 1", txt: "Embarque en Miami y salida al atardecer." },
      { dia: "Día 2", txt: "Navegación: piscinas, club infantil y shows." },
      { dia: "Días 3–4", txt: "Paradas en islas con excursiones para niños." },
      { dia: "Día 5–6", txt: "Navegación y desembarque." },
    ],
  },
  {
    slug: "riviera-maya-todo-incluido",
    name: "Riviera Maya todo incluido",
    type: "Playa",
    nights: "6 noches",
    ages: "Ideal para bebés y niños",
    price: null,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    gallery: [
      "https://images.unsplash.com/photo-1510097467424-192d713fd8b2",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    ],
    incluye: ["Vuelos ida y vuelta", "Suite familiar", "Todo incluido", "Traslados aeropuerto", "Kids club", "Asistencia por WhatsApp"],
    dias: [
      { dia: "Día 1", txt: "Llegada, traslado privado y check-in." },
      { dia: "Días 2–3", txt: "Playa, piscina y kids club." },
      { dia: "Día 4", txt: "Excursión opcional a un parque ecológico." },
      { dia: "Días 5–7", txt: "Descanso y regreso." },
    ],
  },
  {
    slug: "espana-en-familia",
    name: "España en familia",
    type: "Europa",
    nights: "9 noches",
    ages: "Ideal desde 6 años",
    price: null,
    img: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
    gallery: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    ],
    incluye: ["Vuelos ida y vuelta", "Apartamentos familiares", "Tren Madrid–Barcelona", "Tours para niños", "Seguro de viaje", "Asistencia por WhatsApp"],
    dias: [
      { dia: "Días 1–4", txt: "Madrid: parques, museos con guía infantil y el Retiro." },
      { dia: "Día 5", txt: "Tren rápido a Barcelona." },
      { dia: "Días 6–9", txt: "Barcelona: playa, Sagrada Familia y Tibidabo." },
      { dia: "Día 10", txt: "Regreso a casa." },
    ],
  },
];

export function getPaquete(slug: string) {
  return paquetes.find((p) => p.slug === slug);
}
