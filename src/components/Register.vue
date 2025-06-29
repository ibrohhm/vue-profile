<template>
  <div id="register" class="flex flex-col justify-center items-center w-1/2">
    <div class="register-header flex flex-col items-center">
      <div class="register-header--text text-6xl">
        Welcome to <span class="text-7xl">myApp</span>
      </div>
      <progress class="progress w-56 mt-3" value="100" max="100"></progress>
    </div>
    <div class="register-form w-4/5 mt-5">
      <div class="register-form--user-id my-4">
        <input type="text" placeholder="User ID*" v-model="form.userId" class="input w-full" :class="{'input-error': this.errors.userId}"/>
        <p class="label text-error" v-if="this.errors.userId">Please input your user id.</p>
      </div>
      <div class="register-form--password my-4">
        <label v-if="showPassword" class="input w-full" :class="{'input-error': this.errors.password}">
          <input type="text" placeholder="Password*" v-model="form.password"/>
          <font-awesome-icon class="mr-1 cursor-pointer" :icon="['fas', 'eye-slash']" @click="showPassword = false"/>
        </label>
        <label v-else class="input w-full" :class="{'input-error': this.errors.password}">
          <input type="password" placeholder="Password*" v-model="form.password"/>
          <font-awesome-icon class="mr-1 cursor-pointer" :icon="['fas', 'eye']" @click="showPassword = true"/>
        </label>
        <p class="label text-error" v-if="this.errors.password">Please input your password.</p>
      </div>
      <div class="register-form--confirm-password my-4">
        <label v-if="showConfirmPassword" class="input w-full" :class="{'input-error': this.errors.confirmPassword}">
          <input type="text" placeholder="Confirm Password*" v-model="form.confirmPassword"/>
          <font-awesome-icon class="mr-1 cursor-pointer" :icon="['fas', 'eye-slash']" @click="showConfirmPassword = false"/>
        </label>
        <label v-else class="input w-full" :class="{'input-error': this.errors.confirmPassword}">
          <input type="password" placeholder="Confirm Password*" v-model="form.confirmPassword"/>
          <font-awesome-icon class="mr-1 cursor-pointer" :icon="['fas', 'eye']" @click="showConfirmPassword = true"/>
        </label>
        <p class="label text-error" v-if="this.errors.password">Please input your confirm password.</p>
      </div>
      <div class="register-form--btn-register">
        <button class="btn btn-neutral" @click="onClickRegister">Register</button>
      </div>
    </div>
    <div class="register-note mt-5">
      Already have account? <a class="link" @click="showLogin">login here</a>
    </div>
  </div>
  <loading :show="isLoading"></loading>
  <message-alert :message="messageError" :show="!!messageError"></message-alert>
</template>

<script>
import Loading from '../components/Loading.vue'
import MessageAlert from './MessageAlert.vue'

export default {
  name: "Register",
  data(){
    return {
      form: {
        userId: "",
        password: "",
        confirmPassword: ""
      },
      errors: {},
      isLoading: false,
      messageError: null,
      showPassword: false,
      showConfirmPassword: false
    }
  },
  components: {
    Loading,
    MessageAlert
  },
  methods: {
    showLogin() {
      this.$emit('showLogin')
    },
    validateForm(){
      this.errors = {}

      if(!this.form.userId) this.errors.userId = true
      if(!this.form.password) this.errors.password = true
      if(!this.form.confirmPassword){
        this.errors.confirmPassword = true
      } else if(this.form.password !== this.form.confirmPassword){
        this.errors.passwordDoNotMatch = true
        this.messageError = "Your passwords do not match."
      }

      return Object.keys(this.errors).length === 0;
    },
    onClickRegister(){
      this.messageError = null
      if(this.validateForm()){
        this.isLoading = true
        this.$store.dispatch('auth/registerUser', this.form)
          .then((res) => {
            if(res.error){
              this.messageError = res.error.message
            } else {
              this.$router.push({ name: 'MyProfile' })
            }
          })
          .catch(err => {
            console.log("error")
            console.log(err)
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },
  },
}
</script>