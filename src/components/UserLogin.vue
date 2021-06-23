<template>
  <div>
    <b-container id="login-container" fluid="md">
      <h1>User Login</h1>
      <user-login-form
        :user="user"
        :formSubmit="loginUser"
        :registerlink="createProfileLink"></user-login-form>
    </b-container>
  </div>
</template>

<script>

import {userLogin} from '../services/userLoginService'
import router from '../router'
import UserLoginForm from './UserLoginForm'

export default {
  name: 'UserLogin',
  components: {
    'user-login-form': UserLoginForm
  },
  data () {
    return {
      user: {
        userEmail: '',
        userPassword: ''
      },
      createProfileLink: '#/userregister'
    }
  },
  methods: {
    loginUser: async function (event) {
      event.preventDefault()
      const user = {userEmail: this.user.userEmail, userPassword: this.user.userPassword}
      await userLogin(user)
      await router.push('/userprofile')
    }
  }
}
</script>

<style scoped>

</style>
