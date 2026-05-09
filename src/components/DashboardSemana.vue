<script setup>
</script>

<template>
  <section class="dashboard" aria-label="Dashboard semanal">
    <h2>Semana</h2>
    <div class="frame-placeholder">
      <p>Dashboard semanal — Fase 3</p>
    </div>
  </section>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100%;
}
h2 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}
.frame-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  color: #888;
}
</style>
