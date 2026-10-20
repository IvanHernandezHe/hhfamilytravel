"use client";

// Cotizador de 8 pasos, portado del prototipo (HH Cotizador). La vista vive en CotShell.
import { Component, type ChangeEvent } from "react";
import { config, waLink } from "@/content/config";
import { track } from "@/lib/analytics";
import CotShell from "./CotShell";

type Answers = {
  tipos: string[]; dests: string[]; otroDest: string; meses: string[]; flex: boolean; noches: number; adultos: number; ninos: number[];
  mayores: number; prefs: string[]; budget: string; ciudad: string; ciudadOtra: string; vuelo: string; nombre: string; tel: string;
  email: string; medio: string; notas: string;
};
type State = { step: number; a: Answers; folio: string; done: boolean; sendError: boolean; tried: boolean; sending: boolean; ready: boolean };

const EMPTY: Answers = { tipos: [], dests: [], otroDest: "", meses: [], flex: false, noches: 7, adultos: 2, ninos: [], mayores: 0, prefs: [], budget: "", ciudad: "Monterrey", ciudadOtra: "", vuelo: "Sí, con vuelo", nombre: "", tel: "", email: "", medio: "WhatsApp", notas: "" };
const U = (id: string, w: number) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
const ICONS: Record<string, string> = { "Disney y parques": '<path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/><path d="M18 11V4H6v7"/><path d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"/><path d="M22 11V9"/><path d="M2 11V9"/><path d="M6 4V2"/><path d="M18 4V2"/><path d="M10 4V2"/><path d="M14 4V2"/>', Playa: '<path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/>', Crucero: '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/>', Europa: '<path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="m12 2 8 5H4z"/>', Naturaleza: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>', "Sorpréndanme": '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.13-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.13 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>' };
const TIPOS = [
  { label: "Disney y parques", sub: "Orlando, California", img: U("1597466599360-3b9775841aec", 500) },
  { label: "Playa", sub: "Todo incluido", img: U("1520250497591-112f2f40a3f4", 500) },
  { label: "Crucero", sub: "Caribe, Alaska, Europa", img: U("1599640842225-85d111c60e6b", 500) },
  { label: "Europa", sub: "Ciudades y cultura", img: U("1552832230-c0197dd311b5", 500) },
  { label: "Naturaleza", sub: "Selva, volcanes, nieve", img: U("1534008897995-27a23e859048", 500) },
  { label: "Sorpréndanme", sub: "Proponemos nosotros", img: U("1475503572774-15a45e5d60b9", 500) },
];
const SUG: Record<string, string[]> = { "Disney y parques": ["Orlando", "Disneyland California", "Universal Orlando"], Playa: ["Cancún", "Riviera Maya", "Los Cabos", "Punta Cana"], Crucero: ["Caribe", "Alaska", "Mediterráneo"], Europa: ["España", "Italia", "Francia", "Londres"], Naturaleza: ["Costa Rica", "Canadá", "Patagonia"], "Sorpréndanme": [] };
const CODES: Record<string, string> = { Orlando: "MCO", "Disneyland California": "LAX", "Universal Orlando": "MCO", "Cancún": "CUN", "Riviera Maya": "CUN", "Los Cabos": "SJD", "Punta Cana": "PUJ", Caribe: "MIA", Alaska: "SEA", "Mediterráneo": "BCN", "España": "MAD", Italia: "FCO", Francia: "CDG", Londres: "LHR", "Costa Rica": "SJO", "Canadá": "YVR", Patagonia: "FTE", Monterrey: "MTY", "Ciudad de México": "MEX", Guadalajara: "GDL", Saltillo: "SLW" };
const PREFS = ["Todo incluido", "Club de niños", "Vuelo directo", "Alberca", "Cerca de los parques", "Habitaciones conectadas", "Traslados privados", "Tours guiados", "Accesibilidad / movilidad", "Comida especial o alergias"];
const STEPS = ["Tipo de viaje", "Destino", "Fechas", "Viajeros", "Preferencias", "Presupuesto", "Salida", "Contacto"];
const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const STORE = "hh-cotizador";
const newFolio = () => "HH-" + Math.floor(1000 + Math.random() * 9000);

// Datos que llegan del buscador de Inicio (/cotizar?tipo=…&mes=…&adultos=…&ninos=…).
const TIPO_DE: Record<string, string> = { "Disney y parques": "Disney y parques", "Playa todo incluido": "Playa", Playa: "Playa", Crucero: "Crucero", Europa: "Europa", Naturaleza: "Naturaleza", "Aún no sé": "Sorpréndanme" };
function prefill(q: URLSearchParams): Partial<Answers> | null {
  if (![...q.keys()].length) return null;
  const p: Partial<Answers> = {};
  const t = TIPO_DE[q.get("tipo") || ""]; if (t) p.tipos = [t];
  if (q.get("mes") === "Fechas flexibles") p.flex = true;
  const ad = parseInt(q.get("adultos") || "", 10); if (ad > 0) p.adultos = ad;
  const ni = parseInt(q.get("ninos") || "", 10); if (ni >= 0) p.ninos = Array(ni).fill(6);
  return p;
}

export default class Cotizador extends Component<object, State> {
  state: State = { step: 0, a: { ...EMPTY }, folio: "", done: false, sendError: false, tried: false, sending: false, ready: false };
  onKey = (e: KeyboardEvent) => {
    const t = e.target as HTMLElement;
    if (e.key === "Enter" && t.tagName !== "TEXTAREA" && !this.state.done) { e.preventDefault(); this.next(); }
  };

  componentDidMount() {
    let saved: Partial<State> | null = null;
    try { const s = JSON.parse(localStorage.getItem(STORE) || "null"); if (s && s.a) saved = s; } catch {}
    const pre = prefill(new URLSearchParams(window.location.search));
    if (pre && (!saved || saved.done || !saved.step)) this.setState({ step: 0, a: { ...EMPTY, ...pre }, folio: newFolio(), done: false, sendError: false, ready: true });
    else if (saved) this.setState({ ...(saved as State), a: { ...EMPTY, ...saved.a }, folio: saved.folio || newFolio(), sending: false, tried: false, ready: true });
    else this.setState({ folio: newFolio(), ready: true });
    window.addEventListener("keydown", this.onKey);
  }
  componentWillUnmount() { window.removeEventListener("keydown", this.onKey); }
  componentDidUpdate() {
    if (!this.state.ready) return;
    const { step, a, folio, done, sendError } = this.state;
    try { localStorage.setItem(STORE, JSON.stringify({ step, a, folio, done, sendError })); } catch {}
  }

  set = (patch: Partial<Answers>) => this.setState(s => ({ a: { ...s.a, ...patch } }));
  toggleIn = (key: "tipos" | "dests" | "meses" | "prefs", v: string) => () => this.setState(s => { const arr = s.a[key]; return { a: { ...s.a, [key]: arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v] } }; });
  valid(step: number) { const a = this.state.a; if (step === 0) return a.tipos.length > 0; if (step === 7) return !!a.nombre.trim() && (!!a.tel.trim() || !!a.email.trim()); return true; }
  next = () => {
    const s = this.state;
    if (s.sending) return;
    if (!this.valid(s.step)) { this.setState({ tried: true }); return; }
    if (s.step === 7) { this.send(); return; }
    this.setState({ step: s.step + 1, tried: false });
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch {}
  };
  summary(folio = this.state.folio): Record<string, string | number> {
    const a = this.state.a;
    const dest = [...a.dests, a.otroDest].filter(Boolean).join(", ") || "Por definir";
    const kids = a.ninos.length ? a.ninos.length + " niños (" + a.ninos.map(n => n === 0 ? "<1 año" : n + " años").join(", ") + ")" : "sin niños";
    const ciudad = a.ciudad === "Otra" ? (a.ciudadOtra || "Otra") : a.ciudad;
    return { Folio: folio, Nombre: a.nombre, WhatsApp: a.tel || "—", Correo: a.email || "—", "Prefiere contacto por": a.medio, "Tipo de viaje": a.tipos.join(", "), Destino: dest, Meses: (a.meses.join(", ") || "Por definir") + (a.flex ? " (fechas flexibles)" : ""), Noches: a.noches, Viajeros: a.adultos + " adultos, " + kids + (a.mayores ? ", " + a.mayores + " mayores de 65" : ""), Preferencias: a.prefs.join(", ") || "—", Presupuesto: a.budget || "—", "Salida desde": ciudad, Vuelos: a.vuelo, Notas: a.notas || "—" };
  }
  send = async () => {
    this.setState({ sending: true });
    let ok = false, folio = this.state.folio;
    try {
      const r = await fetch("/api/cotizacion", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ folio, a: this.state.a }) });
      const j = await r.json().catch(() => ({}));
      ok = r.ok;
      if (j.folio) folio = j.folio;
    } catch { ok = false; }
    if (ok) track("cotizacion_enviada", { destino: String(this.summary()["Destino"]), tipo: this.state.a.tipos.join(", ") });
    this.setState({ sending: false, done: true, sendError: !ok, tried: false, folio });
  };

  vals() {
    const s = this.state, a = s.a, st = s.step;
    const chip = (on: boolean) => ({ border: on ? "#e2690f" : "var(--c-line,#d5dce5)", bg: on ? "#04264d" : "var(--c-card,#fff)", fg: on ? "#fff" : "var(--c-head2,#1f3550)" });
    const sugList = [...new Set(a.tipos.flatMap(t => SUG[t] || []))];
    const sugeridos = (sugList.length ? sugList : ["Orlando", "Cancún", "Caribe", "España", "Costa Rica"]).map(l => ({ label: l, toggle: this.toggleIn("dests", l), ...chip(a.dests.includes(l)) }));
    const now = new Date();
    const meses = !s.ready ? [] : Array.from({ length: 12 }, (_, i) => { const d = new Date(now.getFullYear(), now.getMonth() + 1 + i, 1); const key = MESES[d.getMonth()] + " " + d.getFullYear(); return { mes: MESES[d.getMonth()], anio: d.getFullYear(), toggle: this.toggleIn("meses", key), ...chip(a.meses.includes(key)) }; });
    const ciudad = a.ciudad === "Otra" ? (a.ciudadOtra || "Tu ciudad") : a.ciudad;
    const firstDest = a.dests[0] || a.otroDest || (a.tipos[0] && a.tipos[0] !== "Sorpréndanme" ? a.tipos[0] : "");
    const kidsTxt = a.ninos.length ? ", " + a.ninos.length + (a.ninos.length === 1 ? " niño" : " niños") : "";
    const filled = (v: string, d: string) => ({ v: v || d, c: v ? "#fff" : "#6f819a" });
    const sum = this.summary();
    const stepN = s.done ? STEPS.length : st;
    return {
      rootRef: undefined, asidePos: "var(--c-asidepos)",
      stepTitle: s.done ? "Solicitud enviada" : STEPS[st], stepCount: s.done ? "¡Listo!" : "Paso " + (st + 1) + " de " + STEPS.length,
      progress: Math.round((stepN + (s.done ? 0 : 0.5)) / STEPS.length * 100) + "%",
      s0: !s.done && st === 0, s1: !s.done && st === 1, s2: !s.done && st === 2, s3: !s.done && st === 3, s4: !s.done && st === 4, s5: !s.done && st === 5, s6: !s.done && st === 6, s7: !s.done && st === 7, sDone: s.done, showNav: !s.done,
      a,
      tipos: TIPOS.map(t => { const on = a.tipos.includes(t.label); return { ...t, icon: { __html: ICONS[t.label] }, toggle: this.toggleIn("tipos", t.label), border: on ? "#e2690f" : "var(--c-line,#e1e6ee)", bg: on ? "var(--c-tint,#eef2f7)" : "var(--c-card,#fff)", iconBg: on ? "#e2690f" : "#fff1e6", iconFg: on ? "#fff" : "#c95b0b", checkBorder: on ? "#e2690f" : "#c8d0db", checkBg: on ? "#e2690f" : "transparent", check: on ? "✓" : "" }; }),
      sugeridos, setOtroDest: (e: ChangeEvent<HTMLInputElement>) => this.set({ otroDest: e.target.value }),
      meses, toggleFlex: () => this.set({ flex: !a.flex }), flexTrack: a.flex ? "#e2690f" : "#c8d0db", flexKnob: a.flex ? "21px" : "3px", setNoches: (e: ChangeEvent<HTMLInputElement>) => this.set({ noches: +e.target.value }),
      counters: [
        { label: "Adultos", sub: "18 años o más", v: a.adultos, inc: () => this.set({ adultos: a.adultos + 1 }), dec: () => this.set({ adultos: Math.max(1, a.adultos - 1) }) },
        { label: "Niños", sub: "0 a 17 años", v: a.ninos.length, inc: () => this.set({ ninos: [...a.ninos, 6] }), dec: () => this.set({ ninos: a.ninos.slice(0, -1) }) },
        { label: "Mayores de 65", sub: "Abuelos o adultos mayores", v: a.mayores, inc: () => this.set({ mayores: a.mayores + 1 }), dec: () => this.set({ mayores: Math.max(0, a.mayores - 1) }) },
      ],
      hasKids: a.ninos.length > 0,
      kids: a.ninos.map((age, i) => ({ n: i + 1, age, set: (e: ChangeEvent<HTMLSelectElement>) => { const n = [...a.ninos]; n[i] = +e.target.value; this.set({ ninos: n }); } })),
      ages: Array.from({ length: 18 }, (_, i) => ({ v: i, l: i === 0 ? "Menor de 1" : i + (i === 1 ? " año" : " años") })),
      prefs: PREFS.map(l => { const on = a.prefs.includes(l); return { label: l, toggle: this.toggleIn("prefs", l), border: on ? "#e2690f" : "var(--c-line,#e1e6ee)", bg: on ? "var(--c-tint,#eef2f7)" : "var(--c-card,#fff)", fg: "var(--c-head2,#1f3550)", boxBorder: on ? "#e2690f" : "var(--c-line2,#c8d0db)", boxBg: on ? "#e2690f" : "transparent", check: on ? "✓" : "" }; }),
      budgets: config.presupuestos.map(([tier, label]) => { const v = tier === "Aún no sé" ? "Aún no sé" : tier + " (" + label + ")"; const on = a.budget === v; return { tier, label, pick: () => this.set({ budget: v }), border: on ? "#e2690f" : "var(--c-line,#e1e6ee)", bg: on ? "#04264d" : "var(--c-card,#fff)", fg: on ? "#fff" : "var(--c-head,#04264d)", kicker: on ? "#f7a46a" : "#c95b0b" }; }),
      ciudades: ["Monterrey", "Ciudad de México", "Guadalajara", "Saltillo", "Otra"].map(l => ({ label: l, pick: () => this.set({ ciudad: l }), ...chip(a.ciudad === l) })),
      otraCiudad: a.ciudad === "Otra", setCiudadOtra: (e: ChangeEvent<HTMLInputElement>) => this.set({ ciudadOtra: e.target.value }),
      vuelos: ["Sí, con vuelo", "Solo hospedaje", "Aún no sé"].map(l => ({ label: l, pick: () => this.set({ vuelo: l }), ...chip(a.vuelo === l) })),
      medios: ["WhatsApp", "Llamada", "Correo"].map(l => ({ label: l, pick: () => this.set({ medio: l }), ...chip(a.medio === l) })),
      setNombre: (e: ChangeEvent<HTMLInputElement>) => this.set({ nombre: e.target.value }), setTel: (e: ChangeEvent<HTMLInputElement>) => this.set({ tel: e.target.value }), setEmail: (e: ChangeEvent<HTMLInputElement>) => this.set({ email: e.target.value }), setNotas: (e: ChangeEvent<HTMLTextAreaElement>) => this.set({ notas: e.target.value }),
      contactError: s.tried && st === 7 && !this.valid(7),
      pass: { desde: ciudad, desdeCode: CODES[a.ciudad] || "•••", a: firstDest || "Por definir", aCode: CODES[a.dests[0]] || (firstDest ? firstDest.slice(0, 3).toUpperCase() : "???") },
      passFields: [
        { l: "Pasajeros", ...filled(a.adultos + (a.adultos === 1 ? " adulto" : " adultos") + kidsTxt + (a.mayores ? ", " + a.mayores + " mayores" : ""), "") },
        { l: "Estilo", ...filled(a.tipos.join(" · "), "Por elegir") },
        { l: "Fechas", ...filled(a.meses.length ? a.meses.slice(0, 2).join(", ") + (a.meses.length > 2 ? " +" + (a.meses.length - 2) : "") : (a.flex ? "Flexibles" : ""), "Por definir") },
        { l: "Duración", ...filled(st >= 2 || s.done ? a.noches + " noches" : "", "—") },
        { l: "Imprescindible", ...filled(a.prefs.length ? a.prefs.slice(0, 2).join(", ") + (a.prefs.length > 2 ? " +" + (a.prefs.length - 2) : "") : "", "—") },
        { l: "Presupuesto", ...filled(a.budget.split(" (")[0], "—") },
      ],
      folio: s.folio, firstName: (a.nombre || "").split(" ")[0] || "familia", medioTxt: a.medio === "Correo" ? "correo" : a.medio === "Llamada" ? "teléfono" : "WhatsApp",
      sendError: s.sendError,
      waLink: waLink("Hola, envié la cotización " + s.folio + ".\n" + Object.entries(sum).map(([k, v]) => k + ": " + v).join("\n")),
      restart: () => this.setState({ step: 0, a: { ...EMPTY }, folio: newFolio(), done: false, sendError: false, tried: false }),
      back: () => this.setState({ step: Math.max(0, st - 1), tried: false }), backVis: st > 0 ? "visible" : "hidden",
      next: this.next, skip: () => this.setState({ step: st + 1 }), canSkip: [1, 4, 5].includes(st),
      nextLabel: s.sending ? "Enviando…" : st === 7 ? "Enviar solicitud" : "Continuar →",
      nextBg: st === 7 ? "#e2690f" : (this.valid(st) ? "#04264d" : "#9aa7b8"),
      hint: st === 0 && s.tried && !this.valid(0) ? "Elige al menos una opción" : "Presiona Enter ↵",
    };
  }

  render() {
    return <CotShell V={this.vals()} />;
  }
}
