export const tiposDeViaje = ["Parques", "Playa", "Cruceros", "Europa", "Naturaleza"] as const;
export type TipoDeViaje = (typeof tiposDeViaje)[number];

export type Destino = {
  name: string;
  region: string;
  type: TipoDeViaje;
  img: string;
};

// Fotos temporales de Unsplash; reemplazar por fotos propias.
export const destinos: Destino[] = [
  { name: "Orlando", region: "Florida, Estados Unidos", type: "Parques", img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec" },
  { name: "California", region: "Estados Unidos", type: "Parques", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
  { name: "Cancún y Riviera Maya", region: "México", type: "Playa", img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2" },
  { name: "Punta Cana", region: "República Dominicana", type: "Playa", img: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18" },
  { name: "Caribe en crucero", region: "Salidas desde Miami", type: "Cruceros", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19" },
  { name: "Alaska en crucero", region: "Salidas desde Seattle", type: "Cruceros", img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7" },
  { name: "Madrid y Barcelona", region: "España", type: "Europa", img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4" },
  { name: "Roma y Florencia", region: "Italia", type: "Europa", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5" },
  { name: "Costa Rica", region: "Centroamérica", type: "Naturaleza", img: "https://images.unsplash.com/photo-1534008897995-27a23e859048" },
];

// Tarjetas "¿Qué tipo de viaje buscan?" en Inicio → /destinos?tipo=…
export const tiposDestacados: { label: string; tipo: TipoDeViaje; img: string }[] = [
  { label: "Parques temáticos", tipo: "Parques", img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec" },
  { label: "Cruceros", tipo: "Cruceros", img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b" },
  { label: "Playa todo incluido", tipo: "Playa", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
  { label: "Europa en familia", tipo: "Europa", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5" },
];
