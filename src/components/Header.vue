<template>
    <v-app-bar color="transparent" elevation="0" :class="{ 'border-bottom': props.bottomBottom }">
        <template #prepend>
            <v-btn variant="text" width="93" color="white" style="background-color: transparent;" :ripple="false"
                density="compact" class="pl-1 pr-3" height="50" @click="router.go(-1)">
                <v-icon icon="mdi-chevron-left" size="28" />
                <p class="text-h5 ml-n1">Back</p>
            </v-btn>
        </template>
        <v-app-bar-title class=" text-center text-h5">{{ props.title }}</v-app-bar-title>
        <template #append>
            <v-sheet width="93" class=" d-flex align-center justify-end">
                <slot name="right" />
            </v-sheet>
        </template>
    </v-app-bar>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router';

const props = defineProps<{ title: string, bottomBottom?: boolean }>()
const router = useRouter()
</script>
<style lang='scss'>
.v-toolbar.border-bottom {
    box-shadow: 0 1px 0 0 #383838 !important;
}
</style>