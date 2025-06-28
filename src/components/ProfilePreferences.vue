<template>
  <div class="profile-preferences">
    <fieldset class="profile-preferences--hobby fieldset">
      <legend class="fieldset-legend text-base">Hobby and interests</legend>
      <input type="text" class="input w-full" :value="hobbiesAndInterests"/>
    </fieldset>
    <fieldset class="profile-preferences--sport fieldset">
      <legend class="fieldset-legend text-base">Favorite sport(s)</legend>
      <input type="text" class="input w-full" :value="favoriteSports"/>
    </fieldset>
    <fieldset class="profile-preferences--music fieldset">
      <legend class="fieldset-legend text-base">Preferred music genre(s)</legend>
      <input type="text" class="input w-full" :value="preferredMusic"/>
    </fieldset>
    <fieldset class="profile-preferences--movie fieldset">
      <legend class="fieldset-legend text-base">Preferred movie/TV show(s)</legend>
      <input type="text" class="input w-full" :value="preferredMovies"/>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "ProfilePreferences",
  props: {
    preferences: {
      type: Object,
    }
  },
  data(){
    return {
      hobbiesAndInterests: "",
      favoriteSports: "",
      preferredMusic: "",
      preferredMovies: ""
    }
  },
  watch: {
    preferences(value){
      this.hobbiesAndInterests = value.hobbiesAndInterests
      this.favoriteSports = value.favoriteSports
      this.preferredMusic = value.preferredMusic
      this.preferredMovies = value.preferredMovies
    }
  }
}
</script>
