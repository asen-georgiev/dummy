<template>
  <div>
    <b-form @submit="submitForm">
      <b-input-group
        id="admin-name-group"
        prepend="Full name">
        <b-form-input
          v-model="admin.adminName"
          type="text"
          placeholder="Please enter admin first and last name"></b-form-input>
      </b-input-group>
      <b-input-group
        id="admin-email2-group"
        prepend="Email">
        <b-form-input
          v-model="admin.adminEmail"
          type="email"
          placeholder="Please enter admin email"></b-form-input>
      </b-input-group>
      <b-input-group
        id="admin-password2-group"
        prepend="Password">
        <b-form-input
          v-model="admin.adminPassword"
          type="password"
          placeholder="Please enter admin password"></b-form-input>
      </b-input-group>
      <b-input-group
        id="admin-checkbox-group">
        <b-form-checkbox
          v-model="admin.isAdmin">
          Declaring Admin rights
        </b-form-checkbox>
      </b-input-group>
      <b-button id="admin-register-button" type="submit">{{ buttonName }}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'AdminRegisterForm',
  props: {
    admin: {
      type: Object,
      required: true
    },
    submitForm: {
      type: Function,
      required: true
    },
    buttonName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import "../css/admin.css";
</style>
