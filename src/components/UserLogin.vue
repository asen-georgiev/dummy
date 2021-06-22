<template>
  <div>
    <h1>User Login</h1>
    <b-form @submit="loginUser">
      <b-form-group
        id="email-group"
        label="User email"
        label-for="email-input"
        description="We will always share your credentials">

        <b-form-input
          id="email-input"
          v-model="user.userEmail"
          type="email"
          placeholder="Enter your email"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="password-group"
        label="User password"
        label-for="password-input"
        description="Your password must be min. 8 characters long">

        <b-form-input
          id="password-input"
          v-model="user.userPassword"
          type="password"
          placeholder="Enter your password"
          required>
        </b-form-input>
      </b-form-group>
      <b-button
        type="submit"
      >Login
      </b-button>

    </b-form>
  </div>
</template>

<script>

import {userLogin} from '../services/userLoginService'

export default {
  name: 'UserLogin',
  data () {
    return {
      user: {
        userEmail: '',
        userPassword: ''
      }
    }
  },
  methods: {
    loginUser: async function (event) {
      event.preventDefault()
      const user = {userEmail: this.user.userEmail, userPassword: this.user.userPassword}
      await userLogin(user)
    }
  }
}
</script>

<style scoped>

</style>
