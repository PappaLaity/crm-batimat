<template>
  <div class="container">
    <div class="row justify-content-center mb-3">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-primary-subtle">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-2">
                  <h5 class="text-primary">Batimat Group</h5>
                </div>
              </div>
              <div class="col-5 align-self-end">
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div class="p-3">
              <form class="form-horizontal" @submit.prevent="login">
                <div class="mb-3 text-start">
                  <label for="username" class="form-label">
                    Telephone <span class="text-danger">*</span>
                  </label>
                  <input name="phone" type="text" class="form-control" v-model="user.login"
                         placeholder="2217XXXXXXXX" autocomplete="telephone" id="userlogin">

                </div>
                <div class="mb-3 text-start">
                  <label class="form-label">Password <span class="text-danger">*</span></label>
                  <div class="input-group auth-pass-inputgroup">
                    <input type="password" name="password" class="form-control" id="userpassword"
                           v-model="user.password"
                           placeholder="*******" aria-label="Password">
                  </div>

                </div>
                <div class="p-2 bg-light" v-if="error">
                  <span class="text-danger">{{ error }}</span>
                </div>


                <div class="mt-4 d-grid">

                  <button class="btn btn-primary waves-effect waves-light" type="submit">Log
                    In
                  </button>
                </div>
                <div class="mt-4 text-center">
                  <!--                  <a href="#" class="text-muted"><i class="mdi mdi-lock me-1"></i>-->
                  <!--                    Forgot your password?</a>-->

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {accountService} from "@/_services";

export default {
  name: "LoginView",
  data() {
    return {
      user: {
        login: '',
        password: ''
      },
      error: ""
    }
  },
  methods: {
    login() {
      accountService.login(this.user)
          .then(res => {
            accountService.saveToken(res.data.data.token)
            accountService.saveUserId(res.data.data.user.id)
            this.$router.push('/')
          })
          .catch(err => {
            // console.log(err)
            this.error = err.response.data.message
          })
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>