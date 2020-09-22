import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
