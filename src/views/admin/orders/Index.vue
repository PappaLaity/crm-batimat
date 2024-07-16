<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Orders</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <router-link type="button" v-if="role !== 'provider'" class="btn btn-sm btn-outline-secondary"
                     to="/orders/add">
          Add Order
        </router-link>
      </div>
    </div>
  </div>
  <h4 class="text-start">Order list</h4>
  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">Number</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
        <th scope="col">Paid</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.number }}</td>
        <td>{{ order.amount }}</td>
        <td>{{ order.status }}</td>
        <td>{{ order.paid }}</td>
        <td>
          <a class="btn btn-outline-info" @click.prevent="detailsOrders(order.id)">Details</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>
<script>

import {ordersService} from "@/_services/orders.services";
import {accountService} from "@/_services";

export default {
  name: 'OrderIndex',
  data() {
    return {
      orders: [],
      role:""
    }
  },
  methods: {
    detailsOrders(id) {
      this.$router.push({name: "orderShow", params: {id: id}})
    }
  },
  mounted() {

    this.role = accountService.getRole()
    ordersService.getAllOrder()
        .then(res => this.orders = res.data.data)
        .catch(err => console.log(err))
  }
}
</script>
<style>
</style>