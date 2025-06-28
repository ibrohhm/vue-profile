<template>
  <div class="profile-preferences">
    <fieldset class="profile-preferences--hobby fieldset">
      <legend class="fieldset-legend text-base">Hobby and interests</legend>
      <input type="text" class="input w-full" v-model="form.hobbiesAndInterests" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-preferences--sport fieldset">
      <legend class="fieldset-legend text-base">Favorite sport(s)</legend>
      <input type="text" class="input w-full" v-model="form.favoriteSports" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-preferences--music fieldset">
      <legend class="fieldset-legend text-base">Preferred music genre(s)</legend>
      <input type="text" class="input w-full" v-model="form.preferredMusic" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-preferences--movie fieldset">
      <legend class="fieldset-legend text-base">Preferred movie/TV show(s)</legend>
      <input type="text" class="input w-full" v-model="form.preferredMovies" :disabled="!editMode"/>
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
      form: {
        hobbiesAndInterests: "",
        favoriteSports: "",
        preferredMusic: "",
        preferredMovies: ""
      }
    }
  },
  watch: {
    preferences(value){
      this.form = {
        hobbiesAndInterests: value.hobbiesAndInterests || "",
        favoriteSports: value.favoriteSports || "",
        preferredMusic: value.preferredMusic || "",
        preferredMovies: value.preferredMovies || ""
      }
    }
  },
  methods: {
    onClickSave(){
      this.$emit("onSaveProfilePreferences", this.form)
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
    background-color: inherit;
    border: none;
    &:hover{
      cursor: text;
    }
  }
</style>
