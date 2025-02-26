<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    id: Number,
    descricao: String,
    status: Boolean
})
</script>

<template>
    <v-card title="Tarefa de ID: {{ id }}" text="{{ descricao }}">
        <v-btn prepend-icon="mdi-minus-box" >Excluir</v-btn>
    </v-card>
</template>