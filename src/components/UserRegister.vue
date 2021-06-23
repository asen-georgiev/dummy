<template>
  <div>
    <b-container id="register-container" fluid="md">
      <b-button v-on:click="loginRedirect">Back to Login page</b-button>
      <b-img v-if="visiblePicture" :src="visiblePicture"></b-img>
      <user-register-form
        :user="user"
        :uploadingPicture="uploadingPicture"
        :registerUser="registerUser"></user-register-form>
    </b-container>
  </div>
</template>

<script>

import UserRegisterForm from './UserRegisterForm'
import {registerUser} from '../services/userService'
import {uploadImage} from '../services/imageService'
import router from '../router'

export default {
  name: 'UserRegister',
  components: {
    'user-register-form': UserRegisterForm
  },
  data () {
    return {
      user: {
        userName: '',
        userFamily: '',
        userPassword: '',
        userEmail: '',
        userPicture: '',
        userAddress: '',
        userTelephone: ''
      },
      uploadedPicture: null,
      visiblePicture: null
    }
  },
  methods: {
    uploadingPicture: function (event) {
      this.user.userPicture = event.target.files[0].name
      this.uploadedPicture = event.target.files[0]
      this.visiblePicture = URL.createObjectURL(event.target.files[0])
    },
    registerUser: async function (event) {
      event.preventDefault()
      const user = {
        userName: this.user.userName,
        userFamily: this.user.userFamily,
        userPassword: this.user.userPassword,
        userEmail: this.user.userEmail,
        userPicture: this.user.userPicture,
        userAddress: this.user.userAddress,
        userTelephone: this.user.userTelephone
      }
      await registerUser(user)

      if (this.uploadedPicture !== null) {
        const data = new FormData()
        data.append('file', this.uploadedPicture)
        await uploadImage(data)
      }
      await router.push('/userprofile')
    },
    loginRedirect: function () {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
