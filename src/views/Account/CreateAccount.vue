<template>
    <div class=" w-100 h-100 d-flex flex-column align-center pt-4">
        <Header title="Create Account">
        </Header>
        <div class="w-100 px-8">
            <v-text-field v-model="name" placeholder="Account 1" />
            <linear-btn size="x-large" block @click="goHome">Create Account</linear-btn>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
const router = useRouter()
const name = ref('')
const goHome = () => {
    router.push('/home')
}
</script>
<style lang='scss'></style>