import { createRouter, createWebHistory } from 'vue-router'
import AddressPage from '../views/Address.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'adress',
      component: AddressPage
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddAddress.vue')
    }
  ]
})

export default router
