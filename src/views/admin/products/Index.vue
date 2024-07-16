<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h2 class="h2">Products</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <router-link type="button" v-if="role === 'provider'" class="btn btn-sm btn-outline-secondary"
                     to="/products/add">
          Add Product
        </router-link>
      </div>
    </div>
  </div>
  <h4>Product list</h4>
  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
      <tr class="text-start">
        <th scope="col">Designation</th>
        <th scope="col">Reference Provider</th>
        <th scope="col">Provider</th>
        <th scope="col">Barcode</th>
        <th scope="col">Reference Batimat</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr class="text-start" v-for="product in products" :key="product.id">
        <td>{{ product.designation }}</td>
        <td>{{ product.ref_provider }}</td>
        <td>{{ product.provider.nom }}</td>
        <td>{{ product.barcode }}</td>
        <td>{{ product.ref_company }}</td>
        <td>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {accountService, productService} from "@/_services";

export default {
  name: 'ProductsView',
  data() {
    return {
      products: [],
      role: '',
      idStructure: ''
    }
  },
  methods: {
    loadProducts() {
      this.role = accountService.getRole()
      this.idStructure = accountService.getCompanyId()
      if (this.role === 'admin' || this.role === "manager") {
        productService.getProductForCompany(this.idStructure)
            .then(res => {
              this.products = res.data.data
            }).catch(err => console.log(err))
      } else {
        productService.getProductForProvider(this.idStructure)
            .then(res => {
              this.products = res.data.data
            }).catch(err => console.log(err))
      }
    }
  },
  mounted() {
    this.loadProducts()
  }
}
</script>
<style>
</style>