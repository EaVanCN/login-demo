import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Welcome from '@/components/Welcome'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/welcome',
      component: Welcome
    }
  ]
})
