<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Users</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <router-link type="button" class="btn btn-sm btn-outline-secondary" to="/users/add">Add User</router-link>
        <!--        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>-->
      </div>
    </div>
  </div>
  <h4>Users list</h4>
  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Role</th>
        <th scope="col">Structure</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.role }}</td>
        <td>{{ user.structure.nom }}</td>
        <td>
          <a class="btn btn-outline-info" @click.prevent="editUser(user.id)" v-if="logged!==user.id">Edit</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {accountService, userService} from "@/_services";

export default {
  name: 'UserIndex',
  data() {
    return {
      users: [],
      logged: ''
    }
  },
  methods: {
    handleUsers() {
      userService.getAllUsers()
          .then(res => {
            // console.log(res.data.data)
            this.users = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    editUser(uid) {
      this.$router.push({name: "editUsers", params: {id: uid}})
    }
  },
  mounted() {
    this.handleUsers()
    this.logged = accountService.getUserId()
    // console.log(this.logged)
  }
}
</script>
<style>
</style>