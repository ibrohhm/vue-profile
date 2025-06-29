<template>
  <div class="profile-detail">
    <div class="profile-detail--header">
      <div class="divider divider-start divider-neutral text-4xl flex align-end">{{ editMode ? "Edit" : "My" }} <span class="font-bold">Profile</span></div>
    </div>
    <div class="profile-detail--content flex justify-between mt-10 container-card shadow-xl">
      <div class="container-card-dots flex">
        <div class="item-dot m-1"></div>
        <div class="item-dot m-1"></div>
        <div class="item-dot m-1"></div>
      </div>
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
    <loading :show="isLoading"></loading>
  </div>
</template>

<script>
import ProfileBasic from './ProfileBasic.vue';
import ProfileAdditional from './ProfileAdditional.vue';
import ProfileSpouse from './ProfileSpouse.vue';
import ProfilePreferences from './ProfilePreferences.vue';
import Loading from '../components/Loading.vue'

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
    ProfilePreferences,
    Loading
  },
  data(){
    return {
      isLoading: false
    }
  },
  methods: {
    onChangeMaritalStatus(maritalStatus){
      this.$emit('onChangeMaritalStatus', maritalStatus)
    },
    onClickUploadImage(){
      alert("upload image")
    },
    onSaveProfileBasic(basicData){
      this.isLoading = true
      this.$store.dispatch('profile/updateProfileBasic', basicData)
        .then((res) => {
          this.$router.push({ name: 'MyProfile' })
        })
        .catch(err => {
          console.log("error")
          console.log(err)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    onSaveProfileAdditional(additionalData){
      this.isLoading = true
      this.$store.dispatch('profile/updateProfileAdditional', additionalData)
        .then((res) => {
          this.$router.push({ name: 'MyProfile' })
        })
        .catch(err => {
          console.log("error")
          console.log(err)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    onSaveProfileSpouse(spouseData){
      this.isLoading = true
      this.$store.dispatch('profile/updateProfileSpouse', spouseData)
        .then((res) => {
          this.$router.push({ name: 'MyProfile' })
        })
        .catch(err => {
          console.log("error")
          console.log(err)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    onSaveProfilePreferences(preferencesData){
      this.isLoading = true
      this.$store.dispatch('profile/updateProfilePreferences', preferencesData)
        .then((res) => {
          this.$router.push({ name: 'MyProfile' })
        })
        .catch(err => {
          console.log("error")
          console.log(err)
        })
        .finally(() => {
          this.isLoading = false
        })
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
.profile-detail--content{
  max-height: 70vh;
}
.profile-detail--content-detail{
  overflow: scroll;
}
.profile-detail--content-image{
  background-image: url('../images/blank-profile-picture-png.webp');
  height: 120px;
  width: 120px;
  background-size: 120px;
}
</style>