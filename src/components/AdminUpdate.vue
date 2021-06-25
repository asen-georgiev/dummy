<template>
  <div>
    <b-container fluid="md">
      <b-button id="admin-back-button" v-on:click="updateRedirect">Back to Admin list</b-button>
      <admin-register-form
      :admin="admin"
      :button-name="buttonName"
      :submitForm="updatingAdmin">
      </admin-register-form>
    </b-container>
  </div>
</template>

<script>
import AdminRegisterForm from './AdminRegisterForm'
import {getAdmin, updateAdmin} from '../services/adminService'
import router from '../router'

export default {
  name: 'AdminUpdate',
  components: {
    'admin-register-form': AdminRegisterForm
  },
  data () {
    return {
      admin: {
        adminName: '',
        adminEmail: '',
        adminPassword: '',
        isAdmin: ''
      },
      buttonName: 'UPDATE'
    }
  },
  methods: {
    mapToViewAdmin: function (admin) {
      return {
        _id: admin._id,
        adminName: admin.adminName,
        adminEmail: admin.adminEmail,
        isAdmin: admin.isAdmin
      }
    },
    populateAdmin: async function () {
      try {
        const adminId = this.$route.params.id
        const {data: admin} = await getAdmin(adminId)
        this.admin = this.mapToViewAdmin(admin)
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('There is no Admin with the given ID')
        }
      }
    },
    updatingAdmin: async function (event) {
      event.preventDefault()
      const admin = {
        adminName: this.admin.adminName,
        adminEmail: this.admin.adminEmail,
        adminPassword: this.admin.adminPassword,
        isAdmin: this.admin.isAdmin
      }
      await updateAdmin(admin, this.admin._id)
      alert('Admin updated!')
      await router.push('/adminlist')
    },
    updateRedirect: function () {
      router.push('/adminlist')
    }
  },
  async created () {
    await this.populateAdmin()
    console.log(this.admin)
  }
}
</script>

<style scoped>
@import "../css/admin.css";
</style>
