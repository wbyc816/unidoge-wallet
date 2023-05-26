<template>
    <div class=" w-100 h-100 d-flex flex-column align-center pt-4">
        <Header title="Send Doge" bottom-bottom />
        <v-form class="w-100 px-8 text-h6" validate-on="submit" @submit.prevent="submit">
            <div class="d-flex align-center mb-1">
                <p class="input-title">Send to</p>
                <v-text-field v-model="address" color="white" placeholder="address. did..."
                    :rules="[value => !!value || 'Address is required']" />
            </div>
            <div class="d-flex align-center justify-space-between mb-2">
                <p>Banlance</p>
                <p>12.231454 Doge</p>
            </div>
            <div class="d-flex align-center justify-space-between mb-7">
                <p class=" flex-1-0">Available</p>
                <v-btn size="small" color="#37364E" class=" text-h6 mr-1 max-btn">Max</v-btn>
                <p>12.231454 Doge</p>
            </div>
            <div class="d-flex align-center mb-12">
                <p class="input-title">Amount</p>
                <v-text-field v-model="amount" type="number"
                    :rules="[value => Number(value) > 0 || 'Amount has to be greater than 0']" color="white" />
            </div>
            <p class="mb-6">Fee</p>
            <div class=" d-flex align-center justify-space-between mb-2">
                <div class="fee-box text-center px-2" :class="{ checked: activeFee === index }"
                    v-for="(item, index) in feeList" :key="index" @click="activeFee = index">
                    <p class="" v-if="item.type === 'custom'">Custom</p>
                    <template v-else>
                        <p class="mb-2">{{ item.label }}</p>
                        <p class="mb-2 text-body-2">{{ item.value }} Doge</p>
                        <p class="text-body-2 time">About {{ item.time }} minutes</p>
                    </template>
                </div>
            </div>
            <v-text-field v-model="feeList[3].value" type="number" placeholder="DOGE" color="white" hide-details
                v-if="activeFee === 3" />
            <linear-btn size="x-large" type="submit" width="456" class="bottom-btn">Next</linear-btn>
        </v-form>
    </div>
</template>
<script setup lang='ts'>
import Header from '@/components/Header.vue';
import { reactive } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const address = ref('')
const amount = ref(0)
const feeList = reactive([{ type: 'remote', label: 'Slow', value: 0.001, time: 4 }, { type: 'remote', label: 'AVG', value: 0.002, time: 1 }, { type: 'remote', label: 'Fast', value: 0.001, time: 1 }, { type: 'custom', value: '' }])
const activeFee = ref(0)

const submit = () => {
    router.push('/sendConfirm')
}

</script>
<style lang='scss'>
.input-title {
    width: 85px;
    padding-bottom: 22px;
}

.max-btn {
    color: #9A98B9;
}

.fee-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 128px;
    width: 22%;
    background-color: #37364E;
    border-radius: 5px;

    &.checked {
        background-color: #F05C48;

        .time {
            color: #fff;
        }
    }
}

.time {
    color: #9A98B9;
}

.bottom-btn {
    position: fixed;
    left: 50%;
    bottom: 44px;
    transform: translateX(-50%);
}
</style>