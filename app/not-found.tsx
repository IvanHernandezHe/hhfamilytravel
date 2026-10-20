import { config } from "@/content/config";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", padding: "24px", textAlign: "center", background: "var(--hh-bg,#fbfbfc)" }}>
      <img src="/brand/logo-horizontal.svg" alt="HH Family Travel" style={{ height: "44px", display: "var(--hh-logo-light,block)" }} />
      <img src="/brand/logo-horizontal-oscuro.svg" alt="HH Family Travel" style={{ height: "44px", display: "var(--hh-logo-dark,none)" }} />
      <h1 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.02, letterSpacing: "-.035em", color: "var(--hh-head,#1f3550)" }}>No encontramos esta página</h1>
      <p style={{ margin: 0, fontSize: "18px", color: "var(--hh-muted,#4b5a6e)" }}>Puede que el enlace haya cambiado. Te ayudamos por WhatsApp.</p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <a href="/" style={{ background: "#04264d", color: "#fff", fontWeight: 700, fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>Ir al inicio</a>
        <a href={config.whatsappUrl} style={{ background: "#e2690f", color: "#fff", fontWeight: 700, fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>WhatsApp</a>
      </div>
    </main>
  );
}
