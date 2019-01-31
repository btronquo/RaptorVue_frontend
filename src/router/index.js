import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Goodbye from '@/components/Goodbye'
import Action from '@/components/Action'
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
      path: '/action',
      name: 'action',
      component: Action
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
