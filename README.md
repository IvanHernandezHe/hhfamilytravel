# hhfamilytravel.com

Next.js (App Router) + Tailwind CSS v4. Diseño de referencia en `design_handoff_hhfamilytravel/`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # genera el sitio estático en out/
```

Se publica en GitHub Pages con `.github/workflows/deploy.yml` en cada push a `main`. El dominio está en `public/CNAME`.

## Dónde editar

| Qué | Archivo |
|---|---|
| WhatsApp, teléfono, correo, horario, menú | `config/site.ts` |
| Destinos y tarjetas "¿Qué tipo de viaje buscan?" | `content/destinos.ts` |
| Paquetes (incluye, itinerario, precio, fotos) | `content/paquetes.ts` |
| Posts del blog | `content/posts.ts` |
| Colores claro/oscuro (tokens) | `app/globals.css` |

- **Precios:** `price: null` muestra "Próximamente". Al poner un texto (p. ej. `"$24,900 MXN"`) aparece como "Desde … por persona", y el aviso de "Estamos agregando precios" desaparece cuando todos los paquetes tienen precio.
- **Fotos:** temporales de Unsplash vía `next/image` con placeholder rayado. Para usar fotos propias, ponlas en `public/` y cambia la ruta (p. ej. `"/fotos/orlando.jpg"`).
- **Logo:** `components/Logo.tsx` (`variant="horizontal" | "principal" | "isotipo"`), archivos en `public/brand/`. Favicons, manifest (`app/manifest.ts`) usan esos mismos archivos; la imagen para compartir es `public/brand/og.png` (1200×630).
- **Modo oscuro:** clase `.dark` en `<html>` (variante `dark:` de Tailwind), guardado en `localStorage` (`hh-theme`); sin preferencia guardada sigue al sistema.
- **Formulario de contacto:** al enviar abre WhatsApp con un mensaje prellenado con los datos capturados (número en `config/site.ts`).
