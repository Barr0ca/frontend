<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CardContainer, Card } from '@/components/cards/'

type New = {
  id: number
  data: string
  legenda: string
  url: string
}

const mainNews = ref<New[]>([])

function temporario() {
  if (mainNews.value) {
    mainNews.value?.push({
      id: 1,
      data: '09/10/25',
      legenda: 'Botafogo contrata Morata',
      url: '#',
    })
    mainNews.value?.push({
      id: 2,
      data: '07/10/25',
      legenda: 'Ontem: Botafogo 1x0 Palmeiras',
      url: '#',
    })
    mainNews.value?.push({
      id: 3,
      data: '23/09/25',
      legenda: 'Final da Libertadores',
      url: '#',
    })
  }
}

onMounted(temporario)
</script>

<template>
  <h1>Noticias do Botafogo</h1>
  <CardContainer>
    <template v-for="news in mainNews" :key="news.id">
      <Card> </Card>
    </template>
  </CardContainer>
</template>

<style scoped></style>
