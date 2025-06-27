<template>
  <div id="profile" class="flex justify-center items-center w-full h-screen">
    <ProfileTab class="w-1/4"></ProfileTab>
    <ProfileDetail class="w-1/2"></ProfileDetail>
    <ProfileAction class="w-1/4"></ProfileAction>
  </div>
</template>

<script>
import ProfileAction from '../components/ProfileAction.vue';
import ProfileDetail from '../components/ProfileDetail.vue';
import ProfileTab from '../components/ProfileTab.vue'

export default {
  name: "Profile",
  components: {
    ProfileAction,
    ProfileDetail,
    ProfileTab,
  },
  data(){
    return {}
  }
}
</script>