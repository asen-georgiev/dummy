import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '../components/UserLogin'
import UserProfile from '../components/UserProfile'
import UserRegister from '../components/UserRegister'
import UserUpdate from '../components/UserUpdate'
import AdminLogin from '../components/AdminLogin'
import AdminPanel from '../components/AdminPanel'
import HomePage from '../components/HomePage'
import AdminRegister from '../components/AdminRegister'
import AdminList from '../components/AdminList'
import AdminUpdate from '../components/AdminUpdate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/userlogin',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/userprofile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/userregister',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/userprofile/:id',
      name: 'UserUpdate',
      component: UserUpdate
    },
    {
      path: '/adminlogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/adminpanel',
      name: 'AdminPanel',
      component: AdminPanel
    },
    {
      path: '/adminregister',
      name: 'AdminRegister',
      component: AdminRegister
    },
    {
      path: '/adminlist',
      name: 'AdminList',
      component: AdminList
    },
    {
      path: '/adminlist/:id',
      name: 'AdminUpdate',
      component: AdminUpdate
    }
  ]
})
