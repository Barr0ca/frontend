<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import TaskList from './components/TaskList.vue';
  import TaskForm from './components/TaskForm.vue';

  type Tarefas = {
    id: number,
    descricao: string,
    status: boolean
  }

  const listaTarefas = ref<Tarefas[]>([])

  async function listarTarefas() {
    const retorno = await axios.get('http://localhost:3000/tarefas')
    if (retorno.status == 200) {
      listaTarefas.value = retorno.data
    }
  }

  async function postarTarefa(descricao: string) {
    await axios.post("http://localhost:3000/tarefas", {
      descricao: descricao,
    })
    await listarTarefas()
  }

  async function deletarTarefa(id: number) {
    await axios.delete(`http://localhost:3000/tarefas/${id}`)
    await listarTarefas()
  }

  onMounted(listarTarefas)
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <TaskForm @postar="postarTarefa"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <TaskList/>
      </v-col>
    </v-row>
  </v-container>
</template>
