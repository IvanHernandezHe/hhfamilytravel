import { emailConfigured, sendEmail, tableHtml } from "@/lib/server/email";
import { tooMany } from "@/lib/server/limit";
import { appendRow, ETAPAS, folios, sheetsConfigured } from "@/lib/server/sheets";

// Recibe la solicitud del cotizador: la envía por correo (Resend) y agrega una fila en Google Sheets.
// Responde con el folio definitivo. Si ningún canal funciona responde 502 y el cotizador
// ofrece mandar el resumen por WhatsApp.

const str = (v: unknown, max = 300) => (typeof v === "string" ? v : "").trim().slice(0, max);
const strs = (v: unknown) => (Array.isArray(v) ? v.filter(x => typeof x === "string").map(x => str(x, 80)).slice(0, 20) : []);
const int = (v: unknown, min: number, max: number, d: number) => { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : d; };

export async function POST(req: Request) {
  if (tooMany(req)) return Response.json({ error: "Demasiadas solicitudes. Intenta más tarde." }, { status: 429 });
  let body: any;
  try { body = await req.json(); } catch { return Response.json({ error: "Solicitud inválida" }, { status: 400 }); }
  const a = body?.a || {};
  const nombre = str(a.nombre, 120), tel = str(a.tel, 40), email = str(a.email, 160);
  const tipos = strs(a.tipos);
  if (!nombre || (!tel && !email) || !tipos.length) return Response.json({ error: "Faltan datos de contacto" }, { status: 400 });
  if (!emailConfigured() && !sheetsConfigured()) return Response.json({ error: "Envío no configurado" }, { status: 503 });

  const ninos = (Array.isArray(a.ninos) ? a.ninos : []).slice(0, 15).map((n: unknown) => int(n, 0, 17, 6));
  const adultos = int(a.adultos, 1, 30, 2), mayores = int(a.mayores, 0, 30, 0), noches = int(a.noches, 1, 60, 7);
  const ciudad = str(a.ciudad, 60) === "Otra" ? str(a.ciudadOtra, 80) || "Otra" : str(a.ciudad, 60);
  const dest = [...strs(a.dests), str(a.otroDest, 120)].filter(Boolean).join(", ") || "Por definir";

  // Folio HH-XXXX: el del navegador si es válido y no está repetido; si no, uno nuevo.
  let folio = /^HH-\d{4}$/.test(str(body?.folio)) ? str(body.folio) : "";
  try {
    const used = sheetsConfigured() ? new Set(await folios()) : new Set<string>();
    for (let i = 0; (!folio || used.has(folio)) && i < 50; i++) folio = "HH-" + Math.floor(1000 + Math.random() * 9000);
  } catch (e) {
    console.error("folios", e);
    if (!folio) folio = "HH-" + Math.floor(1000 + Math.random() * 9000);
  }

  const kidsTxt = ninos.length ? ninos.length + " niños (" + ninos.map((n: number) => (n === 0 ? "<1 año" : n + " años")).join(", ") + ")" : "sin niños";
  const resumen: Record<string, string | number> = {
    Folio: folio, Nombre: nombre, WhatsApp: tel || "—", Correo: email || "—", "Prefiere contacto por": str(a.medio, 20) || "WhatsApp",
    "Tipo de viaje": tipos.join(", "), Destino: dest, Meses: (strs(a.meses).join(", ") || "Por definir") + (a.flex ? " (fechas flexibles)" : ""),
    Noches: noches, Viajeros: adultos + " adultos, " + kidsTxt + (mayores ? ", " + mayores + " mayores de 65" : ""),
    Preferencias: strs(a.prefs).join(", ") || "—", Presupuesto: str(a.budget, 80) || "—", "Salida desde": ciudad, Vuelos: str(a.vuelo, 40), Notas: str(a.notas, 2000) || "—",
  };

  const jobs: Promise<unknown>[] = [];
  if (emailConfigured()) {
    jobs.push(sendEmail({ subject: `Nueva cotización ${folio} · ${nombre} · ${dest}`, html: tableHtml("Nueva solicitud de cotización", resumen), replyTo: email || undefined }));
  }
  if (sheetsConfigured()) {
    jobs.push(appendRow({
      ...resumen,
      Fecha: new Date().toLocaleString("es-MX", { timeZone: "America/Monterrey" }),
      Etapa: ETAPAS[0], Adultos: adultos, "Niños": ninos.length, "Edades niños": ninos.join(", "), "Mayores de 65": mayores, Pago: "",
      WhatsApp: tel, Notas: str(a.notas, 2000),
    }));
  }
  const res = await Promise.allSettled(jobs);
  res.forEach(r => r.status === "rejected" && console.error("cotizacion", r.reason));
  if (!res.some(r => r.status === "fulfilled")) return Response.json({ error: "No se pudo enviar", folio }, { status: 502 });
  return Response.json({ ok: true, folio });
}
