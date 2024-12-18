<script lang="ts" setup>
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

<style lang="scss" scoped>
.card {
  background-color: #dbb73c;
  border-color: #594845;
  margin: 5px;
  padding: 5px;
}
</style>
