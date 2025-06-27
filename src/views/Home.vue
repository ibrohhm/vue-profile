<template>
  <div id="home" class="flex justify-center items-center w-full h-screen">
    <template v-if="isUserHasAccount">
      <login @showRegister="showRegister"></login>
    </template>
    <template v-else>
      <register @showLogin="showLogin"></register>
    </template>
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
    showLogin() {
      this.isUserHasAccount = true
    },
    showRegister() {
      this.isUserHasAccount = false
    }
  },
}
</script>