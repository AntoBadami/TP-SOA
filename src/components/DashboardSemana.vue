<script setup>
import { ref, onMounted } from 'vue'

const SEMANA_URL = 'https://grafana-fabriziobiondi.duckdns.org/d/fa98846/aire-semana?orgId=1&from=now-7d&to=now&timezone=browser&kiosk=tv'

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
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.dashboard-card:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #edf2f7;
}

.card-header h2 {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #4a5568;
}

.reload-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #a0aec0;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  line-height: 1;
  transition: color 0.15s, background 0.15s;
}
.reload-btn:hover {
  color: #2d3748;
  background: #f7fafc;
}

.frame-container {
  flex: 1;
  position: relative;
  background: #f7fafc;
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
  color: #a0aec0;
  font-size: 0.875rem;
  background: #f7fafc;
  z-index: 1;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e2e8f0;
  border-top-color: #4a5568;
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
  color: #a0aec0;
}

.dashboard-error button {
  padding: 0.5rem 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  color: #4a5568;
  transition: border-color 0.15s, background 0.15s;
}
.dashboard-error button:hover {
  border-color: #cbd5e0;
  background: #f7fafc;
}
</style>
