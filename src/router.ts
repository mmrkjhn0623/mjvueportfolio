import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Tutorial from './views/Tutorial.vue'
import Tutorial1 from './views/Tutorial1.vue'
import Tutorial2 from './views/Tutorial2.vue'
import LoginFirst from './views/LoginFirst.vue'
import LoginForm from './views/LoginForm.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tutorial', name: 'Tutorial', component: Tutorial,
    children: [
      {
        path: '1',
        component: Tutorial1,
        meta: { requiresAuth: true }
      },
      {
        path: '2',
        component: Tutorial2,
        meta: { requiresAuth: true }
      }
    ] 
  },
  { path: '/loginfirst', name: 'LoginFirst', component: LoginFirst},
  { path: '/login', name: 'Login', component: LoginForm}
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