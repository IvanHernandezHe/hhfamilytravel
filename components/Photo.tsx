import Image from "next/image";

type PhotoProps = {
  src: string;
  alt?: string;
  /** Clases del contenedor: radio, aspect-ratio o alto. */
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

// Pide a Unsplash un tamaño razonable para que el optimizador de Next no descargue el original.
function withDefaults(src: string) {
  if (src.startsWith("https://images.unsplash.com/") && !src.includes("?")) {
    return `${src}?w=1600&auto=format&fit=crop`;
  }
  return src;
}

/** Foto con placeholder rayado (ph1/ph2) visible mientras carga o si falta la imagen. */
export default function Photo({ src, alt = "", className = "", sizes = "100vw", priority, children }: PhotoProps) {
  return (
    <div className={`ph-stripes relative overflow-hidden ${className}`}>
      <Image src={withDefaults(src)} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      {children}
    </div>
  );
}
