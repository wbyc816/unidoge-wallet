<template>
    <div class="w-100 h-100 d-flex flex-column align-center pt-4">
        <Header title="Send Doge" bottom-bottom />
        <div class="w-100 text-h6 px-8">
            <p class="mb-7">Send Transction</p>
            <div class="d-flex align-center justify-space-between mb-7">
                <p class="text-body-1">Send to</p>
                <p>bc1p0...asd4s</p>
            </div>
            <div class="d-flex align-center justify-space-between mb-12">
                <p class="text-body-1 flex-1-0">Spend amount</p>
                <p class="text-body-2 mr-3 text-secondary">0.0023(network fee)</p>
                <p class="text-h5">0.125</p>
            </div>
            <v-tabs v-model="activeTab" density="compact" color="#F05C48" class="mb-7">
                <v-tab v-for="tab in tabs" :key="tab.value" :value="tab.value" class="text-body-1">{{ tab.label }}</v-tab>
            </v-tabs>
            <div v-if="activeTab === 'DATA'">
                <p class="mb-4">INPUTS:</p>
                <div class="text-body-1 d-flex align-center pl-4 pr-2 data-box mb-6">
                    <p class=" flex-1-0">Bc1pp...sdnt2</p>
                    <p class="d-flex align-center justify-center sign-tag">to sign</p>
                    <div class="d-flex justify-end flex-1-0">
                        <p class="mr-4">0.235566</p>
                        <p class="text-secondary">DOGE</p>
                    </div>
                </div>
                <p class="mb-4">OUTPUTS:</p>
                <div class="text-body-1 d-flex align-center pl-4 pr-2 data-box text-secondary mb-6">
                    <p class=" flex-1-0">Bc1pp...sdnt2</p>
                    <div class="d-flex justify-end flex-1-0">
                        <p class="mr-4">0.235566</p>
                        <p>DOGE</p>
                    </div>
                </div>
            </div>
            <div v-else>
                <p class="mb-3 text-body-1">PSBT HEX DATA: 264 BYTES</p>
                <div class="hex-box text-body-1">
                    ff1ffffffffffffffffffksjfkdlsjdshfdsklfdsfdsfhdjkslhfdjklshfjkdlsfjdshufldshjklfhdsjklfhdjkslhfjkdlshjfkldhsjkfldhsjklfhdsjkfhdslfhdjsklfdsfds
                </div>
                <Copy content="xxxxxx" class="d-flex align-center  justify-center text-body-1 py-2 text-secondary">
                    <v-icon icon="mdi-clipboard" size="small" color="secondary" class="mr-2" />
                    Copy psbt transaction data
                </Copy>
            </div>
            <linear-btn size="x-large" type="submit" width="456" class="bottom-btn">Sign&Send</linear-btn>
        </div>
    </div>
</template>
<script setup lang='ts'>
import Copy from '@/components/Copy.vue';
import Header from '@/components/Header.vue';
import { ref } from 'vue';
const tabs = [{ label: 'DATA', value: 'DATA' }, { label: 'HEX', value: 'HEX' },]
const activeTab = ref('DATA')
</script>
<style lang='scss'>
.data-box {
    height: 55px;
    background: #37364E;
    border-radius: 5px;
}

.sign-tag {
    width: 73px;
    height: 30px;
    color: #F05C48;
    border: 1px solid #F05C48;
    border-radius: 5px;
}

.hex-box {
    word-break: break-all;
    padding: 10px;
    background: #37364E;
    border-radius: 5px;
}

.bottom-btn {
    position: fixed;
    left: 50%;
    bottom: 44px;
    transform: translateX(-50%);
}
</style>