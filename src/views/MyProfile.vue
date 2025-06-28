<template>
  <navbar></navbar>
  <div id="my-profile" class="flex justify-center w-full">
    <ProfileTab @onClickProfileTab="onClickProfileTab" :hasSpouse="hasSpouse" class="w-1/4 px-10 py-20"></ProfileTab>
    <ProfileDetail :profile="profile" class="w-1/2" :section="section" :editMode="editMode"></ProfileDetail>
    <ProfileAction :editMode="editMode" class="w-1/4"></ProfileAction>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProfileAction from '../components/ProfileAction.vue';
import ProfileDetail from '../components/ProfileDetail.vue';
import ProfileTab from '../components/ProfileTab.vue'
import { mapGetters } from 'vuex'

export default {
  name: "MyProfile",
  components: {
    Navbar,
    ProfileAction,
    ProfileDetail,
    ProfileTab,
  },
  computed: {
    ...mapGetters({ currentUserId: 'auth/getCurrentUserId' }),
    hasSpouse(){
      return !!this.profile.spouse
    }
  },
  data(){
    return {
      section: "basic",
      profile: {
        id: "",
        salutation: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        country: "",
        postalCode: "",
        gender: "",
        dateOfBirth: "",
        maritalStatus: "",
        spouse: null,
        prereferences: null
      },
      editMode: false
    }
  },
  mounted(){
    this.$store.dispatch('profile/fetchProfileByUserId', this.currentUserId).then((res) => {
      this.profile = {
        id: res.id,
        salutation: res.salutation,
        firstName: res.first_name,
        lastName: res.last_name,
        email: res.email,
        address: res.address,
        country: res.country,
        postalCode: res.postal_code,
        gender: res.gender,
        dateOfBirth: res.date_of_birth,
        maritalStatus: res.marital_status,
      }

      if(res.spouse !== null){
        this.profile.spouse = {
          salutation: res.spouse.salutation,
          firstName: res.spouse.first_name,
          lastName: res.spouse.last_name
        }
      }

      if(res.preferences !== null) {
        this.profile.preferences = {
          hobbiesAndInterests: res.preferences.hobbies_and_interests,
          favoriteSports: res.preferences.favorite_sports,
          preferredMusic: res.preferences.preferred_music,
          preferredMovies: res.preferences.preferred_movies,
        }
      }
    })
  },
  methods: {
    onClickProfileTab(section){
      this.section = section
    },
  }
}
</script>

<style scoped>
#my-profile{
  padding: 80px 20px;
  min-height: 100vh;
  box-shadow: inset rgba(76, 76, 92, 1) 0px -5px,
              inset rgba(76, 76, 92, 0.75) 0px -10px,
              inset rgba(76, 76, 92, 0.5) 0px -15px,
              inset rgba(76, 76, 92, 0.25) 0px -20px;
}
</style>
