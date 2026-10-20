/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";
import { config } from "@/content/config";
import ImageSlot from "./ImageSlot";

export default function Inicio({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Inicio">
        <section style={{ padding: "24px 0 88px" }}>
          <div onMouseEnter={V.pause} onMouseLeave={V.resume} style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(640px,86vh,820px)", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b2a44", color: "#fff" }}>
            {V.slides.map((s: any, _si: number) => (
              <Fragment key={_si}>
                <img src={s.img} alt={s.title} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "saturate(.82) contrast(.94) brightness(1.03)", opacity: s.op, transform: s.tf, transition: "opacity 1s ease, transform 7s ease-out" }} />
              </Fragment>
            ))}
            {V.slides.map((s: any, _si: number) => (
              <Fragment key={_si}>
                <div style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "linear-gradient(180deg,#1b1f5e 0%,#5b2f86 38%,#c45a8a 68%,#f08a4b 100%)", mixBlendMode: "soft-light", opacity: s.tintOp, transition: "opacity 1s ease" }} />
              </Fragment>
            ))}
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,.3) 0%,rgba(4,38,77,.08) 30%,rgba(4,38,77,.5) 55%,rgba(4,38,77,.9) 100%)" }} />
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
            <div style={{ position: "relative", height: "calc(clamp(88px,17.5vw,250px) + clamp(48px,6vw,88px))", flex: "none", pointerEvents: "none" }}>
              <div style={{ position: "absolute", left: "9%", top: "clamp(20px,3vw,40px)", width: "clamp(150px,22vw,320px)", aspectRatio: "1", borderRadius: "50%", background: "#f7782a", mixBlendMode: "multiply", opacity: ".88" }} />
              {V.slides.map((s: any, _si: number) => (
                <Fragment key={_si}>
                  <div style={{ position: "absolute", left: "0", right: "0", top: "clamp(8px,2vw,32px)", textAlign: "center", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(88px,17.5vw,250px)", lineHeight: "1", letterSpacing: "-.06em", color: "rgba(255,255,255,.86)", whiteSpace: "nowrap", pointerEvents: "none", opacity: s.op, transform: s.wtf, transition: "opacity .8s ease, transform .9s ease" }}>
                    {s.word}
                  </div>
                </Fragment>
              ))}
            </div>
            <div style={{ position: "relative", padding: "clamp(24px,3.4vw,48px)", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "520px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600" }}>
                  <span style={{ padding: "7px 14px", borderRadius: "999px", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)", whiteSpace: "nowrap" }}>
                    {V.cur.tag}
                  </span>
                  <span style={{ whiteSpace: "nowrap" }}>
                    {V.cur.num} / {V.total}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,3.6vw,52px)", lineHeight: "1.02", letterSpacing: "-.035em", color: "#fff", textWrap: "balance" }}>
                    {V.cur.title}
                  </h1>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#fff", textWrap: "pretty" }}>
                    {V.cur.desc}
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {V.cur.facts.map((f: any, _fi: number) => (
                    <Fragment key={_fi}>
                      <span style={{ fontSize: "14px", fontWeight: "600", padding: "7px 14px", borderRadius: "999px", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)", whiteSpace: "nowrap" }}>
                        {f}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <a href={V.cur.cotHref} className="hv-bec5af3" style={{ display: "inline-flex", alignItems: "center", gap: "14px", whiteSpace: "nowrap", background: "#fff", color: "#04264d", fontWeight: "700", fontSize: "17px", padding: "8px 8px 8px 26px", borderRadius: "999px", textDecoration: "none" }}>
                    Cotizar este viaje
                    <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#f7782a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </a>
                  <button type="button" onClick={V.cur.go} style={{ border: "0", background: "none", cursor: "pointer", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "12px 8px", whiteSpace: "nowrap" }}>
                    Ver destinos →
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-end" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="button" onClick={V.prev} aria-label="Anterior" className="hv-2532e6d" style={{ width: "52px", height: "52px", borderRadius: "50%", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button type="button" onClick={V.next} aria-label="Siguiente" className="hv-2532e6d" style={{ width: "52px", height: "52px", borderRadius: "50%", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
                <div className="hh-only-desk">
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {V.slides.map((t: any, _ti: number) => (
                      <Fragment key={_ti}>
                        <button type="button" onClick={t.pick} className="hv-22c898d" style={{ width: "96px", padding: "0", border: "0", background: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", color: "#fff", opacity: t.thumbOp }}>
                          <img src={t.thumb} alt="" style={{ width: "96px", height: "62px", borderRadius: "16px", objectFit: "cover", display: "block", background: "rgba(255,255,255,.15)" }} />
                          <span style={{ height: "3px", borderRadius: "3px", background: "rgba(255,255,255,.3)", overflow: "hidden", display: "block" }}>
                            <span style={{ display: "block", height: "100%", background: "#fff", width: t.pw }} />
                          </span>
                          <span style={{ fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap" }}>
                            {t.short}
                          </span>
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginTop: "-56px", padding: "0 clamp(12px,3vw,40px) 40px", position: "relative", zIndex: "3" }}>
          <div style={{ borderRadius: "36px", background: "var(--hh-card,#fff)", boxShadow: "0 24px 60px rgba(4,38,77,.16)", padding: "clamp(18px,2.4vw,28px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,170px),1fr))", gap: "14px", alignItems: "end" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "700", letterSpacing: ".04em", textTransform: "uppercase", color: "var(--hh-soft,#5f6c7d)", minWidth: "0" }}>
              Destino
              <select value={V.bq.dest} onChange={V.bqDest} style={{ font: "inherit", fontSize: "16px", fontWeight: "600", padding: "12px 16px", border: "1.5px solid var(--hh-line,#dfe4eb)", borderRadius: "999px", background: "var(--hh-bg,#fbfbfc)", color: "var(--hh-head,#1f3550)", width: "100%" }}>
                <option>
                  Disney y parques
                </option>
                <option>
                  Playa todo incluido
                </option>
                <option>
                  Crucero
                </option>
                <option>
                  Europa
                </option>
                <option>
                  Naturaleza
                </option>
                <option>
                  Aún no sé
                </option>
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "700", letterSpacing: ".04em", textTransform: "uppercase", color: "var(--hh-soft,#5f6c7d)", minWidth: "0" }}>
              ¿Cuándo?
              <select value={V.bq.mes} onChange={V.bqMes} style={{ font: "inherit", fontSize: "16px", fontWeight: "600", padding: "12px 16px", border: "1.5px solid var(--hh-line,#dfe4eb)", borderRadius: "999px", background: "var(--hh-bg,#fbfbfc)", color: "var(--hh-head,#1f3550)", width: "100%" }}>
                <option>
                  Fechas flexibles
                </option>
                <option>
                  Semana Santa
                </option>
                <option>
                  Verano
                </option>
                <option>
                  Otoño
                </option>
                <option>
                  Navidad y Año Nuevo
                </option>
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "700", letterSpacing: ".04em", textTransform: "uppercase", color: "var(--hh-soft,#5f6c7d)", minWidth: "0" }}>
              Adultos
              <select value={V.bq.ad} onChange={V.bqAd} style={{ font: "inherit", fontSize: "16px", fontWeight: "600", padding: "12px 16px", border: "1.5px solid var(--hh-line,#dfe4eb)", borderRadius: "999px", background: "var(--hh-bg,#fbfbfc)", color: "var(--hh-head,#1f3550)", width: "100%" }}>
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
                <option>
                  4
                </option>
                <option>
                  5
                </option>
                <option>
                  6+
                </option>
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "700", letterSpacing: ".04em", textTransform: "uppercase", color: "var(--hh-soft,#5f6c7d)", minWidth: "0" }}>
              Niños
              <select value={V.bq.ni} onChange={V.bqNi} style={{ font: "inherit", fontSize: "16px", fontWeight: "600", padding: "12px 16px", border: "1.5px solid var(--hh-line,#dfe4eb)", borderRadius: "999px", background: "var(--hh-bg,#fbfbfc)", color: "var(--hh-head,#1f3550)", width: "100%" }}>
                <option>
                  0
                </option>
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
                <option>
                  4
                </option>
                <option>
                  5+
                </option>
              </select>
            </label>
            <a href={V.bqHref} className="hv-60241aa" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 22px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              Cotizar viaje
            </a>
          </div>
        </section>
        <section data-reveal="" style={{ padding: "8px 0 88px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap", textAlign: "center" }}>
            <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-soft,#5f6c7d)" }}>
              Reservamos con
            </span>
            {V.showPend && (
              <>
                <span style={{ alignSelf: "flex-start", fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                  Ejemplo · confirmar proveedores
                </span>
              </>
            )}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 36px" }}>
            {V.socios.map((x: any, _xi: number) => (
              <Fragment key={_xi}>
                <span style={{ fontWeight: "700", fontSize: "clamp(17px,1.6vw,21px)", letterSpacing: "-.01em", color: "var(--hh-soft,#5f6c7d)", whiteSpace: "nowrap" }}>
                  {x}
                </span>
              </Fragment>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "12px", marginTop: "14px" }}>
            {V.confianza.map((c: any, _ci: number) => (
              <Fragment key={_ci}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 18px", borderRadius: "24px", border: "1px solid var(--hh-line,#e6eaf0)" }}>
                  <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", background: "#fff1e6", color: "#c95b0b", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                    <b style={{ fontSize: "16px", color: "var(--hh-head,#1f3550)" }}>
                      {c.t}
                    </b>
                    <span style={{ fontSize: "14px", color: "var(--hh-soft,#5f6c7d)" }}>
                      {c.d}
                    </span>
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section data-reveal="" style={{ paddingBottom: "96px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", textAlign: "center" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
              Nuestros servicios
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
              Todo tu viaje, en un solo lugar
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))", gap: "16px" }}>
            {V.servicios.map((v: any, _vi: number) => (
              <Fragment key={_vi}>
                <div className="hv-3519bc5" style={{ borderRadius: "32px", background: "var(--hh-tint,#f1f4f8)", padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", transition: "transform .3s ease" }}>
                  <span style={{ width: "68px", height: "68px", borderRadius: "50%", background: "var(--hh-card,#fff)", color: "#e2690f", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(4,38,77,.08)" }}>
                    <span dangerouslySetInnerHTML={v.icon} style={{ display: "flex" }} />
                  </span>
                  <div style={{ fontWeight: "700", fontSize: "19px", color: "var(--hh-head,#1f3550)" }}>
                    {v.t}
                  </div>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "var(--hh-muted,#4b5a6e)" }}>
                    {v.d}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section id="intereses" data-reveal="" style={{ paddingBottom: "96px", display: "flex", flexDirection: "column", gap: "32px", scrollMarginTop: "110px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "620px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                Intereses
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)" }}>
                ¿Qué les gusta hacer en familia?
              </h2>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button type="button" onClick={V.rowPrev} aria-label="Anterior" className="hv-a9acbe7" style={{ width: "52px", height: "52px", borderRadius: "50%", cursor: "pointer", border: "1.5px solid var(--hh-line2,#c8d0db)", background: "transparent", color: "var(--hh-head,#1f3550)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button type="button" onClick={V.rowNext} aria-label="Siguiente" style={{ width: "52px", height: "52px", borderRadius: "50%", cursor: "pointer", border: "0", background: "var(--hh-head,#1f3550)", color: "var(--hh-bg,#fff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <div ref={V.rowRef} style={{ display: "flex", gap: "18px", overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth", scrollbarWidth: "none", paddingBottom: "4px" }}>
            {V.intereses.map((i: any, _ii: number) => (
              <Fragment key={_ii}>
                <button type="button" onClick={i.go} className="hv-aee1687" style={{ flex: "none", width: "clamp(240px,24vw,290px)", scrollSnapAlign: "start", border: "0", padding: "0", cursor: "pointer", position: "relative", aspectRatio: "3/4", borderRadius: "32px", overflow: "hidden", textAlign: "left", background: "var(--hh-ph1,#eef1f5)" }}>
                  <img src={i.img} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  {" "}
                  <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,0) 45%,rgba(4,38,77,.85) 100%)" }} />
                  {" "}
                  <span style={{ position: "absolute", top: "16px", right: "16px", width: "44px", height: "44px", borderRadius: "50%", background: "#fff", color: "#04264d", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ position: "absolute", left: "22px", right: "22px", bottom: "22px", display: "flex", flexDirection: "column", gap: "4px", color: "#fff" }}>
                    <b style={{ fontSize: "22px", letterSpacing: "-.01em" }}>
                      {i.t}
                    </b>
                    <span style={{ fontSize: "15px", lineHeight: "1.4" }}>
                      {i.d}
                    </span>
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "32px", borderRadius: "32px", background: "var(--hh-tint,#f1f4f8)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontWeight: "700", fontSize: "22px", color: "var(--hh-head,#1f3550)" }}>
                ¿Con quién viajan?
              </div>
              <div style={{ fontSize: "16px", color: "var(--hh-muted,#4b5a6e)" }}>
                Marca lo que aplique y te enviamos ideas por WhatsApp.
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {V.perfiles.map((c: any, _ci: number) => (
                <Fragment key={_ci}>
                  <button type="button" onClick={c.toggle} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "600", padding: "11px 18px", borderRadius: "999px", border: `1.5px solid ${c.border}`, background: c.bg, color: c.fg }}>
                    {c.label}
                  </button>
                </Fragment>
              ))}
            </div>
            <a href={V.perfilWa} className="hv-60241aa" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "14px 24px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              Enviar por WhatsApp
            </a>
          </div>
        </section>
        <section data-reveal="" style={{ paddingBottom: "104px" }}>
          <div style={{ borderRadius: "40px", background: "#04264d", color: "#fff", padding: "clamp(28px,4vw,52px)", display: "flex", flexDirection: "column", gap: "32px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-120px", top: "-120px", width: "360px", height: "360px", borderRadius: "50%", background: "#f7782a", opacity: ".9" }} />
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "560px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#f7a46a" }}>
                    Ofertas de temporada
                  </span>
                  {V.showPend && (
                    <>
                      <span style={{ alignSelf: "flex-start", fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                        Ejemplo
                      </span>
                    </>
                  )}
                </div>
                <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.6vw,48px)", lineHeight: "1.02", letterSpacing: "-.035em", color: "#fff" }}>
                  {V.ofertasTitulo}
                </h2>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#c9d3e0" }}>
                  Los mejores hoteles y camarotes familiares se agotan primero. Reserva con anticipación.
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {V.countdown.map((c: any, _ci: number) => (
                  <Fragment key={_ci}>
                    <div style={{ width: "84px", padding: "14px 0", borderRadius: "22px", textAlign: "center", background: "rgba(4,38,77,.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.25)" }}>
                      <div style={{ fontWeight: "700", fontSize: "32px", lineHeight: "1", letterSpacing: "-.03em" }}>
                        {c.v}
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: "600", marginTop: "6px", color: "#c9d3e0" }}>
                        {c.l}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "16px" }}>
              {V.ofertas.map((o: any, _oi: number) => (
                <Fragment key={_oi}>
                  <a href={o.wa} className="hv-98cb3f0" style={{ display: "flex", gap: "14px", alignItems: "center", padding: "12px", borderRadius: "28px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", color: "#fff", textDecoration: "none" }}>
                    <img src={o.img} alt="" style={{ flex: "none", width: "96px", height: "96px", borderRadius: "20px", objectFit: "cover" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                      <b style={{ fontSize: "18px", lineHeight: "1.2" }}>
                        {o.t}
                      </b>
                      <span style={{ fontSize: "14px", color: "#c9d3e0" }}>
                        {o.d}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: "#f7a46a" }}>
                        Precio próximamente →
                      </span>
                    </span>
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section data-reveal="" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                Recomendado
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
                Nuestra recomendación de temporada
              </h2>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button type="button" onClick={V.recPrev} aria-label="Anterior" className="hv-a9acbe7" style={{ width: "52px", height: "52px", borderRadius: "50%", cursor: "pointer", border: "1.5px solid var(--hh-line2,#c8d0db)", background: "transparent", color: "var(--hh-head,#1f3550)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button type="button" onClick={V.recNext} aria-label="Siguiente" style={{ width: "52px", height: "52px", borderRadius: "50%", cursor: "pointer", border: "0", background: "var(--hh-head,#1f3550)", color: "var(--hh-bg,#fff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <div style={{ position: "relative", paddingBottom: "clamp(140px,14vw,120px)" }}>
            <div style={{ position: "relative", height: "clamp(320px,40vw,460px)", borderRadius: "40px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
              {V.recs.map((r: any, _ri: number) => (
                <Fragment key={_ri}>
                  <img src={r.img} alt={r.t} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: r.op, transition: "opacity .7s ease" }} />
                </Fragment>
              ))}
              <span style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "700", padding: "7px 14px", borderRadius: "999px", background: "#e2690f", color: "#fff", whiteSpace: "nowrap" }}>
                ★ Recomendado
              </span>
            </div>
            <div style={{ position: "absolute", left: "clamp(16px,5vw,64px)", right: "clamp(16px,5vw,64px)", bottom: "0", borderRadius: "32px", background: "var(--hh-card,#fff)", boxShadow: "0 24px 60px rgba(4,38,77,.16)", padding: "clamp(20px,2.6vw,32px)", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
                <div style={{ fontWeight: "700", fontSize: "clamp(24px,2.4vw,30px)", letterSpacing: "-.02em", color: "var(--hh-head,#1f3550)" }}>
                  {V.rec.t}
                </div>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "var(--hh-muted,#4b5a6e)", textWrap: "pretty" }}>
                  {V.rec.d}
                </p>
                <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                  {V.recs.map((r: any, _ri: number) => (
                    <Fragment key={_ri}>
                      <button type="button" onClick={r.pick} aria-label="Ver" style={{ height: "8px", width: r.dotW, borderRadius: "8px", border: "0", padding: "0", cursor: "pointer", background: r.dotBg, transition: "width .3s ease" }} />
                    </Fragment>
                  ))}
                </div>
              </div>
              <img src={V.rec.thumb} alt="" style={{ flex: "none", width: "clamp(140px,16vw,200px)", aspectRatio: "4/3", borderRadius: "22px", objectFit: "cover", display: "block" }} />
              <a href={V.rec.wa} className="hv-60241aa" style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>
                Cotizar
              </a>
            </div>
          </div>
        </section>
        <section data-reveal="" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                  Opiniones
                </span>
                {V.showPend && (
                  <>
                    <span style={{ fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                      Ejemplo · conectar con Google
                    </span>
                  </>
                )}
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)" }}>
                Lo que dicen las familias
              </h2>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button type="button" onClick={V.revPrev} aria-label="Anterior" style={{ width: "52px", height: "52px", borderRadius: "50%", cursor: "pointer", border: "1.5px solid var(--hh-line2,#c8d0db)", background: "transparent", color: "var(--hh-head,#1f3550)", fontSize: "20px" }}>
                ‹
              </button>
              <button type="button" onClick={V.revNext} aria-label="Siguiente" style={{ width: "52px", height: "52px", borderRadius: "50%", cursor: "pointer", border: "0", background: "var(--hh-head,#1f3550)", color: "var(--hh-bg,#fff)", fontSize: "20px" }}>
                ›
              </button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "16px", alignItems: "stretch" }}>
            <div style={{ borderRadius: "32px", background: "#04264d", color: "#fff", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
                    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
                  </svg>
                </span>
                <b style={{ fontSize: "16px" }}>
                  Reseñas en Google
                </b>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}>
                <b style={{ fontSize: "72px", lineHeight: ".85", letterSpacing: "-.05em" }}>
                  {V.gRating}
                </b>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px", paddingBottom: "4px" }}>
                  <span style={{ fontSize: "20px", letterSpacing: "2px", color: "#fbbc04" }}>
                    ★★★★★
                  </span>
                  <span style={{ fontSize: "14px", color: "#c9d3e0" }}>
                    {V.gCount} reseñas
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {V.gBars.map((g: any, _gi: number) => (
                  <Fragment key={_gi}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#c9d3e0" }}>
                      <span style={{ width: "10px" }}>
                        {g.n}
                      </span>
                      <span style={{ flex: "1", height: "6px", borderRadius: "6px", background: "rgba(255,255,255,.15)", overflow: "hidden" }}>
                        <span style={{ display: "block", height: "100%", borderRadius: "6px", background: "#fbbc04", width: g.w }} />
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a href={V.gUrl} target="_blank" rel="noopener noreferrer" style={{ whiteSpace: "nowrap", background: "#fff", color: "#04264d", fontWeight: "700", fontSize: "14px", padding: "11px 16px", borderRadius: "999px", textDecoration: "none" }}>
                  Ver en Google
                </a>
                <a href={V.gReviewUrl} target="_blank" rel="noopener noreferrer" style={{ whiteSpace: "nowrap", border: "1.5px solid rgba(255,255,255,.4)", color: "#fff", fontWeight: "700", fontSize: "14px", padding: "10px 16px", borderRadius: "999px", textDecoration: "none" }}>
                  Dejar reseña
                </a>
              </div>
            </div>
            {V.revVisible.map((r: any, _ri: number) => (
              <Fragment key={_ri}>
                <div style={{ borderRadius: "32px", background: "var(--hh-tint,#f1f4f8)", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: r.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "17px" }}>
                        {r.ini}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <b style={{ fontSize: "16px", color: "var(--hh-head,#1f3550)" }}>
                          {r.n}
                        </b>
                        <span style={{ fontSize: "13px", color: "var(--hh-soft,#5f6c7d)" }}>
                          {r.fecha}
                        </span>
                      </span>
                    </span>
                    <svg width="20" height="20" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
                      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
                    </svg>
                  </div>
                  <div style={{ fontSize: "17px", letterSpacing: "2px", color: "#fbbc04" }}>
                    ★★★★★
                  </div>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--hh-text,#14233a)" }}>
                    {r.q}
                  </p>
                  <span style={{ marginTop: "auto", fontSize: "13px", fontWeight: "600", color: "var(--hh-soft,#5f6c7d)" }}>
                    {r.v}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section data-reveal="" style={{ paddingBottom: "104px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "18px" }}>
          <div style={{ position: "relative", borderRadius: "36px", overflow: "hidden", minHeight: "520px", background: "#04264d", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "clamp(28px,3.4vw,44px)" }}>
            <img src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=1200&q=75&auto=format&fit=crop" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".55" }} />
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,.85) 0%,rgba(4,38,77,.2) 55%,rgba(4,38,77,.75) 100%)" }} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px", maxWidth: "440px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#f7a46a" }}>
                Así trabajamos
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,3.8vw,52px)", lineHeight: "1", letterSpacing: "-.035em", color: "#fff", textWrap: "balance" }}>
                Tres pasos y tu familia está lista para viajar.
              </h2>
            </div>
            <a href={config.whatsappUrl} className="hv-bec5af3" style={{ position: "relative", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "14px", whiteSpace: "nowrap", background: "#fff", color: "#04264d", fontWeight: "700", fontSize: "16px", padding: "7px 7px 7px 24px", borderRadius: "999px", textDecoration: "none" }}>
              Empezar la conversación
              <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#f7782a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateRows: "repeat(3,1fr)", gap: "18px" }}>
            {V.pasos.map((p: any, _pi: number) => (
              <Fragment key={_pi}>
                <div className="hv-fa1f54b" style={{ borderRadius: "32px", background: "var(--hh-tint,#f1f4f8)", padding: "28px 32px", display: "flex", gap: "24px", alignItems: "flex-start" }}>
                  <div style={{ flex: "none", fontWeight: "700", fontSize: "56px", lineHeight: ".9", letterSpacing: "-.04em", color: "#e2690f" }}>
                    {p.n}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ fontWeight: "700", fontSize: "22px", letterSpacing: "-.01em", color: "var(--hh-head,#1f3550)" }}>
                      {p.t}
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "var(--hh-muted,#4b5a6e)" }}>
                      {p.d}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section data-reveal="" style={{ paddingBottom: "104px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "18px", alignItems: "stretch" }}>
          <div style={{ borderRadius: "40px", background: "#04264d", color: "#fff", padding: "clamp(28px,3.6vw,48px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "-80px", bottom: "-80px", width: "240px", height: "240px", borderRadius: "50%", background: "#f7782a", opacity: ".9" }} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#f7a46a" }}>
                Viajes realizados
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(32px,3.6vw,48px)", lineHeight: "1.02", letterSpacing: "-.035em", color: "#fff" }}>
                Mira los viajes que ya organizamos.
              </h2>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#c9d3e0" }}>
                Fotos, itinerarios y opiniones de familias que viajaron con nosotros.
              </p>
            </div>
            <button type="button" onClick={V.goViajes} style={{ position: "relative", alignSelf: "flex-start", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "14px", whiteSpace: "nowrap", border: "0", background: "#fff", color: "#04264d", fontWeight: "700", fontSize: "16px", padding: "7px 7px 7px 24px", borderRadius: "999px" }}>
              Ver viajes realizados
              <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#f7782a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                →
              </span>
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "12px", minHeight: "380px" }}>
            <div style={{ gridRow: "span 2", position: "relative", borderRadius: "32px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
              <ImageSlot src={V.viajes[0]?.fotos[0]} placeholder="Foto de un viaje realizado" />
            </div>
            <div style={{ position: "relative", borderRadius: "28px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
              <ImageSlot src={V.viajes[1]?.fotos[0]} placeholder="Foto de un viaje" />
            </div>
            <div style={{ position: "relative", borderRadius: "28px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)" }}>
              <ImageSlot src={V.viajes[2]?.fotos[0]} placeholder="Foto de un viaje" />
            </div>
          </div>
        </section>
        <div style={{ paddingBottom: "104px" }}>
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
        <section data-reveal="" style={{ paddingBottom: "104px", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                Comunidad
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
                Comparte tu viaje con #HHFamilyTravel
              </h2>
              <p style={{ margin: "0", fontSize: "17px", color: "var(--hh-muted,#4b5a6e)" }}>
                Fotos de familias viajeras. Etiquétanos en Instagram para aparecer aquí.
              </p>
            </div>
            <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/brand/icono-app.svg" alt="" style={{ width: "52px", height: "52px", borderRadius: "50%", padding: "2px", background: "linear-gradient(45deg,#f9a03f,#e2690f,#c13584)" }} />
              <span style={{ display: "flex", flexDirection: "column" }}>
                <b style={{ fontSize: "16px", color: "var(--hh-head,#1f3550)" }}>
                  {config.instagram.handle}
                </b>
                <span style={{ fontSize: "13px", color: "var(--hh-soft,#5f6c7d)" }}>
                  Viajes en familia · Monterrey
                </span>
              </span>
            </span>
            <a href={config.instagram.url} className="hv-a9acbe7" style={{ display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", border: "1.5px solid var(--hh-head,#1f3550)", color: "var(--hh-head,#1f3550)", fontWeight: "700", fontSize: "16px", padding: "13px 22px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
              {config.instagram.handle}
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,170px),1fr))", gap: "12px" }}>
            {V.insta.map((g: any, _gi: number) => (
              <Fragment key={_gi}>
                <a href={config.instagram.url} className="hv-32995a0" style={{ position: "relative", aspectRatio: "1", borderRadius: "24px", overflow: "hidden", background: "var(--hh-ph1,#eef1f5)", display: "block" }}>
                  <img src={g} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                </a>
              </Fragment>
            ))}
          </div>
        </section>
      </div>
      </>
  );
}
