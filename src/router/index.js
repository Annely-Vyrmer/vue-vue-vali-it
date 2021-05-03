import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bank from '../views/Bank.vue'
import Allaccounts from '../views/Allaccounts.vue'
import BankLOGIN from '../views/BankLOGIN.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/register",           //see on URL
    name:"Register",
    component: Register
  },
  {
    path:"/bank",           //see on URL
    name:"Bank",
    component: Bank
  },
  {
    path:"/allaccounts",           //see on URL
    name:"All accounts",
    component: Allaccounts
  },
  {
    path:"/banklogin",           //see on URL
    name:"Bank LOGIN",
    component: BankLOGIN
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
