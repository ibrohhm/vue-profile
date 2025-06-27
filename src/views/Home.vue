<template>
  <div id="home" class="flex justify-center items-center w-full h-screen">
    <login></login>
  </div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
  name: "Home",
  components: {
    Login
  },
  data(){
    return {}
  },
}
</script>