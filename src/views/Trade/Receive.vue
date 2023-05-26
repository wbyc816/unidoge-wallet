<template>
    <div class=" w-100 h-100 d-flex flex-column align-center pt-4">
        <Header title="Address" />
        <div class="pa-16"></div>
        <p class=" d-flex align-center mb-4 text-h6"><v-icon icon="mdi-account" class="mr-2" /> Account 1</p>
        <Copy content="1xxxxx" class="text-secondary text-body-1">
            <v-icon icon="mdi-clipboard" class="mr-2" /> bcds1...11223ff
        </Copy>
    </div>
</template>
<script setup lang='ts'>
import Copy from '@/components/Copy.vue';
import Header from '@/components/Header.vue';
</script>
<style lang='scss'></style>