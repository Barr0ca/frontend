<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  respostas: Array,
})
</script>

<template>
  <ul v-for="(resposta, index) in respostas" :key="index">
    <li class="Resposta">{{ resposta }}</li>
  </ul>
</template>

<style scoped lang="scss">
$corHover: orange;
.Resposta:hover {
  background-color: $corHover;
  border-radius: 10px;
}
</style>
