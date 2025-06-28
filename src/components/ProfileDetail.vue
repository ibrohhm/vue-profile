<template>
  <div class="profile-detail">
    <div class="profile-detail--header">
      <div class="divider divider-start divider-neutral text-4xl flex align-end">{{ editMode ? "Edit" : "My" }} <span class="font-bold">Profile</span></div>
    </div>
    <div class="profile-detail--content flex justify-between mt-10">
      <div class="profile-detail--content-profile-picture w-1/4 p-5">
        <div class="profile-detail--content-image"></div>
        <div class="profile-detail--content-upload link" @click="onClickUploadImage" v-if="editMode">Upload image</div>
      </div>
      <div class="profile-detail--content-detail w-3/4">
        <ProfileBasic 
          :profile="profile"
          :class="{hidden: section !== 'basic'}"
          :editMode="editMode"
          @onSaveProfileBasic="onSaveProfileBasic"
        ></ProfileBasic>
        <ProfileAdditional
          :profile="profile" 
          :class="{hidden: section !== 'additional'}" 
          :editMode="editMode" 
          @onChangeMaritalStatus="onChangeMaritalStatus" 
          @onSaveProfileAdditional="onSaveProfileAdditional"
        ></ProfileAdditional>
        <ProfileSpouse 
          :spouse="profile.spouse" 
          :class="{hidden: section !== 'spouse'}" 
          :editMode="editMode" 
          @onSaveProfileSpouse="onSaveProfileSpouse"
        ></ProfileSpouse>
        <ProfilePreferences 
          :preferences="profile.preferences" 
          :class="{hidden: section !== 'preferences'}" 
          :editMode="editMode" 
          @onSaveProfilePreferences="onSaveProfilePreferences"
        ></ProfilePreferences>
      </div>
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
    },
    onClickUploadImage(){
      alert("upload image")
    },
    onSaveProfileBasic(basicData){
      console.log(basicData)
    },
    onSaveProfileAdditional(additionalData){
      console.log(additionalData)
    },
    onSaveProfileSpouse(spouseData){
      console.log(spouseData)
    },
    onSaveProfilePreferences(preferencesData){
      console.log(preferencesData)
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