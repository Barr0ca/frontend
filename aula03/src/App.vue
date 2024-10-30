<script setup lang="ts">
import { ref, computed } from 'vue'

//criando um novo tipo para representar a Tarefa
type Tarefa = {
  nome: string
  feito: boolean
}

const tarefa = ref('')
const lista = ref<Tarefa[]>([])

const concluido = computed(() => {
  return lista.value.filter(i => i.feito)
})

const naoConcluido = computed(() => {
  return lista.value.filter(i => !i.feito)
})

function cadastrar(evento: Event) {
  evento.preventDefault()

  lista.value.push({
    nome: tarefa.value,
    feito: false,
  })
  // lista.value.push(tarefa.value)
  tarefa.value = ''
}

function remover(indice: number) {
  //remove apenas o elemento na posição index
  lista.value.splice(indice, 1)
  // lista.value = lista.value.filter(i => i != item)
}
</script>

<template>
  <h1>Lista de tarefas</h1>
  <form @submit="cadastrar">
    <input type="text" placeholder="Tarefa" v-model="tarefa" />
  </form>

  <section>
    <div :key="index" v-for="(item, index) in lista">
      <span v-if="item.feito" class="feito">
        {{ item.nome }}
      </span>
      <span v-else>
        {{ item.nome }}
      </span>

      <input type="checkbox" v-model="item.feito" />
      <button @click="remover(index)">x</button>
    </div>
  </section>

  <h2>Para fazer</h2>
  <section>{{ naoConcluido }}</section>

  <h2>Concluído</h2>
  <section>{{ concluido }}</section>
</template>

<style scoped>
.feito {
  color: green;
  text-decoration: line-through;
}
h1 {
  display: block;
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
