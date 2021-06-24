<template>
  <div>
    <b-container id="admin-register-container" fluid="md">
      <b-button id="admin-back-button" v-on:click="registerRedirect">Back to Admin panel</b-button>
      <admin-register-form
        :admin="admin"
        :button-name="buttonName"
        :submitForm="adminRegister">
      </admin-register-form>
    </b-container>
  </div>
</template>

<script>
import {registerAdmin} from '../services/adminService'
import router from '../router'
import AdminRegisterForm from './AdminRegisterForm'

export default {
  name: 'AdminRegister',
  components: {
    'admin-register-form': AdminRegisterForm
  },
  data () {
    return {
      admin: {
        adminName: '',
        adminEmail: '',
        adminPassword: '',
        isAdmin: false
      },
      buttonName: 'REGISTER'
    }
  },
  methods: {
    adminRegister: async function (event) {
      event.preventDefault()
      const admin = {
        adminName: this.admin.adminName,
        adminEmail: this.admin.adminEmail,
        adminPassword: this.admin.adminPassword,
        isAdmin: this.admin.isAdmin
      }
      await registerAdmin(admin)
      alert('Admin successfully registered!')
      await router.push('/adminpanel')
    },
    registerRedirect: function () {
      router.push('/adminpanel')
    }
  }
}
</script>

<style scoped>
@import "../css/admin.css";
</style>
