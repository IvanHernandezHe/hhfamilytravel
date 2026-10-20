/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config, waLink } from "@/content/config";
import Inicio from "./Inicio";
import ImageSlot from "./ImageSlot";
import Destinos from "./Destinos";
import Paquetes from "./Paquetes";
import Detalle from "./Detalle";
import Nosotros from "./Nosotros";
import Blog from "./Blog";
import Guia from "./Guia";
import Ayuda from "./Ayuda";
import Viajes from "./Viajes";
import MiViaje from "./MiViaje";
import Quiz from "./Quiz";
import Contacto from "./Contacto";

export default function SiteShell({ V }: { V: any }) {
  return (
    <div ref={V.rootRef} style={{ minHeight: "100vh", background: "var(--hh-bg,#fbfbfc)", fontFamily: "var(--font-body)", color: "var(--hh-text,#14233a)" }}>
      <header style={{ position: V.hdrPos, left: "0", right: "0", transform: V.hdrTf, transition: "transform .35s ease", top: "0", zIndex: "20", background: "var(--hh-header,rgba(251,251,252,.94))", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--hh-line,#edf0f4)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "12px 32px", display: "flex", alignItems: "center", gap: "16px" }}>
          <button type="button" onClick={V.goHome} style={{ flex: "none", border: "0", background: "none", padding: "0", cursor: "pointer", marginRight: "auto" }}>
            <img src="/brand/logo-horizontal.svg" alt="HH Family Travel" style={{ height: "44px", display: "var(--hh-logo-light,block)" }} />
            <img src="/brand/logo-horizontal-oscuro.svg" alt="HH Family Travel" style={{ height: "44px", display: "var(--hh-logo-dark,none)" }} />
          </button>
          <div className="hh-only-desk">
            <nav style={{ display: "flex", gap: "2px", flexWrap: "wrap", justifyContent: "flex-end", minWidth: "0" }}>
              {V.nav.map((n: any, _ni: number) => (
                <Fragment key={_ni}>
                  <button type="button" onClick={n.go} style={{ border: "0", cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "600", padding: "9px 12px", borderRadius: "999px", background: n.bg, color: n.fg }}>
                    {n.label}
                  </button>
                </Fragment>
              ))}
            </nav>
            <a href={config.whatsappUrl} className="hv-60241aa" style={{ display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "15px", padding: "11px 20px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <button type="button" onClick={V.openSearch} aria-label="Buscar" style={{ flex: "none", marginLeft: "auto", width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--hh-head,#1f3550)", border: "1.5px solid var(--hh-line2,#c8d0db)", background: "transparent" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <div className="hh-only-mobile">
            <button type="button" onClick={V.toggleMenu} aria-label="Menú" style={{ flex: "none", width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--hh-head,#1f3550)", border: "1.5px solid var(--hh-line2,#c8d0db)", background: "transparent" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main ref={V.mainRef} style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(16px,3vw,32px)" }}>
        {V.isInicio && <Inicio V={V} />}
        {V.isDestinos && <Destinos V={V} />}
        {V.isPaquetes && <Paquetes V={V} />}
        {V.isDetalle && <Detalle V={V} />}
        {V.isNosotros && <Nosotros V={V} />}
        {V.isBlog && <Blog V={V} />}
        {V.isGuia && <Guia V={V} />}
        {V.isAyuda && <Ayuda V={V} />}
        {V.isViajes && <Viajes V={V} />}
        {V.isMiViaje && <MiViaje V={V} />}
        {V.isQuiz && <Quiz V={V} />}
        {V.isContacto && <Contacto V={V} />}
        <section data-reveal="" style={{ marginBottom: "24px", position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "440px", display: "flex", alignItems: "flex-end", background: "#04264d", color: "#fff" }}>
          <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=2000&q=75&auto=format&fit=crop" alt="Playa desde el aire" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(4,38,77,.85) 0%,rgba(4,38,77,.45) 55%,rgba(4,38,77,.15) 100%)" }} />
          <div style={{ position: "relative", width: "100%", padding: "clamp(28px,4.4vw,64px)", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "640px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(40px,5.4vw,80px)", lineHeight: ".95", letterSpacing: "-.045em", color: "#fff", textWrap: "balance" }}>
                Cuéntanos de tu próximo viaje.
              </h2>
              <div style={{ fontSize: "18px", color: "#fff" }}>
                {config.phoneDisplay} · {config.email}
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={config.whatsappUrl} className="hv-60241aa" style={{ display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "17px", padding: "17px 28px", borderRadius: "999px", textDecoration: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                Abrir WhatsApp
              </a>
              <a href={config.phoneUrl} className="hv-719da3b" style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap", border: "1.5px solid rgba(255,255,255,.6)", background: "rgba(255,255,255,.12)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", color: "#fff", fontWeight: "700", fontSize: "17px", padding: "17px 26px", borderRadius: "999px", textDecoration: "none" }}>
                Llamar
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ padding: `0 clamp(16px,3vw,32px) ${V.footPad}` }}>
        <div style={{ maxWidth: "1176px", margin: "0 auto", borderRadius: "44px", background: "#04264d", color: "#fff", overflow: "hidden", padding: "clamp(32px,4.4vw,56px) clamp(28px,4.4vw,56px) 0", display: "flex", flexDirection: "column", gap: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", flexWrap: "wrap", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,.15)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", maxWidth: "460px" }}>
              <b style={{ fontSize: "clamp(24px,2.4vw,30px)", letterSpacing: "-.02em" }}>
                Ofertas para familias, una vez al mes
              </b>
              <span style={{ fontSize: "15px", color: "#c9d3e0" }}>
                Promociones, temporadas y consejos. Sin spam.
              </span>
            </div>
            {V.notSub && (
              <>
                <form onSubmit={V.subscribe} style={{ display: "flex", gap: "8px", flexWrap: "wrap", flex: "1 1 340px", maxWidth: "480px", padding: "6px", borderRadius: "999px", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)" }}>
                  <input required type="email" placeholder="Tu correo" style={{ flex: "1 1 180px", minWidth: "0", font: "inherit", fontSize: "16px", padding: "12px 18px", border: "0", borderRadius: "999px", background: "transparent", color: "#fff", outline: "none" }} />
                  <button type="submit" style={{ cursor: "pointer", whiteSpace: "nowrap", border: "0", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "15px", padding: "12px 22px", borderRadius: "999px" }}>
                    Suscribirme
                  </button>
                </form>
              </>
            )}
            {V.subbed && (
              <>
                <div style={{ fontSize: "16px", fontWeight: "700", color: "#f7a46a" }}>
                  ¡Listo! Te enviaremos las próximas ofertas.
                </div>
              </>
            )}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <img src="/brand/logo-horizontal-oscuro.svg" alt="HH Family Travel" style={{ height: "44px", alignSelf: "flex-start", display: "block" }} />
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#c9d3e0", maxWidth: "260px" }}>
                Agencia de viajes para familias. Planeamos contigo, de principio a fin.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#f7a46a" }}>
                Sitio
              </div>
              {V.nav.map((n: any, _ni: number) => (
                <Fragment key={_ni}>
                  <button type="button" onClick={n.go} className="hv-c5701ac" style={{ alignSelf: "flex-start", border: "0", background: "none", padding: "0", cursor: "pointer", fontSize: "16px", color: "#fff" }}>
                    {n.label}
                  </button>
                </Fragment>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "16px" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#f7a46a" }}>
                Contacto
              </div>
              <a href={config.whatsappUrl} style={{ color: "#fff", textDecoration: "none" }}>
                WhatsApp {config.phoneDisplay}
              </a>
              <a href={config.phoneUrl} style={{ color: "#fff", textDecoration: "none" }}>
                Llamar {config.phoneDisplay}
              </a>
              <a href={config.emailUrl} style={{ color: "#fff", textDecoration: "none" }}>
                {config.email}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "16px", color: "#fff" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#f7a46a" }}>
                Horario
              </div>
              <span>
                Lunes a sábado
              </span>
              <span>
                9:00 a 19:00
              </span>
              <button type="button" onClick={V.goMiViaje} className="hv-c5701ac" style={{ alignSelf: "flex-start", border: "0", background: "none", padding: "0", cursor: "pointer", fontSize: "16px", color: "#fff", textDecoration: "underline" }}>
                Consultar mi viaje (folio)
              </button>
              <button type="button" onClick={V.goAyuda} className="hv-c5701ac" style={{ alignSelf: "flex-start", border: "0", background: "none", padding: "0", cursor: "pointer", fontSize: "16px", color: "#fff", textDecoration: "underline" }}>
                Preguntas frecuentes y políticas
              </button>
              <button type="button" onClick={V.toggleTheme} className="hv-1f8d138" style={{ marginTop: "8px", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", cursor: "pointer", border: "1.5px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", fontSize: "14px", fontWeight: "600", padding: "9px 16px", borderRadius: "999px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                {V.themeLabel}
              </button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", fontSize: "14px", color: "#c9d3e0", borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: "20px" }}>
            <span>
              © {new Date().getFullYear()} HH Family Travel
            </span>
            <span style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
              RNT {config.rnt} · Aviso de privacidad
              {V.showPend && (
                <>
                  <span style={{ fontSize: "12px", fontWeight: "700", padding: "3px 9px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                    Pendiente · RNT real
                  </span>
                </>
              )}
            </span>
          </div>
          <div aria-hidden="true" style={{ fontWeight: "700", fontSize: "clamp(64px,14.6vw,200px)", lineHeight: ".78", letterSpacing: "-.06em", whiteSpace: "nowrap", color: "rgba(255,255,255,.08)", margin: "0 -8px -2px", textAlign: "center" }}>
            family travel
          </div>
        </div>
      </footer>
      {V.exitOpen && (
        <>
          <div onClick={V.closeExit} style={{ position: "fixed", inset: "0", zIndex: "60", background: "rgba(4,20,40,.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            <div onClick={V.stop} style={{ width: "min(100%,760px)", borderRadius: "36px", overflow: "hidden", background: "var(--hh-card,#fff)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", boxShadow: "0 30px 80px rgba(0,0,0,.3)" }}>
              <img src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=900&q=75&auto=format&fit=crop" alt="" style={{ width: "100%", height: "100%", minHeight: "220px", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>
                <b style={{ fontSize: "28px", lineHeight: "1.1", letterSpacing: "-.025em", color: "var(--hh-head,#1f3550)" }}>
                  ¿Te ayudamos a planear?
                </b>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "var(--hh-muted,#4b5a6e)" }}>
                  Cuéntanos quiénes viajan y a dónde les gustaría ir. Te respondemos hoy mismo, sin compromiso.
                </p>
                <a href={waLink("Hola, quiero ayuda para planear un viaje en familia")} className="hv-60241aa" style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
                <button type="button" onClick={V.closeExit} style={{ border: "0", background: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "var(--hh-soft,#5f6c7d)", padding: "6px" }}>
                  Ahora no
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {V.menuOpen && (
        <>
          <div style={{ position: "fixed", inset: "0", zIndex: "70", background: "#04264d", color: "#fff", display: "flex", flexDirection: "column", padding: "24px", gap: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <img src="/brand/logo-horizontal-oscuro.svg" alt="HH Family Travel" style={{ height: "38px", display: "block" }} />
              <button type="button" onClick={V.toggleMenu} aria-label="Cerrar menú" style={{ width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", border: "1px solid rgba(255,255,255,.3)", background: "transparent", color: "#fff", fontSize: "24px" }}>
                ×
              </button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {V.mobileNav.map((n: any, _ni: number) => (
                <Fragment key={_ni}>
                  <button type="button" onClick={n.go} style={{ border: "0", background: "none", cursor: "pointer", textAlign: "left", padding: "10px 0", fontSize: "34px", fontWeight: "700", letterSpacing: "-.03em", color: "#fff" }}>
                    {n.label}
                  </button>
                </Fragment>
              ))}
            </nav>
            <a href={config.whatsappUrl} style={{ marginTop: "auto", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "17px", padding: "17px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              WhatsApp {config.phoneDisplay}
            </a>
          </div>
        </>
      )}
      {V.viaje && ((x: any) => (
        <>
          <div onClick={V.closeViaje} style={{ position: "fixed", inset: "0", zIndex: "65", background: "rgba(4,20,40,.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "clamp(12px,4vh,48px) 16px", overflowY: "auto" }}>
            <div onClick={V.stop} style={{ width: "min(100%,1040px)", borderRadius: "36px", background: "var(--hh-card,#fff)", padding: "clamp(16px,2.4vw,28px)", display: "flex", flexDirection: "column", gap: "24px", boxShadow: "0 30px 80px rgba(0,0,0,.3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "700", color: "var(--hh-otext,#c95b0b)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {x.lugar} · {x.fecha}
                  </span>
                  <b style={{ fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-.03em", lineHeight: "1.05", color: "var(--hh-head,#1f3550)" }}>
                    El viaje de la {x.familia}
                  </b>
                  <span style={{ fontSize: "15px", color: "var(--hh-muted,#4b5a6e)" }}>
                    {x.viajeros}
                  </span>
                </div>
                <button type="button" onClick={V.closeViaje} aria-label="Cerrar" style={{ flex: "none", width: "46px", height: "46px", borderRadius: "50%", cursor: "pointer", border: "1.5px solid var(--hh-line2,#c8d0db)", background: "transparent", color: "var(--hh-head,#1f3550)", fontSize: "22px" }}>
                  ×
                </button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridTemplateRows: "200px 200px", gap: "10px" }}>
                <div style={{ gridRow: "span 2", position: "relative", borderRadius: "24px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
                  <ImageSlot src={x.fotos[0]} placeholder="Foto principal" />
                </div>
                <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
                  <ImageSlot src={x.fotos[1]} placeholder="Foto 2" />
                </div>
                <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
                  <ImageSlot src={x.fotos[2]} placeholder="Foto 3" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <b style={{ fontSize: "19px", color: "var(--hh-head,#1f3550)" }}>
                    Lo que organizamos
                  </b>
                  {x.organizamos.map((o: string) => (
                    <Fragment key={o}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "16px", color: "var(--hh-text,#14233a)" }}>
                        <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "50%", background: "#e2690f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {o}
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ borderRadius: "28px", background: "var(--hh-tint,#f1f4f8)", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ fontSize: "18px", letterSpacing: "3px", color: "#e2690f" }}>
                    ★★★★★
                  </div>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", fontWeight: "500", color: "var(--hh-head,#1f3550)" }}>
                    “{x.cita}”
                  </p>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "700", color: "var(--hh-head,#1f3550)" }}>
                    {x.familia}
                    <span style={{ display: V.verDisp, alignItems: "center", gap: "4px", fontSize: "12px", padding: "4px 9px", borderRadius: "999px", background: "#e8f5ee", color: "#1d6b43" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Viaje verificado
                    </span>
                  </span>
                  <a href={x.wa} className="hv-60241aa" style={{ alignSelf: "flex-start", marginTop: "4px", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "14px 22px", borderRadius: "999px", textDecoration: "none" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    Quiero un viaje así
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ))(V.viaje)}
      {V.searchOpen && (
        <>
          <div onClick={V.closeSearch} style={{ position: "fixed", inset: "0", zIndex: "75", background: "rgba(4,20,40,.55)", backdropFilter: "blur(6px)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "clamp(16px,10vh,120px) 16px 16px" }}>
            <div onClick={V.stop} style={{ width: "min(100%,680px)", borderRadius: "32px", background: "var(--hh-card,#fff)", boxShadow: "0 30px 80px rgba(0,0,0,.3)", overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: "76vh" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "18px 22px", borderBottom: "1px solid var(--hh-line,#e6eaf0)", color: "var(--hh-soft,#5f6c7d)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input ref={V.searchRef} value={V.q} onChange={V.setQ} placeholder="Busca destinos, paquetes, artículos o preguntas…" style={{ flex: "1", minWidth: "0", font: "inherit", fontSize: "19px", border: "0", outline: "none", background: "transparent", color: "var(--hh-head,#1f3550)" }} />
                <span style={{ fontSize: "12px", fontWeight: "700", padding: "4px 8px", borderRadius: "8px", border: "1px solid var(--hh-line2,#c8d0db)" }}>
                  ESC
                </span>
              </div>
              <div style={{ overflowY: "auto", padding: "10px" }}>
                {V.results.map((r: any, _ri: number) => (
                  <Fragment key={_ri}>
                    <button type="button" onClick={r.go} className="hv-2df5cfb" style={{ width: "100%", cursor: "pointer", display: "flex", alignItems: "center", gap: "14px", padding: "10px 12px", border: "0", borderRadius: "20px", background: "transparent", textAlign: "left" }}>
                      <img src={r.img} alt="" style={{ flex: "none", width: "52px", height: "52px", borderRadius: "16px", objectFit: "cover", background: "var(--hh-ph1,#eef1f5)" }} />
                      <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                        <b style={{ fontSize: "16px", color: "var(--hh-head,#1f3550)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {r.t}
                        </b>
                        <span style={{ fontSize: "13px", color: "var(--hh-soft,#5f6c7d)" }}>
                          {r.k}
                        </span>
                      </span>
                      <span style={{ color: "var(--hh-soft,#5f6c7d)" }}>
                        →
                      </span>
                    </button>
                  </Fragment>
                ))}
                {V.noResults && (
                  <>
                    <div style={{ padding: "24px", fontSize: "16px", color: "var(--hh-muted,#4b5a6e)" }}>
                      Sin resultados.{" "}
                      <a href="/cotizar" style={{ fontWeight: "700", color: "var(--hh-otext,#c95b0b)" }}>
                        Cuéntanos qué buscas →
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="hh-only-mobile">
        <nav style={{ position: "fixed", left: "10px", right: "10px", bottom: "10px", zIndex: "40", display: "grid", gridTemplateColumns: "repeat(5,1fr)", padding: "6px", borderRadius: "26px", background: "var(--hh-header,rgba(251,251,252,.94))", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid var(--hh-line,#e6eaf0)", boxShadow: "0 10px 30px rgba(4,38,77,.16)" }}>
          {V.tabs.map((t: any, _ti: number) => (
            <Fragment key={_ti}>
              <button type="button" onClick={t.go} style={{ cursor: "pointer", border: "0", background: t.bg, borderRadius: "20px", padding: "8px 2px", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", color: t.fg, fontSize: "11px", fontWeight: "700" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={t.icon} />
                {t.l}
              </button>
            </Fragment>
          ))}
        </nav>
      </div>
      {V.pagoOpen && (
        <>
          <div onClick={V.closePago} style={{ position: "fixed", inset: "0", zIndex: "66", background: "rgba(4,20,40,.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
            <div onClick={V.stop} style={{ width: "min(100%,520px)", borderRadius: "32px", background: "var(--hh-card,#fff)", padding: "28px", display: "flex", flexDirection: "column", gap: "18px", boxShadow: "0 30px 80px rgba(0,0,0,.3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: ".06em", color: "var(--hh-soft,#5f6c7d)" }}>
                    ANTICIPO PARA APARTAR
                  </span>
                  <b style={{ fontSize: "24px", letterSpacing: "-.02em", color: "var(--hh-head,#1f3550)" }}>
                    {V.pagoConcepto}
                  </b>
                </div>
                <button type="button" onClick={V.closePago} aria-label="Cerrar" style={{ flex: "none", width: "42px", height: "42px", borderRadius: "50%", cursor: "pointer", border: "1.5px solid var(--hh-line2,#c8d0db)", background: "transparent", color: "var(--hh-head,#1f3550)", fontSize: "20px" }}>
                  ×
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "18px 20px", borderRadius: "22px", background: "var(--hh-tint,#f1f4f8)" }}>
                <span style={{ fontSize: "15px", color: "var(--hh-muted,#4b5a6e)" }}>
                  Monto
                </span>
                <b style={{ fontSize: "32px", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)" }}>
                  {V.anticipoTxt}
                </b>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--hh-head,#1f3550)" }}>
                  Forma de pago
                </span>
                {V.pagoMetodos.map((m: any, _mi: number) => (
                  <Fragment key={_mi}>
                    <button type="button" onClick={m.pick} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "14px 18px", borderRadius: "18px", border: `1.5px solid ${m.border}`, background: "var(--hh-card,#fff)", textAlign: "left" }}>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <b style={{ fontSize: "16px", color: "var(--hh-head,#1f3550)" }}>
                          {m.l}
                        </b>
                        <span style={{ fontSize: "13px", color: "var(--hh-soft,#5f6c7d)" }}>
                          {m.s}
                        </span>
                      </span>
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", border: `2px solid ${m.border}`, background: m.dot }} />
                    </button>
                  </Fragment>
                ))}
              </div>
              <a href={V.mpUrl} onClick={V.pagar} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#009ee3", color: "#fff", fontWeight: "700", fontSize: "17px", padding: "16px 24px", borderRadius: "999px", textDecoration: "none" }}>
                {V.pagoLabel}
              </a>
              {V.pagoError && <span role="alert" style={{ fontSize: "14px", fontWeight: 600, color: "#b3261e" }}>No pudimos abrir Mercado Pago. Intenta de nuevo o escríbenos por WhatsApp.</span>}
              <span style={{ fontSize: "13px", lineHeight: "1.5", color: "var(--hh-soft,#5f6c7d)" }}>
                Pago seguro procesado por Mercado Pago. El anticipo se descuenta del total de tu viaje.
                {V.showPend && (
                  <>
                    {" "}
                    <b>
                      Pendiente:
                    </b>
                    {" "}monto y enlace por configurar.
                  </>
                )}
              </span>
            </div>
          </div>
        </>
      )}
      <div className="hh-only-desk">
        <div style={{ position: "fixed", right: "24px", bottom: "24px", zIndex: "30", display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="hh-only-desk">
            <a href={V.waFloat} style={{ whiteSpace: "nowrap", background: "var(--hh-card,#fff)", color: "var(--hh-head,#1f3550)", fontSize: "14px", fontWeight: "700", padding: "11px 16px", borderRadius: "999px", textDecoration: "none", boxShadow: "0 10px 28px rgba(20,35,58,.18)" }}>
              {V.waFloatLabel}
            </a>
          </div>
          <a href={V.waFloat} aria-label="WhatsApp" className="hv-244d20f" style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#e2690f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 28px rgba(20,35,58,.25)", transition: "transform .2s ease" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </a>
        </div>
      </div>
      {V.hasFavs && (
        <>
          <div style={{ position: "fixed", left: V.favLeft, bottom: V.favBottom, zIndex: "30", display: "flex", alignItems: "center", gap: "6px", padding: "6px 6px 6px 18px", borderRadius: "999px", background: "#04264d", color: "#fff", boxShadow: "0 10px 28px rgba(20,35,58,.3)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700", whiteSpace: "nowrap" }}>
              <span style={{ color: "#f7782a" }}>
                ♥
              </span>
              {V.favCount}
            </span>
            <a href={V.favWa} style={{ whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "14px", padding: "10px 16px", borderRadius: "999px", textDecoration: "none", marginLeft: "8px" }}>
              Cotizar favoritos
            </a>
            <button type="button" onClick={V.clearFavs} aria-label="Borrar favoritos" style={{ width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer", border: "0", background: "rgba(255,255,255,.12)", color: "#fff", fontSize: "18px" }}>
              ×
            </button>
          </div>
        </>
      )}
    </div>
  );
}
