<template>
    <div class=" w-100 h-100 d-flex flex-column align-center pt-4">
        <Header title="Switch Network" />
        <v-list class="w-100 bg-transparent px-8">
            <v-list-item class="mb-2 py-4 bg-primary rounded" v-for="i in networks" :key="i" @click="onSwitch(i)">
                <v-list-item-title>{{ i }}</v-list-item-title>
                <template #append v-if="activeNet === i">
                    <v-icon icon="mdi-check" />
                </template>
            </v-list-item>
        </v-list>
    </div>
</template>
<script setup lang='ts'>
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const networks = ['UNIDOGE', 'TEST']
const activeNet = ref('UNIDOGE')
const router = useRouter()
const onSwitch = (i: string) => {
    activeNet.value = i
    router.push('/home')
}
</script>
<style lang='scss'></style>