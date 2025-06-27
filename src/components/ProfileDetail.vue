<template>
  <div class="profile-detail">
    <div class="profile-detail--header">
      <div class="divider divider-start divider-neutral text-4xl flex align-end">My Profile</div>
    </div>
    <div class="profile-detail--content flex justify-center items-center">
      <div class="profile-detail--content-image w-1/4"></div>
      <ProfileBasic class="w-3/4" v-if="section === 'basic'"></ProfileBasic>
      <ProfileAdditional class="w-3/4" v-else-if="section === 'additional'"></ProfileAdditional>
      <ProfileSpouse class="w-3/4" v-else-if="section === 'spouse'"></ProfileSpouse>
      <ProfilePreferences class="w-3/4" v-else-if="section === 'preferences'"></ProfilePreferences>
    </div>
  </div>
</template>

<script>
import ProfileBasic from './ProfileBasic.vue';
import ProfileAdditional from './ProfileAdditional.vue';
import ProfileSpouse from './ProfileSpouse.vue';
import ProfilePreferences from './ProfilePreferences.vue';

export default {
  name: "ProfileDetail",
  props: {
    section: {
      type: String,
      required: true
    }
  },
  components: {
    ProfileBasic,
    ProfileAdditional,
    ProfileSpouse,
    ProfilePreferences
  }
}
</script>
<style scoped>
.divider:after{
  height: 4px;
  border-radius: 4px;
}
</style>

<style scoped>
.profile-detail--content-image{
}
</style>