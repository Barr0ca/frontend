<script setup lang="ts">
import { ref } from 'vue';

const descricao = ref('');
const status = ref(['Pendente', 'Cocluída']);

function cancelarEvento(evento:Event){
        evento.preventDefault()
    }
</script>

<template>
    <form @submit="cancelarEvento">
        <v-text-field label="Descricão" v-model="descricao"/>
        <v-select label="Status" :itens="status"></v-select>
        <v-btn @click="$emit('postar', descricao, status)">Adicionar Tarefa</v-btn>
    </form>
</template>