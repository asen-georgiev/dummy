<template>
  <div>
    <b-container fluid="md">
      <h1>Welcome to our test page</h1>
      <b-row>
        <b-col>
          <b-button id="user-redirect" v-on:click="userRedirect">To USER login</b-button>
        </b-col>
        <b-col>
          <b-button id="admin-redirect" v-on:click="adminRedirect">To ADMIN login</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import router from '../router'

export default {
  name: 'HomePage',
  methods: {
    adminRedirect: function () {
      router.push('/adminlogin')
    },
    userRedirect: function () {
      router.push('/userlogin')
    }
  }
}
</script>

<style scoped>
#admin-redirect{
  margin-top: 2rem;
  background-color: darkblue;
  padding-inline: 3rem;
}

#user-redirect{
  margin-top: 2rem;
  background-color: darkgoldenrod;
  padding-inline: 3rem;
}
</style>
