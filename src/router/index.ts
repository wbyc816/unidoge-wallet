// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'switchNetwork',
        name: 'SwitchNetwork',
        component: () => import(/* webpackChunkName: "switchNetwork" */ '@/views/SwitchNetwork.vue'),
      },
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/Account/Welcome.vue'),
      },
      {
        path: 'unlock',
        name: 'Unlock',
        component: () => import(/* webpackChunkName: "unlock" */ '@/views/Account/Unlock.vue'),
      },
      {
        path: 'createPassword',
        name: 'CreatePassword',
        component: () => import(/* webpackChunkName: "createPassword" */ '@/views/Account/CreatePassword.vue'),
      },
      {
        path: 'createPhrase',
        name: 'CreatePhrase',
        component: () => import(/* webpackChunkName: "createPhrase" */ '@/views/Account/CreatePhrase.vue'),
      },
      {
        path: 'importPhrase',
        name: 'ImportPhrase',
        component: () => import(/* webpackChunkName: "importPhrase" */ '@/views/Account/ImportPhrase.vue'),
      },
      {
        path: 'switchAccount',
        name: 'SwitchAccount',
        component: () => import(/* webpackChunkName: "switchAccount" */ '@/views/Account/SwitchAccount.vue'),
      },
      {
        path: 'editName',
        name: 'EditName',
        component: () => import(/* webpackChunkName: "editName" */ '@/views/Account/EditName.vue'),
      },
      {
        path: 'createAccount',
        name: 'CreateAccount',
        component: () => import(/* webpackChunkName: "createAccount" */ '@/views/Account/CreateAccount.vue'),
      },
      {
        path: 'send',
        name: 'Send',
        component: () => import(/* webpackChunkName: "send" */ '@/views/Trade/Send.vue'),
      },
      {
        path: 'receive',
        name: 'Receive',
        component: () => import(/* webpackChunkName: "receive" */ '@/views/Trade/Receive.vue'),
      },
      {
        path: 'sendConfirm',
        name: 'SendConfirm',
        component: () => import(/* webpackChunkName: "sendConfirm" */ '@/views/Trade/SendConfirm.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
