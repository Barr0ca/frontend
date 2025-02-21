<script setup lang="ts">
import Formulario from '@/components/Formulario.vue';
import DetalhesContatos from '@/components/DetalhesContatos.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const lista = ref<{ id: number; nome: string; email: string }[]>([]);
const contato = ref<{ id: number; nome: string; email: string } | null>(null);

const flagAlerta = ref(false);
const msgAlerta = ref('')
const msgConfirma = ref('')

async function cadastrar(nome: string, email: string) {
  await axios.post("http://localhost:3000/contatos", {
    nome: nome,
    email: email,
  })
  alertaSucesso('Contato cadastrado com sucesso!')
  await listarContatos();
}

async function listarContatos() {
  const resultado = await axios.get("http://localhost:3000/contatos");
  if (resultado.status == 200) {
    lista.value = resultado.data;
  }
}

async function removerContato(id: number) {
  confirmaDelete('Deseja mesmo deletar esse contato?')
  await axios.delete("http://localhost:3000/contatos/" + id);
  await listarContatos();
}

function mostrarContato(contatoSelecionado: { id: number; nome: string; email: string }){
  contato.value = contatoSelecionado;
}

function alertaSucesso(msg: string) {
  flagAlerta.value = true;
  msgAlerta.value = msg;
  setTimeout(() => {
    flagAlerta.value = false
  }, 3000);
}

function confirmaDelete(msg: string) {
  msgConfirma.value = msg
}

function fecharDetalhes() {
  contato.value = null
}

onMounted(listarContatos)
</script>

<template>
  <v-container>
    <v-row v-if="lista.length == 0">        
      <v-alert type="info">
          Nenhum contato cadastrado!
      </v-alert>
    </v-row>

    <v-row v-if="flagAlerta">
      <v-alert type="success">{{ msgAlerta }}</v-alert>
    </v-row>

    <v-row>
      <v-col>
        <Formulario @cadastro="cadastrar"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>Tabela de Usuários</h2>
        <v-table theme="dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tBody>
            <tr v-for="contato in lista" :key="contato.id">
              <td>{{ contato.nome }}</td>
              <td>{{ contato.email }}</td>
              <td>
                <v-btn @click="removerContato(contato.id)" prepend-icon="mdi-delete" variant="tonal">Remover</v-btn>
              </td>
              <td>
                <v-btn @click="mostrarContato(contato)" variant="tonal">Ver Detalhes</v-btn>
              </td>
            </tr>
          </tBody>
        </v-table>
      </v-col>
    </v-row>

    <v-row v-if="contato">
      <v-col>
        <h2>Contato</h2>
        <DetalhesContatos @fechar="fecharDetalhes" :nome="contato.nome" :email="contato.email"/>
      </v-col>
    </v-row>
  </v-container> 
</template>
