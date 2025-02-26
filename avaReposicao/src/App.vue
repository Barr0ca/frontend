<script setup lang="ts">
import ProductList from './components/ProductList.vue';
import ProductCard from './components/ProductCard.vue';
import { produtos } from './dados';
import { ref } from 'vue'

const produtosCarrinho = ref<number[]>([])

function adicionarCarrinho(produto: number) {
  produtosCarrinho.value.push(produto)
}
</script>

<template>
  <div id="app">
    
    <header>
      <h1>Loja Virtual de Produtos Tecnológicos</h1>
    </header>

    <main>
      carrinho{{ produtosCarrinho }}
      <ProductList title="Produtos em Destaque">
        <ProductCard v-for="produto in produtos" 
        :key="produto.id" 
        :nome="produto.nome" 
        :imagem="produto.imagem" 
        :preco="produto.preco"

        @apertou="adicionarCarrinho(produto.id)"
        />
      </ProductList>
    </main>

    <footer>
      <p>&copy; 2025 Loja Virtual. Todos os direitos reservados.</p>
    </footer>

  </div>
</template>

<style scoped lang="scss"></style>
