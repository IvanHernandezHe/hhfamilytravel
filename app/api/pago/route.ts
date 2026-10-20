import { config } from "@/content/config";
import { tooMany } from "@/lib/server/limit";

// Anticipo con Mercado Pago Checkout Pro: crea la preferencia y devuelve la URL de pago.
// Variable: MP_ACCESS_TOKEN (credenciales de producción de la cuenta de Mercado Pago).
const TIPOS = ["credit_card", "debit_card", "ticket", "bank_transfer", "atm"];

export async function POST(req: Request) {
  if (tooMany(req, 20)) return Response.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  if (!process.env.MP_ACCESS_TOKEN) return Response.json({ error: "Pagos no configurados" }, { status: 503 });
  let body: any = {};
  try { body = await req.json(); } catch {}
  const folio = /^HH-\d{4}$/.test(String(body.folio || "").toUpperCase()) ? String(body.folio).toUpperCase() : "";
  const paquete = String(body.paquete || "").slice(0, 120);
  const permitidos: string[] = Array.isArray(body.tipos) ? body.tipos.filter((t: string) => TIPOS.includes(t)) : [];
  const origin = new URL(req.url).origin;
  const titulo = "Anticipo HH Family Travel" + (folio ? " · " + folio : paquete ? " · " + paquete : "");

  const pref = {
    items: [{ id: folio || "anticipo", title: titulo, quantity: 1, currency_id: "MXN", unit_price: config.anticipoMXN }],
    external_reference: folio || "sin-folio:" + paquete,
    statement_descriptor: "HH FAMILY TRAVEL",
    payment_methods: { installments: 12, excluded_payment_types: permitidos.length ? TIPOS.filter(t => !permitidos.includes(t)).map(id => ({ id })) : [] },
    back_urls: { success: `${origin}/mi-viaje?pago=ok`, pending: `${origin}/mi-viaje?pago=pendiente`, failure: `${origin}/mi-viaje?pago=error` },
    auto_return: "approved",
    notification_url: `${origin}/api/pago/webhook`,
  };
  const r = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(pref),
  });
  if (!r.ok) { console.error("mp preference", r.status, await r.text()); return Response.json({ error: "No se pudo crear el pago" }, { status: 502 }); }
  const j = await r.json();
  return Response.json({ url: j.init_point });
}
