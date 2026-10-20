# hhfamilytravel.com

Next.js (App Router) en Vercel. La referencia visual es el prototipo v4 (`desing v4/design_handoff_hhfamilytravel/`, fuera de git).

```bash
npm install
cp .env.example .env.local   # llaves (opcionales en local)
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Cómo está hecho

- Las vistas (`components/site/*.tsx`, `components/cotizador/CotShell.tsx`) salieron del HTML del prototipo y conservan sus estilos inline tal cual: medidas, colores y radios son los del diseño. Los `style-hover` del prototipo son clases en `app/hover.css`.
- La lógica está en `components/site/SiteApp.tsx` (sitio) y `components/cotizador/Cotizador.tsx`. El sitio es una sola vista en `app/(site)/layout.tsx` que cambia según la ruta, así los favoritos, filtros y el carrusel se conservan al navegar; cada `page.tsx` solo aporta metadatos.
- Tailwind v4 está disponible (utilidades y `dark:`), sin preflight, para no alterar la base del diseño.
- Modo oscuro: clase `.dark` en `<html>`, guardada en `localStorage` (`hh-theme`). Los colores oscuros están en `app/globals.css`.
- Escritorio/móvil (corte a 1080 px, como el prototipo) con CSS: `.hh-only-desk` / `.hh-only-mobile`.

## Dónde editar

| Qué | Archivo |
|---|---|
| WhatsApp, teléfono, correo, RNT, reseñas de Google, Calendly, anticipo, Instagram, precios, ofertas, presupuestos | `content/config.ts` (busca `PENDIENTE`) |
| Destinos (meses ideales, etiquetas del quiz, coordenadas del clima) | `content/destinos.json` |
| Paquetes, posts, FAQ, políticas, reseñas, viajes realizados, quiz | `content/*.json` |
| Carrusel, intereses, recomendados, servicios de Inicio | `content/inicio.json` |

- `marcarPendientes: true` en `content/config.ts` muestra los avisos "Ejemplo / Pendiente" del diseño.
- Fotos de viajes realizados: rutas en `fotos` de `content/viajes.json` (3 por viaje; pon los archivos en `public/`).

## Rutas API

| Ruta | Qué hace | Variables |
|---|---|---|
| `POST /api/cotizacion` | Correo a hhfamilytravel@gmail.com + fila en Sheets; devuelve el folio | `RESEND_*`, `GOOGLE_*` |
| `GET /api/viaje?folio=HH-1234` | Etapa del viaje para "Mi viaje" | `GOOGLE_*` |
| `POST /api/pago` | Crea la preferencia de Mercado Pago (Checkout Pro) para el anticipo | `MP_ACCESS_TOKEN` |
| `POST /api/pago/webhook` | Pago aprobado → columna Pago y etapa "Viaje reservado" + correo | `MP_*` |
| `POST /api/newsletter` | Fila en la pestaña Newsletter + correo | `RESEND_*`, `GOOGLE_*` |

Hoja de Google: pestaña **Cotizaciones** con estos encabezados en la fila 1, en este orden:

`Fecha · Folio · Etapa · Nombre · WhatsApp · Correo · Prefiere contacto por · Tipo de viaje · Destino · Meses · Noches · Adultos · Niños · Edades niños · Mayores de 65 · Preferencias · Presupuesto · Salida desde · Vuelos · Notas · Pago`

y pestaña **Newsletter** con `Fecha · Correo`. Para avanzar un viaje, cambia la columna Etapa a: Solicitud recibida, Propuesta enviada, Viaje reservado, Documentos listos o ¡Buen viaje!

En Mercado Pago, configura el webhook (evento *Pagos*) a `https://hhfamilytravel.com/api/pago/webhook`.

## Analítica

GA4 (`NEXT_PUBLIC_GA_ID`) y Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`). Eventos: `cotizacion_enviada`, `click_whatsapp` (con la página), `quiz_completado`, `favorito_agregado`, `newsletter_suscrito`.

## Publicar

1. Conecta el repositorio en Vercel y agrega las variables de `.env.example`.
2. En el proveedor del dominio, apunta hhfamilytravel.com a Vercel (registros DNS que te da Vercel).
