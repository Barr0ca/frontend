<script setup lang="ts">
import { ref } from 'vue'

const tarefa = ref('')
const lista = ref<string[]>([])

function cadastrar(evento: Event) {
  evento.preventDefault()

  lista.value.push(tarefa.value)
  tarefa.value = ''
}

function remover(item: string) {
  lista.value = lista.value.filter(function (i) {
    return i != item
  })

  lista.value = lista.value.filter(i => {
    return i != item
  })

  lista.value = lista.value.filter(i => i != item)
}
</script>

<template>
  <h1>Lista de tarefas</h1>
  <form @submit="cadastrar">
    <input type="text" placeholder="Tarefa" v-model="tarefa" />
  </form>

  <section>
    <div :key="item" v-for="item in lista">
      {{ item }} <button @click="remover(item)">x</button>
    </div>
  </section>
</template>

<style scoped>
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
