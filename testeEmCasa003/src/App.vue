<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/gerenciamento">Gerenciamento</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>RODAPE</footer>
</template>

<style scoped></style>
