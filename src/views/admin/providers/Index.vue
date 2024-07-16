<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Providers</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <!--        <router-link type="button" class="btn btn-sm btn-outline-secondary" to="/users/add">Add Provider</router-link>-->
      </div>
    </div>
  </div>
  <h4>Providers list</h4>
  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="provider in providers" :key="provider.id">
        <td>{{ provider.nom }}</td>
        <td>{{ provider.mail }}</td>
        <td>{{ provider.phone }}</td>
        <td>
          <button>Edit</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {providerService} from "@/_services";

export default {
  name: "ProvidersView",
  data() {
    return {
      providers: []
    }
  },
  methods: {
    handleProviders() {
      providerService.getProviders()
          .then(res => {
            this.providers = res.data.data
          }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.handleProviders()
  }
}
</script>
<style>
</style>