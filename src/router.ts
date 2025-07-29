import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('auth') === 'yes'

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/loginfirst')
  } else {
    next()
  }
})

export default router