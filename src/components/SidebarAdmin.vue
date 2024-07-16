<template>
  <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
    <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu"
         aria-labelledby="sidebarMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="sidebarMenuLabel">Batimat Group</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu"
                aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center gap-2"
                         :class="[currentRoute.path==='/'?'active':'']" to="/">
              <svg class="bi">
                <use xlink:href="#house-fill"/>
              </svg>
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="role!=='manager'" class="nav-link d-flex align-items-center gap-2"
                         :class="[currentRoute.path.includes('/users')?'active':'']" to="/users">
              <svg class="bi">
                <use xlink:href="#graph-up"/>
              </svg>
              Users
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="role!=='provider'" class="nav-link d-flex align-items-center gap-2"
                         :class="[currentRoute.path.includes('/providers')?'active':'']" to="/providers">
              <svg class="bi">
                <use xlink:href="#puzzle"/>
              </svg>
              Providers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center gap-2"
                         :class="[currentRoute.path.includes('/products')?'active':'']" to="/products">
              <svg class="bi">
                <use xlink:href="#cart"/>
              </svg>
              Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="role!=='provider'" class="nav-link d-flex align-items-center gap-2"
                         :class="[currentRoute.path.includes('/orders')?'active':'']" to="/orders">
              <svg class="bi">
                <use xlink:href="#file-earmark"/>
              </svg>
              Orders
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="role!=='provider'" class="nav-link d-flex align-items-center gap-2"
                         :class="[currentRoute.path.includes('/stocks')?'active':'']" to="/stocks">
              <svg class="bi">
                <use xlink:href="#file-earmark"/>
              </svg>
              Stocks
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="role!=='provider'" class="nav-link d-flex align-items-center gap-2"
                         :class="[currentRoute.path.includes('/customers')?'active':'']" to="/customers">
              <svg class="bi">
                <use xlink:href="#people"/>
              </svg>
              Customers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="role!=='provider'" class="nav-link d-flex align-items-center gap-2"
                         :class="[currentRoute.path.includes('/sales')?'active':'']" to="/sales">
              <svg class="bi">
                <use xlink:href="#puzzle"/>
              </svg>
              Sales
            </router-link>
          </li>
        </ul>

        <hr class="my-3">

        <ul class="nav flex-column mb-auto">
          <!-- <li class="nav-item">
            <a class="nav-link d-flex align-items-center gap-2" href="#">
              <svg class="bi"><use xlink:href="#gear-wide-connected"/></svg>
              Settings
            </a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center gap-2" @click.prevent="logout" href="#">
              <svg class="bi">
                <use xlink:href="#door-closed"/>
              </svg>
              Sign out
            </a>
          </li>
        </ul>
        <!--        <span class="py-5"></span>-->
      </div>
    </div>
  </div>
</template>

<script>

import {useRoute} from "vue-router";
import {accountService} from "@/_services";
import router from "@/router";

export default {
  name: 'SidebarView',
  setup() {
    const route = useRoute();
    const role = accountService.getRole()

    const logout = () => {
      accountService.logout()
      router.push('/login')
    }

    return {
      currentRoute: route,
      role: role,
      logout: logout,

    };
  },
}
</script>

<style scoped>
.active {
  background-color: #2c3e50;
}

.sidebar {
  min-height: 532px;
}

@media (max-width: 768px) {
  .sidebar {
    min-height: 0;
  }
}
</style>
    