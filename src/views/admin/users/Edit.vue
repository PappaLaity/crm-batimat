<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Users</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <!--        <router-link type="button" class="btn btn-sm btn-outline-secondary" to="/users">Add User</router-link>-->
      </div>
    </div>
  </div>
  <h4>Update User</h4>
  <div class="card mb-2">
    <div class="card-body">
      <form @submit.prevent="updateUser" class="text-start">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="user.name"
                     placeholder="Name">
              <input type="text" class="form-control" id="name" v-model="user.id" hidden>
              <!--          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" v-model="user.email"
                     placeholder="Email">
              <!--          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="text" class="form-control" id="phone" v-model="user.phone"
                     placeholder="Phone number">
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <div class="form-group">
              <label for="role">Role</label>
              <select class="form-control" id="role" v-model="user.role" disabled>
                <option disabled>Select Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="provider">Provider</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="structure">Structure</label>
              <select class="form-control" id="role" v-model="user.structure.id" disabled>
                <option v-for="structure in structures" :key="structure.id" :value="structure.id">
                  {{ structure.nom }} - {{ structure.typeStructure }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="row mt-4">
        </div>
        <div class="mt-4">
          <button type="submit" class="btn btn-secondary">Update User</button>
        </div>
      </form>

    </div>
  </div>
</template>
<script>
import {providerService, userService} from "@/_services";

export default {
  name: "EditUser",
  props: ['id'],
  data() {
    return {
      structures: [],
      user: {
        id: "",
        name: "",
        email: "",
        phone: "",
        role: "",
        structure: "",
      }
    }
  },
  methods: {
    loadStructure() {
      providerService.getAllStructures()
          .then(res => this.structures = res.data.data)
          .catch(err => console.log(err))
    },
    loadUser() {
      userService.getUser(this.id)
          .then(res => {
            this.user = res.data.data
          })
          .catch(err => console.log(err))
    },
    updateUser() {
      userService.updateUser(this.user)
          .then(res => this.$router.push('/users'))
          .catch(err => console.log(err))
    }
  },
  mounted() {
    this.loadUser()
    this.loadStructure()
  }
}
</script>
<style>
</style>