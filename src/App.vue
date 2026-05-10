<script setup>
import DashboardDia from './components/DashboardDia.vue'
import DashboardSemana from './components/DashboardSemana.vue'
</script>

<template>
  <div class="app">
    <header class="app-header">
      <div class="header-content">
        <div class="header-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--icon-stroke)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
        </div>
        <div>
          <h1>Calidad de Aire</h1>
          <p class="header-sub">Monitoreo de datos ambientales</p>
        </div>
      </div>
    </header>
    <main class="split-view">
      <DashboardDia />
      <DashboardSemana />
    </main>
  </div>
</template>

<style>
.app {
  max-width: 1500px;
  margin: 0 auto;
  padding: 1.25rem;
  min-height: 100vh;
}

.app-header {
  margin-bottom: 1.25rem;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-icon {
  font-size: 2rem;
  line-height: 1;
}

.app-header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.header-sub {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: -0.1rem;
}

.split-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  height: calc(100vh - 7rem);
}

@media (max-width: 900px) {
  .split-view {
    grid-template-columns: 1fr;
    height: auto;
  }

  .split-view > * {
    min-height: 60vh;
  }

  .app {
    padding: 1rem;
  }
}
</style>
