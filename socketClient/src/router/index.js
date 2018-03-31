import Vue from 'vue'
import Router from 'vue-router'

import userGuard from './userGuard'

import login from '../components/login' 
import tchat from '../components/tchat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
    	path: '/messages',
    	name: 'Messages',
    	component: tchat,
    	beforeEnter: userGuard
    }
  ]
})
