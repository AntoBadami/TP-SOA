# Fases — Dashboards de Calidad de Aire

Dashboard semanal: https://grafana-fabriziobiondi.duckdns.org/d/fa98846/aire-semana?orgId=1&from=now-7d&to=now&timezone=browser
Dashboard día:     https://grafana-fabriziobiondi.duckdns.org/d/fagfnz4/aire-detalle-dia?orgId=1&var-dia=2026-05-05&from=2026-05-05T03:00:00.000Z&to=2026-05-06T03:00:00.000Z&timezone=browser

---

## Fase 1 — Estructura + auto-deploy

1. **Scaffold Vue 3 + Vite** con `npm create vue@latest` (sin TypeScript, sin router, mínimo).
2. **Auto-deploy**: configurar GitHub Actions para build estático y deploy a GitHub Pages desde `main`.
   - Workflow: `on push to main` → `npm ci` → `npm run build` → `deploy to gh-pages`.
3. Estructura de archivos:
   ```
   src/
     App.vue              # Layout principal con split-view
     components/
       DashboardSemana.vue
       DashboardDia.vue
     utils/
       dates.js           # Lógica de fechas del browser
   ```

## Fase 2 — Conexión con Grafana

1. Los dashboards están en `grafana-fabriziobiondi.duckdns.org`. Evaluar restricciones de CORS y `X-Frame-Options`.
2. Estrategia de embedding con `<iframe>`:
   - Probar parámetros `?kiosk`, `&embed=true`, `&auth=...` según lo que Grafana requiera.
   - Alternativa: proxy local si el iframe no es viable.
3. **Dashboard semana**: la URL usa `from=now-7d&to=now&timezone=browser` — ya es dinámica, no requiere cambios.
4. **Dashboard día**: la URL tiene `var-dia=2026-05-05` y `from`/`to` fijos. Reemplazar con la fecha actual del browser.
   - `dates.js`: función `getHoy()` → `YYYY-MM-DD`, armar `from` / `to` del día actual.

## Fase 3 — Mostrar los dashboards

1. `App.vue`: layout **split-view 2 columnas** con CSS Grid (50/50).
   - Columna izquierda: Dashboard Día.
   - Columna derecha: Dashboard Semana.
2. Cada `Dashboard*.vue`:
   - `<iframe :src="urlComputed" title="..." loading="lazy" class="dashboard-frame" />`.
   - Estilo: `width: 100%; height: 100vh; border: none;`.
3. Estilo accesible y estándar: `<main>`, `<section>`, `aria-label`, `lang="es"`, fuente sans-serif del sistema, contraste suficiente.

## Fase 4 — Ajustes finales

1. Manejo de errores: mensaje amigable si el iframe no carga.
2. Estado de carga: spinner o skeleton mientras carga el iframe (`@load` + `@error` events).
3. Botón de recarga manual.
4. Verificar que las URLs embed funcionan desde GitHub Pages.
5. `README.md` breve.
6. Actualizar `AGENTS.md` con los comandos del proyecto.
