import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserLogin from '../components/UserLogin'
import UserProfile from '../components/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
