<template>
  <div class="profile-basic">
    <fieldset class="profile-basic--salutation fieldset">
      <legend class="fieldset-legend text-base">Salutation*</legend>
      <input type="text" class="input w-full" :value="salutation" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-basic--first-name fieldset">
      <legend class="fieldset-legend text-base">First name*</legend>
      <input type="text" class="input w-full" :value="firstName" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-basic--last-name fieldset">
      <legend class="fieldset-legend text-base">Last Name*</legend>
      <input type="text" class="input w-full" :value="lastName" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-basic--email fieldset">
      <legend class="fieldset-legend text-base">Email address*</legend>
      <input type="text" class="input w-full" :value="email" :disabled="!editMode"/>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "ProfileBasic",
  props: {
    profile: {
      type: Object,
    },
    editMode: {
      type: Boolean,
      required: true
    },
  },
  data(){
    return {
      salutation: "",
      firstName: "",
      lastName: "",
      email: ""
    }
  },
  watch: {
    profile(value){
      this.salutation = value.salutation
      this.firstName = value.firstName
      this.lastName = value.lastName
      this.email = value.email
    }
  }
}
</script>

<style scoped>
  input:disabled{
    color: black;
    background-color: white;
    border: none;
  }
</style>
