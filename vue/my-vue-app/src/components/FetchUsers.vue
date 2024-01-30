<script setup="props">
import { ref } from 'vue'
import User from './User.vue';

const apiUrl = 'https://randomuser.me/api/'
const userList = ref(null)

const props = defineProps({
  total: Number,
})

console.log(props)

const fetchUsers = async (amount) => {
    const users = []
    for(let i=0; i<amount; i++){
        await fetch(apiUrl).then(async user=> {
            return await user.json()
        }).then(userData => {
            users.push(userData)
        })
    }

    console.log(users)
    userList.value = users
    return users
}

fetchUsers(props.total)

</script>

<template>
  <div>
    <h1>Fetch {{ users }} users</h1>

    <div v-for="user in userList" :key="user.info.seed">
      <User :user="user" />
    </div>
  </div>
</template>

<style scoped>
</style>
