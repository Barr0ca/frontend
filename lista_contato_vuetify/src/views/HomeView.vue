<script setup lang="ts">
import Formulario from '../components/Formulario.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const lista = ref<{ int; string; string }[]>([])

async function cadastrar(nome, email) {
  await axios.post('http://localhost:3000/contatos', {
    nome: nome,
    email: email,
  })
  await listarContatos()
}

async function listarContatos() {
  const resultado = await axios.get('http://localhost:3000/contatos')
  if (resultado.status == 200) {
    lista.value = resultado.data
  }
  // console.log(resultado)
}

async function remover(id) {
  await axios.delete('http://localhost:3000/contatos/' + id)
  await listarContatos()
}

onMounted(listarContatos)
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col class="v-col-6">
        <Formulario @envio="cadastrar" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>Lista de contato</h2>
        <v-table>
          <thead>
            <th>Nome</th>
            <th>E-mail</th>
          </thead>
          <tbody>
            <tr v-for="contato in lista" :key="contato.id">
              <td>{{ contato.nome }}</td>
              <td>{{ contato.email }}</td>
              <td>
                <v-btn @click="remover(contato.id)" prepend-icon="mdi-delete">Remover</v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>
