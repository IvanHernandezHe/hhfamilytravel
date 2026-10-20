// Límite simple de solicitudes por IP y ruta (en memoria; se reinicia con cada instancia del servidor).
const hits = new Map<string, number[]>();

export function tooMany(req: Request, max = 5, windowMs = 10 * 60_000) {
  const ip = new URL(req.url).pathname + "|" + ((req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "local");
  const now = Date.now();
  const list = (hits.get(ip) || []).filter(t => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  return list.length > max;
}
