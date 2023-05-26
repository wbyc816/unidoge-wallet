<template>
    <div class=" w-100 h-100 d-flex flex-column align-center pt-4">
        <Header title="Switch Account">
            <template #right>
                <v-btn icon="mdi-plus-circle" color="white" to="/createAccount" />
            </template>
        </Header>
        <div class="w-100 px-8">
            <div class="d-flex align-center px-4 py-4 mb-2 account-box" v-for="i in 2" :key="i">
                <v-icon icon="mdi-check-circle" />
                <div class="flex-1-0 ml-3">
                    <p class="text-h6 mb-1">Account {{ i + 1 }}</p>
                    <p class="text-secondary">hfjkjkf..ffff(mm,/88'/0'/0'/0')</p>
                </div>
                <v-btn variant="text" density="compact">
                    <v-icon icon="mdi-dots-horizontal" color="white" size="large" />
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item value="edit" @click="goEdit">
                                <v-list-item-title>Edit Name</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="copy" @click="onCopy">
                                <v-list-item-title>Copy Address</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </div>
        </div>

    </div>
</template>
<script setup lang='ts'>
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const onCopy = () => {

}
const goEdit = () => {
    router.push('/editName');
}
</script>
<style lang='scss'>
.account-box {
    background: #37364E;
    border-radius: 5px;
}
</style>