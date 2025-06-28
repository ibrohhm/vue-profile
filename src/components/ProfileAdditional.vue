<template>
  <div class="profile-additional">
    <fieldset class="profile-additional--home-address fieldset">
      <legend class="fieldset-legend text-base">Home address*</legend>
      <input type="text" class="input w-full" :value="address" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-additional--country fieldset">
      <legend class="fieldset-legend text-base">Country*</legend>
      <input type="text" class="input w-full" :value="country" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-additional--postal-code fieldset">
      <legend class="fieldset-legend text-base">Postal code*</legend>
      <input type="text" class="input w-full" :value="postalCode" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-additional--birth fieldset">
      <legend class="fieldset-legend text-base">Date of birth</legend>
      <input type="text" class="input w-full" :value="dateOfBirth" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-additional--gender fieldset">
      <legend class="fieldset-legend text-base">Gender</legend>
      <input type="text" class="input w-full" :value="gender" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-additional--marital-status fieldset">
      <legend class="fieldset-legend text-base">Marital status</legend>
      <input type="text" class="input w-full" :value="maritalStatus" :disabled="!editMode"/>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "ProfileAdditional",
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
      address: "",
      country: "",
      postalCode: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: ""
    }
  },
  watch: {
    profile(value){
      this.address = value.address
      this.country = value.country
      this.postalCode = value.postalCode
      this.dateOfBirth = value.dateOfBirth
      this.gender = value.gender
      this.maritalStatus = value.maritalStatus
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
