import { ETAPAS, findByFolio, sheetsConfigured } from "@/lib/server/sheets";

// "Mi viaje": etapa de un folio según la columna Etapa de Google Sheets.
export async function GET(req: Request) {
  const folio = (new URL(req.url).searchParams.get("folio") || "").trim().toUpperCase();
  if (!/^HH-\d{4}$/.test(folio)) return Response.json({ error: "Folio inválido" }, { status: 404 });
  if (!sheetsConfigured()) return Response.json({ error: "Seguimiento no configurado" }, { status: 503 });
  try {
    const hit = await findByFolio(folio);
    if (!hit) return Response.json({ error: "No encontrado" }, { status: 404 });
    const d = hit.data;
    const etapa = Math.max(0, ETAPAS.indexOf(d["Etapa"]));
    const destino = d["Destino"] && d["Destino"] !== "Por definir" ? " a " + d["Destino"].split(",")[0] : "";
    return Response.json({
      folio, etapa,
      titulo: "Viaje de " + ((d["Nombre"] || "").split(" ")[0] || "tu familia") + destino,
      sub: `${d["Adultos"] || "?"} adultos · ${d["Niños"] || 0} niños · ${d["Noches"] || "?"} noches`,
    }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("viaje", e);
    return Response.json({ error: "Error al consultar" }, { status: 502 });
  }
}
