<template>
  <div class="w-100 h-100">
    <div class="top-header bg-background">
      <div class="d-flex align-center justify-space-between pl-7 pr-5 logo-box">
        <p class="text-h5 font-weight-bold">Unidoge</p>
        <div class="d-flex align-center justify-center network-link pointer" @click="goNet">dogechain <v-icon
            icon="mdi-chevron-down" size="16" />
        </div>
      </div>
      <div class="d-flex align-center justify-space-between pl-7 pr-5 account-box">
        <div class="account-status">Linked</div>
        <div class=" d-flex flex-column align-center text-center ">
          <div class="d-flex align-center text-h6 pointer" @click="goAccount">Account1<v-icon icon="mdi-chevron-down"
              size="24" /></div>
          <copy content="0x4asd...das1" class="d-flex align-center  text-secondary">0x4asd...das1<v-icon
              icon="mdi-content-copy" size="24" />
          </copy>
        </div>
        <div class="d-flex align-center justify-center ">
          <v-btn color="secondary" variant="plain" icon="mdi-cog-outline"></v-btn>
        </div>
      </div>
    </div>
    <div class="px-5 pt-8">
      <div class="account-panel mb-6">
        <div class="d-flex align-center justify-space-between">
          Total Dogecoin <v-btn color="white" variant="plain" :icon="hideDetail ? 'mdi-eye-off' : 'mdi-eye'"
            @click="hideDetail = !hideDetail"></v-btn>
        </div>
        <p class="text-h4 font-weight-bold mb-2">{{ hideDetail ? '*******' : '5.1234 DOGE' }}</p>
        <p class="text-h6 font-weight-bold">{{ hideDetail ? '*******' : '$20.12 USD' }}</p>
      </div>
      <v-row class="mb-5">
        <v-col cols="4">
          <v-btn height="66" color="#37364E" prepend-icon="mdi-qrcode" size="x-large" block to="/receive">
            <template #prepend>
              <v-icon class="mr-n2" />
            </template>
            Receive</v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn height="66" color="#37364E" prepend-icon="mdi-swap-horizontal" size="x-large" block to="/send"><template
              #prepend>
              <v-icon class="mr-n2" />
            </template>Send</v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn height="66" color="#37364E" prepend-icon="mdi-clock-time-four-outline" size="x-large" block><template
              #prepend>
              <v-icon class="mr-n2" />
            </template>History</v-btn>
        </v-col>
      </v-row>
      <v-tabs v-model="activeTab" density="compact" color="#F05C48" class="mb-7">
        <v-tab v-for="tab in tabs" :key="tab.value" class="text-body-1">{{ tab.label }}</v-tab>
      </v-tabs>
      <div class="token-grid">
        <div class="" v-for="i in 20" :key="i">
          <div class="token-content"></div>
          <div class=" d-flex align-center justify-center token-label">Drc-20</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from '@/utils'
import Copy from '@/components/Copy.vue';
const hideDetail = ref(true)
const tabs = [{ label: 'All', value: 'all' }, { label: 'Drc-20', value: 'drc' },]
const activeTab = ref('all')
const router = useRouter()
const goAccount = () => {
  router.push('/switchAccount')
}
const goNet = () => {
  router.push('/switchNetwork')
}
</script>
<style lang="scss">
.top-header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
}

.network-link {
  height: 34px;
  width: 157px;
  border: 1px solid #423A6D;
  border-radius: 20px;
}

.logo-box,
.account-box {
  height: 77px;
  border-bottom: 1px solid #383838;
}

.account-status {
  position: relative;
  padding-left: 24px;
  font-size: 14px;
  line-height: 22px;
  color: #9290B1;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-color: #0FA684;
    border: 4px solid #fff;
    border-radius: 50%;
  }
}

.account-panel {
  height: 155px;
  padding: 10px 28px 0 32px;
  background: linear-gradient(90deg, #1846BA 3.23%, #4CA8B7 100%);
  border-radius: 10px;
}

.token-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 13px;
  grid-column-gap: 23px;
}

.token-content {
  background-color: #37364E;
  height: 130px;
}

.token-label {
  height: 38px;
  background-color: #6A688A;
}
</style>
