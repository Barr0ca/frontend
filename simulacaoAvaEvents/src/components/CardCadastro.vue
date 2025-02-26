<script setup lang="ts">
    import { ref } from 'vue';

    const nome = ref()
    const email = ref()
    function cancelarEvento(evento:Event){
        evento.preventDefault()
    }
    console.log(nome.value)
</script>
<template>
    <form @submit="cancelarEvento">
        <v-text-field label="Nome" v-model="nome"/>
        <v-text-field label="Email" v-model="email"/>
        <v-btn color="primary" variant="tonal" @click="$emit('cadastrar', nome, email)">Cadastrar</v-btn> 
    </form>
</template>
<style scoped lang="scss"></style>