<template>
    <div class=" w-100 h-100 d-flex align-center justify-center">
        <v-sheet maxwidth="408" width="100%" class="mx-auto px-10">
            <p class=" text-h3 text-center  font-weight-bold  mb-10">UNIDOGE</p>
            <p class="text-h5 text-center sub-title">welcome to the Unidoge<br /> Start your crypto</p>
            <linear-btn class="mb-6" block size="x-large" to="/createPassword">Create new wallet</linear-btn>
            <v-btn block size="x-large" to="/createPassword?type=import">I have a wallet</v-btn>
        </v-sheet>
    </div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss'>
.sub-title {
    margin-bottom: 114px;
}
</style>