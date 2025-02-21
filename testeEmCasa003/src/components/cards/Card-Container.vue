<script setup lang="ts"></script>

<template>
  <section class="card-container albuns">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
