<template>
  <div>
    <b-form @submit="formSubmit" id="admin-login-form">
      <b-form-group
        id="admin-email-group"
        label="Admin email"
        label-for="email-input"
        description="We will always share your credentials">

        <b-form-input
          id="email-input"
          v-model="admin.adminEmail"
          type="email"
          placeholder="Enter your admin email"
          :state="emailValidation"
          required>
        </b-form-input>
        <b-form-invalid-feedback :state="emailValidation">
          Your admin email must be at least 5 characters long
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="admin-password-group"
        label="Admin password"
        label-for="password-input"
        description="Your admin password must be min. 8 characters long">

        <b-form-input
          id="password-input"
          v-model="admin.adminPassword"
          type="password"
          :state="passwordValidation"
          placeholder="Enter your password"
          required>
        </b-form-input>
        <b-form-invalid-feedback :state="passwordValidation">
          Your admin password must be at least 8 characters long
        </b-form-invalid-feedback>
      </b-form-group>
      <b-button
        id="admin-login-button"
        type="submit">
        LOGIN
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'AdminLoginForm',
  props: {
    admin: {
      type: Object,
      required: true
    },
    formSubmit: {
      type: Function,
      required: true
    },
    emailValidation: {
      type: Boolean,
      required: true
    },
    passwordValidation: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
@import "../css/admin.css";
</style>
