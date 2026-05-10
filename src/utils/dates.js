export function getHoy() {
  const d = new Date()
  return formatDate(d)
}

export function getManiana() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return formatDate(d)
}

function formatDate(d) {
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

export function getDashboardDiaUrl() {
  const hoy = getHoy()
  const maniana = getManiana()
  const base = 'https://grafana-fabriziobiondi.duckdns.org/d/fagfnz4/aire-detalle-dia'
  const params = new URLSearchParams({
    'orgId': '1',
    'var-dia': hoy,
    'from': `${hoy}T03:00:00.000Z`,
    'to': `${maniana}T03:00:00.000Z`,
    'timezone': 'browser',
    'kiosk': 'tv',
  })
  return `${base}?${params.toString()}`
}
