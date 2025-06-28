<template>
  <div class="profile-detail">
    <div class="profile-detail--header">
      <div class="divider divider-start divider-neutral text-4xl flex align-end">{{ editMode ? "Edit" : "My" }} <span class="font-bold">Profile</span></div>
    </div>
    <div class="profile-detail--content flex justify-between mt-10">
      <div class="profile-detail--content-image w-1/4 p-10"></div>
      <ProfileBasic :profile="profile" class="w-3/4" :class="{hidden: section !== 'basic'}" :editMode="editMode"></ProfileBasic>
      <ProfileAdditional :profile="profile" class="w-3/4" :class="{hidden: section !== 'additional'}" :editMode="editMode" @onChangeMaritalStatus="onChangeMaritalStatus"></ProfileAdditional>
      <ProfileSpouse :spouse="profile.spouse" class="w-3/4" :class="{hidden: section !== 'spouse'}" :editMode="editMode"></ProfileSpouse>
      <ProfilePreferences :preferences="profile.preferences" class="w-3/4" :class="{hidden: section !== 'preferences'}" :editMode="editMode"></ProfilePreferences>
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
    },
    editMode: {
      type: Boolean,
      required: true
    },
    profile: {
      type: Object,
    }
  },
  components: {
    ProfileBasic,
    ProfileAdditional,
    ProfileSpouse,
    ProfilePreferences
  },
  methods: {
    onChangeMaritalStatus(maritalStatus){
      this.$emit('onChangeMaritalStatus', maritalStatus)
    }
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
  background-image: url('../images/blank-profile-picture-png.webp');
  height: 120px;
  width: 120px;
  background-size: 120px;
}
</style>