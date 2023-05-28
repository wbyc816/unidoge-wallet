<template>
    <div class=" w-100 h-100 d-flex align-center justify-center">
        <v-sheet maxWidth="400" width="100%" class="mx-auto px-6">
            <v-form validate-on="submit" @submit.prevent="submit">
                <p class="text-h3 font-weight-bold text-center mb-8">UNIDOGE</p>
                <p class=" text-h5 text-center  font-weight-bold  mb-10">Enter your Password</p>
                <v-text-field class="mb-3" v-model="password" :type="showPassword ? 'text' : 'password'"
                    placeholder="Password" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-inner="showPassword = !showPassword"></v-text-field>
                <linear-btn type="submit" :disabled="password.length === 0" block size="x-large">Unlock</linear-btn>
            </v-form>
        </v-sheet>
    </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const router = useRouter()
const password = ref('')

const showPassword = ref(false)

const submit = () => {
    router.push('/home')
}
</script>
<style lang='scss'>
.sub-title {
    margin-bottom: 114px;
}
</style>