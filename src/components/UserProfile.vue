<template>
  <div>
    <b-container fluid="md" id="user-profile-container">
    <usercard :user="user" :url="url"></usercard>
    <b-row>
      <b-col class="mt-5">
        <b-button id="user-logout-button" v-on:click="logOutUser">
          LOGOUT
        </b-button>
      </b-col>
      <b-col class="mt-5">
        <b-button id="user-update-button" v-on:click="updateUser">
          UPDATE PROFILE
        </b-button>
      </b-col>
      <b-col class="mt-5">
        <b-button id="user-delete-button" v-on:click="()=>deletingUser(this.user)">
          DELETE PROFILE
        </b-button>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>

import jwtDecode from 'jwt-decode'
import {getLoggedUser, userLogout} from '../services/userLoginService'
import {deleteUser} from '../services/userService'
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
    },
    updateUser () {
      router.push(`/userprofile/${this.user._id}`)
    },
    deletingUser: async function (user) {
      const tempUser = {...this.user}
      this.user = {}
      try {
        await deleteUser(user._id)
        userLogout()
        await router.push('/')
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('User has already been deleted!')
        }
        this.user = tempUser
      }
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
