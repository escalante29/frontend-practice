<template>
    <h1 class="text-3xl font-bold underline">DefineModel example</h1>
    <input 
    type="email" 
    name="email" 
    id="user-email"
    v-model="email">
</template>

<script setup>
    const email = defineModel({required: true})
</script>

<style scoped>
</style>