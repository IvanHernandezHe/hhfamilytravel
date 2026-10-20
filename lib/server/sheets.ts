import { createSign } from "node:crypto";

// Google Sheets con una cuenta de servicio (sin dependencias).
// Variables: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID.
// Comparte la hoja con el correo de la cuenta de servicio (permiso de editor).

export const ETAPAS = ["Solicitud recibida", "Propuesta enviada", "Viaje reservado", "Documentos listos", "¡Buen viaje!"];

// Encabezados de la pestaña "Cotizaciones" (fila 1). El orden importa.
export const COLUMNAS = ["Fecha", "Folio", "Etapa", "Nombre", "WhatsApp", "Correo", "Prefiere contacto por", "Tipo de viaje", "Destino", "Meses", "Noches", "Adultos", "Niños", "Edades niños", "Mayores de 65", "Preferencias", "Presupuesto", "Salida desde", "Vuelos", "Notas", "Pago"];
const TAB = "Cotizaciones";

export const sheetsConfigured = () => !!(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID);

let cached: { token: string; exp: number } | null = null;
async function token() {
  if (cached && cached.exp > Date.now() + 60_000) return cached.token;
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = b64({ alg: "RS256", typ: "JWT" }) + "." + b64({ iss: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, scope: "https://www.googleapis.com/auth/spreadsheets", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 });
  const key = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
  const sig = createSign("RSA-SHA256").update(unsigned).sign(key).toString("base64url");
  const r = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: unsigned + "." + sig }) });
  if (!r.ok) throw new Error("Google auth " + r.status + " " + (await r.text()));
  const j = await r.json();
  cached = { token: j.access_token, exp: Date.now() + j.expires_in * 1000 };
  return cached.token;
}

async function api(path: string, init: RequestInit = {}) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}${path}`;
  const r = await fetch(url, { ...init, headers: { Authorization: "Bearer " + (await token()), "Content-Type": "application/json", ...(init.headers || {}) }, cache: "no-store" });
  if (!r.ok) throw new Error("Sheets " + r.status + " " + (await r.text()));
  return r.json();
}

const range = (r: string) => encodeURIComponent(`${TAB}!${r}`);
const colLetter = (i: number) => String.fromCharCode(65 + i);

export async function appendRow(row: Record<string, string | number>, tab = TAB, columns = COLUMNAS) {
  // Texto que empieza con = + - @ se guarda como texto, no como fórmula.
  const cell = (v: string | number) => (typeof v === "string" && /^[=+\-@]/.test(v) ? "'" + v : v);
  const values = [columns.map(c => cell(row[c] ?? ""))];
  await api(`/values/${encodeURIComponent(tab + "!A1")}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, { method: "POST", body: JSON.stringify({ values }) });
}

export async function folios(): Promise<string[]> {
  const j = await api(`/values/${range("B2:B")}`);
  return (j.values || []).map((r: string[]) => (r[0] || "").toUpperCase());
}

export async function findByFolio(folio: string): Promise<{ row: number; data: Record<string, string> } | null> {
  const j = await api(`/values/${range("A2:" + colLetter(COLUMNAS.length - 1))}`);
  const rows: string[][] = j.values || [];
  const i = rows.findIndex(r => (r[1] || "").toUpperCase() === folio.toUpperCase());
  if (i < 0) return null;
  return { row: i + 2, data: Object.fromEntries(COLUMNAS.map((c, k) => [c, rows[i][k] || ""])) };
}

export async function updateCells(row: number, patch: Record<string, string>) {
  const data = Object.entries(patch).map(([c, v]) => ({ range: `${TAB}!${colLetter(COLUMNAS.indexOf(c))}${row}`, values: [[v]] }));
  await api(`/values:batchUpdate`, { method: "POST", body: JSON.stringify({ valueInputOption: "USER_ENTERED", data }) });
}
