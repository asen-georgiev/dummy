<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>
@import "../css/user.css";
</style>
