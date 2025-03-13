import { createRouter, createWebHistory } from 'vue-router'
import FormView from '@/views/FormView.vue'
import SuccessView from '@/views/SuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FormView,
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView,
    },
  ],
})

export default router
