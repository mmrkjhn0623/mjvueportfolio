import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import TechStacks from './views/TechStacks.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/techstacks', name: 'TechStacks', component: TechStacks }
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