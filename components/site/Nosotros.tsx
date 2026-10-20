/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config } from "@/content/config";


export default function Nosotros({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Nosotros" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "96px" }}>
        <section style={{ padding: "24px 0 72px" }}>
          <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(440px,62vh,560px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#0b2a44", color: "#fff" }}>
            <img src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?w=2000&q=75&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
                  Nosotros
                </span>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(48px,7vw,104px)", lineHeight: ".95", letterSpacing: "-.045em", color: "#fff", textWrap: "balance" }}>
                  Somos familia planeando viajes para familias.
                </h1>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "380px" }}>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#fff", textWrap: "pretty" }}>
                  HH Family Travel nació de nuestros propios viajes con niños. Hoy usamos esa experiencia para que tu familia solo se ocupe de disfrutar.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
              Lo que nos importa
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
              Tres promesas en cada viaje.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "18px" }}>
            {V.valores.map((v: any, _vi: number) => (
              <Fragment key={_vi}>
                <div className="hv-fa1f54b" style={{ borderRadius: "32px", background: "var(--hh-tint,#f1f4f8)", padding: "32px", display: "flex", flexDirection: "column", gap: "40px", minHeight: "260px", justifyContent: "space-between" }}>
                  <div style={{ fontWeight: "700", fontSize: "56px", lineHeight: ".9", letterSpacing: "-.04em", color: "#e2690f" }}>
                    {v.n}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ fontWeight: "700", fontSize: "23px", letterSpacing: "-.01em", color: "var(--hh-head,#1f3550)" }}>
                      {v.t}
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--hh-muted,#4b5a6e)" }}>
                      {v.d}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "48px", alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "5/4", borderRadius: "40px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
            <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&q=75&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", left: "20px", bottom: "20px", display: "flex", alignItems: "center", gap: "12px", padding: "12px 18px 12px 12px", borderRadius: "999px", color: "#fff", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e2690f", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
                <b style={{ fontSize: "15px" }}>
                  Respondemos el mismo día
                </b>
                <span style={{ fontSize: "13px" }}>
                  Lunes a sábado, 9:00 a 19:00
                </span>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
              En cada viaje
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
              Tu viaje siempre incluye
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {V.siempre.map((x: any, _xi: number) => (
                <Fragment key={_xi}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "17px", color: "var(--hh-text,#14233a)" }}>
                    <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", background: "var(--hh-tint,#f1f4f8)", color: "#e2690f", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {x}
                  </div>
                </Fragment>
              ))}
            </div>
            <a href={config.whatsappUrl} className="hv-3b870b7" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "14px", whiteSpace: "nowrap", background: "#04264d", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "7px 7px 7px 24px", borderRadius: "999px", textDecoration: "none" }}>
              Hablar con nosotros
              <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#f7782a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                Destinos
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
                Lugares que organizamos
              </h2>
            </div>
            <button type="button" onClick={V.goDestinos} style={{ border: "0", background: "none", cursor: "pointer", fontWeight: "700", fontSize: "16px", color: "var(--hh-otext,#c95b0b)", whiteSpace: "nowrap" }}>
              Ver todos →
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gridAutoRows: "240px", gap: "16px" }}>
            {V.mosaico.map((m: any, _mi: number) => (
              <Fragment key={_mi}>
                <button type="button" onClick={V.goDestinos} style={{ border: "0", padding: "0", cursor: "pointer", position: "relative", borderRadius: "28px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
                  <img src={m.img} alt={m.name} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", left: "14px", bottom: "14px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "700", padding: "8px 14px", borderRadius: "999px", color: "#fff", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {m.name}
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
        </section>
      </div>
      </>
  );
}
