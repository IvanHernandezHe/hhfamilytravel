/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config } from "@/content/config";


export default function Detalle({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Detalle de paquete" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "40px" }}>
        <section style={{ paddingTop: "24px" }}>
          <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(480px,70vh,640px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#0b2a44", color: "#fff" }}>
            {V.gal.map((g: any, _gi: number) => (
              <Fragment key={_gi}>
                <img src={g.src} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: g.op, transition: "opacity .6s ease" }} />
              </Fragment>
            ))}
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
            <div style={{ position: "relative", padding: "0 clamp(24px,3.4vw,48px) clamp(28px,3.6vw,48px)", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "720px" }}>
                <button type="button" onClick={V.goPaquetes} style={{ alignSelf: "flex-start", whiteSpace: "nowrap", cursor: "pointer", fontSize: "14px", fontWeight: "600", padding: "7px 14px", borderRadius: "999px", color: "#fff", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                  ← Todos los paquetes
                </button>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(44px,6vw,88px)", lineHeight: ".95", letterSpacing: "-.045em", color: "#fff", textWrap: "balance" }}>
                  {V.pkg.name}
                </h1>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600", padding: "7px 14px", borderRadius: "999px", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    {V.pkg.type}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "600", padding: "7px 14px", borderRadius: "999px", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    {V.pkg.nights}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "600", padding: "7px 14px", borderRadius: "999px", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    {V.pkg.ages}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {V.gal.map((g: any, _gi: number) => (
                  <Fragment key={_gi}>
                    <button type="button" onClick={g.pick} style={{ width: "96px", height: "68px", padding: "0", borderRadius: "18px", overflow: "hidden", cursor: "pointer", border: `2px solid ${g.border}`, background: "rgba(255,255,255,.15)" }}>
                      <img src={g.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
          <div style={{ flex: "1.6 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "56px" }}>
            <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
                Qué incluye
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,220px),1fr))", gap: "12px" }}>
                {V.pkg.incluye.map((i: any, _ii: number) => (
                  <Fragment key={_ii}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 18px", borderRadius: "22px", background: "var(--hh-tint,#f1f4f8)", fontSize: "16px", fontWeight: "600", color: "var(--hh-head,#1f3550)" }}>
                      <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", background: "#e2690f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span>
                        {i}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
                Itinerario sugerido
              </h2>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px", paddingLeft: "36px" }}>
                <span style={{ position: "absolute", left: "10px", top: "12px", bottom: "12px", width: "2px", background: "var(--hh-line2,#c8d0db)" }} />
                {V.pkg.dias.map((d: any, _di: number) => (
                  <Fragment key={_di}>
                    <div style={{ position: "relative", padding: "20px 24px", borderRadius: "24px", border: "1px solid var(--hh-line,#e6eaf0)", background: "var(--hh-card,#fff)", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ position: "absolute", left: "-34px", top: "24px", width: "18px", height: "18px", borderRadius: "50%", background: "#e2690f", border: "4px solid var(--hh-bg,#fbfbfc)" }} />
                      <div style={{ fontWeight: "700", fontSize: "14px", letterSpacing: ".04em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                        {d.dia}
                      </div>
                      <div style={{ fontSize: "17px", lineHeight: "1.55", color: "var(--hh-text,#14233a)" }}>
                        {d.txt}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          <aside style={{ flex: "1 1 320px", position: "sticky", top: "110px", background: "#04264d", color: "#fff", borderRadius: "36px", padding: "32px", display: "flex", flexDirection: "column", gap: "18px", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "#f7782a", opacity: ".9" }} />
            <div style={{ position: "relative", fontSize: "15px", color: "#c9d3e0" }}>
              Precio
            </div>
            <div style={{ position: "relative", fontWeight: "700", fontSize: "40px", lineHeight: "1", letterSpacing: "-.03em" }}>
              {V.pkg.price}
            </div>
            <p style={{ position: "relative", margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#c9d3e0" }}>
              Estamos preparando los precios de este paquete. Escríbenos y te cotizamos según tus fechas y edades.
            </p>
            <a href={V.pkgWa} className="hv-60241aa" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "17px", padding: "16px 24px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              Consultar por WhatsApp
            </a>
            <button type="button" onClick={V.openPago} style={{ position: "relative", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", whiteSpace: "nowrap", border: "0", background: "#fff", color: "#04264d", fontWeight: "700", fontSize: "16px", padding: "14px 24px", borderRadius: "999px" }}>
              Apartar con anticipo
            </button>
            <a href={config.phoneUrl} className="hv-86fbae5" style={{ position: "relative", display: "flex", justifyContent: "center", whiteSpace: "nowrap", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "14px 24px", borderRadius: "999px", textDecoration: "none" }}>
              Llamar al {config.phoneDisplay}
            </a>
          </aside>
        </div>
      </div>
      </>
  );
}
