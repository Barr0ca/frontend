<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">FogaoNews</RouterLink>
    <RouterLink to="/news">Noticias</RouterLink>
    <RouterLink to="">Elenco</RouterLink>
    <RouterLink to="#">Compeonatos</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>RODAPE</footer>
</template>

<style scoped></style>
