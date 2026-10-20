/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";


export default function MiViaje({ V }: { V: any }) {
  return (
      <>
      <div data-screen-label="Mi viaje" style={{ padding: "120px 0 104px", display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
        <div style={{ width: "min(100%,860px)", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--hh-otext,#c95b0b)" }}>
              Mi viaje
            </div>
            <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(40px,5.4vw,72px)", lineHeight: ".98", letterSpacing: "-.045em", color: "var(--hh-head,#1f3550)" }}>
              Sigue tu viaje paso a paso
            </h1>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--hh-muted,#4b5a6e)" }}>
              Escribe tu folio (lo recibiste al cotizar) y ve en qué etapa está tu viaje.
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "8px", borderRadius: "999px", background: "var(--hh-card,#fff)", border: "1.5px solid var(--hh-line,#e6eaf0)" }}>
            <input value={V.folioQ} onChange={V.setFolioQ} placeholder="Ej. HH-1234" style={{ flex: "1 1 200px", minWidth: "0", font: "inherit", fontSize: "18px", fontWeight: "600", letterSpacing: ".04em", padding: "12px 18px", border: "0", background: "transparent", color: "var(--hh-head,#1f3550)", outline: "none", textTransform: "uppercase" }} />
            <button type="button" onClick={V.buscarFolio} style={{ cursor: "pointer", whiteSpace: "nowrap", border: "0", background: "#04264d", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "14px 26px", borderRadius: "999px" }}>
              Consultar
            </button>
          </div>
          {V.trk.show && (
            <>
              <div style={{ borderRadius: "36px", background: "var(--hh-card,#fff)", border: "1px solid var(--hh-line,#e6eaf0)", padding: "clamp(22px,3vw,36px)", display: "flex", flexDirection: "column", gap: "26px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: ".06em", color: "var(--hh-soft,#5f6c7d)" }}>
                      FOLIO {V.trk.folio}
                    </span>
                    <b style={{ fontSize: "26px", letterSpacing: "-.02em", color: "var(--hh-head,#1f3550)" }}>
                      {V.trk.titulo}
                    </b>
                    <span style={{ fontSize: "15px", color: "var(--hh-muted,#4b5a6e)" }}>
                      {V.trk.sub}
                    </span>
                  </div>
                  <span style={{ fontSize: "12px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "#fff1e6", color: "#a84a08", whiteSpace: "nowrap" }}>
                    {V.trk.tag}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {V.trk.etapas.map((e: any, _ei: number) => (
                    <Fragment key={_ei}>
                      <div style={{ display: "flex", gap: "18px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "700", background: e.dot, color: e.dotFg, border: `2px solid ${e.ring}` }}>
                            {e.mark}
                          </span>
                          <span style={{ flex: "1", width: "2px", minHeight: "26px", background: e.line }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px", padding: "4px 0 22px" }}>
                          <b style={{ fontSize: "18px", color: e.fg }}>
                            {e.t}
                          </b>
                          <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--hh-muted,#4b5a6e)" }}>
                            {e.d}
                          </span>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button type="button" onClick={V.openPago} style={{ cursor: "pointer", whiteSpace: "nowrap", border: "0", background: "#04264d", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "14px 22px", borderRadius: "999px" }}>
                    Pagar anticipo
                  </button>
                  <a href={V.trk.wa} className="hv-60241aa" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "14px 22px", borderRadius: "999px", textDecoration: "none" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    Preguntar por mi viaje
                  </a>
                </div>
              </div>
            </>
          )}
          {V.trk.none && (
            <>
              <div style={{ fontSize: "16px", color: "var(--hh-muted,#4b5a6e)" }}>
                No encontramos ese folio. Revisa que esté bien escrito o escríbenos por WhatsApp. Prueba con{" "}
                <b>
                  HH-1234
                </b>
                {" "}para ver un ejemplo.
              </div>
            </>
          )}
        </div>
      </div>
      </>
  );
}
