/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config, waLink } from "@/content/config";
import ImageSlot from "./ImageSlot";

export default function Viajes({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Viajes realizados" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "40px" }}>
        <section style={{ paddingTop: "24px" }}>
          <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(440px,62vh,560px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#0b2a44", color: "#fff" }}>
            <img src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=2000&q=75&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,.45) 0%,rgba(4,38,77,.1) 35%,rgba(4,38,77,.55) 65%,rgba(4,38,77,.9) 100%)" }} />
            <div style={{ position: "relative", zIndex: "2", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "clamp(20px,2.6vw,32px) clamp(20px,3vw,48px) 0" }}>
              <button type="button" onClick={V.goHome} style={{ flex: "none", border: "0", background: "none", padding: "0", cursor: "pointer" }}>
                <img src="/brand/logo-horizontal-oscuro.svg" alt="HH Family Travel" style={{ height: "38px", display: "block" }} />
              </button>
              <div className="hh-only-desk">
                <nav style={{ display: "flex", gap: "0", flexWrap: "wrap", justifyContent: "center", minWidth: "0" }}>
                  {V.heroNav.map((n: any, _ni: number) => (
                    <Fragment key={_ni}>
                      <button type="button" onClick={n.go} className="hv-16ba592" style={{ border: "0", background: "transparent", cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "500", padding: "9px 11px", borderRadius: "999px", color: "#fff" }}>
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
                <span style={{ alignSelf: "flex-start", fontSize: "14px", fontWeight: "600", padding: "7px 14px", borderRadius: "999px", whiteSpace: "nowrap", background: "rgba(4,38,77,.55)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,.25)" }}>
                  Viajes realizados
                </span>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(48px,7vw,104px)", lineHeight: ".95", letterSpacing: "-.045em", color: "#fff", textWrap: "balance" }}>
                  Familias reales, viajes reales.
                </h1>
              </div>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#fff", maxWidth: "380px" }}>
                Cada viaje que organizamos, contado por las familias que lo vivieron. Publicado con su autorización.
              </p>
            </div>
          </div>
        </section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "12px" }}>
          <div style={{ borderRadius: "28px", background: "var(--hh-tint,#f1f4f8)", padding: "24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <b style={{ fontSize: "44px", lineHeight: "1", letterSpacing: "-.04em", color: "#e2690f" }}>
              6
            </b>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "var(--hh-head,#1f3550)" }}>
              viajes publicados
            </span>
          </div>
          <div style={{ borderRadius: "28px", background: "var(--hh-tint,#f1f4f8)", padding: "24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <b style={{ fontSize: "44px", lineHeight: "1", letterSpacing: "-.04em", color: "#e2690f" }}>
              5
            </b>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "var(--hh-head,#1f3550)" }}>
              tipos de viaje
            </span>
          </div>
          <div style={{ borderRadius: "28px", background: "var(--hh-tint,#f1f4f8)", padding: "24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <b style={{ fontSize: "44px", lineHeight: "1", letterSpacing: "-.04em", color: "#e2690f" }}>
              26
            </b>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "var(--hh-head,#1f3550)" }}>
              viajeros felices
            </span>
          </div>
          <div style={{ borderRadius: "28px", background: "#04264d", color: "#fff", padding: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "700", color: "#8ee0b5" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Verificado
            </span>
            <span style={{ fontSize: "15px", lineHeight: "1.45" }}>
              Solo publicamos viajes que organizamos, con fotos de las familias.
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {V.vfiltros.map((f: any, _fi: number) => (
              <Fragment key={_fi}>
                <button type="button" onClick={f.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "600", padding: "11px 18px", borderRadius: "999px", border: `1.5px solid ${f.border}`, background: f.bg, color: f.fg }}>
                  {f.label}
                </button>
              </Fragment>
            ))}
          </div>
          {V.showPend && (
            <>
              <span style={{ fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                Ejemplo · reemplazar con viajes reales
              </span>
            </>
          )}
        </div>
        <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,320px),1fr))", gap: "20px" }}>
          {V.viajes.map((x: any) => (
            <Fragment key={x.id}>
              <div className="hv-aee1687" style={{ display: x.vis, flexDirection: "column", gap: "14px", borderRadius: "32px", background: "var(--hh-card,#fff)", border: "1px solid var(--hh-line,#e6eaf0)", padding: "12px", transition: "transform .3s ease" }}>
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "24px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
                  <ImageSlot src={x.fotos[0]} placeholder="Foto principal del viaje" />
                  <span style={{ position: "absolute", top: "12px", left: "12px", fontSize: "13px", fontWeight: "700", padding: "6px 12px", borderRadius: "999px", color: "#fff", whiteSpace: "nowrap", pointerEvents: "none", background: "rgba(4,38,77,.55)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    {x.tipo}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "4px 10px 6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--hh-soft,#5f6c7d)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {x.lugar}
                    </span>
                    <span style={{ fontSize: "13px", color: "var(--hh-soft,#5f6c7d)", whiteSpace: "nowrap" }}>
                      {x.fecha}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <b style={{ fontSize: "21px", letterSpacing: "-.01em", color: "var(--hh-head,#1f3550)" }}>
                      {x.familia}
                    </b>
                    <span style={{ display: V.verDisp, alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "700", padding: "4px 9px", borderRadius: "999px", background: "#e8f5ee", color: "#1d6b43" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Verificado
                    </span>
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--hh-muted,#4b5a6e)" }}>
                    {x.viajeros}
                  </div>
                  <p style={{ margin: "4px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--hh-text,#14233a)" }}>
                    “{x.cita}”
                  </p>
                  <button type="button" onClick={x.open} className="hv-a9acbe7" style={{ alignSelf: "flex-start", marginTop: "6px", cursor: "pointer", whiteSpace: "nowrap", border: "1.5px solid var(--hh-head,#1f3550)", background: "transparent", color: "var(--hh-head,#1f3550)", fontWeight: "700", fontSize: "15px", padding: "11px 20px", borderRadius: "999px" }}>
                    Ver el viaje
                  </button>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <section data-reveal="" style={{ borderRadius: "40px", background: "var(--hh-tint,#f1f4f8)", padding: "clamp(24px,3.4vw,44px)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "600px" }}>
            <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
              ¿Ya viajaste con nosotros?
            </h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "var(--hh-muted,#4b5a6e)" }}>
              Mándanos tus fotos favoritas y una frase de tu viaje. Con tu permiso, lo publicamos aquí.
            </p>
          </div>
          <a href={waLink("Hola, quiero compartir las fotos de nuestro viaje")} className="hv-3b870b7" style={{ display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#04264d", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
            Compartir mi viaje
          </a>
        </section>
      </div>
      </>
  );
}
