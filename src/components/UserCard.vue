<template>
  <div>
    <b-container fluid="md" id="user-profile-container">
      <b-row>
        <b-col>
          <b-img :src="url+user.userPicture"></b-img>
        </b-col>
        <b-col align-self="center">
          <h2>{{ user.userName }} {{ user.userFamily }}</h2>
          <h3>{{ user.userEmail }}</h3>
          <span>{{ user.userAddress }}</span>
          <h3>{{ user.userTelephone }}</h3>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['user', 'url']
}
</script>

<style scoped>
@import "../css/user.css";
</style>
