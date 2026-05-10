<script setup>
import { ref, onMounted } from 'vue'

const SEMANA_URL = 'https://grafana-fabriziobiondi.duckdns.org/d/fa98846/aire-semana?orgId=1&from=now-7d&to=now&timezone=browser&kiosk=tv&embed=true&refresh=0'

const url = ref(SEMANA_URL)
const loading = ref(true)
const error = ref(false)

function onLoad() {
  loading.value = false
}

function onError() {
  loading.value = false
  error.value = true
}

function recargar() {
  url.value = SEMANA_URL
  loading.value = true
  error.value = false
}

onMounted(() => {
  setTimeout(() => {
    if (loading.value) {
      loading.value = false
    }
  }, 10000)
})
</script>

<template>
  <section class="dashboard-card" aria-label="Dashboard semanal">
    <div class="card-header">
      <h2>Semana</h2>
      <button class="reload-btn" @click="recargar" title="Recargar dashboard">↻</button>
    </div>
    <div v-if="error" class="dashboard-error">
      <p>Dashboard no disponible</p>
      <button @click="recargar">Reintentar</button>
    </div>
    <div v-else class="frame-container">
      <div v-if="loading" class="dashboard-loading"><span class="spinner"></span> Cargando…</div>
      <iframe
        class="dashboard-frame"
        :src="url"
        title="Dashboard semanal de calidad de aire"
        loading="lazy"
        @load="onLoad"
        @error="onError"
        allow="fullscreen"
      />
    </div>
  </section>
</template>

<style scoped>
.dashboard-card {
  background: var(--bg-card);
  border-radius: 12px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.dashboard-card:hover {
  box-shadow: var(--shadow-card-hover);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-card);
}

.card-header h2 {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
}

.reload-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--text-muted);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  line-height: 1;
  transition: color 0.15s, background 0.15s;
}
.reload-btn:hover {
  color: var(--hover-text);
  background: var(--hover-bg);
}

.frame-container {
  flex: 1;
  position: relative;
  background: var(--bg-frame);
}

.dashboard-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.dashboard-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  background: var(--bg-frame);
  z-index: 1;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--spinner-border);
  border-top-color: var(--spinner-top);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.dashboard-error {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  color: var(--text-muted);
}

.dashboard-error button {
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--btn-border);
  border-radius: 8px;
  background: var(--btn-bg);
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: border-color 0.15s, background 0.15s;
}
.dashboard-error button:hover {
  border-color: var(--error-border);
  background: var(--hover-bg);
}
</style>
