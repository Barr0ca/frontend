<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps ({
    tituloPergunta: String,
})
</script>

<template>
    <div class="card">
        <header class="boxPergunta">
            <h3 class="pergunta">{{props.tituloPergunta}}</h3>
        </header>
        <slot name="respostas"></slot>
    </div>
</template>

<style lang="scss" scoped>
$backgroundPergunta: #3D3D3D;

.boxPergunta {
    display: flex;
}

.pergunta {
    background-color: $backgroundPergunta;
    margin: 3px;
    padding: 5px;
    border-radius: 10px;
    font-family: 'Times New Roman', Times, serif;
    width: 30%;
}
</style>