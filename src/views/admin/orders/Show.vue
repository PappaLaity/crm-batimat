<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Order</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
      </div>
    </div>
  </div>
  <h4 class="text-start">Order Details</h4>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-4">
          <span>
          Number:{{ order.number }}
          </span>
        </div>
        <div class="col-4">
         <span>
      Amount:{{ order.amount }}
      </span>
        </div>
        <div class="col-4">

          Status:{{ order.status }} / <span v-if="order.paid===0">Unpaid</span><span v-else>Paid</span>

        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="table-responsive small">
        <table class="table table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity (Piece)</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="orderline in ordersLines" :key="orderline.id">
            <td>{{ orderline.product_id }}</td>
            <td>{{ orderline.quantity }}</td>
            <td>{{ orderline.price }}</td>
            <td>
              --
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>
<script>
import {ordersService} from "@/_services/orders.services";

export default {
  name: "ShowView",
  props: ['id'],
  data() {
    return {
      order: {},
      ordersLines: []
    }
  },
  mounted() {
    ordersService.getOrder(this.id)
        .then(res => {
          this.order = res.data.data
          this.ordersLines = res.data.data.order_lines
        })
        .catch(err => {
          console.log(err)
        })
  }
}
</script>
<style>
</style>