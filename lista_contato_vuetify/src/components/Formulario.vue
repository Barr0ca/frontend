<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { ref, defineEmits } from 'vue'

//Para enviar eventos do trecho de código JS, é necessário a criação
//de um objeto de envdio de eventos
const emit = defineEmits(['envio'])

const nome = ref('')
const email = ref('')

function enviarFormulario() {
  emit('envio', nome.value, email.value)
  nome.value = ''
  email.value = ''
}
</script>

<template>
  <section>
    <h1>Formulário</h1>
    <form @submit.prevent="enviarFormulario">
      <div>
        <v-text-field label="Nome" v-model="nome" />
        <!-- <label for="nome">Nome:</label> -->
        <!-- <input type="text" id="nome" v-model="nome" /> -->
      </div>
      <div>
        <v-text-field label="E-mail" v-model="email" />
        <!-- <label for="nome">E-mail:</label>
        <input type="text" id="email" v-model="email" /> -->
      </div>
      <div>
        <v-btn color="primary" variant="tonal" type="submit">Enviar</v-btn>
      </div>
    </form>
  </section>
</template>
