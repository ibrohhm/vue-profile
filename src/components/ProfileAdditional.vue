<template>
  <div class="profile-additional">
    <fieldset class="profile-additional--home-address fieldset">
      <legend class="fieldset-legend text-base">Home address*</legend>
      <input type="text" class="input w-full" v-model="form.address" :disabled="!editMode" :class="{'input-error': this.errors.address}"/>
      <p class="label text-error" v-if="this.errors.address">please input your address.</p>
    </fieldset>
    <fieldset class="profile-additional--country fieldset">
      <legend class="fieldset-legend text-base">Country*</legend>
      <input type="text" class="input w-full" v-model="form.country" :disabled="!editMode"  :class="{'input-error': this.errors.country}"/>
      <p class="label text-error" v-if="this.errors.country">please input your country.</p>
    </fieldset>
    <fieldset class="profile-additional--postal-code fieldset">
      <legend class="fieldset-legend text-base">Postal code*</legend>
      <input type="text" class="input w-full" v-model="form.postalCode" :disabled="!editMode"  :class="{'input-error': this.errors.postalCode}"/>
      <p class="label text-error" v-if="this.errors.postalCode">please input your postal code.</p>
    </fieldset>
    <fieldset class="profile-additional--birth fieldset">
      <legend class="fieldset-legend text-base">Date of birth</legend>
      <input type="date" class="input w-full" v-model="form.dateOfBirth" :disabled="!editMode" :class="{'input-error': this.errors.ageUnder17}"/>
      <p class="label text-error" v-if="this.errors.ageUnder17">minimum 17 years old</p>
    </fieldset>
    <fieldset class="profile-additional--gender fieldset">
      <legend class="fieldset-legend text-base">Gender</legend>
      <input v-if="!editMode" type="text" class="input w-full" v-model="form.gender" disabled/>
      <select v-else id="gender" class="select w-full" v-model="form.gender">
        <option disabled value="">-- Select gender --</option>
        <option v-for="item in genderList" :key="item" :value="item">{{ item }}</option>
      </select>
    </fieldset>
    <fieldset class="profile-additional--marital-status fieldset">
      <legend class="fieldset-legend text-base">Marital status</legend>
      <input v-if="!editMode" type="text" class="input w-full" v-model="form.maritalStatus" disabled/>
      <select v-else id="maritalStatus" class="select w-full" v-model="form.maritalStatus" @change="onChangeMaritalStatus">
        <option disabled value="">-- Select marital status --</option>
        <option v-for="item in maritalStatusList" :key="item" :value="item">{{ item }}</option>
      </select>
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
      genderList: ["Male","Female"],
      maritalStatusList: ["Single","Married"],
      form: {
        address: "",
        country: "",
        postalCode: "",
        dateOfBirth: "",
        gender: "",
        maritalStatus: ""
      },
      errors: {}
    }
  },
  watch: {
    profile(value){
      this.form = {
        address: value.address || "",
        country: value.country || "",
        postalCode: value.postalCode || "",
        dateOfBirth: value.dateOfBirth || "",
        gender: value.gender || "",
        maritalStatus: value.maritalStatus || ""
      }
    }
  },
  methods: {
    validateForm(){
      this.errors = {}

      if(!this.form.address) this.errors.address = true
      if(!this.form.country) this.errors.country = true
      if(!this.form.postalCode) this.errors.postalCode = true

      if(!!this.form.dateOfBirth) {
        const birthDate = new Date(this.form.dateOfBirth);
        const today = new Date();

        const seventeenYearsAgo = new Date();
        seventeenYearsAgo.setFullYear(today.getFullYear() - 17);
        if(birthDate > seventeenYearsAgo) {
          this.errors.ageUnder17 = true
        }
      }

      return Object.keys(this.errors).length === 0;
    },
    onChangeMaritalStatus(){
      this.$emit('onChangeMaritalStatus', this.form.maritalStatus)
    },
    onClickSave(){
      if(this.validateForm()) this.$emit("onSaveProfileAdditional", this.form)
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
