<script setup>
// import FetchUsers from './components/FetchUsers.vue'
import { ref } from 'vue';
import DefineModelExample from './components/DefineModelExample.vue';

const userEmail = ref(null)
</script>

<template>
  <!-- <FetchUsers :total="5" /> -->
  <DefineModelExample v-model="userEmail"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
