export type Post = {
  slug: string;
  title: string;
  category: string;
  minutes: number;
  img: string;
  excerpt?: string;
  featured?: boolean;
};

// Fotos temporales de Unsplash; reemplazar por fotos propias.
export const posts: Post[] = [
  {
    slug: "orlando-con-ninos-pequenos",
    title: "Orlando con niños pequeños: cómo organizar los días sin agotarse",
    category: "Parques",
    minutes: 8,
    img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec",
    excerpt: "Qué parques visitar primero, cuándo descansar y cómo evitar las filas más largas.",
    featured: true,
  },
  { slug: "camarote-para-cinco-o-mas", title: "Cómo elegir camarote cuando viajan cinco o más", category: "Cruceros", minutes: 6, img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b" },
  { slug: "equipaje-de-mano-con-bebe", title: "Qué llevar en el equipaje de mano con un bebé", category: "Consejos", minutes: 5, img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d" },
  { slug: "resorts-con-mejores-kids-clubs", title: "Resorts todo incluido con mejores kids clubs", category: "Playa", minutes: 7, img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d" },
  { slug: "europa-con-ninos-ciudades-faciles", title: "Europa con niños: ciudades fáciles para empezar", category: "Europa", minutes: 9, img: "https://images.unsplash.com/photo-1583422409516-2895a77efded" },
  { slug: "pasaportes-y-permisos-para-menores", title: "Pasaportes y permisos para viajar con menores", category: "Documentos", minutes: 4, img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828" },
  { slug: "vuelos-largos-con-ninos", title: "Vuelos largos con niños: horarios y asientos", category: "Consejos", minutes: 6, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05" },
];
