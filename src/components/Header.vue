<template>
    <v-app-bar color="transparent" elevation="0">
        <template #prepend>
            <v-btn variant="text" width="93" color="white" style="background-color: transparent;" :ripple="false"
                density="compact" class="pl-1 pr-3" height="50" @click="router.go(-1)">
                <v-icon icon="mdi-chevron-left" size="28" />
                <p class="text-h5 ml-n1">Back</p>
            </v-btn>
        </template>
        <v-app-bar-title class=" text-center text-h5">{{ props.title }}</v-app-bar-title>
        <template #append>
            <v-sheet width="93" />
        </template>
    </v-app-bar>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router';

const props = defineProps<{ title: string }>()
const router = useRouter()
</script>
<style lang='scss'></style>