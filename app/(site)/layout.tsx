import Site from "@/components/site/SiteApp";

// Todo el sitio (menos el cotizador) es una sola vista que cambia según la ruta,
// así el estado (favoritos, filtros, carrusel) se conserva al navegar, como en el prototipo.
// Cada page.tsx solo aporta sus metadatos.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Site />
      {children}
    </>
  );
}
