<script setup>
import DashboardDia from './components/DashboardDia.vue'
import DashboardSemana from './components/DashboardSemana.vue'
</script>

<template>
  <main class="app">
    <header class="app-header">
      <h1>Calidad de Aire</h1>
    </header>
    <div class="split-view">
      <DashboardDia />
      <DashboardSemana />
    </div>
  </main>
</template>

<style>
.app {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;
}

.app-header {
  margin-bottom: 1rem;
}

.app-header h1 {
  font-size: 1.5rem;
  font-weight: 600;
}

.split-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: calc(100vh - 5rem);
}

@media (max-width: 768px) {
  .split-view {
    grid-template-columns: 1fr;
    height: auto;
  }

  .split-view > * {
    min-height: 50vh;
  }
}
</style>
