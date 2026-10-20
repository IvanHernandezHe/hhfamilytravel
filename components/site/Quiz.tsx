/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";


export default function Quiz({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Quiz destino" style={{ padding: "120px 0 104px", display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
        {V.qzAsking && (
          <>
            <div style={{ width: "min(100%,820px)", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {V.qzDots.map((d: any, _di: number) => (
                  <Fragment key={_di}>
                    <span style={{ flex: "1", height: "6px", borderRadius: "6px", background: d, transition: "background .3s" }} />
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                  {V.qzNum}
                </div>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
                  {V.qzQ.q}
                </h1>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px" }}>
                {V.qzOpts.map((o: any, _oi: number) => (
                  <Fragment key={_oi}>
                    <button type="button" onClick={o.pick} className="hv-ccb5adb" style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: "6px", padding: "24px", borderRadius: "28px", border: "2px solid var(--hh-line,#e6eaf0)", background: "var(--hh-card,#fff)", textAlign: "left", transition: "transform .2s ease, border-color .2s ease" }}>
                      <b style={{ fontSize: "21px", letterSpacing: "-.01em", color: "var(--hh-head,#1f3550)" }}>
                        {o.l}
                      </b>
                      <span style={{ fontSize: "15px", color: "var(--hh-soft,#5f6c7d)" }}>
                        {o.d}
                      </span>
                    </button>
                  </Fragment>
                ))}
              </div>
              <button type="button" onClick={V.qzBack} style={{ alignSelf: "flex-start", cursor: "pointer", border: "0", background: "none", padding: "6px 0", fontSize: "15px", fontWeight: "600", color: "var(--hh-soft,#5f6c7d)", visibility: V.qzBackVis }}>
                ← Atrás
              </button>
            </div>
          </>
        )}
        {V.qzDone && (
          <>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", textAlign: "center" }}>
                <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
                  Tu destino ideal
                </div>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--hh-head,#1f3550)" }}>
                  Les recomendamos {V.qzTop.name}
                </h1>
              </div>
              <div style={{ position: "relative", borderRadius: "44px", overflow: "hidden", minHeight: "clamp(380px,56vh,520px)", background: "#0b2a44", color: "#fff", display: "flex", alignItems: "flex-end" }}>
                <img src={V.qzTop.img} alt={V.qzTop.name} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(4,38,77,0) 35%,rgba(4,38,77,.88) 100%)" }} />
                <div style={{ position: "relative", width: "100%", padding: "clamp(24px,3.4vw,48px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "560px" }}>
                    <b style={{ fontSize: "clamp(36px,4.4vw,60px)", letterSpacing: "-.04em", lineHeight: "1" }}>
                      {V.qzTop.name}
                    </b>
                    <span style={{ fontSize: "17px" }}>
                      Mejor época: {V.qzTop.epoca} · {V.qzTop.edades} · {V.qzTop.dias}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <button type="button" onClick={V.qzTop.guia} style={{ cursor: "pointer", whiteSpace: "nowrap", border: "1.5px solid rgba(255,255,255,.6)", background: "rgba(4,38,77,.45)", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 24px", borderRadius: "999px" }}>
                      Ver guía
                    </button>
                    <a href={V.qzTop.wa} className="hv-60241aa" style={{ display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      Cotizar
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <b style={{ fontSize: "20px", color: "var(--hh-head,#1f3550)" }}>
                  También les pueden gustar
                </b>
                <button type="button" onClick={V.qzRestart} style={{ cursor: "pointer", border: "0", background: "none", fontWeight: "700", fontSize: "15px", color: "var(--hh-otext,#c95b0b)" }}>
                  Repetir quiz ↺
                </button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "14px" }}>
                {V.qzAlt.map((c: any, _ci: number) => (
                  <Fragment key={_ci}>
                    <button type="button" onClick={c.guia} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", padding: "12px 20px 12px 12px", borderRadius: "999px", border: "1px solid var(--hh-line,#e6eaf0)", background: "var(--hh-card,#fff)", textAlign: "left" }}>
                      <img src={c.img} alt="" style={{ flex: "none", width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover" }} />
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <b style={{ fontSize: "18px", color: "var(--hh-head,#1f3550)" }}>
                          {c.name}
                        </b>
                        <span style={{ fontSize: "14px", color: "var(--hh-soft,#5f6c7d)" }}>
                          {c.region}
                        </span>
                      </span>
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      </>
  );
}
