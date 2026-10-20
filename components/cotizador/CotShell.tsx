/* eslint-disable */
// Generado desde el prototipo y luego editado a mano.
import { Fragment } from "react";


export default function CotShell({ V }: { V: any }) {
  return (
    <div ref={V.rootRef} style={{ minHeight: "100vh", background: "var(--c-bg,#f4f6f9)", fontFamily: "var(--font-body)", color: "var(--c-text,#14233a)", display: "flex", flexDirection: "column" }}>
      <header style={{ position: "sticky", top: "0", zIndex: "10", background: "var(--c-hdr,rgba(244,246,249,.92))", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px clamp(16px,3vw,32px)", display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="/" style={{ flex: "none", display: "block" }}>
            <img src="/brand/logo-horizontal.svg" alt="HH Family Travel" style={{ height: "38px", display: "var(--hh-logo-light,block)" }} />
            <img src="/brand/logo-horizontal-oscuro.svg" alt="HH Family Travel" style={{ height: "38px", display: "var(--hh-logo-dark,none)" }} />
          </a>
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0", maxWidth: "520px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "700", color: "var(--c-soft,#5f6c7d)" }}>
              <span>
                {V.stepTitle}
              </span>
              <span>
                {V.stepCount}
              </span>
            </div>
            <div style={{ height: "6px", borderRadius: "6px", background: "var(--c-line,#e1e6ee)", overflow: "hidden" }}>
              <div style={{ height: "100%", borderRadius: "6px", background: "#e2690f", width: V.progress, transition: "width .4s ease" }} />
            </div>
          </div>
          <a href="/" aria-label="Salir" className="hv-0e159fc" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "50%", border: "1.5px solid var(--c-line2,#c8d0db)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--c-head2,#1f3550)", textDecoration: "none", fontSize: "22px" }}>
            ×
          </a>
        </div>
      </header>
      <main style={{ flex: "1", maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "clamp(16px,3vw,40px) clamp(16px,3vw,32px) 120px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "clamp(24px,4vw,56px)", alignItems: "flex-start" }}>
        <section style={{ flex: "1.5 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
          {V.s0 && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#c95b0b" }}>
                    Empecemos · 2 minutos
                  </div>
                  <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,58px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--c-head,#04264d)", textWrap: "balance" }}>
                    ¿Qué tipo de viaje sueñan?
                  </h1>
                  <p style={{ margin: "0", fontSize: "17px", color: "var(--c-muted,#4b5a6e)" }}>
                    Puedes elegir más de uno.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,200px),1fr))", gap: "12px" }}>
                  {V.tipos.map((t: any, _ti: number) => (
                    <Fragment key={_ti}>
                      <button type="button" onClick={t.toggle} className="hv-9d7476a" style={{ position: "relative", cursor: "pointer", padding: "24px 22px", borderRadius: "28px", border: `2px solid ${t.border}`, background: t.bg, textAlign: "left", display: "flex", flexDirection: "column", gap: "22px", minHeight: "180px", transition: "border-color .2s ease, background .2s ease" }}>
                        <span style={{ width: "56px", height: "56px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: t.iconBg, color: t.iconFg, transition: "background .2s ease" }}>
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={t.icon} />
                        </span>
                        <span style={{ position: "absolute", top: "18px", right: "18px", width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${t.checkBorder}`, background: t.checkBg, color: "#fff", fontSize: "13px", fontWeight: "700" }}>
                          {t.check}
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "auto" }}>
                          <b style={{ fontSize: "19px", letterSpacing: "-.01em", color: "var(--c-head,#04264d)" }}>
                            {t.label}
                          </b>
                          <span style={{ fontSize: "14px", color: "var(--c-soft,#5f6c7d)" }}>
                            {t.sub}
                          </span>
                        </span>
                      </button>
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          )}
          {V.s1 && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,58px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--c-head,#04264d)", textWrap: "balance" }}>
                    ¿Tienen un destino en mente?
                  </h1>
                  <p style={{ margin: "0", fontSize: "17px", color: "var(--c-muted,#4b5a6e)" }}>
                    Elige de las sugerencias o escríbelo. Si aún no saben, nosotros les proponemos.
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {V.sugeridos.map((c: any, _ci: number) => (
                    <Fragment key={_ci}>
                      <button type="button" onClick={c.toggle} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "16px", fontWeight: "600", padding: "12px 20px", borderRadius: "999px", border: `1.5px solid ${c.border}`, background: c.bg, color: c.fg }}>
                        {c.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                  Otro destino
                  <input value={V.a.otroDest} onChange={V.setOtroDest} placeholder="Ej. Japón, Nueva York, Chiapas…" style={{ fontSize: "18px", padding: "16px 22px", border: "1.5px solid var(--c-line,#d5dce5)", borderRadius: "999px", background: "var(--c-card,#fff)", color: "var(--c-text,#14233a)", outlineColor: "#e2690f" }} />
                </label>
              </div>
            </>
          )}
          {V.s2 && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,58px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--c-head,#04264d)", textWrap: "balance" }}>
                  ¿Cuándo les gustaría viajar?
                </h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                    Meses posibles
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(96px,1fr))", gap: "8px" }}>
                    {V.meses.map((m: any, _mi: number) => (
                      <Fragment key={_mi}>
                        <button type="button" onClick={m.toggle} style={{ cursor: "pointer", padding: "12px 6px", borderRadius: "20px", border: `1.5px solid ${m.border}`, background: m.bg, color: m.fg, display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                          <b style={{ fontSize: "16px" }}>
                            {m.mes}
                          </b>
                          <span style={{ fontSize: "12px", opacity: ".8" }}>
                            {m.anio}
                          </span>
                        </button>
                      </Fragment>
                    ))}
                  </div>
                  <button type="button" onClick={V.toggleFlex} style={{ alignSelf: "flex-start", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px", border: "0", background: "none", padding: "6px 0", fontSize: "16px", fontWeight: "600", color: "var(--c-head2,#1f3550)" }}>
                    <span style={{ width: "44px", height: "26px", borderRadius: "999px", background: V.flexTrack, position: "relative", transition: "background .2s" }}>
                      <span style={{ position: "absolute", top: "3px", left: V.flexKnob, width: "20px", height: "20px", borderRadius: "50%", background: "var(--c-card,#fff)", transition: "left .2s" }} />
                    </span>
                    Nuestras fechas son flexibles
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px", borderRadius: "28px", background: "var(--c-card,#fff)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                      ¿Cuántas noches?
                    </span>
                    <b style={{ fontSize: "28px", letterSpacing: "-.02em", color: "var(--c-head,#04264d)" }}>
                      {V.a.noches} noches
                    </b>
                  </div>
                  <input type="range" min="3" max="15" value={V.a.noches} onChange={V.setNoches} style={{ width: "100%" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--c-soft,#5f6c7d)" }}>
                    <span>
                      Escapada
                    </span>
                    <span>
                      Una semana
                    </span>
                    <span>
                      Dos semanas
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
          {V.s3 && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,58px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--c-head,#04264d)", textWrap: "balance" }}>
                    ¿Quiénes viajan?
                  </h1>
                  <p style={{ margin: "0", fontSize: "17px", color: "var(--c-muted,#4b5a6e)" }}>
                    Las edades de los niños nos ayudan a elegir hoteles, actividades y tarifas.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {V.counters.map((c: any, _ci: number) => (
                    <Fragment key={_ci}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "14px 14px 14px 24px", borderRadius: "999px", background: "var(--c-card,#fff)" }}>
                        <span style={{ display: "flex", flexDirection: "column" }}>
                          <b style={{ fontSize: "18px", color: "var(--c-head,#04264d)" }}>
                            {c.label}
                          </b>
                          <span style={{ fontSize: "14px", color: "var(--c-soft,#5f6c7d)" }}>
                            {c.sub}
                          </span>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                          <button type="button" onClick={c.dec} aria-label="Menos" style={{ width: "46px", height: "46px", borderRadius: "50%", cursor: "pointer", border: "1.5px solid var(--c-line2,#c8d0db)", background: "var(--c-card,#fff)", color: "var(--c-head,#04264d)", fontSize: "22px", fontWeight: "700" }}>
                            −
                          </button>
                          <b style={{ minWidth: "22px", textAlign: "center", fontSize: "22px", color: "var(--c-head,#04264d)" }}>
                            {c.v}
                          </b>
                          <button type="button" onClick={c.inc} aria-label="Más" style={{ width: "46px", height: "46px", borderRadius: "50%", cursor: "pointer", border: "0", background: "#04264d", color: "#fff", fontSize: "22px", fontWeight: "700" }}>
                            +
                          </button>
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                {V.hasKids && (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px", borderRadius: "28px", background: "var(--c-card,#fff)" }}>
                      <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                        Edad de cada niño al viajar
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {V.kids.map((k: any, _ki: number) => (
                          <Fragment key={_ki}>
                            <label style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 6px 6px 16px", borderRadius: "999px", background: "var(--c-tint,#f1f4f8)", fontSize: "15px", fontWeight: "600", color: "var(--c-head,#04264d)" }}>
                              Niño {k.n}
                              <select value={k.age} onChange={k.set} style={{ fontSize: "15px", fontWeight: "700", padding: "8px 12px", border: "0", borderRadius: "999px", background: "var(--c-card,#fff)", color: "var(--c-head,#04264d)" }}>
                                {V.ages.map((g: any, _gi: number) => (
                                  <Fragment key={_gi}>
                                    <option value={g.v}>
                                      {g.l}
                                    </option>
                                  </Fragment>
                                ))}
                              </select>
                            </label>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          {V.s4 && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,58px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--c-head,#04264d)", textWrap: "balance" }}>
                    ¿Qué no puede faltar?
                  </h1>
                  <p style={{ margin: "0", fontSize: "17px", color: "var(--c-muted,#4b5a6e)" }}>
                    Marca lo que haría perfecto el viaje para tu familia.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,210px),1fr))", gap: "10px" }}>
                  {V.prefs.map((c: any, _ci: number) => (
                    <Fragment key={_ci}>
                      <button type="button" onClick={c.toggle} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", padding: "16px 18px", borderRadius: "22px", border: `1.5px solid ${c.border}`, background: c.bg, color: c.fg, textAlign: "left", fontSize: "16px", fontWeight: "600" }}>
                        <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "8px", border: `2px solid ${c.boxBorder}`, background: c.boxBg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
                          {c.check}
                        </span>
                        {c.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          )}
          {V.s5 && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,58px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--c-head,#04264d)", textWrap: "balance" }}>
                    ¿Cuál es su presupuesto?
                  </h1>
                  <p style={{ margin: "0", fontSize: "17px", color: "var(--c-muted,#4b5a6e)" }}>
                    Total aproximado para toda la familia, en pesos mexicanos. Nos ayuda a proponerte opciones reales.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,220px),1fr))", gap: "12px" }}>
                  {V.budgets.map((b: any, _bi: number) => (
                    <Fragment key={_bi}>
                      <button type="button" onClick={b.pick} style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: "6px", padding: "22px", borderRadius: "26px", border: `2px solid ${b.border}`, background: b.bg, textAlign: "left" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: b.kicker }}>
                          {b.tier}
                        </span>
                        <b style={{ fontSize: "22px", letterSpacing: "-.02em", color: b.fg }}>
                          {b.label}
                        </b>
                      </button>
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          )}
          {V.s6 && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,58px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--c-head,#04264d)", textWrap: "balance" }}>
                  ¿Desde dónde salen?
                </h1>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {V.ciudades.map((c: any, _ci: number) => (
                    <Fragment key={_ci}>
                      <button type="button" onClick={c.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "16px", fontWeight: "600", padding: "12px 20px", borderRadius: "999px", border: `1.5px solid ${c.border}`, background: c.bg, color: c.fg }}>
                        {c.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
                {V.otraCiudad && (
                  <>
                    <input value={V.a.ciudadOtra} onChange={V.setCiudadOtra} placeholder="Escribe tu ciudad" style={{ fontSize: "18px", padding: "16px 22px", border: "1.5px solid var(--c-line,#d5dce5)", borderRadius: "999px", background: "var(--c-card,#fff)", color: "var(--c-text,#14233a)", maxWidth: "420px" }} />
                  </>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                    ¿Necesitan vuelos?
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {V.vuelos.map((c: any, _ci: number) => (
                      <Fragment key={_ci}>
                        <button type="button" onClick={c.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "16px", fontWeight: "600", padding: "12px 20px", borderRadius: "999px", border: `1.5px solid ${c.border}`, background: c.bg, color: c.fg }}>
                          {c.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {V.s7 && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h1 style={{ margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,58px)", lineHeight: "1", letterSpacing: "-.04em", color: "var(--c-head,#04264d)", textWrap: "balance" }}>
                    ¿A dónde te enviamos la propuesta?
                  </h1>
                  <p style={{ margin: "0", fontSize: "17px", color: "var(--c-muted,#4b5a6e)" }}>
                    Te respondemos en menos de 24 horas hábiles.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "14px" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                    Nombre
                    <input value={V.a.nombre} onChange={V.setNombre} placeholder="Tu nombre" style={{ fontSize: "17px", padding: "15px 20px", border: "1.5px solid var(--c-line,#d5dce5)", borderRadius: "999px", background: "var(--c-card,#fff)", color: "var(--c-text,#14233a)" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                    WhatsApp
                    <input value={V.a.tel} onChange={V.setTel} type="tel" placeholder="81 1234 5678" style={{ fontSize: "17px", padding: "15px 20px", border: "1.5px solid var(--c-line,#d5dce5)", borderRadius: "999px", background: "var(--c-card,#fff)", color: "var(--c-text,#14233a)" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)", gridColumn: "1/-1" }}>
                    Correo
                    <input value={V.a.email} onChange={V.setEmail} type="email" placeholder="tucorreo@ejemplo.com" style={{ fontSize: "17px", padding: "15px 20px", border: "1.5px solid var(--c-line,#d5dce5)", borderRadius: "999px", background: "var(--c-card,#fff)", color: "var(--c-text,#14233a)" }} />
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                    ¿Cómo prefieres que te contactemos?
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {V.medios.map((c: any, _ci: number) => (
                      <Fragment key={_ci}>
                        <button type="button" onClick={c.pick} style={{ cursor: "pointer", whiteSpace: "nowrap", fontSize: "16px", fontWeight: "600", padding: "12px 20px", borderRadius: "999px", border: `1.5px solid ${c.border}`, background: c.bg, color: c.fg }}>
                          {c.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "700", color: "var(--c-head2,#1f3550)" }}>
                  ¿Algo más que debamos saber?{" "}
                  <span style={{ fontWeight: "500", color: "var(--c-soft,#5f6c7d)" }}>
                    Opcional: celebraciones, alergias, movilidad, sueños…
                  </span>
                  <textarea value={V.a.notas} onChange={V.setNotas} rows={3} placeholder="Ej. Es el cumpleaños 7 de mi hija y le encanta Frozen" style={{ fontSize: "17px", padding: "16px 20px", border: "1.5px solid var(--c-line,#d5dce5)", borderRadius: "24px", background: "var(--c-card,#fff)", color: "var(--c-text,#14233a)", resize: "vertical" }} />
                </label>
                {V.contactError && (
                  <>
                    <div style={{ fontSize: "15px", fontWeight: "600", color: "#b4320c" }}>
                      Escribe tu nombre y un WhatsApp o correo para poder contactarte.
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          {V.sDone && (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px", padding: "clamp(28px,4vw,48px)", borderRadius: "36px", background: "#04264d", color: "#fff", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: "-90px", top: "-90px", width: "260px", height: "260px", borderRadius: "50%", background: "#f7782a" }} />
                <div style={{ position: "relative", width: "64px", height: "64px", borderRadius: "50%", background: "var(--c-card,#fff)", color: "#e2690f", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h1 style={{ position: "relative", margin: "0", fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "clamp(34px,4.4vw,56px)", lineHeight: "1", letterSpacing: "-.04em", color: "#fff" }}>
                  ¡Listo, {V.firstName}! Ya estamos planeando.
                </h1>
                <p style={{ position: "relative", margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#dbe3ee", maxWidth: "560px" }}>
                  Recibimos tu solicitud con el folio{" "}
                  <b style={{ color: "#fff" }}>
                    {V.folio}
                  </b>
                  {" "}(guárdalo para seguir tu viaje). Te enviaremos una propuesta en menos de 24 horas hábiles por {V.medioTxt}.
                </p>
                {V.sendError && (
                  <>
                    <p style={{ position: "relative", margin: "0", fontSize: "15px", color: "#ffd2b3" }}>
                      No pudimos enviar el correo automáticamente. Envíanos tu solicitud por WhatsApp con el botón de abajo.
                    </p>
                  </>
                )}
                <div style={{ position: "relative", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a href={V.waLink} className="hv-60241aa" style={{ display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", background: "#e2690f", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    Acelerar por WhatsApp
                  </a>
                  <a href="/" style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", fontWeight: "700", fontSize: "16px", padding: "15px 24px", borderRadius: "999px", textDecoration: "none" }}>
                    Volver al sitio
                  </a>
                  <a href="HH Family Travel Sitio v3.dc.html?p=mi-viaje" style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap", color: "#fff", fontWeight: "700", fontSize: "15px", padding: "15px 8px", textDecoration: "underline" }}>
                    Seguir mi viaje
                  </a>
                  <button type="button" onClick={V.restart} style={{ cursor: "pointer", border: "0", background: "none", color: "#dbe3ee", fontWeight: "600", fontSize: "15px", padding: "15px 8px" }}>
                    Nueva cotización
                  </button>
                </div>
              </div>
            </>
          )}
          {V.showNav && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap", paddingTop: "8px" }}>
                <button type="button" onClick={V.back} style={{ cursor: "pointer", whiteSpace: "nowrap", border: "1.5px solid var(--c-line2,#c8d0db)", background: "transparent", color: "var(--c-head2,#1f3550)", fontWeight: "700", fontSize: "16px", padding: "14px 24px", borderRadius: "999px", visibility: V.backVis }}>
                  ← Atrás
                </button>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13px", color: "var(--c-soft,#5f6c7d)" }}>
                    {V.hint}
                  </span>
                  {V.canSkip && (
                    <>
                      <button type="button" onClick={V.skip} style={{ cursor: "pointer", border: "0", background: "none", color: "var(--c-soft,#5f6c7d)", fontWeight: "600", fontSize: "15px", padding: "12px 6px" }}>
                        Omitir
                      </button>
                    </>
                  )}
                  <button type="button" onClick={V.next} className="hv-669f353" style={{ cursor: "pointer", whiteSpace: "nowrap", border: "0", background: V.nextBg, color: "#fff", fontWeight: "700", fontSize: "17px", padding: "16px 30px", borderRadius: "999px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
                    {V.nextLabel}
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
        <aside style={{ flex: "1 1 340px", maxWidth: "440px", position: V.asidePos, top: "100px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ borderRadius: "32px", overflow: "hidden", background: "#04264d", color: "#fff", boxShadow: "0 24px 60px rgba(4,38,77,.22)" }}>
            <div style={{ padding: "22px 26px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#e2690f" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  Pase de abordar
                </span>
                <b style={{ fontSize: "20px", letterSpacing: "-.01em" }}>
                  Tu viaje en familia
                </b>
              </div>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            </div>
            <div style={{ padding: "22px 26px", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".08em", color: "#9fb0c6" }}>
                  DE
                </span>
                <b style={{ fontSize: "30px", letterSpacing: "-.03em", lineHeight: "1.05" }}>
                  {V.pass.desdeCode}
                </b>
                <span style={{ fontSize: "13px", color: "#c9d3e0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {V.pass.desde}
                </span>
              </div>
              <div style={{ flex: "1", height: "2px", background: "repeating-linear-gradient(90deg,rgba(255,255,255,.5) 0 6px,transparent 6px 12px)", position: "relative" }} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", minWidth: "0", textAlign: "right" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".08em", color: "#9fb0c6" }}>
                  A
                </span>
                <b style={{ fontSize: "30px", letterSpacing: "-.03em", lineHeight: "1.05", color: "#f7a46a" }}>
                  {V.pass.aCode}
                </b>
                <span style={{ fontSize: "13px", color: "#c9d3e0", maxWidth: "170px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {V.pass.a}
                </span>
              </div>
            </div>
            <div style={{ padding: "0 26px 22px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
              {V.passFields.map((f: any, _fi: number) => (
                <Fragment key={_fi}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "#9fb0c6" }}>
                      {f.l}
                    </span>
                    <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.3", color: f.c }}>
                      {f.v}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
            <div style={{ position: "relative", height: "2px", margin: "0 18px", background: "repeating-linear-gradient(90deg,rgba(255,255,255,.3) 0 8px,transparent 8px 16px)" }}>
              <span style={{ position: "absolute", left: "-30px", top: "-12px", width: "24px", height: "24px", borderRadius: "50%", background: "var(--c-bg,#f4f6f9)" }} />
              <span style={{ position: "absolute", right: "-30px", top: "-12px", width: "24px", height: "24px", borderRadius: "50%", background: "var(--c-bg,#f4f6f9)" }} />
            </div>
            <div style={{ padding: "20px 26px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", color: "#9fb0c6" }}>
                  FOLIO
                </span>
                <b style={{ fontSize: "18px", letterSpacing: ".04em" }}>
                  {V.folio}
                </b>
              </div>
              <div style={{ width: "140px", height: "44px", background: "repeating-linear-gradient(90deg,#fff 0 2px,transparent 2px 4px,#fff 4px 7px,transparent 7px 9px,#fff 9px 10px,transparent 10px 13px)", opacity: ".85", borderRadius: "4px" }} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 18px", borderRadius: "22px", background: "var(--c-card,#fff)", fontSize: "14px", lineHeight: "1.4", color: "var(--c-muted,#4b5a6e)" }}>
            <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", background: "#fff1e6", color: "#c95b0b", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            Sin costo ni compromiso. Tu avance se guarda solo, puedes volver después.
          </div>
        </aside>
      </main>
    </div>
  );
}
