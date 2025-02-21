<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  tituloComposto: String,
})
</script>

<template>
  <div class="card">
    <header>
      <h3>{{ props.tituloComposto }}</h3>
    </header>
    <slot></slot>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.card {
  background-color: #ed2860;
  border-color: black;
  margin: 5px;
  padding: 5px;
}
</style>
