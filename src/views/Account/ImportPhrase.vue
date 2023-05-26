<template>
    <div class=" w-100 h-100 d-flex flex-column align-center pt-4">
        <Header title="Restore from mnemonics" />
        <v-form validate-on="submit" @submit.prevent="submit" class="d-flex flex-column align-center px-8">
            <p class="text-h4 font-weight-bold mb-5">Secret Recovery Phrase</p>
            <p class="text-h6 font-weight-bold mb-5 text-center px-8" style="color:#9D99C2">Import an existing wallet with
                your 12 word secret recovery phrase</p>
            <phrase-input-list v-model="phraseList" />
            <linear-btn size="x-large" :disabled="!isSaved" type="submit" width="403" class="mt-8">Import
                wallet</linear-btn>
        </v-form>
    </div>
</template>
<script setup lang='ts'>
import Header from '@/components/Header.vue';
import PhraseInputList from '@/components/PhraseInputList.vue';
import { reactive } from 'vue';
import { ref } from 'vue';
import { CopyText } from '@/utils'
import { useRouter } from 'vue-router';
const isSaved = ref(false)
const phraseList = ref(new Array(12).fill(''))
const router = useRouter()
const submit = () => {
    router.push('/home')
}
</script>
<style lang='scss'>
.copy-box {
    width: 264px;
}
</style>