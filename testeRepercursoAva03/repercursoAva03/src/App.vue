<script lang="ts" setup>
import { perguntas } from './dados'
import QuestionCard from './components/QuestionCard.vue'
import AnswerOptions from './components/AnswerOptions.vue';
</script>

<template>
  <template v-for="pergunta in perguntas" :key="pergunta.id">
    <QuestionCard :titulo-pergunta="pergunta.pergunta" class="pergunta"> 
      <AnswerOptions :respostas="pergunta.respostas"></AnswerOptions>
    </QuestionCard>
  </template>
</template>

<style scoped lang="scss">
</style>
