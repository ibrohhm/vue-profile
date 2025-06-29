<template>
  <div id="login" class="flex flex-col justify-center items-center w-1/2">
    <div class="login-header flex flex-col items-center">
      <div class="login-header--text text-6xl">
        Welcome to <span class="text-7xl">myApp</span>
      </div>
      <progress class="progress w-56 mt-3" value="100" max="100"></progress>
    </div>
    <div class="login-form w-4/5 mt-5">
      <div class="login-form--user-id my-4">
        <input type="text" placeholder="User ID*" v-model="form.userId" class="input w-full" :class="{'input-error': this.errors.userId}"/>
        <p class="label text-error" v-if="this.errors.userId">Please input your user id.</p>
      </div>
      <div class="login-form--password my-4">
        <input type="text" placeholder="Password*" v-model="form.password" class="input w-full" :class="{'input-error': this.errors.password}"/>
        <p class="label text-error" v-if="this.errors.password">Please input your password.</p>
      </div>
      <div class="login-form--keep-login my-4">
        <label class="label">
          <input type="checkbox" class="checkbox" />
          Keep me logged in
        </label>
      </div>
      <div class="login-form--btn-login">
        <button class="btn btn-neutral" @click="onClickLogin">Login</button>
      </div>
    </div>
    <div class="login-note mt-5">
      No account? <a class="link" @click="showRegister">Register here</a>
    </div>
  </div>
  <loading :show="isLoading"></loading>
</template>

<script>
import Loading from '../components/Loading.vue'

export default {
  name: "Login",
  data(){
    return {
      form: {
        userId: "",
        password: "",
      },
      errors: {},
      isLoading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    showRegister() {
      this.$emit('showRegister')
    },
    validateForm(){
      this.errors = {}

      if(!this.form.userId) this.errors.userId = true
      if(!this.form.password) this.errors.password = true

      return Object.keys(this.errors).length === 0;
    },
    onClickLogin(){
      if(this.validateForm()){
        this.isLoading = true
        this.$store.dispatch('auth/loginUser', this.form)
          .then((res) => {
            this.$router.push({ name: 'MyProfile' })
          })
          .catch(err => {
            console.log("error")
            console.log(err)
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    }
  },
}
</script>