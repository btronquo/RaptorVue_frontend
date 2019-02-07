import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/core/Login'
import Register from '@/pages/core/Register'
import Goodbye from '@/pages/Goodbye'
import Dashboard from '@/pages/Dashboard'
import Error from '../pages/core/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/goodbye',
      name: 'goodbye',
      component: Goodbye
    },
    {
      path: '/error',
      name: '404',
      component: Error
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})
