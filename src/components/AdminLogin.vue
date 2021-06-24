<template>
  <div>
    <b-container id="admin-login-container" fluid="md">
      <h1>Admin Login</h1>
      <admin-login-form
      :admin="admin"
      :formSubmit="loginAdmin"
      :emailValidation="emailValidation"
      :passwordValidation="passwordValidation">
      </admin-login-form>
    </b-container>
  </div>
</template>

<script>
import AdminLoginForm from './AdminLoginForm'
import {adminLogin} from '../services/adminLoginService'
import router from '../router'

export default {
  name: 'AdminLogin',
  components: {
    'admin-login-form': AdminLoginForm
  },
  data () {
    return {
      admin: {
        adminEmail: '',
        adminPassword: ''
      }
    }
  },
  methods: {
    loginAdmin: async function (event) {
      event.preventDefault()
      const admin = {adminEmail: this.admin.adminEmail, adminPassword: this.admin.adminPassword}
      await adminLogin(admin)
      await router.push('/adminpanel')
    }
  },
  computed: {
    emailValidation: function () {
      return this.admin.adminEmail.length > 5
    },
    passwordValidation: function () {
      return this.admin.adminPassword.length > 7
    }
  }
}
</script>

<style scoped>

</style>
