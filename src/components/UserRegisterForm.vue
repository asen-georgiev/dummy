<template>
  <div>
    <b-form @submit="submitForm">
      <b-input-group
        id="name-group"
        prepend="First name">
        <b-form-input
          v-model="user.userName"
          type="text"
          placeholder="Please enter your first name"></b-form-input>
      </b-input-group>
      <b-input-group
        id="lastname-group"
        prepend="Last name">
        <b-form-input
          v-model="user.userFamily"
          type="text"
          placeholder="Please enter your last name"></b-form-input>
      </b-input-group>
      <b-input-group
        id="email-group"
        prepend="Email">
        <b-form-input
          v-model="user.userEmail"
          type="email"
          placeholder="Please enter your email"></b-form-input>
      </b-input-group>
      <b-input-group
        id="address-group"
        prepend="Address">
        <b-form-input
          v-model="user.userAddress"
          type="text"
          placeholder="Please enter your address"></b-form-input>
      </b-input-group>
      <b-input-group
        id="telephone-group"
        prepend="Telephone">
        <b-form-input
          v-model="user.userTelephone"
          type="tel"
          placeholder="Please enter your telephone number"></b-form-input>
      </b-input-group>
      <b-input-group
        id="password-group"
        prepend="Password">
        <b-form-input
          v-model="user.userPassword"
          type="password"
          placeholder="Please enter your password"></b-form-input>
      </b-input-group>
      <span>Select profile picture to upload</span>
      <b-input-group
        id="picture-group">
        <b-form-file
          v-on:change="uploadingPicture"
          plain></b-form-file>
      </b-input-group>
      <b-button id="register-button" type="submit">{{ buttonName }}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'UserRegisterForm',
  props: {
    user: {
      type: Object,
      required: true
    },
    submitForm: {
      type: Function,
      required: true
    },
    uploadingPicture: {
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
@import "../css/user.css";
</style>
