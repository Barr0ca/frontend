<script setup lang="ts">
import { ref, computed } from 'vue'

type Tarefa = {
  codigo: number,
  nome: string,
  estado: boolean
}

let incremento = 0
const nomeTarefa = ref('')
const lista = ref<Tarefa[]>([])

const concluido = computed(() => {
  return lista.value.filter(i => i.estado)
})

const naoConcluido = computed(() => {
  return lista.value.filter(i => !i.estado)
})

function cadastrar(evento: Event) {
  evento.preventDefault()

  lista.value.push({
    codigo: incremento,
    nome: nomeTarefa.value,
    estado: false
  })
  incremento++
  nomeTarefa.value = ''
}

function remover(codigo: number) {
  lista.value = lista.value.filter(i => i.codigo != codigo)
}

function limparConcluidas() {
  if (confirm('Caso prossiga todos os itens da lista de "Tarefas Concluídas" serão apagados.'))
  lista.value = lista.value.filter(i => !i.estado)
}

function editarTarefa(codigo: number, novoNome: string) {
  
}

</script>

<template>
  <h1>Lista de Tarefas</h1>
  <form @submit="cadastrar">
    <input type="text" placeholder="Tarefa" v-model="nomeTarefa">
  </form>

  <h2>Tarefas Concluídas</h2>
  <button @click="limparConcluidas()">Limpar Concluídas</button>
  <section>
    <div :key="item.codigo" v-for="(item, index) in concluido">
      <span class="concluido">{{ item.nome }}</span>

      <input type="checkbox" v-model="item.estado">
      <button @click="remover(item.codigo)">x</button>
    </div>
  </section>

  <h2>Tarefas para Fazer</h2>
  <section>
    <div :key="item.codigo" v-for="(item, index) in naoConcluido">
      <span>{{ item.nome }}</span>

      <input type="checkbox" v-model="item.estado"/>
      <button @click="remover(item.codigo)">x</button>
    </div>
  </section>
</template>

<style scoped>
.concluido {
  text-decoration: line-through;
  color: grey;
}
.limparConcluidas {
  display: flex;
  flex-direction: row;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
