<template>
    <input
        type="email"
        class="form-control"
        placeholder="E-mail"
        :value="email"
        @input="update($event)"
        :class="{
            'is-valid':
            email.length >= 4 && email.length > 0,
            'is-invalid':
            email.length < 4 && email.length > 0,
        }"  
    />
</template>

<script setup>
const {email} = defineProps({ 
    // modelValue: String
    email: String
})

const emit = defineEmits(['update:email'])

const update = (event) => {
    emit('update:email', event.target.value)
}

</script>