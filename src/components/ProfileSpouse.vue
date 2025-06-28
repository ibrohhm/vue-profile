<template>
  <div class="profile-spouse">
    <fieldset class="profile-spouse--salutation fieldset">
      <legend class="fieldset-legend text-base">Salutation</legend>
      <input type="text" class="input w-full" :value="salutation" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-spouse--first-name fieldset">
      <legend class="fieldset-legend text-base">First name</legend>
      <input type="text" class="input w-full" :value="firstName" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-spouse--last-name fieldset">
      <legend class="fieldset-legend text-base">Last Name</legend>
      <input type="text" class="input w-full" :value="lastName" :disabled="!editMode"/>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "ProfileSpouse",
  props: {
    spouse: {
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
    }
  },
  watch: {
    spouse(value){
      this.salutation = value && value.salutation
      this.firstName = value && value.firstName
      this.lastName = value && value.lastName
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
