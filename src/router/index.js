import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '../components/UserLogin'
import UserProfile from '../components/UserProfile'
import UserRegister from '../components/UserRegister'
import UserUpdate from '../components/UserUpdate'
import AdminLogin from '../components/AdminLogin'
import AdminPanel from '../components/AdminPanel'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
