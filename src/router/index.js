import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '../components/UserLogin'
import UserProfile from '../components/UserProfile'
import UserRegister from '../components/UserRegister'
import UserUpdate from '../components/UserUpdate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
