<template>
  <div class="profile-basic">
    <fieldset class="profile-basic--salutation fieldset">
      <legend class="fieldset-legend text-base">Salutation*</legend>
      <input v-if="!editMode" type="text" class="input w-full" :value="salutation" disabled/>
      <select v-else id="salutation" class="select w-full" v-model="salutation">
        <option disabled value="">-- Select salutation --</option>
        <option v-for="item in salutationList" :key="item" :value="item">{{ item }}</option>
      </select>
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
      salutationList: ["Mr.", "Ms.", "Mrs."],
      salutation: "",
      firstName: "",
      lastName: "",
      email: ""
    }
  },
  watch: {
    profile(value){
      this.salutation = value.salutation || ""
      this.firstName = value.firstName || ""
      this.lastName = value.lastName || ""
      this.email = value.email || ""
    }
  },
  methods: {
    onClickSave(){
      let data = {
        salutation: this.salutation,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      }
      this.$emit("onSaveProfileBasic", data)
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
