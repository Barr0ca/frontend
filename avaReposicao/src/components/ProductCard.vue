<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(['imagem', 'preco', 'nome','id','descicao'])
</script>

<template>
  <div class="cardProduto">
    <img :src="props.imagem" :alt="props.nome" />
    <h3>{{ props.nome }}</h3>
    <p>{{ props.descicao }}</p>
    <span>R$ {{ props.preco }}</span>
    <div><button @click="$emit('apertou', props.id)">Adicionar ao carrinho</button></div>
  </div>
</template>

<style scoped lang="scss">
$backProduto: rgb(50, 161, 50);

.cardProduto {
  background-color: $backProduto;
  margin: 5px;
  padding: 5px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  box-shadow: 10px 5px 5px black;
  border-radius: 10px;
}

div.cardProduto:hover{
  background-color: rgb(131, 209, 131);
}
</style>
