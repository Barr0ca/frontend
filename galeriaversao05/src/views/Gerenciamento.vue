<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CardContainer from '../components/cards/Card-Container.vue'
import Card from '../components/cards/Card.vue'
type Foto = {
  id: number
  data: string //cadastro
  legenda: string
  favorito: boolean
  url: string
}

type Album = {
  id: number
  nome: string
  fotos: Array<Foto>
}

const albuns = ref<Album[]>([])

function temporario() {
  if (albuns.value) {
    albuns.value?.push({
      id: 1,
      nome: 'Teste',
      fotos: [],
    })
    albuns.value?.push({
      id: 2,
      nome: 'Segundo álbum',
      fotos: [],
    })
    albuns.value?.push({
      id: 3,
      nome: 'Outro álbum',
      fotos: [],
    })
  }
}

onMounted(temporario)
</script>

<template>
  <h1>Gerenciamento de álbuns</h1>
  <header>
    <button class="adicionar">Adicionar</button>
    <button class="remover">remover</button>
  </header>
  <CardContainer class="albuns">
    <template v-for="album in albuns" :key="album.id">
      <Card :titulo-composto="album.nome" class="album">
        <template v-slot:footer>
          <div>Nome: ...</div>
          <div>Qtd: ...</div>
        </template>
        <div class="exibicao">FOTO</div>
      </Card>
    </template>
  </CardContainer>
</template>

<style scoped lang="scss">
.opcoes {
  display: flex;
}
</style>
