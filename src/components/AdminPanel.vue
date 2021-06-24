<template>
  <div>
    <b-container id="admin-login-container" fluid="md">
    <b-button id="admin-logout-button" v-on:click="logoutAdmin">
      LOGOUT
    </b-button>
    <b-table striped hover :items="items">
      <template #cell(register)="data">
        <a :href="`#/${data.value.replace(/\s/g, '').toLowerCase()}`">{{ data.value }}</a>
      </template>
      <template #cell(list)="data">
        <a :href="`#/${data.value.replace(/\s/g, '').toLowerCase()}`">{{ data.value }}</a>
      </template>
    </b-table>
    </b-container>
  </div>
</template>

<script>

import {adminLogout} from '../services/adminLoginService'
import router from '../router'

export default {
  name: 'AdminPanel',
  data () {
    return {
      admin: {},
      items: [
        {name: 'Admins', register: 'Admin Register', list: 'Admins list'},
        {name: 'Users', register: 'User Register', list: 'Users list'}
      ]
    }
  },
  methods: {
    logoutAdmin: function () {
      adminLogout()
      router.push('/adminlogin')
    }
  }
}
</script>

<style scoped>
@import "../css/admin.css";
</style>
