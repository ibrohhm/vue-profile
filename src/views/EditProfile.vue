<template>
  <div id="profile" class="flex justify-center w-full h-screen mt-20 pt-20">
    <ProfileTab @onClickProfileTab="onClickProfileTab" :hasSpouse="hasSpouse" class="w-1/4 px-10 py-20"></ProfileTab>
    <ProfileDetail :profile="profile" class="w-1/2" :section="section" :editMode="editMode" @onChangeMaritalStatus="onChangeMaritalStatus"></ProfileDetail>
    <ProfileAction :editMode="editMode" class="w-1/4"></ProfileAction>
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
  computed: {
    hasSpouse(){
      if(this.isMarried !== null) {
        return !!this.isMarried
      } else {
        return !!this.profile.spouse
      }
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
      editMode: true,
      isMarried: null
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
    onClickProfileTab(section){
      this.section = section
    },
    onChangeMaritalStatus(maritalStatus){
      this.isMarried = maritalStatus === "Married"
    }
  }
}
</script>