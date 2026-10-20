/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config } from "@/content/config";


export default function Blog({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Blog" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "48px" }}>
        <section style={{ paddingTop: "24px" }}>
          <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(500px,72vh,640px)", background: "#0b2a44", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
            <img src="https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=2000&q=75&auto=format&fit=crop" alt="Castillo en parque temático" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,.45) 0%,rgba(4,38,77,.1) 40%,rgba(4,38,77,.7) 100%)" }} />
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
            <div style={{ position: "relative", padding: "0 clamp(24px,3.4vw,48px) clamp(24px,3.4vw,48px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
              <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(56px,8vw,120px)", lineHeight: ".9", letterSpacing: "-.05em", color: "#fff" }}>
                Blog
              </h1>
              <a href="#" className="hv-7609708" style={{ maxWidth: "520px", display: "flex", gap: "18px", alignItems: "center", padding: "14px", borderRadius: "32px", background: "var(--hh-card,#fff)", color: "var(--hh-text,#14233a)", textDecoration: "none", boxShadow: "0 20px 50px rgba(4,38,77,.25)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "6px 4px 6px 10px" }}>
                  <span style={{ alignSelf: "flex-start", fontSize: "12px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", padding: "5px 10px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08" }}>
                    Destacado · Parques
                  </span>
                  <b style={{ fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.01em", color: "var(--hh-head,#1f3550)" }}>
                    Orlando con niños pequeños: cómo organizar los días sin agotarse
                  </b>
                  <span style={{ fontSize: "14px", color: "var(--hh-soft,#5f6c7d)" }}>
                    8 min de lectura
                  </span>
                </div>
                <img src="https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=500&q=75&auto=format&fit=crop" alt="" style={{ flex: "none", width: "140px", height: "120px", borderRadius: "22px", objectFit: "cover" }} />
              </a>
            </div>
          </div>
        </section>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {V.bfiltros.map((f: any, _fi: number) => (
            <Fragment key={_fi}>
              <button type="button" onClick={f.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "600", padding: "11px 18px", borderRadius: "999px", border: `1.5px solid ${f.border}`, background: f.bg, color: f.fg }}>
                {f.label}
              </button>
            </Fragment>
          ))}
        </div>
        <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,320px),1fr))", gap: "24px" }}>
          {V.posts.map((p: any, _pi: number) => (
            <Fragment key={_pi}>
              <a href="#" className="hv-aee1687" style={{ display: "flex", flexDirection: "column", gap: "14px", textDecoration: "none", transition: "transform .3s ease" }}>
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "30px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
                  <img src={p.img} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "14px", left: "14px", fontSize: "13px", fontWeight: "700", padding: "7px 13px", borderRadius: "999px", color: "#fff", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    {p.cat}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 6px" }}>
                  <div style={{ fontWeight: "700", fontSize: "21px", lineHeight: "1.25", letterSpacing: "-.01em", color: "var(--hh-head,#1f3550)" }}>
                    {p.t}
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--hh-soft,#5f6c7d)" }}>
                    {p.min} min de lectura
                  </div>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      </>
  );
}
