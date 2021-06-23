<template>
  <div>
    <usercard :user="user" :url="url"></usercard>
    <b-row>
      <b-col class="mt-5">
        <b-button id="user-logout-button" v-on:click="logOutUser">
          LOGOUT
        </b-button>
      </b-col>
    </b-row>

  </div>
</template>

<script>

import jwtDecode from 'jwt-decode'
import {getLoggedUser, userLogout} from '../services/userLoginService'
import {picUrl} from '../config.json'
import UserCard from './UserCard'
import router from '../router'

export default {
  name: 'UserProfile',
  components: {
    'usercard': UserCard
  },
  data () {
    return {
      user: {},
      url: ''
    }
  },
  methods: {
    logOutUser () {
      userLogout()
      this.user = {}
      router.push('/')
    }
  },
  created () {
    const url = picUrl
    const jwtUser = getLoggedUser()
    if (jwtUser !== null) {
      const user = jwtDecode(jwtUser)
      this.user = user
      this.url = url
      console.log(this.user)
    }
  }
}
</script>

<style scoped>
@import "../css/user.css";
</style>
