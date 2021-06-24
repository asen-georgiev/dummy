<template>
  <div>
    <b-container id="admin-list-container" fluid="md">
      <admin-list-table
        :admins="admins"
        :adminDelete="adminDelete"
        :admin-update="adminUpdate"></admin-list-table>
      <b-button id="admin-back-button" v-on:click="adminRedirect">Back to Admin panel</b-button>
    </b-container>
  </div>
</template>

<script>

import {getAllAdmins} from '../services/adminService'
import AdminListTable from './AdminListTable'
import router from '../router'

export default {
  name: 'AdminList',
  components: {
    'admin-list-table': AdminListTable
  },
  data () {
    return {
      admins: []
    }
  },
  methods: {
    adminUpdate: function () {
      console.log('Admin update')
    },
    adminDelete: function () {
      console.log('Admin delete')
    },
    adminRedirect: function () {
      router.push('/adminpanel')
    }
  },
  async created () {
    const {data: admins} = await getAllAdmins()
    this.admins = admins
    console.log(admins)
  }
}
</script>

<style scoped>
@import "../css/admin.css";
</style>
