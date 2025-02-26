<script lang="ts" setup>
defineProps ({
    tituloResposta: Array,
})
</script>

<template>
    <div class="cardResposta">
        <ul v-for="(resposta,index) in tituloResposta" :key="index" class="boxRespostas">
            <li class="areaResposta"> {{ resposta }} </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.boxRespostas {
    display: flex;
}

.areaResposta:hover {
    $colorOpcoes: #84B026;

    background-color: $colorOpcoes;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
}
</style>