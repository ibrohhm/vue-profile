<template>
  <div id="navbar" class="navbar bg-base-100 shadow-sm fixed top-0 w-full">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" @click="goToHomepage">Profile Apps</a>
    </div>
    <div class="flex-none" :class="{hidden: !showMenu}">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        </div>
        <ul
          tabindex="0"
          class="navbar-menu menu menu-sm dropdown-content bg-base-100 rounded-box fixed z-1 right-0 mt-3 w-52 p-2 shadow bg-white">
          <li><a @click="goToHomepage">Homepage</a></li>
          <li><a @click="goToMyProfile">My Profile</a></li>
          <li><a @click="goToEditProfile">Edit Profile</a></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  <loading :show="isLoading"></loading>
</template>

<script>
import Loading from '../components/Loading.vue'

export default {
  name: "Navbar",
  components: {
    Loading,
  },
  props: {
    showMenu: {
      type: Boolean,
    },
  },
  data(){
    return {
      isLoading: false,
    }
  },
  methods: {
    goToHomepage(){
      this.$router.push({ name: 'Home' })
    },
    goToMyProfile(){
      this.$router.push({ name: 'MyProfile' })
    },
    goToEditProfile(){
      this.$router.push({ name: 'EditProfile' })
    },
    logout(){
      this.isLoading = true
      this.$store.dispatch('auth/logout')
        .then((res) => {
          this.$router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log("error")
          console.log(err)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style scoped>
#navbar{
  z-index: 1;
}
</style>
