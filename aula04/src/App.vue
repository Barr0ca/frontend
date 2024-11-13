<script setup lang="ts">
import { ref, computed } from 'vue'

//criando um novo tipo para representar a Tarefa
type Tarefa = {
  codigo: number
  nome: string
  feito: boolean
}

let incremento = 0
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
    codigo: incremento,
    nome: tarefa.value,
    feito: false,
  })
  incremento++ //aumenta o valor de incremento em 1
  tarefa.value = ''
}

function remover(codigo: number) {
  //remove apenas o elemento na posição do codigo
  lista.value = lista.value.filter(i => i.codigo != codigo)
}
</script>

<template>
  <h1>Lista de tarefas</h1>
  <form @submit="cadastrar">
    <input type="text" placeholder="Tarefa" v-model="tarefa" />
  </form>

  <h2 :class="{ tarjado: naoConcluido.length == 0 }">Para fazer</h2>
  <section>
    <div :key="item.codigo" v-for="(item, index) in naoConcluido">
      <span>{{ item.nome }}</span>

      <input type="checkbox" v-model="item.feito" />
      <button @click="remover(item.codigo)">x</button>
    </div>
  </section>

  <h2>Concluído</h2>
  <section>
    <div :key="item.codigo" v-for="(item, index) in concluido">
      <span class="feito">{{ item.nome }}</span>

      <input type="checkbox" v-model="item.feito" />
      <button @click="remover(item.codigo)">x</button>
    </div>
  </section>
</template>

<style scoped>
.feito {
  color: green;
  text-decoration: line-through;
}
.tarjado {
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
