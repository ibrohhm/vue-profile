<template>
  <div class="profile-basic">
    <fieldset class="profile-basic--salutation fieldset">
      <legend class="fieldset-legend text-base">Salutation*</legend>
      <input v-if="!editMode" type="text" class="input w-full" v-model="form.salutation" disabled/>
      <select v-else id="salutation" class="select w-full" :class="{'select-error': this.errors.salutation}" v-model="form.salutation">
        <option disabled value="">-- Select salutation --</option>
        <option v-for="item in salutationList" :key="item" :value="item">{{ item }}</option>
      </select>
      <p class="label text-error" v-if="this.errors.salutation">please select your salutation.</p>
    </fieldset>
    <fieldset class="profile-basic--first-name fieldset">
      <legend class="fieldset-legend text-base">First name*</legend>
      <input type="text" class="input w-full" v-model="form.firstName" :disabled="!editMode" :class="{'input-error': this.errors.firstName}"/>
      <p class="label text-error" v-if="this.errors.firstName">please input your first name.</p>
    </fieldset>
    <fieldset class="profile-basic--last-name fieldset">
      <legend class="fieldset-legend text-base">Last Name*</legend>
      <input type="text" class="input w-full" v-model="form.lastName" :disabled="!editMode" :class="{'input-error': this.errors.lastName}"/>
      <p class="label text-error" v-if="this.errors.lastName">please input your last name.</p>
    </fieldset>
    <fieldset class="profile-basic--email fieldset">
      <legend class="fieldset-legend text-base">Email address*</legend>
      <input type="text" class="input w-full" v-model="form.email" :disabled="!editMode" :class="{'input-error': this.errors.email}"/>
      <p class="label text-error" v-if="this.errors.email">please input your email.</p>
    </fieldset>
    <template v-if="editMode">
      <div class="profile-basic--buttons mt-5">
        <button class="btn btn-neutral" @click="onClickSave">SAVE & UPDATE</button>
        <button class="btn ml-2" @click="onClickCancel">CANCEL</button>
      </div>
      <div class="profile-basic--note mt-5 italic font-thin text-sm">
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
      form: {
        salutation: "",
        firstName: "",
        lastName: "",
        email: "",
      },
      errors: {}
    }
  },
  watch: {
    profile(value){
      this.form = {
        salutation: value.salutation || "",
        firstName: value.firstName || "",
        lastName: value.lastName || "",
        email: value.email || "",
      }
    }
  },
  methods: {
    validateForm(){
      this.errors = {}

      if(!this.form.salutation) this.errors.salutation = true
      if(!this.form.firstName) this.errors.firstName = true
      if(!this.form.lastName) this.errors.lastName = true
      if(!this.form.email) this.errors.email = true

      return Object.keys(this.errors).length === 0;
    },
    onClickSave(){
      if(this.validateForm()) this.$emit("onSaveProfileBasic", this.form)
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
