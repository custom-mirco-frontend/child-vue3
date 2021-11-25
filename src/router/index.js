import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/home.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory('/vue3'),
  routes
})
export default router