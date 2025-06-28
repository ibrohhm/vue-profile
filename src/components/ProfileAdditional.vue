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
      <input v-if="!editMode" type="text" class="input w-full" :value="gender" disabled/>
      <select v-else id="gender" class="select w-full" v-model="gender">
        <option disabled value="">-- Select gender --</option>
        <option v-for="item in genderList" :key="item" :value="item">{{ item }}</option>
      </select>
    </fieldset>
    <fieldset class="profile-additional--marital-status fieldset">
      <legend class="fieldset-legend text-base">Marital status</legend>
      <input v-if="!editMode" type="text" class="input w-full" :value="maritalStatus" disabled/>
      <select v-else id="maritalStatus" class="select w-full" v-model="maritalStatus" @change="onChangeMaritalStatus">
        <option disabled value="">-- Select marital status --</option>
        <option v-for="item in maritalStatusList" :key="item" :value="item">{{ item }}</option>
      </select>
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
      this.address = value.address || ""
      this.country = value.country || ""
      this.postalCode = value.postalCode || ""
      this.dateOfBirth = value.dateOfBirth || ""
      this.gender = value.gender || ""
      this.maritalStatus = value.maritalStatus || ""
    }
  },
  methods: {
    onChangeMaritalStatus(){
      this.$emit('onChangeMaritalStatus', this.maritalStatus)
    },
    onClickSave(){
      let data = {
        address: this.address,
        country: this.country,
        postalCode: this.postalCode,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        maritalStatus: this.maritalStatus
      }
      this.$emit("onSaveProfileAdditional", data)
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
