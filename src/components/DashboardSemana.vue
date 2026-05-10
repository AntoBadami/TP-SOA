<script setup>
import { ref, computed } from 'vue'

const SEMANA_URL = 'https://grafana-fabriziobiondi.duckdns.org/d/fa98846/aire-semana?orgId=1&from=now-7d&to=now&timezone=browser'

const url = ref(SEMANA_URL)
const loading = ref(true)
const error = ref(false)

const iframeClass = computed(() => ({
  'dashboard-frame': true,
  hidden: loading.value,
}))

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
</script>

<template>
  <section class="dashboard" aria-label="Dashboard semanal">
    <h2>Semana</h2>
    <div v-if="error" class="dashboard-error">
      <p>Dashboard no disponible</p>
      <button @click="recargar">Reintentar</button>
    </div>
    <div v-else class="frame-container">
      <div v-if="loading" class="dashboard-loading" aria-live="polite">Cargando…</div>
      <iframe
        :class="iframeClass"
        :src="url"
        title="Dashboard semanal de calidad de aire"
        @load="onLoad"
        @error="onError"
        allow="fullscreen"
      />
    </div>
    <button class="reload-btn" @click="recargar" title="Recargar dashboard">↻</button>
  </section>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
h2 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}
.frame-container {
  flex: 1;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
.dashboard-frame {
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
}
.dashboard-frame.hidden {
  display: none;
}
.dashboard-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #888;
  background: #eee;
  border-radius: 8px;
}
.dashboard-error {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #888;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.dashboard-error button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}
.dashboard-error button:hover {
  background: #f0f0f0;
}
.reload-btn {
  position: absolute;
  top: 0.25rem;
  right: 0;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #666;
  padding: 0.25rem;
  line-height: 1;
}
.reload-btn:hover {
  color: #222;
}
</style>
