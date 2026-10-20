// Foto de un viaje realizado. Mismo tamaño y estado vacío que el <image-slot> del prototipo:
// bloque 100% × 100% con proporción 3:2 de respaldo, ícono, texto y borde punteado.
// Al poner la foto en content/viajes.json ("fotos") el marcador desaparece.
export default function ImageSlot({ src, placeholder }: { src?: string; placeholder: string }) {
  return (
    <div style={{ display: "block", position: "relative", width: "100%", height: "100%", aspectRatio: "3/2", font: "13px/1.3 system-ui,-apple-system,sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "rgba(127,127,127,.08)" }}>
        {src ? (
          <img src={src} alt={placeholder} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", textAlign: "center", padding: "12px" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }} aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <span style={{ maxWidth: "90%", fontWeight: 500, letterSpacing: ".01em", opacity: 0.75 }}>{placeholder}</span>
          </div>
        )}
      </div>
      {!src && <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", border: "1.5px dashed currentColor", opacity: 0.35 }} />}
    </div>
  );
}
