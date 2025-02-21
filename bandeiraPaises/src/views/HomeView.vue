<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';

const nomePais = ref('');
const dadosPais = ref(null);

async function buscarPais(pais: string) {
  nomePais.value = pais;
};

watch(nomePais, async(novoNome) => {
  const resposta = await axios.get('https://restcountries.com/v3.1/name/' + novoNome)
  if (resposta.status == 200) {
    dadosPais.value = resposta.data[0];
  }
})
</script>

<template>
  <main>
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field name="name" label="Ex.: Brazil, Germany, Cuba ..." id="id" v-model="nomePais"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-card>
            <v-card-title>EXEMPLOS</v-card-title>
            <div class="exemplos">
              <v-btn @click="buscarPais('Brazil')" variant="tonal" text="BRASIL"/>
              <v-btn @click="buscarPais('Germany')" variant="tonal" text="ALEMANHA"/>
              <v-btn @click="buscarPais('Cuba')" variant="tonal" text="CUBA"/>
              <v-btn @click="buscarPais('Portugal')" variant="tonal" text="PORTUGAL"/>
            </div>
          </v-card> 
        </v-col>
      </v-row>
      <div v-if="dadosPais">
        <v-row justify="center">
          <v-col cols="6">
            <v-card>
              <v-card-title>{{ dadosPais.name.common }}</v-card-title>
              <v-card-text>Capital: {{ dadosPais.capital[0] }}</v-card-text>
              <v-card-text>População: {{ dadosPais.population }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
            <v-card>
              <v-img :src="dadosPais.flags.png" alt="Bandeira"/>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </main>
</template>

<style scoped lang="scss">
  .exemplos {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
  }
</style>