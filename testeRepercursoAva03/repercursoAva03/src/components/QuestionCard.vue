<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps ({
  tituloPergunta: String,
})
</script>

<template>
  <div>
    <header class="Pergunta">
      <h2>{{ props.tituloPergunta }}</h2>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
$corPergunta: grey;
.Pergunta {
  background-color: $corPergunta;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>