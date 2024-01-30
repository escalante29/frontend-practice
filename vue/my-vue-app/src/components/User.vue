<script setup>
    // do something
    defineProps({
        user: {
            type: Object,
            default: {}
        }
    })
</script>

<template>
    <pre>{{ JSON.stringify(user, null, 2) }}</pre>
</template>

<style scoped>
    pre {
        width: calc(100vh - 10rem);
        border: solid 2px darkgoldenrod;
        white-space: pre-wrap;
        height: 250px;
        padding: 1rem;
        background-color: bisque;
        overflow-y: scroll;
        color: black;
        text-align: left;
    }
</style>
