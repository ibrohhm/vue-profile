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
        <input type="text" placeholder="User ID*" class="input w-full" />
      </div>
      <div class="login-form--password my-4">
        <input type="text" placeholder="Password*" class="input w-full" />
      </div>
      <div class="login-form--keep-login my-4">
        <label class="label">
          <input type="checkbox" class="checkbox" />
          Keep me logged in
        </label>
      </div>
      <div class="login-form--btn-login">
        <button class="btn btn-neutral">Login</button>
      </div>
    </div>
    <div class="login-note mt-5">
      No account? <a class="link" @click="showRegister">Register here</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {}
  },
  methods: {
    showRegister() {
      this.$emit('showRegister')
    }
  },
}
</script>