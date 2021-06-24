<template>
  <div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="admin in admins" v-bind:key="admin._id">
        <td>{{ admin.adminName }}</td>
        <td>{{ admin.adminEmail }}</td>
        <td>
          <b-button id="admin-update-button" v-on:click="adminUpdate">UPDATE</b-button>
        </td>
        <td>
          <b-button id="admin-delete-button" v-on:click="adminDelete">DELETE</b-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AdminListTable',
  props: {
    admins: {
      type: Array,
      required: true
    },
    adminUpdate: {
      type: Function,
      required: true
    },
    adminDelete: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
@import "../css/admin.css";
</style>
