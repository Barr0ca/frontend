<script setup lang="ts">
  import { defineEmits } from 'vue';

  const emit = defineEmits(['fechar'])

  defineProps({
    nome: String,
    email: String,
    flag: Boolean
  });

  function Fechar() {
    emit('fechar')
  };
</script>
<template>

  <v-card color="primary">
    <v-card-title>Contato Selecionado</v-card-title>
    <v-card-text>
      <p><strong>Nome: </strong>{{ nome }}</p>
      <p><strong>Email: </strong>{{ email }}</p>
    </v-card-text>
    <v-card-title primary-title>
      <v-btn @click="Fechar" variant="tonal">Fechar</v-btn>
    </v-card-title>
  </v-card>

</template>