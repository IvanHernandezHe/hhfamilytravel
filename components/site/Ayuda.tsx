/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";


export default function Ayuda({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Ayuda y políticas" style={{ padding: "40px 0 104px", display: "flex", flexDirection: "column", gap: "56px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "720px" }}>
          <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
            Ayuda
          </div>
          <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(44px,6vw,84px)", lineHeight: ".95", letterSpacing: "-.045em", color: "var(--hh-head,#1f3550)" }}>
            Preguntas frecuentes
          </h1>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--hh-muted,#4b5a6e)" }}>
            Si no encuentras tu respuesta, escríbenos por WhatsApp.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {V.faqs.map((f: any, _fi: number) => (
            <Fragment key={_fi}>
              <div style={{ borderRadius: "28px", background: "var(--hh-tint,#f1f4f8)", overflow: "hidden" }}>
                <button type="button" onClick={f.toggle} style={{ width: "100%", border: "0", background: "transparent", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "22px 26px", textAlign: "left", fontSize: "18px", fontWeight: "700", color: "var(--hh-head,#1f3550)" }}>
                  {f.q}
                  <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", background: "var(--hh-card,#fff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "600", transform: f.rot, transition: "transform .25s ease" }}>
                    +
                  </span>
                </button>
                {f.open && (
                  <>
                    <p style={{ margin: "0", padding: "0 26px 24px", fontSize: "16px", lineHeight: "1.65", color: "var(--hh-muted,#4b5a6e)", maxWidth: "820px" }}>
                      {f.a}
                    </p>
                  </>
                )}
              </div>
            </Fragment>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <h2 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.03em", color: "var(--hh-head,#1f3550)", textWrap: "balance" }}>
              Políticas
            </h2>
            {V.showPend && (
              <>
                <span style={{ alignSelf: "flex-start", fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                  Borrador · revisar con un abogado
                </span>
              </>
            )}
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {V.polTabs.map((f: any, _fi: number) => (
              <Fragment key={_fi}>
                <button type="button" onClick={f.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "15px", fontWeight: "600", padding: "11px 18px", borderRadius: "999px", border: `1.5px solid ${f.border}`, background: f.bg, color: f.fg }}>
                  {f.label}
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{ borderRadius: "32px", border: "1px solid var(--hh-line,#e6eaf0)", background: "var(--hh-card,#fff)", padding: "clamp(24px,3.4vw,40px)", display: "flex", flexDirection: "column", gap: "14px" }}>
            {V.polBody.map((t: any, _ti: number) => (
              <Fragment key={_ti}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "var(--hh-text,#14233a)", maxWidth: "820px" }}>
                  {t}
                </p>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      </>
  );
}
