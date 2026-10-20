/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config } from "@/content/config";


export default function Contacto({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Contacto" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "32px" }}>
        <section style={{ padding: "24px 0 72px" }}>
          <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(440px,62vh,560px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#0b2a44", color: "#fff" }}>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=75&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,.45) 0%,rgba(4,38,77,.1) 35%,rgba(4,38,77,.55) 65%,rgba(4,38,77,.9) 100%)" }} />
            <div style={{ position: "relative", zIndex: "2", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "clamp(20px,2.6vw,32px) clamp(20px,3vw,48px) 0" }}>
              <button type="button" onClick={V.goHome} style={{ flex: "none", border: "0", background: "none", padding: "0", cursor: "pointer" }}>
                <img src="/brand/logo-horizontal-oscuro.svg" alt="HH Family Travel" style={{ height: "38px", display: "block" }} />
              </button>
              <div className="hh-only-desk">
                <nav style={{ display: "flex", gap: "0", flexWrap: "wrap", justifyContent: "center", minWidth: "0" }}>
                  {V.heroNav.map((n: any, _ni: number) => (
                    <Fragment key={_ni}>
                      <button type="button" onClick={n.go} className="hv-16ba592" style={{ border: "0", cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "500", padding: "9px 11px", borderRadius: "999px", color: "#fff", background: n.bg }}>
                        {n.label}
                      </button>
                    </Fragment>
                  ))}
                </nav>
                <a href={config.whatsappUrl} className="hv-bec5af3" style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", background: "#fff", color: "#04264d", fontWeight: "700", fontSize: "15px", padding: "12px 18px", borderRadius: "999px", textDecoration: "none" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
              <button type="button" onClick={V.openSearch} aria-label="Buscar" style={{ flex: "none", marginLeft: "auto", width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <div className="hh-only-mobile">
                <button type="button" onClick={V.toggleMenu} aria-label="Menú" style={{ flex: "none", width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round">
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div style={{ position: "relative", padding: "0 clamp(24px,3.4vw,48px) clamp(28px,3.6vw,52px)", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
                <span style={{ alignSelf: "flex-start", fontSize: "14px", fontWeight: "600", padding: "7px 14px", borderRadius: "999px", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                  Contacto
                </span>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(48px,7vw,104px)", lineHeight: ".95", letterSpacing: "-.045em", color: "#fff", textWrap: "balance" }}>
                  Hablemos de tu viaje.
                </h1>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "380px" }}>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#fff", textWrap: "pretty" }}>
                  La forma más rápida es WhatsApp. Respondemos el mismo día, de lunes a sábado de 9:00 a 19:00.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px" }}>
          <a href={config.whatsappUrl} className="hv-60241aa" style={{ background: "#e2690f", color: "#fff", borderRadius: "32px", padding: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", textDecoration: "none" }}>
            <div>
              <div style={{ fontWeight: "700", fontSize: "22px" }}>
                WhatsApp
              </div>
              <div style={{ fontSize: "16px", marginTop: "4px" }}>
                {config.phoneDisplay}
              </div>
            </div>
            <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fff", color: "#e2690f", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </span>
          </a>
          <a href={config.phoneUrl} className="hv-3b870b7" style={{ background: "#04264d", color: "#fff", borderRadius: "32px", padding: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", textDecoration: "none" }}>
            <div>
              <div style={{ fontWeight: "700", fontSize: "22px" }}>
                Llámanos
              </div>
              <div style={{ fontSize: "16px", marginTop: "4px", color: "#c9d3e0" }}>
                {config.phoneDisplay}
              </div>
            </div>
            <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fff", color: "#04264d", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </a>
          <a href={config.emailUrl} className="hv-fa1f54b" style={{ background: "var(--hh-tint,#f1f4f8)", color: "var(--hh-head,#1f3550)", borderRadius: "32px", padding: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", textDecoration: "none" }}>
            <div style={{ minWidth: "0" }}>
              <div style={{ fontWeight: "700", fontSize: "22px" }}>
                Correo
              </div>
              <div style={{ fontSize: "16px", marginTop: "4px", color: "var(--hh-muted,#4b5a6e)" }}>
                {config.email}
              </div>
            </div>
            <span style={{ flex: "none", width: "52px", height: "52px", borderRadius: "50%", background: "var(--hh-card,#fff)", color: "var(--hh-head,#1f3550)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </a>
        </div>
        <a href="/cotizar" className="hv-483532d" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap", padding: "clamp(24px,3.4vw,40px)", borderRadius: "40px", background: "#04264d", color: "#fff", textDecoration: "none" }}>
          <span style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "620px" }}>
            <b style={{ fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-.03em", lineHeight: "1.05" }}>
              Cotizador completo en 2 minutos
            </b>
            <span style={{ fontSize: "17px", color: "#c9d3e0" }}>
              Cuéntanos destino, fechas, edades y presupuesto. Recibimos tu solicitud por correo y te enviamos una propuesta.
            </span>
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "17px", padding: "16px 26px", borderRadius: "999px" }}>
            Empezar →
          </span>
        </a>
        <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px", alignItems: "stretch" }}>
          <div style={{ borderRadius: "40px", background: "var(--hh-card,#fff)", border: "1px solid var(--hh-line,#e6eaf0)", padding: "clamp(24px,3vw,36px)", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                Videollamada gratis · 15 min
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
                Agenda una llamada para planear
              </h2>
              <p style={{ margin: "0", fontSize: "16px", color: "var(--hh-muted,#4b5a6e)" }}>
                Elige día y hora. Te enviamos el enlace de la videollamada por correo y WhatsApp.
              </p>
            </div>
            {V.calNotBooked && (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
                    {V.agDias.map((c: any, _ci: number) => (
                      <Fragment key={_ci}>
                        <button type="button" onClick={c.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "600", padding: "11px 16px", borderRadius: "18px", border: `1.5px solid ${c.border}`, background: c.bg, color: c.fg, display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                          {c.l}
                          <span style={{ fontSize: "12px", fontWeight: "500", opacity: ".8" }}>
                            {c.s}
                          </span>
                        </button>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(92px,1fr))", gap: "8px" }}>
                    {V.agHoras.map((c: any, _ci: number) => (
                      <Fragment key={_ci}>
                        <button type="button" onClick={c.pick} style={{ cursor: "pointer", fontSize: "15px", fontWeight: "700", padding: "12px 6px", borderRadius: "999px", border: `1.5px solid ${c.border}`, background: c.bg, color: c.fg }}>
                          {c.l}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                  <button type="button" onClick={V.agendar} style={{ alignSelf: "flex-start", cursor: "pointer", whiteSpace: "nowrap", border: "0", background: V.agBtnBg, color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 26px", borderRadius: "999px" }}>
                    {V.agBtnLabel}
                  </button>
                </div>
              </>
            )}
            {V.calBooked && (
              <>
                <div style={{ borderRadius: "28px", background: "#04264d", color: "#fff", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <b style={{ fontSize: "22px" }}>
                    ¡Llamada agendada!
                  </b>
                  <span style={{ fontSize: "16px", color: "#c9d3e0" }}>
                    {V.agResumen} · Videollamada de 15 min
                  </span>
                  <a href={V.calendlyUrl} target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "15px", padding: "12px 20px", borderRadius: "999px", textDecoration: "none" }}>
                    Confirmar en Calendly
                  </a>
                </div>
              </>
            )}
            {V.showPend && (
              <>
                <span style={{ alignSelf: "flex-start", fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                  Demo · se conecta con Calendly
                </span>
              </>
            )}
          </div>
          <div style={{ borderRadius: "40px", overflow: "hidden", background: "var(--hh-card,#fff)", border: "1px solid var(--hh-line,#e6eaf0)", display: "flex", flexDirection: "column" }}>
            <iframe title="Mapa HH Family Travel" src={config.mapsEmbedUrl} loading="lazy" style={{ width: "100%", height: "280px", border: "0", display: "block", filter: "saturate(.8)" }} />
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                <b style={{ fontSize: "20px", color: "var(--hh-head,#1f3550)" }}>
                  HH Family Travel
                </b>
                {V.showPend && (
                  <>
                    <span style={{ alignSelf: "flex-start", fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                      Dirección por confirmar
                    </span>
                  </>
                )}
              </div>
              <span style={{ fontSize: "15px", color: "var(--hh-muted,#4b5a6e)" }}>
                {config.direccion}
              </span>
              <span style={{ fontSize: "15px", color: "var(--hh-muted,#4b5a6e)" }}>
                Lunes a sábado, 9:00 a 19:00
              </span>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                <a href={V.gUrl} target="_blank" rel="noopener noreferrer" style={{ whiteSpace: "nowrap", background: "#04264d", color: "#fff", fontWeight: "700", fontSize: "14px", padding: "11px 18px", borderRadius: "999px", textDecoration: "none" }}>
                  Ver en Google Maps
                </a>
                <a href={V.gReviewUrl} target="_blank" rel="noopener noreferrer" style={{ whiteSpace: "nowrap", border: "1.5px solid var(--hh-line2,#c8d0db)", color: "var(--hh-head,#1f3550)", fontWeight: "700", fontSize: "14px", padding: "10px 18px", borderRadius: "999px", textDecoration: "none" }}>
                  ★ Reseñas
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      </>
  );
}
