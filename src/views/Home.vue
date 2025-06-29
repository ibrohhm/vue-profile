<template>
  <div id="home" class="flex flex-col justify-center items-center w-full h-screen">
    <div class="home-header flex flex-col items-center">
      <div class="home-header--text text-6xl">
        Welcome to <span class="text-7xl">myApps</span>
      </div>
    </div>
    <div class="home-buttons mt-10">
      <div class="home-buttons--start">
        <button class="btn btn-neutral btn-outline" @click="onClickStart">Start</button>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

export default {
  name: "Home",
  components: {
    Login,
    Register
  },
  data(){
    return {
      isUserHasAccount: true
    }
  },
  methods: {
    onClickStart() {
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>