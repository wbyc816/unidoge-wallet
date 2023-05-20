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
        path: 'welcome',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/Account/Welcome.vue'),
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
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
