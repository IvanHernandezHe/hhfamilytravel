/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config } from "@/content/config";


export default function Destinos({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Destinos" style={{ paddingBottom: "104px" }}>
        <section style={{ padding: "24px 0 72px" }}>
          <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(440px,62vh,560px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#0b2a44", color: "#fff" }}>
            <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=2000&q=75&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
                  Destinos
                </span>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(48px,7vw,104px)", lineHeight: ".95", letterSpacing: "-.045em", color: "#fff", textWrap: "balance" }}>
                  Lugares que conocemos bien.
                </h1>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "380px" }}>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#fff", textWrap: "pretty" }}>
                  Destinos que funcionan para viajar con niños, abuelos o grupos grandes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ position: "sticky", top: "86px", zIndex: "10", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap", padding: "10px", marginBottom: "32px", borderRadius: "999px", background: "var(--hh-header,rgba(251,251,252,.94))", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid var(--hh-line,#e6eaf0)" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {V.filtros.map((f: any, _fi: number) => (
              <Fragment key={_fi}>
                <button type="button" onClick={f.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "600", padding: "11px 18px", borderRadius: "999px", border: `1.5px solid ${f.border}`, background: f.bg, color: f.fg }}>
                  {f.label}
                </button>
              </Fragment>
            ))}
          </div>
          <span style={{ fontSize: "15px", color: "var(--hh-soft,#5f6c7d)", paddingRight: "14px", whiteSpace: "nowrap" }}>
            {V.destCount} destinos
          </span>
        </div>
        <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,280px),1fr))", gap: "20px" }}>
          {V.destinos.map((d: any, _di: number) => (
            <Fragment key={_di}>
              <div style={{ position: "relative" }}>
                <button type="button" onClick={d.go} className="hv-1723a8c" style={{ width: "100%", border: "0", padding: "0", cursor: "pointer", position: "relative", aspectRatio: "3/4", borderRadius: "32px", overflow: "hidden", textAlign: "left", background: "var(--hh-ph1,#eef1f5)", transition: "transform .3s ease" }}>
                  <img src={d.img} alt={d.name} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  {" "}
                  <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,.25) 0%,rgba(4,38,77,0) 30%,rgba(4,38,77,.85) 100%)" }} />
                  {" "}
                  <span style={{ position: "absolute", top: "16px", left: "16px", fontSize: "13px", fontWeight: "700", padding: "7px 13px", borderRadius: "999px", color: "#fff", whiteSpace: "nowrap", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    {d.type}
                  </span>
                  {" "}
                  <span style={{ position: "absolute", left: "22px", right: "22px", bottom: "22px", display: "flex", flexDirection: "column", gap: "6px", color: "#fff" }}>
                    <b style={{ fontSize: "24px", letterSpacing: "-.02em", lineHeight: "1.1" }}>
                      {d.name}
                    </b>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "15px" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {d.region}
                    </span>
                  </span>
                </button>
                <button type="button" onClick={d.fav} aria-label="Guardar en favoritos" className="hv-7d08ea2" style={{ position: "absolute", top: "14px", right: "14px", zIndex: "2", width: "44px", height: "44px", borderRadius: "50%", cursor: "pointer", border: "0", background: "#fff", color: d.favColor, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 18px rgba(4,38,77,.18)", transition: "transform .2s ease" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={d.favFill} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={{ marginTop: "56px" }}>
          <button type="button" onClick={V.goQuiz} data-reveal="" className="hv-7609708" style={{ width: "100%", cursor: "pointer", border: "0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap", padding: "clamp(24px,3.4vw,40px)", borderRadius: "40px", background: "linear-gradient(120deg,#04264d 0%,#163e6e 60%,#e2690f 140%)", color: "#fff", transition: "transform .3s ease" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "620px" }}>
              <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#f7a46a" }}>
                Quiz · 30 segundos
              </span>
              <b style={{ fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-.03em", lineHeight: "1.05" }}>
                ¿No saben a dónde ir?
              </b>
              <span style={{ fontSize: "17px", color: "#dbe3ee" }}>
                Responde 4 preguntas y te recomendamos el destino ideal para tu familia.
              </span>
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#fff", color: "#04264d", fontWeight: "700", fontSize: "17px", padding: "16px 26px", borderRadius: "999px" }}>
              Hacer el quiz →
            </span>
          </button>
        </div>
        <section data-reveal="" style={{ marginTop: "72px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
              Calendario de temporadas
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
              ¿A dónde ir en cada mes?
            </h2>
            <p style={{ margin: "0", fontSize: "17px", color: "var(--hh-muted,#4b5a6e)" }}>
              Elige un mes y te mostramos los destinos con mejor clima para viajar en familia.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(76px,1fr))", gap: "8px" }}>
            {V.calMeses.map((m: any, _mi: number) => (
              <Fragment key={_mi}>
                <button type="button" onClick={m.pick} style={{ cursor: "pointer", padding: "12px 4px", borderRadius: "20px", border: `1.5px solid ${m.border}`, background: m.bg, color: m.fg, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", fontSize: "16px", fontWeight: "700" }}>
                  {m.l}
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: m.dot }} />
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "15px", color: "var(--hh-muted,#4b5a6e)" }}>
            <b style={{ color: "var(--hh-head,#1f3550)", fontSize: "18px" }}>
              {V.calTitle}
            </b>
            <span>
              {V.calNote}
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,240px),1fr))", gap: "14px" }}>
            {V.calDest.map((c: any, _ci: number) => (
              <Fragment key={_ci}>
                <button type="button" onClick={c.go} className="hv-1de5f70" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "14px", padding: "10px 16px 10px 10px", borderRadius: "999px", border: "1px solid var(--hh-line,#e6eaf0)", background: "var(--hh-card,#fff)", textAlign: "left", transition: "transform .2s ease" }}>
                  <img src={c.img} alt="" style={{ flex: "none", width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover" }} />
                  <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                    <b style={{ fontSize: "16px", color: "var(--hh-head,#1f3550)" }}>
                      {c.name}
                    </b>
                    <span style={{ fontSize: "13px", color: "var(--hh-soft,#5f6c7d)" }}>
                      {c.type}
                    </span>
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
