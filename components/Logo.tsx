/* eslint-disable @next/next/no-img-element -- SVG estático: no necesita el optimizador de next/image */

const variants = {
  horizontal: { light: "/brand/logo-horizontal.svg", dark: "/brand/logo-horizontal-oscuro.svg", width: 407, height: 112 },
  principal: { light: "/brand/logo-principal.svg", dark: "/brand/logo-principal-oscuro.svg", width: 260, height: 220 },
  isotipo: { light: "/brand/isotipo.svg", dark: "/brand/isotipo-oscuro.svg", width: 120, height: 160 },
} as const;

type LogoProps = {
  variant?: keyof typeof variants;
  /** Clases de alto (p. ej. "h-9 lg:h-11"); el ancho sigue la proporción del SVG. */
  className?: string;
};

/**
 * Logo de HH Family Travel. Muestra la versión clara o "-oscuro" según la clase .dark de <html>,
 * solo con CSS, para que no parpadee al cargar.
 */
export default function Logo({ variant = "horizontal", className = "" }: LogoProps) {
  const v = variants[variant];
  const common = `w-auto ${className}`;
  return (
    <>
      <img src={v.light} alt="HH Family Travel" width={v.width} height={v.height} className={`block dark:hidden ${common}`} />
      <img src={v.dark} alt="HH Family Travel" width={v.width} height={v.height} className={`hidden dark:block ${common}`} />
    </>
  );
}
