// Envío de correo con Resend (API REST, sin dependencias).
// Variables: RESEND_API_KEY y RESEND_FROM (remitente de un dominio verificado en Resend,
// p. ej. "HH Family Travel <cotizaciones@hhfamilytravel.com>"). Sin dominio verificado,
// Resend solo permite "onboarding@resend.dev" y enviar al correo dueño de la cuenta.
import { config } from "@/content/config";

export const emailConfigured = () => !!process.env.RESEND_API_KEY;

const esc = (v: unknown) => String(v ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export function tableHtml(title: string, rows: Record<string, string | number>) {
  const trs = Object.entries(rows).map(([k, v]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #e6eaf0;color:#5f6c7d;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #e6eaf0;color:#14233a">${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("");
  return `<div style="font-family:Arial,sans-serif;max-width:640px"><h2 style="color:#04264d;margin:0 0 12px">${esc(title)}</h2><table style="border-collapse:collapse;width:100%;font-size:14px">${trs}</table></div>`;
}

export async function sendEmail({ subject, html, replyTo, to = config.email }: { subject: string; html: string; replyTo?: string; to?: string }) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.RESEND_FROM || "HH Family Travel <onboarding@resend.dev>", to: [to], subject, html, ...(replyTo ? { reply_to: replyTo } : {}) }),
  });
  if (!r.ok) throw new Error("Resend " + r.status + " " + (await r.text()));
}
