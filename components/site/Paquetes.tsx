/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config } from "@/content/config";


export default function Paquetes({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Paquetes" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "32px" }}>
        <section style={{ padding: "24px 0 72px" }}>
          <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(440px,62vh,560px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#0b2a44", color: "#fff" }}>
            <img src="https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=2000&q=75&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
                  Paquetes
                </span>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(48px,7vw,104px)", lineHeight: ".95", letterSpacing: "-.045em", color: "#fff", textWrap: "balance" }}>
                  Viajes listos para adaptar.
                </h1>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "380px" }}>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#fff", textWrap: "pretty" }}>
                  Puntos de partida. Cada paquete se ajusta a tus fechas, edades y presupuesto.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {V.pfiltros.map((f: any, _fi: number) => (
              <Fragment key={_fi}>
                <button type="button" onClick={f.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "600", padding: "11px 18px", borderRadius: "999px", border: `1.5px solid ${f.border}`, background: f.bg, color: f.fg }}>
                  {f.label}
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--hh-tint,#f1f4f8)", color: "var(--hh-head,#1f3550)", fontSize: "15px", fontWeight: "600", padding: "11px 18px", borderRadius: "999px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e2690f", flex: "none" }} />
            Estamos agregando precios y nuevos paquetes.
          </div>
        </div>
        <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,460px),1fr))", gap: "24px" }}>
          {V.paquetes.map((p: any, _pi: number) => (
            <Fragment key={_pi}>
              <div className="hv-aee1687" style={{ position: "relative", borderRadius: "36px", background: "var(--hh-card,#fff)", border: "1px solid var(--hh-line,#e6eaf0)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", transition: "transform .3s ease" }}>
                <button type="button" onClick={p.fav} aria-label="Guardar en favoritos" className="hv-7d08ea2" style={{ position: "absolute", top: "26px", right: "26px", zIndex: "2", width: "44px", height: "44px", borderRadius: "50%", cursor: "pointer", border: "0", background: "#fff", color: p.favColor, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 18px rgba(4,38,77,.18)", transition: "transform .2s ease" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={p.favFill} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </button>
                <button type="button" onClick={p.go} style={{ border: "0", padding: "0", cursor: "pointer", position: "relative", aspectRatio: "16/10", borderRadius: "28px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
                  <img src={p.img} alt={p.name} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  {" "}
                  <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,0) 55%,rgba(4,38,77,.6) 100%)" }} />
                  {" "}
                  <span style={{ position: "absolute", top: "14px", left: "14px", fontSize: "13px", fontWeight: "700", padding: "7px 13px", borderRadius: "999px", color: "#fff", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    {p.type}
                  </span>
                  {" "}
                  <span style={{ position: "absolute", left: "14px", bottom: "14px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", padding: "6px 12px", borderRadius: "999px", color: "#fff", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                      {p.nights}
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "600", padding: "6px 12px", borderRadius: "999px", color: "#fff", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                      {p.ages}
                    </span>
                  </span>
                </button>
                <div style={{ padding: "18px 16px 12px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ fontWeight: "700", fontSize: "26px", lineHeight: "1.1", letterSpacing: "-.02em", color: "var(--hh-head,#1f3550)" }}>
                      {p.name}
                    </div>
                    <span style={{ flex: "none", fontSize: "13px", fontWeight: "700", padding: "7px 12px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                      {p.price}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <button type="button" onClick={p.go} className="hv-a9acbe7" style={{ cursor: "pointer", whiteSpace: "nowrap", border: "1.5px solid var(--hh-head,#1f3550)", background: "transparent", color: "var(--hh-head,#1f3550)", fontWeight: "700", fontSize: "15px", padding: "12px 22px", borderRadius: "999px" }}>
                      Ver detalle
                    </button>
                    <a href={p.wa} className="hv-60241aa" style={{ display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "15px", padding: "12px 22px", borderRadius: "999px", textDecoration: "none" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      Cotizar
                    </a>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <section data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
              Comparar
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
              Compara los paquetes
            </h2>
          </div>
          <div style={{ overflowX: "auto", borderRadius: "32px", border: "1px solid var(--hh-line,#e6eaf0)", background: "var(--hh-card,#fff)" }}>
            <div style={{ minWidth: "760px", display: "grid", gridTemplateColumns: "200px repeat(4,minmax(0,1fr))" }}>
              <div style={{ padding: "20px 24px" }} />
              {V.compCols.map((c: any, _ci: number) => (
                <Fragment key={_ci}>
                  <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                      {c.type}
                    </span>
                    <b style={{ fontSize: "17px", lineHeight: "1.2", color: "var(--hh-head,#1f3550)" }}>
                      {c.name}
                    </b>
                  </div>
                </Fragment>
              ))}
              {V.compRows.map((r: any, _ri: number) => (
                <Fragment key={_ri}>
                  <div style={{ padding: "16px 24px", borderTop: "1px solid var(--hh-line,#e6eaf0)", fontSize: "15px", fontWeight: "700", color: "var(--hh-head,#1f3550)", background: "var(--hh-tint,#f1f4f8)" }}>
                    {r.label}
                  </div>
                  {r.cells.map((v: any, _vi: number) => (
                    <Fragment key={_vi}>
                      <div style={{ padding: "16px", borderTop: "1px solid var(--hh-line,#e6eaf0)", fontSize: "15px", lineHeight: "1.4", color: "var(--hh-text,#14233a)" }}>
                        {v}
                      </div>
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
      </>
  );
}
