import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/vue-three',
    name: 'Home',
    component: () => import('../components/home.vue')
  }, {
    path: '/vue-other',
    name: 'Other',
    component: () => import('../components/other.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory('/vue3'),
  routes
})
export default router