<template>
  <HeaderAdminVue/>

  <div class="container-fluid">
    <div class="row">
      <SidebarAdminVue/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderAdminVue from '@/components/HeaderAdmin.vue'
import SidebarAdminVue from '@/components/SidebarAdmin.vue'

export default {
  name: 'DashboardItem',
  components: {HeaderAdminVue, SidebarAdminVue}
}

</script>

<style>
</style>