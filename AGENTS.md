# AGENTS.md — TP-SOA

Vue 3 + Vite project that embeds Grafana dashboards (calidad de aire) via iframes in a split-view layout.

## Comandos

```bash
npm run dev        # Servidor de desarrollo (http://localhost:5173/TP-SOA/)
npm run build      # Build producción a dist/
npm run preview    # Preview del build local
```

## Deploy

GitHub Actions en `.github/workflows/deploy.yml` — push a `main` → build + deploy a GitHub Pages.  
Sitio: https://antobadami.github.io/TP-SOA/

## Estructura

```
src/
  App.vue                    # Layout split-view (2 columnas)
  components/
    DashboardDia.vue         # Iframe dashboard día
    DashboardSemana.vue      # Iframe dashboard semana
  utils/
    dates.js                 # Fechas del browser para URLs de Grafana
```

## URLs de Grafana embed

- Día: `d/fagfnz4/aire-detalle-dia` — fecha dinámica via `getDashboardDiaUrl()`
- Semana: `d/fa98846/aire-semana` — usa `from=now-7d&to=now`

Parámetros de embed: `kiosk=tv&embed=true&refresh=0`

## Notas

- **Idioma:** Todas las respuestas del agente deben ser en español.
- **Modo oscuro:** Soporte automático via `prefers-color-scheme: dark`.
- **GitHub Pages:** `base: '/TP-SOA/'` en `vite.config.js`.
- **Sin TypeScript, sin router.**
