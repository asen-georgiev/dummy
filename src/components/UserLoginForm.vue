<template>
  <div>
    <b-form @submit="formSubmit" id="user-login-form">
      <b-form-group
        id="user-email-group"
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
        id="user-password-group"
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
        id="login-submit-button"
        type="submit">
        LOGIN
      </b-button>
      <b-form-group
        id="user-link-group"
        label="You don't have a profile?">
        <b-link :href="registerlink">CREATE PROFILE</b-link>
      </b-form-group>
    </b-form>

  </div>
</template>

<script>
export default {
  name: 'UserLoginForm',
  props: {
    user: {
      type: Object,
      required: true
    },
    formSubmit: {
      type: Function,
      required: true
    },
    registerlink: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import "../css/user.css";
</style>
