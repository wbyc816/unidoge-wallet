<template>
    <div class=" w-100 h-100 d-flex flex-column align-center pt-4 pb-2">
        <Header title="Create new wallet" />
        <v-form validate-on="submit" @submit.prevent="submit" class="d-flex flex-column align-center px-8">
            <p class="text-h4 font-weight-bold mb-5">Secret Recovery Phrase</p>
            <p class="text-h6 font-weight-bold mb-5 text-center px-8" style="color:#9D99C2">This phrase is the only way to
                recover your wallet. don't share it with andyone</p>
            <phrase-input-list v-model="phraseList" />
            <v-checkbox hide-details v-model="isSaved" label="I saved my secret recovery phrase" />
            <copy class=" d-flex align-center copy-box text-medium-emphasis " :content="phraseList.join(' ')">
                <v-icon icon="mdi-content-copy" size="20" color="grey" class="mr-2" />
                copy to clipboard
            </copy>
            <linear-btn size="x-large" :disabled="!isSaved" type="submit" maxWidth="403" block class="mt-8">Create new
                wallet</linear-btn>
        </v-form>
    </div>
</template>
<script setup lang='ts'>
import Header from '@/components/Header.vue';
import Copy from '@/components/Copy.vue';
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
const onCopy = () => {
    CopyText(phraseList.value.join(' '))

}
</script>
<style lang='scss'>
.copy-box {
    max-width: 264px;
}
</style>