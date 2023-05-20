<template>
    <div class=" w-100 h-100 d-flex align-center justify-center">
        <v-sheet width="400" class="mx-auto">
            <v-form validate-on="submit" @submit.prevent="submit">

                <p class=" text-h4 text-center  font-weight-bold  mb-10">Create a Password</p>
                <v-text-field class="mb-3" v-model="password" :type="showPassword ? 'text' : 'password'" :rules="rules"
                    placeholder="Password" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-inner="showPassword = !showPassword"></v-text-field>
                <v-text-field class="mb-8" v-model="cpassword" :type="showPassword1 ? 'text' : 'password'" :rules="rules"
                    placeholder="Confirm Password" :append-inner-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-inner="showPassword1 = !showPassword1"></v-text-field>
                <linear-btn type="submit" block size="x-large">Create new wallet</linear-btn>
            </v-form>
        </v-sheet>
    </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const router = useRouter()
const password = ref('')
const cpassword = ref('')

const showPassword = ref(false)
const showPassword1 = ref(false)
const rules = [
    (value: string) => !!value || 'password is required',
    () => password.value === cpassword.value || 'Two passwords do not match'
]
const submit = () => {
    router.push('/createPhrase')
}
</script>
<style lang='scss'>
.sub-title {
    margin-bottom: 114px;
}
</style>