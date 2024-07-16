<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Customers</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
      </div>
    </div>
  </div>
  <h4 class="text-start">Customers list</h4>
  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.firstname }} {{ customer.lastname }}</td>
        <td>{{ customer.phone }}</td>
        <td>--</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {customerService} from "@/_services";

export default {
  name: "CustomerIndex",
  data() {
    return {
      customers: []
    }
  },
  mounted() {
    customerService.getAllCustomers()
        .catch(err => console.log(err))
        .then(res => {
          this.customers = res.data.data
        })
  }
}
</script>