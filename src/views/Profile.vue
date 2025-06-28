<template>
  <div id="profile" class="flex justify-center items-center w-full h-screen">
    <ProfileTab @OnClickProfileTab="OnClickProfileTab" class="w-1/4"></ProfileTab>
    <ProfileDetail :profile="profile" class="w-1/2" :section="section"></ProfileDetail>
    <ProfileAction class="w-1/4"></ProfileAction>
  </div>
</template>

<script>
import ProfileAction from '../components/ProfileAction.vue';
import ProfileDetail from '../components/ProfileDetail.vue';
import ProfileTab from '../components/ProfileTab.vue'

export default {
  name: "Profile",
  props: {
    userId: {
      type: Number
    },
  },
  components: {
    ProfileAction,
    ProfileDetail,
    ProfileTab,
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
    }
  },
  mounted(){
    this.$store.dispatch('profile/fetchProfileByUserId', this.userId).then((res) => {
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
    OnClickProfileTab(section){
      this.section = section
    }
  }
}
</script>