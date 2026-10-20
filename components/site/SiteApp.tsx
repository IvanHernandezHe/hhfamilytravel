"use client";

// Estado y lógica del sitio, portados del prototipo (HH Family Travel Sitio v4).
// La vista vive en SiteShell y en un componente por página; aquí solo se calculan sus valores.
import { Component, createRef, type ChangeEvent, type FormEvent, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { config, waLink } from "@/content/config";
import destinosData from "@/content/destinos.json";
import paquetesData from "@/content/paquetes.json";
import postsData from "@/content/posts.json";
import faqData from "@/content/faq.json";
import polData from "@/content/politicas.json";
import resenasData from "@/content/resenas.json";
import viajesData from "@/content/viajes.json";
import inicio from "@/content/inicio.json";
import quizQ from "@/content/quiz.json";
import { track } from "@/lib/analytics";
import { parsePath, pathFor, type Page } from "@/lib/routes";
import { applyTheme, isDark } from "@/lib/theme";
import SiteShell from "./SiteShell";

const destinos = destinosData;
const paquetes = paquetesData.map(p => ({ ...p, price: config.precios[p.slug] ?? "Próximamente" }));
const DN = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MN = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const ETAPAS: [string, string][] = [
  ["Solicitud recibida", "Recibimos tu cotización con todos los detalles."],
  ["Propuesta enviada", "Te enviamos 2 o 3 opciones con precio total."],
  ["Viaje reservado", "Vuelos, hotel y actividades confirmados."],
  ["Documentos listos", "Itinerario, boletos y vouchers en tu WhatsApp y correo."],
  ["¡Buen viaje!", "Te acompañamos durante todo el viaje."],
];
const PAGO_TIPOS: Record<string, string[]> = { Tarjeta: ["credit_card", "debit_card"], SPEI: ["bank_transfer"], OXXO: ["ticket"], "Mercado Pago": [] };
const pad2 = (n: number) => String(n).padStart(2, "0");
const ymd = (d: Date) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

type Trk = { folio: string; etapa: number; titulo: string; sub: string; real: boolean } | null;
type Props = { page: Page; guia: number; pkg: number; navigate: (href: string) => void };
type State = {
  wx: Record<string, any>; agDia: number; agHora: string; agBooked: boolean; pagoOpen: boolean; pagoM: string; pagando: boolean; pagoError: boolean;
  rev: number; searchOpen: boolean; q: string; folioQ: string; folioSearched: string; trk: Trk; trkNone: boolean; vf: string; viaje: string;
  favs: string[]; qz: string[]; cal: number; faq: number; pol: string; sub: boolean; exitOpen: boolean; menuOpen: boolean;
  bq: { dest: string; mes: string; ad: string; ni: string }; rec: number; gal: number; pfiltro: string; bcat: string; filtro: string;
  slide: number; prog: number; paused: boolean; perfil: string[]; dark: boolean; scrolled: boolean; now: number | null;
};

class SiteApp extends Component<Props, State> {
  state: State = {
    wx: {}, agDia: -1, agHora: "", agBooked: false, pagoOpen: false, pagoM: "Tarjeta", pagando: false, pagoError: false,
    rev: 0, searchOpen: false, q: "", folioQ: "", folioSearched: "", trk: null, trkNone: false, vf: "Todos", viaje: "",
    favs: [], qz: [], cal: -1, faq: -1, pol: "Formas de pago", sub: false, exitOpen: false, menuOpen: false,
    bq: { dest: "Disney y parques", mes: "Fechas flexibles", ad: "2", ni: "1" }, rec: 0, gal: 0, pfiltro: "Todos", bcat: "Todos", filtro: "Todos",
    slide: 0, prog: 0, paused: false, perfil: [], dark: false, scrolled: false, now: null,
  };
  rowRef = createRef<HTMLDivElement>();
  mainRef = createRef<HTMLElement>();
  searchRef = createRef<HTMLInputElement>();
  timer?: ReturnType<typeof setInterval>;
  io?: IntersectionObserver;
  onKeyS = (e: KeyboardEvent) => {
    const t = e.target as HTMLElement;
    if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(t.tagName))) { e.preventDefault(); this.openSearch(); }
    if (e.key === "Escape") this.setState({ searchOpen: false, viaje: "", exitOpen: false, menuOpen: false, pagoOpen: false });
  };
  onResize = () => { if (window.innerWidth >= 1080 && this.state.menuOpen) this.setState({ menuOpen: false }); };
  onOut = (e: globalThis.MouseEvent) => {
    if (e.clientY <= 0 && !e.relatedTarget) {
      let seen = false;
      try { seen = sessionStorage.getItem("hh-exit") === "1"; sessionStorage.setItem("hh-exit", "1"); } catch {}
      if (!seen) this.setState({ exitOpen: true });
    }
  };
  onScroll = () => { const sc = window.scrollY > 420; if (sc !== this.state.scrolled) this.setState({ scrolled: sc }); };
  onClickWa = (e: globalThis.MouseEvent) => {
    const a = (e.target as HTMLElement).closest?.("a[href*='wa.me']");
    if (a) track("click_whatsapp", { pagina: window.location.pathname });
  };

  componentDidMount() {
    let favs: string[] = [];
    try { favs = JSON.parse(localStorage.getItem("hh-favs") || "[]"); } catch {}
    this.setState({ favs, dark: isDark(), now: Date.now(), cal: new Date().getMonth() });
    window.addEventListener("keydown", this.onKeyS);
    window.addEventListener("resize", this.onResize);
    document.addEventListener("mouseout", this.onOut);
    document.addEventListener("click", this.onClickWa, true);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.onScroll();
    this.syncTimer();
    this.setupReveal();
    if (this.props.page === "guia") this.loadWx(destinos[this.props.guia].name);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyS);
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("mouseout", this.onOut);
    document.removeEventListener("click", this.onClickWa, true);
    window.removeEventListener("scroll", this.onScroll);
    clearInterval(this.timer);
    this.io?.disconnect();
  }
  componentDidUpdate(pp: Props, ps: State) {
    const moved = pp.page !== this.props.page || pp.guia !== this.props.guia || pp.pkg !== this.props.pkg;
    if (moved) {
      this.syncTimer();
      if (this.props.page === "guia") this.loadWx(destinos[this.props.guia].name);
      this.mainRef.current?.animate?.([{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "none" }], { duration: 480, easing: "cubic-bezier(.2,.7,.2,1)" });
    }
    this.setupReveal();
    if (ps.favs !== this.state.favs) { try { localStorage.setItem("hh-favs", JSON.stringify(this.state.favs)); } catch {} }
    if (ps.qz.length < quizQ.length && this.state.qz.length >= quizQ.length) track("quiz_completado", { destino: this.quizRanked()[0].name });
  }

  // El carrusel y la cuenta regresiva solo existen en Inicio: ahí corre el reloj.
  syncTimer() {
    clearInterval(this.timer);
    if (this.props.page === "inicio") this.timer = setInterval(this.tick, 100);
  }
  tick = () => {
    if (this.state.paused) { this.setState({ now: Date.now() }); return; }
    this.setState(s => { const p = s.prog + 0.1 / 6; return p >= 1 ? { prog: 0, slide: (s.slide + 1) % inicio.hero.length, now: Date.now() } : { prog: p, slide: s.slide, now: Date.now() }; });
  };
  setupReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (!this.io) this.io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const t = e.target as HTMLElement; t.style.opacity = "1"; t.style.transform = "none"; this.io!.unobserve(t); } }), { threshold: 0.12 });
    document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-rv])").forEach(el => {
      el.setAttribute("data-rv", "");
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return;
      el.style.opacity = "0"; el.style.transform = "translateY(32px)"; el.style.transition = "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)";
      this.io!.observe(el);
    });
  }
  loadWx(name: string) {
    if (!name || this.state.wx[name]) return;
    const c = destinos.find(d => d.name === name)?.coords; if (!c) return;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${c[0]}&longitude=${c[1]}&current=temperature_2m,weather_code&daily=temperature_2m_max&timezone=auto&forecast_days=5`)
      .then(r => r.json()).then(j => this.setState(s => ({ wx: { ...s.wx, [name]: j } }))).catch(() => {});
  }

  openSearch = () => { this.setState({ searchOpen: true, menuOpen: false }); setTimeout(() => this.searchRef.current?.focus(), 60); };
  toggleFav = (k: string) => () => this.setState(s => {
    const on = s.favs.includes(k);
    if (!on) track("favorito_agregado", { item: k.slice(2) });
    return { favs: on ? s.favs.filter(x => x !== k) : [...s.favs, k] };
  });
  setSlide = (i: number) => this.setState({ slide: (i + inicio.hero.length) % inicio.hero.length, prog: 0 });
  scrollRow = (dir: number) => () => { const el = this.rowRef.current; if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" }); };
  togglePerfil = (l: string) => () => this.setState(s => ({ perfil: s.perfil.includes(l) ? s.perfil.filter(x => x !== l) : [...s.perfil, l] }));
  toggleTheme = () => { const dark = !this.state.dark; applyTheme(dark, true); this.setState({ dark }); };
  go = (page: Page, extra: Partial<State> & { guia?: number; pkg?: number } = {}) => () => {
    const { guia, pkg, ...rest } = extra;
    this.setState({ gal: 0, menuOpen: false, ...rest } as State);
    this.props.navigate(pathFor(page, { guia, pkg }));
    try { window.scrollTo(0, 0); } catch {}
  };
  quizRanked() {
    const qz = this.state.qz;
    return destinos.map((d, i) => ({ ...d, i, score: (d.type === qz[1] ? 5 : 0) + qz.filter(t => d.quizTags.includes(t)).length })).sort((a, b) => b.score - a.score);
  }
  buscarFolio = async () => {
    const f = this.state.folioQ.trim().toUpperCase();
    this.setState({ folioSearched: f, trk: null, trkNone: false });
    if (!f) return;
    let mine: any = null;
    try { mine = JSON.parse(localStorage.getItem("hh-cotizador") || "null"); } catch {}
    const local = mine && mine.folio === f && mine.done ? mine.a : null;
    const fromLocal = (etapa: number) => ({
      folio: f, etapa, real: false,
      titulo: "Viaje de " + ((local.nombre || "").split(" ")[0] || "tu familia") + (local.dests && local.dests[0] ? " a " + local.dests[0] : ""),
      sub: local.adultos + " adultos · " + local.ninos.length + " niños · " + local.noches + " noches",
    });
    try {
      const r = await fetch("/api/viaje?folio=" + encodeURIComponent(f));
      if (r.ok) { const j = await r.json(); this.setState({ trk: { folio: f, etapa: j.etapa, titulo: j.titulo, sub: j.sub, real: true } }); return; }
      if (r.status === 404 && !local) { this.setState({ trkNone: true }); return; }
    } catch {}
    if (local) this.setState({ trk: fromLocal(0) });
    else if (config.marcarPendientes && f === "HH-1234") this.setState({ trk: { folio: f, etapa: 2, titulo: "Familia G. · Orlando", sub: "2 adultos · 2 niños · 7 noches", real: false } });
    else this.setState({ trkNone: true });
  };
  pagar = async (e: MouseEvent) => {
    e.preventDefault();
    if (this.state.pagando) return;
    const { page, pkg } = this.props;
    this.setState({ pagando: true, pagoError: false });
    try {
      const r = await fetch("/api/pago", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folio: this.state.trk?.folio || "", paquete: page === "detalle" ? paquetes[pkg].name : "", tipos: PAGO_TIPOS[this.state.pagoM] }),
      });
      const j = await r.json();
      if (r.ok && j.url) { window.location.href = j.url; return; }
    } catch {}
    this.setState({ pagando: false, pagoError: true });
  };
  subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.querySelector("input") as HTMLInputElement | null)?.value || "";
    this.setState({ sub: true });
    track("newsletter_suscrito");
    try { await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) }); } catch {}
  };

  vals() {
    const s = this.state;
    const { page } = this.props;
    const items: [Page, string][] = [["inicio", "Inicio"], ["destinos", "Destinos"], ["paquetes", "Paquetes"], ["nosotros", "Nosotros"], ["viajes", "Viajes"], ["blog", "Blog"], ["contacto", "Contacto"]];
    const nav = items.map(([k, label]) => {
      const on = k === page || (k === "paquetes" && page === "detalle") || (k === "destinos" && page === "guia");
      return { label, go: this.go(k), bg: on ? "var(--hh-hover,#eef2f7)" : "transparent", fg: on ? "var(--hh-head,#1f3550)" : "var(--hh-muted,#4b5a6e)" };
    });
    const hero = inicio.hero;
    const sl = s.slide, cur0 = hero[sl];
    const slides = hero.map((x, i) => ({ ...x, tintOp: x.tint && i === sl ? 0.9 : 0, op: i === sl ? 1 : 0, tf: i === sl ? "scale(1)" : "scale(1.08)", wtf: i === sl ? "translateY(0)" : "translateY(40px)", thumbOp: i === sl ? 1 : 0.6, pw: (i === sl ? Math.round(s.prog * 100) : i < sl ? 100 : 0) + "%", pick: () => this.setSlide(i) }));
    const cur = { ...cur0, num: pad2(sl + 1), cotHref: "/cotizar?tipo=" + encodeURIComponent(({ Parques: "Disney y parques", Playa: "Playa", Cruceros: "Crucero", Europa: "Europa", Naturaleza: "Naturaleza" } as Record<string, string>)[cur0.filtro] || ""), wa: waLink("Hola, me interesa cotizar: " + cur0.title), go: this.go("destinos", { filtro: cur0.filtro }) };
    const perfiles = inicio.perfiles.map(l => { const on = s.perfil.includes(l); return { label: l, toggle: this.togglePerfil(l), bg: on ? "var(--hh-head,#1f3550)" : "transparent", fg: on ? "var(--hh-bg,#fff)" : "var(--hh-head,#1f3550)", border: on ? "var(--hh-head,#1f3550)" : "var(--hh-line2,#c8d0db)" }; });
    const perfilWa = waLink(s.perfil.length ? "Hola, queremos planear un viaje. Viajamos: " + s.perfil.join(", ") + "." : "Hola, queremos planear un viaje en familia.");
    const tiposMap: [string, string, string][] = [["Parques temáticos", "Parques", "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=700&q=70&auto=format&fit=crop"], ["Cruceros", "Cruceros", "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=700&q=70&auto=format&fit=crop"], ["Playa todo incluido", "Playa", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=70&auto=format&fit=crop"], ["Europa en familia", "Europa", "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=700&q=70&auto=format&fit=crop"]];
    const chipColors = (on: boolean) => ({ bg: on ? "var(--hh-head,#1f3550)" : "transparent", fg: on ? "var(--hh-bg,#fff)" : "var(--hh-head,#1f3550)", border: on ? "var(--hh-head,#1f3550)" : "var(--hh-line2,#d5dce5)" });
    const mk = <K extends keyof State>(arr: string[], cur: string, key: K) => arr.map(l => ({ label: l, pick: () => this.setState({ [key]: l } as unknown as State), ...chipColors(l === cur) }));
    const filtros = mk(["Todos", "Parques", "Playa", "Cruceros", "Europa", "Naturaleza"], s.filtro, "filtro");
    const pk = paquetes[this.props.pkg];
    const g = destinos[this.props.guia];
    const galSrc = [pk.img, pk.g2, pk.g3];
    const favOf = (k: string) => ({ fav: this.toggleFav(k), favFill: s.favs.includes(k) ? "currentColor" : "none", favColor: s.favs.includes(k) ? "#e2690f" : "#04264d" });

    // Clima (Open-Meteo)
    const wx = (() => {
      const j = s.wx[g.name];
      const W = (c: number) => c === 0 ? "Despejado" : c <= 3 ? "Parcialmente nublado" : c <= 48 ? "Neblina" : c <= 67 ? "Lluvia" : c <= 77 ? "Nieve" : c <= 82 ? "Chubascos" : "Tormenta";
      if (!j || !j.current) return { temp: "—", desc: "Cargando clima…", days: [] as { l: string; t: string }[] };
      return { temp: Math.round(j.current.temperature_2m) + "°", desc: W(j.current.weather_code), days: (j.daily.time || []).slice(1, 5).map((t: string, i: number) => ({ l: DN[new Date(t + "T12:00").getDay()], t: Math.round(j.daily.temperature_2m_max[i + 1]) + "°" })) };
    })();

    // Agenda de videollamada (abre Calendly con la fecha elegida)
    const agenda = (() => {
      const days: Date[] = [];
      if (s.now) { const d0 = new Date(s.now); for (let i = 1; days.length < 6; i++) { const d = new Date(d0.getFullYear(), d0.getMonth(), d0.getDate() + i); if (d.getDay() !== 0) days.push(d); } }
      const on = (a: boolean) => ({ border: a ? "var(--hh-head,#1f3550)" : "var(--hh-line,#e6eaf0)", bg: a ? "var(--hh-head,#1f3550)" : "var(--hh-card,#fff)", fg: a ? "var(--hh-bg,#fff)" : "var(--hh-head,#1f3550)" });
      const ready = s.agDia >= 0 && !!s.agHora;
      const sel = s.agDia >= 0 ? days[s.agDia] : null;
      const calendlyUrl = sel ? `${config.calendlyUrl}?month=${ymd(sel).slice(0, 7)}&date=${ymd(sel)}` : config.calendlyUrl;
      return {
        agDias: days.map((d, i) => ({ l: DN[d.getDay()], s: d.getDate() + " " + MN[d.getMonth()], pick: () => this.setState({ agDia: i }), ...on(i === s.agDia) })),
        agHoras: ["10:00", "11:30", "13:00", "16:00", "17:30", "18:30"].map(t => ({ l: t, pick: () => this.setState({ agHora: t }), ...on(t === s.agHora) })),
        agendar: () => { if (ready) { this.setState({ agBooked: true }); window.open(calendlyUrl, "_blank", "noopener"); } },
        agBtnBg: ready ? "#e2690f" : "#9aa7b8", agBtnLabel: ready ? "Agendar videollamada" : "Elige día y hora",
        calBooked: s.agBooked, calNotBooked: !s.agBooked,
        agResumen: sel ? DN[sel.getDay()] + " " + sel.getDate() + " " + MN[sel.getMonth()] + ", " + s.agHora : "",
        calendlyUrl,
      };
    })();

    // Buscador ⌘K
    const search = (() => {
      const norm = (x: string) => (x || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
      const qq = norm(s.q.trim());
      const close = (fn: () => void) => () => { this.setState({ searchOpen: false, q: "" }); fn(); };
      const all = [
        ...destinos.map((d, i) => ({ t: d.name, k: "Destino · " + d.region, img: d.img, hay: d.name + " " + d.region + " " + d.type, go: close(this.go("guia", { guia: i })) })),
        ...paquetes.map((p, i) => ({ t: p.name, k: "Paquete · " + p.nights, img: p.img, hay: p.name + " " + p.type, go: close(this.go("detalle", { pkg: i })) })),
        ...postsData.map(p => ({ t: p.t, k: "Blog · " + p.cat, img: p.img, hay: p.t + " " + p.cat, go: close(this.go("blog")) })),
        ...faqData.map((f, i) => ({ t: f.q, k: "Pregunta frecuente", img: "/brand/isotipo.png", hay: f.q + " " + f.a, go: close(this.go("ayuda", { faq: i })) })),
      ];
      const results = qq ? all.filter(r => norm(r.hay).includes(qq)).slice(0, 8) : all.slice(0, 5);
      return { results, noResults: !!qq && results.length === 0 };
    })();

    // Mi viaje (folio)
    const trk = (() => {
      if (s.trkNone) return { show: false, none: true };
      const t = s.trk; if (!t) return { show: false, none: false };
      const stage = t.etapa;
      return {
        show: true, none: false, folio: t.folio, titulo: t.titulo, sub: t.sub,
        tag: t.real ? ETAPAS[Math.min(stage, 4)][0] : (config.marcarPendientes ? "Ejemplo" : "Solicitud recibida"),
        wa: waLink("Hola, quiero saber el estado de mi viaje con folio " + t.folio + "."),
        etapas: ETAPAS.map(([tt, d], i) => ({ t: tt, d, mark: i < stage ? "✓" : i + 1, dot: i < stage ? "#e2690f" : i === stage ? "#04264d" : "var(--hh-card,#fff)", dotFg: i <= stage ? "#fff" : "var(--hh-soft,#5f6c7d)", ring: i <= stage ? "transparent" : "var(--hh-line2,#c8d0db)", line: i === ETAPAS.length - 1 ? "transparent" : i < stage ? "#e2690f" : "var(--hh-line,#e6eaf0)", fg: i <= stage ? "var(--hh-head,#1f3550)" : "var(--hh-soft,#5f6c7d)" })),
      };
    })();

    const ranked = this.quizRanked();
    const qzMk = (d: (typeof ranked)[number]) => ({ ...d, guia: this.go("guia", { guia: d.i }), wa: waLink("Hola, el quiz me recomendó " + d.name + ". ¿Me ayudan a cotizar?") });
    const qi = Math.min(s.qz.length, quizQ.length - 1);

    const countdown = (() => {
      if (!s.now) return ["días", "horas", "min", "seg"].map(l => ({ v: "--", l }));
      const d = Math.max(0, new Date(config.ofertas.fechaLimite).getTime() - s.now);
      const f = (n: number) => pad2(Math.floor(n));
      return [{ v: f(d / 864e5), l: "días" }, { v: f(d / 36e5 % 24), l: "horas" }, { v: f(d / 6e4 % 60), l: "min" }, { v: f(d / 1e3 % 60), l: "seg" }];
    })();

    const allRev = resenasData;
    const cal = s.cal;

    return {
      config,
      servicios: inicio.servicios.map(v => ({ ...v, icon: { __html: v.icon } })),
      wx, ...agenda, ...search, trk,
      pagoOpen: s.pagoOpen, openPago: () => this.setState({ pagoOpen: true, pagoError: false }), closePago: () => this.setState({ pagoOpen: false }),
      pagoConcepto: page === "detalle" ? pk.name : (s.folioSearched ? "Folio " + s.folioSearched : "Tu viaje"),
      pagoMetodos: [["Tarjeta", "Crédito o débito · hasta 12 meses sin intereses"], ["SPEI", "Transferencia bancaria"], ["OXXO", "Pago en efectivo"], ["Mercado Pago", "Saldo o cuenta"]].map(([l, st]) => ({ l, s: st, pick: () => this.setState({ pagoM: l }), border: l === s.pagoM ? "#009ee3" : "var(--hh-line,#e6eaf0)", dot: l === s.pagoM ? "#009ee3" : "transparent" })),
      mpUrl: "#", pagar: this.pagar, pagoLabel: s.pagando ? "Conectando con Mercado Pago…" : "Pagar con Mercado Pago", pagoError: s.pagoError,
      anticipoTxt: "$" + config.anticipoMXN.toLocaleString("en-US") + " MXN",
      gRating: config.google.rating, gCount: config.google.count, gBars: config.google.bars.map(([n, w]) => ({ n, w })),
      gUrl: config.google.url, gReviewUrl: config.google.reviewUrl,
      revVisible: [0, 1].map(k => { const r: any = allRev[(s.rev + k) % allRev.length]; const n: string = r.n; return { ...r, ini: n.split(" ")[1] ? n.split(" ")[1][0] : n[0], color: ["#e2690f", "#1f3550", "#3a7d5c", "#7a4fa0"][(s.rev + k) % 4], fecha: r.fecha || "Hace 2 meses" }; }),
      revPrev: () => this.setState({ rev: (s.rev + allRev.length - 1) % allRev.length }), revNext: () => this.setState({ rev: (s.rev + 1) % allRev.length }),
      searchOpen: s.searchOpen, openSearch: this.openSearch, closeSearch: () => this.setState({ searchOpen: false }), searchRef: this.searchRef, q: s.q, setQ: (e: ChangeEvent<HTMLInputElement>) => this.setState({ q: e.target.value }),
      tabs: ([["Inicio", "home", "inicio"], ["Destinos", "map", "destinos"], ["Cotizar", "plus", "cotizar"], ["Favoritos", "heart", "favs"], ["WhatsApp", "wa", "wa"]] as const).map(([l, ic, k]) => {
        const on = k === page;
        const icons = { home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>', map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>', plus: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>', heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>', wa: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>' };
        return {
          l, icon: { __html: icons[ic] }, bg: on ? "var(--hh-tint,#f1f4f8)" : "transparent", fg: k === "cotizar" || k === "wa" ? "#e2690f" : on ? "var(--hh-head,#1f3550)" : "var(--hh-soft,#5f6c7d)",
          go: () => {
            if (k === "cotizar") this.props.navigate("/cotizar");
            else if (k === "wa") { track("click_whatsapp", { pagina: window.location.pathname }); window.open(waLink("Hola, quiero información para un viaje en familia."), "_blank"); }
            else if (k === "favs") this.go("paquetes")();
            else this.go(k)();
          },
        };
      }),
      footPad: "var(--hh-footpad)", favLeft: "var(--hh-favleft)", favBottom: "var(--hh-favbottom)",
      isMiViaje: page === "mi-viaje", goMiViaje: this.go("mi-viaje"), folioQ: s.folioQ, setFolioQ: (e: ChangeEvent<HTMLInputElement>) => this.setState({ folioQ: e.target.value }), buscarFolio: this.buscarFolio,
      viajes: viajesData.map(v => ({ ...v, open: () => this.setState({ viaje: v.id }), vis: s.vf === "Todos" || v.tipo === s.vf ? "flex" : "none", wa: waLink("Hola, vi el viaje a " + v.lugar + " en su página y quiero uno así.") })),
      viaje: (() => { const v = viajesData.find(x => x.id === s.viaje); return v ? { ...v, wa: waLink("Hola, vi el viaje a " + v.lugar + " en su página y quiero uno así.") } : null; })(),
      showPend: config.marcarPendientes,
      verDisp: config.mostrarVerificado ? "inline-flex" : "none",
      closeViaje: () => this.setState({ viaje: "" }), isViajes: page === "viajes", goViajes: this.go("viajes"),
      vfiltros: mk(["Todos", "Parques", "Playa", "Cruceros", "Europa", "Naturaleza"], s.vf, "vf"),
      mainRef: this.mainRef, goQuiz: this.go("quiz", { qz: [] }), isQuiz: page === "quiz",
      hasFavs: s.favs.length > 0, favCount: s.favs.length + (s.favs.length === 1 ? " favorito" : " favoritos"), clearFavs: () => this.setState({ favs: [] }),
      favWa: waLink("Hola, me gustaría cotizar estos viajes que guardé: " + s.favs.map(k => k.slice(2)).join(", ") + "."),
      waFloat: waLink(page === "detalle" ? "Hola, tengo dudas sobre el paquete " + pk.name + "." : page === "guia" ? "Hola, quiero información para viajar a " + g.name + "." : page === "paquetes" ? "Hola, me interesan sus paquetes familiares." : page === "destinos" ? "Hola, quiero ideas de destinos para viajar en familia." : page === "blog" ? "Hola, leí su blog y tengo una pregunta." : "Hola, quiero información para un viaje en familia."),
      waFloatLabel: page === "detalle" ? "¿Dudas sobre este paquete?" : page === "guia" ? "Pregunta por " + g.name : page === "paquetes" ? "¿Te ayudamos a elegir?" : "¿Dudas? Escríbenos",
      calMeses: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"].map((l, i) => ({ l, pick: () => this.setState({ cal: i }), border: i === cal ? "var(--hh-head,#1f3550)" : "var(--hh-line,#e6eaf0)", bg: i === cal ? "var(--hh-head,#1f3550)" : "var(--hh-card,#fff)", fg: i === cal ? "var(--hh-bg,#fff)" : "var(--hh-head,#1f3550)", dot: [6, 11].includes(i) ? "#e2690f" : "transparent" })),
      calTitle: cal < 0 ? "" : ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][cal],
      calNote: cal < 0 ? "" : [6, 11].includes(cal) ? "· Temporada alta: reserva con anticipación" : [3].includes(cal) ? "· Semana Santa: reserva con anticipación" : "· Buena época para encontrar disponibilidad",
      calDest: destinos.filter(d => d.meses.includes(cal)).map(d => ({ ...d, go: this.go("guia", { guia: destinos.indexOf(d) }), ...favOf("d:" + d.name) })),
      qzAsking: s.qz.length < quizQ.length, qzDone: s.qz.length >= quizQ.length,
      qzDots: quizQ.map((_, i) => i <= s.qz.length ? "#e2690f" : "var(--hh-line,#e6eaf0)"),
      qzNum: "Pregunta " + Math.min(s.qz.length + 1, quizQ.length) + " de " + quizQ.length,
      qzQ: quizQ[qi],
      qzOpts: quizQ[qi].o.map(([l, d, v]) => ({ l, d, pick: () => this.setState({ qz: [...s.qz, v] }) })),
      qzBack: () => this.setState({ qz: s.qz.slice(0, -1) }), qzBackVis: s.qz.length ? "visible" : "hidden", qzRestart: () => this.setState({ qz: [] }),
      qzTop: qzMk(ranked[0]), qzAlt: ranked.slice(1, 3).map(qzMk),
      menuOpen: s.menuOpen, toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      mobileNav: ([["Mi viaje", "mi-viaje"], ["Inicio", "inicio"], ["Destinos", "destinos"], ["Paquetes", "paquetes"], ["Viajes realizados", "viajes"], ["Nosotros", "nosotros"], ["Blog", "blog"], ["Contacto", "contacto"], ["Ayuda", "ayuda"]] as [string, Page][]).map(([label, k]) => ({ label, go: this.go(k) })),
      exitOpen: s.exitOpen, closeExit: () => this.setState({ exitOpen: false }), stop: (e: MouseEvent) => e.stopPropagation(),
      bq: s.bq,
      bqDest: (e: ChangeEvent<HTMLSelectElement>) => this.setState({ bq: { ...s.bq, dest: e.target.value } }),
      bqMes: (e: ChangeEvent<HTMLSelectElement>) => this.setState({ bq: { ...s.bq, mes: e.target.value } }),
      bqAd: (e: ChangeEvent<HTMLSelectElement>) => this.setState({ bq: { ...s.bq, ad: e.target.value } }),
      bqNi: (e: ChangeEvent<HTMLSelectElement>) => this.setState({ bq: { ...s.bq, ni: e.target.value } }),
      bqHref: "/cotizar?" + new URLSearchParams({ tipo: s.bq.dest, mes: s.bq.mes, adultos: s.bq.ad, ninos: s.bq.ni }).toString(),
      socios: config.socios, confianza: config.confianza, countdown,
      ofertasTitulo: config.ofertas.titulo,
      ofertas: config.ofertas.items.map(o => ({ ...o, wa: waLink("Hola, me interesa la oferta: " + o.t) })),
      insta: config.instagram.fotos,
      compCols: paquetes,
      compRows: ([["Duración", p => p.nights], ["Ideal para", p => p.ages], ["Vuelos", p => p.incluye.some(x => /Vuelo/.test(x)) ? "Incluidos" : "Desde Miami"], ["Hospedaje", p => p.hosp], ["Para los niños", p => p.ninos], ["Precio", p => p.price]] as [string, (p: (typeof paquetes)[number]) => string][]).map(([label, fn]) => ({ label, cells: paquetes.map(fn) })),
      isGuia: page === "guia", isAyuda: page === "ayuda", goAyuda: this.go("ayuda"),
      guia: { ...g, wa: waLink("Hola, quiero cotizar un viaje a " + g.name), datos: [{ l: "Mejor época", v: g.epoca }, { l: "Edades ideales", v: g.edades }, { l: "Duración sugerida", v: g.dias }, { l: "Documentos", v: g.docs }] },
      faqs: faqData.map((f, i) => ({ ...f, open: s.faq === i, rot: s.faq === i ? "rotate(45deg)" : "none", toggle: () => this.setState({ faq: s.faq === i ? -1 : i }) })),
      polTabs: Object.keys(polData).map(l => ({ label: l, pick: () => this.setState({ pol: l }), ...chipColors(l === s.pol) })),
      polBody: (polData as Record<string, string[]>)[s.pol],
      notSub: !s.sub, subbed: s.sub, subscribe: this.subscribe,
      recs: inicio.recomendados.map((r, i) => ({ ...r, op: i === s.rec ? 1 : 0, dotW: i === s.rec ? "32px" : "8px", dotBg: i === s.rec ? "#e2690f" : "var(--hh-line2,#c8d0db)", pick: () => this.setState({ rec: i }) })),
      rec: { ...inicio.recomendados[s.rec], wa: waLink("Hola, me interesa: " + inicio.recomendados[s.rec].t) },
      recPrev: () => this.setState({ rec: (s.rec + inicio.recomendados.length - 1) % inicio.recomendados.length }), recNext: () => this.setState({ rec: (s.rec + 1) % inicio.recomendados.length }),
      pfiltros: mk(["Todos", "Parques", "Playa", "Cruceros", "Europa"], s.pfiltro, "pfiltro"),
      bfiltros: mk(["Todos", "Consejos", "Cruceros", "Playa", "Europa", "Documentos"], s.bcat, "bcat"),
      gal: galSrc.map((src, i) => ({ src, op: i === s.gal ? 1 : 0, border: i === s.gal ? "#fff" : "rgba(255,255,255,.3)", pick: () => this.setState({ gal: i }) })),
      pkgWa: waLink("Hola, me interesa el paquete: " + pk.name),
      destCount: destinos.filter(d => s.filtro === "Todos" || d.type === s.filtro).length,
      mosaico: destinos.slice(0, 6),
      siempre: ["Asesoría personal de principio a fin", "Itinerario por escrito", "Opciones según tu presupuesto", "Seguro de viaje recomendado", "Asistencia por WhatsApp durante el viaje"],
      hdrPos: "fixed", hdrTf: s.scrolled ? "none" : "translateY(-110%)",
      heroNav: ([["Destinos", "destinos"], ["Paquetes", "paquetes"], ["Viajes", "viajes"], ["Nosotros", "nosotros"], ["Blog", "blog"], ["Contacto", "contacto"]] as [string, Page][]).map(([label, k]) => ({ label, go: this.go(k), bg: (k === page || (k === "paquetes" && page === "detalle")) ? "rgba(255,255,255,.22)" : "transparent" })),
      slides, cur, total: pad2(hero.length), prev: () => this.setSlide(sl - 1), next: () => this.setSlide(sl + 1), pause: () => this.setState({ paused: true }), resume: () => this.setState({ paused: false }),
      intereses: inicio.intereses.map(x => ({ ...x, go: this.go("destinos", { filtro: x.f }) })), rowRef: this.rowRef, rowPrev: this.scrollRow(-1), rowNext: this.scrollRow(1), perfiles, perfilWa,
      nav, filtros, rootRef: undefined, toggleTheme: this.toggleTheme, themeLabel: s.dark ? "Modo claro" : "Modo oscuro",
      isInicio: page === "inicio", isDestinos: page === "destinos", isPaquetes: page === "paquetes",
      isDetalle: page === "detalle", isNosotros: page === "nosotros", isBlog: page === "blog", isContacto: page === "contacto",
      goHome: this.go("inicio"), goDestinos: this.go("destinos"), goPaquetes: this.go("paquetes"),
      tipos: tiposMap.map(([label, f, img]) => ({ label, img, go: this.go("destinos", { filtro: f }) })),
      pasos: [
        { n: "01", t: "Una conversación", d: "Por WhatsApp o teléfono: quiénes viajan, fechas, presupuesto y qué disfrutan." },
        { n: "02", t: "Una propuesta clara", d: "Dos o tres opciones con vuelos, hospedaje y precio total. Sin costos ocultos." },
        { n: "03", t: "Acompañamiento en el viaje", d: "Si hay un retraso o un cambio, nos escribes y lo resolvemos." },
      ],
      destinos: destinos.filter(d => s.filtro === "Todos" || d.type === s.filtro).map(d => ({ ...d, go: this.go("guia", { guia: destinos.indexOf(d) }), ...favOf("d:" + d.name) })),
      paquetes: paquetes.map((p, i) => ({ ...p, ...favOf("p:" + p.name), go: this.go("detalle", { pkg: i }), wa: waLink("Hola, me interesa el paquete: " + p.name) })).filter(p => s.pfiltro === "Todos" || p.type === s.pfiltro),
      pkg: pk,
      valores: [
        { n: "01", t: "Trato personal", d: "Una sola persona lleva tu viaje de principio a fin y conoce a tu familia." },
        { n: "02", t: "Precios claros", d: "Te damos el total desde el inicio, con todo lo que incluye y lo que no." },
        { n: "03", t: "Siempre disponibles", d: "Durante el viaje respondemos por WhatsApp ante cualquier imprevisto." },
      ],
      posts: postsData.filter(p => s.bcat === "Todos" || p.cat === s.bcat),
    };
  }

  render() {
    return <SiteShell V={this.vals()} />;
  }
}

export default function Site() {
  const pathname = usePathname();
  const router = useRouter();
  const { page, guia, pkg } = parsePath(pathname || "/");
  return <SiteApp page={page} guia={guia} pkg={pkg} navigate={href => router.push(href, { scroll: false })} />;
}
