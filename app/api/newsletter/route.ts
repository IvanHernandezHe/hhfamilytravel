import { emailConfigured, sendEmail, tableHtml } from "@/lib/server/email";
import { tooMany } from "@/lib/server/limit";
import { appendRow, sheetsConfigured } from "@/lib/server/sheets";

// Suscripción del pie de página: fila en la pestaña "Newsletter" de la hoja y aviso por correo.
export async function POST(req: Request) {
  if (tooMany(req)) return Response.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  let email = "";
  try { email = String((await req.json()).email || "").trim().slice(0, 160); } catch {}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Correo inválido" }, { status: 400 });
  const fecha = new Date().toLocaleString("es-MX", { timeZone: "America/Monterrey" });
  const jobs: Promise<unknown>[] = [];
  if (sheetsConfigured()) jobs.push(appendRow({ Fecha: fecha, Correo: email }, "Newsletter", ["Fecha", "Correo"]));
  if (emailConfigured()) jobs.push(sendEmail({ subject: "Nueva suscripción al newsletter", html: tableHtml("Nueva suscripción", { Correo: email, Fecha: fecha }) }));
  const res = await Promise.allSettled(jobs);
  res.forEach(r => r.status === "rejected" && console.error("newsletter", r.reason));
  return Response.json({ ok: res.some(r => r.status === "fulfilled") });
}
