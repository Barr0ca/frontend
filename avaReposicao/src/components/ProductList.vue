<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps (['title']) 
</script>

<template>
    <div class="Produtos">
        <h2>{{ props.title }}</h2>

        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
</style>