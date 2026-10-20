import { createHmac, timingSafeEqual } from "node:crypto";
import { config } from "@/content/config";
import { emailConfigured, sendEmail, tableHtml } from "@/lib/server/email";
import { ETAPAS, findByFolio, sheetsConfigured, updateCells } from "@/lib/server/sheets";

// Webhook de Mercado Pago: cuando un anticipo queda aprobado, marca el pago en Sheets,
// avanza la etapa a "Viaje reservado" y avisa por correo.
// Variables: MP_ACCESS_TOKEN y MP_WEBHOOK_SECRET (clave secreta de la sección Webhooks).

function validSignature(req: Request, dataId: string) {
  const secret = process.env.MP_WEBHOOK_SECRET;
  if (!secret) return true;
  const sig = req.headers.get("x-signature") || "";
  const parts = Object.fromEntries(sig.split(",").map(p => p.trim().split("=") as [string, string]));
  if (!parts.ts || !parts.v1) return false;
  const manifest = `id:${dataId.toLowerCase()};request-id:${req.headers.get("x-request-id") || ""};ts:${parts.ts};`;
  const expected = createHmac("sha256", secret).update(manifest).digest("hex");
  return expected.length === parts.v1.length && timingSafeEqual(Buffer.from(expected), Buffer.from(parts.v1));
}

export async function POST(req: Request) {
  const url = new URL(req.url);
  let body: any = {};
  try { body = await req.json(); } catch {}
  const type = body.type || url.searchParams.get("type") || url.searchParams.get("topic");
  const id = String(body?.data?.id || url.searchParams.get("data.id") || url.searchParams.get("id") || "");
  if (type !== "payment" || !id) return new Response(null, { status: 200 });
  if (!validSignature(req, id)) return new Response("firma inválida", { status: 401 });
  if (!process.env.MP_ACCESS_TOKEN) return new Response(null, { status: 200 });

  const r = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(id)}`, { headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` } });
  if (!r.ok) return new Response(null, { status: 500 }); // Mercado Pago reintenta
  const pay = await r.json();
  if (pay.status !== "approved") return new Response(null, { status: 200 });

  const folio = String(pay.external_reference || "");
  const monto = `$${Number(pay.transaction_amount || config.anticipoMXN).toLocaleString("en-US")} MXN`;
  try {
    if (sheetsConfigured() && /^HH-\d{4}$/.test(folio)) {
      const hit = await findByFolio(folio);
      if (hit && !hit.data["Pago"].includes(id)) {
        const etapa = Math.max(ETAPAS.indexOf(hit.data["Etapa"]), 2);
        await updateCells(hit.row, { Pago: `Anticipo ${monto} · MP ${id}`, Etapa: ETAPAS[etapa] });
      }
    }
    if (emailConfigured()) {
      await sendEmail({ subject: `Anticipo pagado ${folio || ""} · ${monto}`, html: tableHtml("Anticipo recibido en Mercado Pago", { Folio: folio || "—", Monto: monto, "ID de pago": id, Pagador: pay.payer?.email || "—", Concepto: pay.description || "—" }) });
    }
  } catch (e) {
    console.error("mp webhook", e);
    return new Response(null, { status: 500 });
  }
  return new Response(null, { status: 200 });
}
