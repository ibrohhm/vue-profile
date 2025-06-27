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
        <input type="text" placeholder="User ID*" class="input w-full" />
      </div>
      <div class="register-form--password my-4">
        <input type="text" placeholder="Password*" class="input w-full" />
      </div>
      <div class="register-form--confirm-password my-4">
        <input type="text" placeholder="Confirm Password*" class="input w-full" />
      </div>
      <div class="register-form--btn-register">
        <button class="btn btn-neutral">Register</button>
      </div>
    </div>
    <div class="register-note mt-5">
      Already have account? <a class="link" @click="showLogin">login here</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {}
  },
  methods: {
    showLogin() {
      this.$emit('showLogin')
    }
  },
}
</script>