<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['cadastro'])

const nome = ref('');
const email = ref('');

function Cadastrar() {
  emit('cadastro', nome.value, email.value)
  nome.value = ''
  email.value = ''
}

</script>

<template>
  <h1>Formulário</h1>
  <form @submit.prevent="Cadastrar">
    <div>
      <v-text-field label="Nome" v-model="nome"/>
    </div>
    <div>
      <v-text-field label="Email" v-model="email"/>
    </div>
    <div>
      <v-btn color="success" type="submit">Cadastrar</v-btn>
    </div>
  </form>
</template>