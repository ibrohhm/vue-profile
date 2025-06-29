<template>
  <navbar></navbar>
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
import Navbar from '../components/Navbar.vue';
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import { mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    Navbar,
    Login,
    Register
  },
  computed: {
    ...mapGetters({ currentUserId: 'auth/getCurrentUserId' })
  },
  data(){
    return {
      isUserHasAccount: true
    }
  },
  mounted(){
    if(!!this.currentUserId){
      this.$router.push({ name: 'MyProfile' })
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