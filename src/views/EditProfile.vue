<template>
  <navbar :showMenu="true"></navbar>
  <div id="edit-profile" class="flex justify-center w-full">
    <ProfileTab @onClickProfileTab="onClickProfileTab" :hasSpouse="hasSpouse" class="w-1/4 px-10 py-20"></ProfileTab>
    <ProfileDetail :profile="profile" class="w-1/2" :section="section" :editMode="editMode" @onChangeMaritalStatus="onChangeMaritalStatus"></ProfileDetail>
    <ProfileAction :editMode="editMode" class="w-1/4"></ProfileAction>
  </div>
  <slide-background></slide-background>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProfileAction from '../components/ProfileAction.vue';
import ProfileDetail from '../components/ProfileDetail.vue';
import ProfileTab from '../components/ProfileTab.vue';
import SlideBackground from '../components/SlideBackground.vue';
import { mapGetters } from 'vuex';

export default {
  name: "EditProfile",
  components: {
    Navbar,
    ProfileAction,
    ProfileDetail,
    ProfileTab,
    SlideBackground
  },
  computed: {
    ...mapGetters({ currentUserId: 'auth/getCurrentUserId' }),
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
    if(!!this.currentUserId) {
      this.$store.dispatch('profile/fetchProfileByUserId', this.currentUserId).then((res) => {
        this.profile = {
          id: res.id,
          salutation: res.salutation || "",
          firstName: res.first_name || "",
          lastName: res.last_name || "",
          email: res.email || "",
          address: res.address || "",
          country: res.country || "",
          postalCode: res.postal_code || "",
          gender: res.gender || "",
          dateOfBirth: res.date_of_birth || "",
          maritalStatus: res.marital_status || "",
          preferences: {
            hobbiesAndInterests: res.hobbies_and_interests || "",
            favoriteSports: res.favorite_sports || "",
            preferredMusic: res.preferred_music || "",
            preferredMovies: res.preferred_movies || "",
          }
        }

        if(this.profile.maritalStatus === "Married") {
          this.profile.spouse = {
            salutation: res.spouse_salutation || "",
            firstName: res.spouse_first_name || "",
            lastName: res.spouse_last_name || "",
          }
        }

        console.log(this.profile)
      })
    } else {
      this.$router.push({ name: 'Login' })
    }
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
<style scoped>
#edit-profile{
  padding: 80px 20px;
  min-height: 100vh;
}
</style>
