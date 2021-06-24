<template>
  <div>
    <b-container id="update-container" fluid="md">
      <b-button id="update-back-button" v-on:click="updateRedirect">Back to Profile</b-button>
      <h5>After UPDATE you will be redirected to login page!</h5>
      <user-register-form
        :buttonName="buttonName"
        :user="user"
        :uploading-picture="uploadingPicture"
        :submitForm="updatingUser"></user-register-form>
      <b-img id="update-picture" v-if="visiblePicture" :src="visiblePicture"></b-img>
      <b-img id="update-userpicture" v-else-if="user.userPicture" :src="url+user.userPicture"></b-img>
    </b-container>
  </div>
</template>

<script>
import UserRegisterForm from './UserRegisterForm'
import {picUrl} from '../config.json'
import {getUser, updateUser} from '../services/userService'
import {userLogout} from '../services/userLoginService'
import {uploadImage} from '../services/imageService'
import router from '../router'

export default {
  name: 'UserUpdate',
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
      visiblePicture: null,
      url: '',
      buttonName: 'UPDATE'
    }
  },
  methods: {
    populateUser: async function () {
      try {
        const userId = this.$route.params.id
        const {data: user} = await getUser(userId)
        this.user = this.mapToViewModel(user)
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('There is no user with the given ID!')
        }
      }
    },
    mapToViewModel: function (user) {
      return {
        _id: user._id,
        userName: user.userName,
        userFamily: user.userFamily,
        userEmail: user.userEmail,
        userAddress: user.userAddress,
        userTelephone: user.userTelephone,
        userPicture: user.userPicture
      }
    },
    uploadingPicture: function (event) {
      this.user.userPicture = event.target.files[0].name
      this.uploadedPicture = event.target.files[0]
      this.visiblePicture = URL.createObjectURL(event.target.files[0])
    },
    updatingUser: async function (event) {
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
      await updateUser(user, this.user._id)

      if (this.uploadedPicture !== null) {
        const data = new FormData()
        data.append('file', this.uploadedPicture)
        await uploadImage(data)
      }
      userLogout()
      await router.push('/userlogin')
    },
    updateRedirect: function () {
      router.push('/userprofile')
    }
  },
  async created () {
    this.url = picUrl
    await this.populateUser()
    console.log(this.user)
  }
}
</script>

<style scoped>
@import "../css/user.css";
</style>
