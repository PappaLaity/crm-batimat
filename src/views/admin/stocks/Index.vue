<template>

  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Stocks</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
      </div>
    </div>
  </div>
  <h4 class="text-start">Stock list</h4>
  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="stock in stocks" :key="stock.id">
        <td>{{ stock.product.ref_company }}</td>
        <td>{{ stock.quantity }}</td>
        <td>{{ stock.price }}</td>
        <td>
          <a class="btn btn-outline-info" @click.prevent="updateStock(stock.id)">Update</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {stocksService} from "@/_services";

export default {
  name: "StockView",
  data() {
    return {
      stocks: []
    }
  },
  methods: {
    updateStock(uid) {
      this.$router.push({name: "editStocks", params: {id: uid}})
    }
  },
  mounted() {
    stocksService.getAllStock()
        .then(res => this.stocks = res.data.data)
        .catch(err => console.log(err))
  }
}

</script>

<style scoped>

</style>