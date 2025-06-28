<template>
  <div class="profile-preferences">
    <fieldset class="profile-preferences--hobby fieldset">
      <legend class="fieldset-legend text-base">Hobby and interests</legend>
      <input type="text" class="input w-full" :value="hobbiesAndInterests" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-preferences--sport fieldset">
      <legend class="fieldset-legend text-base">Favorite sport(s)</legend>
      <input type="text" class="input w-full" :value="favoriteSports" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-preferences--music fieldset">
      <legend class="fieldset-legend text-base">Preferred music genre(s)</legend>
      <input type="text" class="input w-full" :value="preferredMusic" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-preferences--movie fieldset">
      <legend class="fieldset-legend text-base">Preferred movie/TV show(s)</legend>
      <input type="text" class="input w-full" :value="preferredMovies" :disabled="!editMode"/>
    </fieldset>
    <template v-if="editMode">
      <div class="profile-basic--buttons mt-5">
        <button class="btn btn-neutral" @click="onClickSave">SAVE & UPDATE</button>
        <button class="btn ml-2" @click="onClickCancel">CANCEL</button>
      </div>
      <div class="profile-basic--note mt-5 italic font-thin">
        * Mandatory field
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ProfilePreferences",
  props: {
    preferences: {
      type: Object,
    },
    editMode: {
      type: Boolean,
      required: true
    },
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
      this.hobbiesAndInterests = value.hobbiesAndInterests || ""
      this.favoriteSports = value.favoriteSports || ""
      this.preferredMusic = value.preferredMusic || ""
      this.preferredMovies = value.preferredMovies || ""
    }
  },
  methods: {
    onClickSave(){
      let data = {
        hobbiesAndInterests: this.hobbiesAndInterests,
        favoriteSports: this.favoriteSports,
        preferredMusic: this.preferredMusic,
        preferredMovies: this.preferredMovies
      }
      this.$emit("onSaveProfilePreferences", data)
    },
    onClickCancel(){
      this.$router.push({ name: 'MyProfile' })
    }
  }
}
</script>

<style scoped>
  input:disabled{
    color: black;
    background-color: white;
    border: none;
    &:hover{
      cursor: text;
    }
  }
</style>
