<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Providers</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
      </div>
    </div>
  </div>
  <h4 class="text-start">Add Provider</h4>
  <div class="card mb-2">
    <div class="card-body">
      <form @submit.prevent="createProvider" class="text-start">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="provider.nom"
                     placeholder="Name">
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" v-model="provider.mail"
                     placeholder="Email">
              <!--          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="text" class="form-control" id="phone" v-model="provider.phone"
                     placeholder="Phone number">
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button type="submit" class="btn btn-secondary">Add Provider</button>
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
import {providerService} from "@/_services";

export default {
  data() {
    return {
      provider: {
        nom: "",
        mail: "",
        phone: "",
        typeStructure: "provider"
      },
      errors: []
    }
  },
  methods: {
    createProvider() {
      providerService.addProviders(this.provider)
          .then(res => this.$router.push('/providers'))
          .catch(err => console.log(err))
    }
  }
}
</script>
<style>
</style>