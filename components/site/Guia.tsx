/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config } from "@/content/config";


export default function Guia({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Guía de destino" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "56px" }}>
        <section style={{ paddingTop: "24px" }}>
          <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(440px,64vh,580px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#0b2a44", color: "#fff" }}>
            <img src={V.guia.img} alt={V.guia.name} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
            <div style={{ position: "relative", padding: "0 clamp(24px,3.4vw,48px) clamp(28px,3.6vw,52px)", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
              <button type="button" onClick={V.goDestinos} style={{ alignSelf: "flex-start", whiteSpace: "nowrap", cursor: "pointer", fontSize: "14px", fontWeight: "600", padding: "7px 14px", borderRadius: "999px", color: "#fff", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                ← Destinos
              </button>
              <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(48px,7vw,104px)", lineHeight: ".95", letterSpacing: "-.045em", color: "#fff", textWrap: "balance" }}>
                {V.guia.name}
              </h1>
              <div style={{ fontSize: "18px", color: "#fff" }}>
                Guía para viajar en familia · {V.guia.region}
              </div>
            </div>
          </div>
        </section>
        <section data-reveal="" style={{ borderRadius: "32px", background: "linear-gradient(120deg,#0b3c6a,#1f6aa5)", color: "#fff", padding: "22px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <b style={{ fontSize: "52px", lineHeight: "1", letterSpacing: "-.04em" }}>
              {V.wx.temp}
            </b>
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <b style={{ fontSize: "18px" }}>
                Ahora en {V.guia.name}
              </b>
              <span style={{ fontSize: "14px", color: "#cfe0f2" }}>
                {V.wx.desc}
              </span>
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            {V.wx.days.map((d: any, _di: number) => (
              <Fragment key={_di}>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", fontSize: "13px", color: "#cfe0f2" }}>
                  {d.l}
                  <b style={{ fontSize: "17px", color: "#fff" }}>
                    {d.t}
                  </b>
                </span>
              </Fragment>
            ))}
          </div>
          <span style={{ fontSize: "12px", color: "#cfe0f2" }}>
            Clima en vivo · Open-Meteo
          </span>
        </section>
        <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "14px" }}>
          {V.guia.datos.map((d: any, _di: number) => (
            <Fragment key={_di}>
              <div style={{ borderRadius: "28px", background: "var(--hh-tint,#f1f4f8)", padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                  {d.l}
                </span>
                <b style={{ fontSize: "19px", lineHeight: "1.35", color: "var(--hh-head,#1f3550)" }}>
                  {d.v}
                </b>
              </div>
            </Fragment>
          ))}
        </section>
        <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "40px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
              Consejos para tu familia
            </h2>
            {V.guia.tips.map((t: any, _ti: number) => (
              <Fragment key={_ti}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "17px", lineHeight: "1.55", color: "var(--hh-text,#14233a)" }}>
                  <span style={{ flex: "none", marginTop: "2px", width: "28px", height: "28px", borderRadius: "50%", background: "#e2690f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {t}
                </div>
              </Fragment>
            ))}
          </div>
          <div style={{ borderRadius: "36px", background: "#04264d", color: "#fff", padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <b style={{ fontSize: "24px", letterSpacing: "-.02em" }}>
              ¿Planeas ir a {V.guia.name}?
            </b>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#c9d3e0" }}>
              Te armamos el viaje según edades, fechas y presupuesto. Los requisitos de viaje pueden cambiar; los confirmamos contigo antes de reservar.
            </p>
            <a href={V.guia.wa} className="hv-60241aa" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              Cotizar {V.guia.name}
            </a>
            <button type="button" onClick={V.goPaquetes} style={{ alignSelf: "flex-start", border: "0", background: "none", padding: "6px 0", cursor: "pointer", color: "#fff", fontWeight: "700", fontSize: "15px" }}>
              Ver paquetes →
            </button>
          </div>
        </section>
      </div>
      </>
  );
}
