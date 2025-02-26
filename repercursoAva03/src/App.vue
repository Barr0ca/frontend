<script setup lang="ts">
import { perguntas } from '@/dados'
import QuestionCard from './components/QuestionCard.vue'
import AnswerOptions from './components/AnswerOptions.vue'
</script>

<template>
  <div>
    <header><h1>Quiz Interativo</h1></header>
    <template v-for="pergunta in perguntas" :key="pergunta.id">
      <QuestionCard :titulo-pergunta="pergunta.pergunta">
        <template #respostas>
          <AnswerOptions :titulo-resposta="pergunta.respostas"></AnswerOptions>
        </template>
      </QuestionCard>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
