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
  <h4>New User</h4>
  <div class="card mb-2">
    <div class="card-body">
      <form @submit.prevent="createUser" class="text-start">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="user.name"
                     placeholder="Name">
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
              <select class="form-control" id="role" v-model="user.role">
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
              <select class="form-control" id="role" v-model="user.structure_id">
                <option disabled>Select Structure</option>
                <option v-for="structure in structures" :key="structure.id" :value="structure.id">
                  {{ structure.nom }} - {{ structure.typeStructure }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-6">
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password">
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="confirm">Password</label>
              <input type="password" class="form-control" id="confirm" placeholder="Confirm Password" v-model="confirm">
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button type="submit" class="btn btn-secondary">Save User</button>
        </div>
        <div class="row" v-if="this.errors.length>0">
      <span class="text-danger" v-for="(error,index) in errors" :key="index">
        {{ error }}
      </span>
        </div>
      </form>

    </div>
  </div>
</template>
<script>
import {providerService, userService} from "@/_services";

export default {
  name: "AddUser",
  data() {
    return {
      structures: [],
      user: {
        name: "",
        email: "",
        phone: "",
        role: "",
        structure_id: "",
        password: ''
      },
      confirm: '',
      errors: []
    }
  },
  methods: {
    handleStructure() {
      providerService.getAllStructures()
          .then(res => this.structures = res.data.data)
          .catch(err => console.log(err))
    },
    createUser() {
      this.errors = []
      if (this.confirm !== this.user.password) {
        this.errors.push("you didn't confirm with the same password")
      }
      if (this.errors.length === 0) {
        userService.addUser(this.user)
            .then(res => {
              // console.log(res)
              this.$router.push('/users')
            })
            .catch(err => {
              this.errors.push('There was an error submitting your form. See details ')
            })
      }
    }
  },
  mounted() {
    this.handleStructure()
  }
}
</script>
<style>
</style>