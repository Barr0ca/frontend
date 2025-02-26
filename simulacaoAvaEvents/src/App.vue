<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import CardCadastro from './components/CardCadastro.vue';
  import axios from 'axios';

  type Dados = {
    id: number,
    nome: string,
    email: string,
  }

  const listaDados = ref<Dados[]>([])

  async function cadastrar(nome: string, email: string){
    await axios.post("http://localhost:3000/contatos", {
      nome: nome,
      email: email
    })
    await listarContatos()
  }

  async function listarContatos() {
    const resultado = await axios.get("http://localhost:3000/contatos")
    if (resultado.status == 200){
      listaDados.value = resultado.data
    }
  }

  async function deletarContato(id: number) {
    await axios.delete(`http://localhost:3000/contatos/${id}`)
    await listarContatos()
  }

  onMounted(listarContatos)
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col class="v-col-6">
        <CardCadastro
        @cadastrar="cadastrar"
        class="formulario"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in listaDados" :key="index">
              <td>{{ item.nome }}</td>
              <td>{{ item.email }}</td>
              <td>
                <v-btn variant="tonal" 
                prepend-icon="mdi-minus-box" 
                color="red"
                @click="deletarContato(item.id)">excluir</v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped lang="scss">
</style>
