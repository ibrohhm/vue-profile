<template>
  <div class="profile-spouse">
    <fieldset class="profile-spouse--salutation fieldset">
      <legend class="fieldset-legend text-base">Salutation</legend>
      <input v-if="!editMode" type="text" class="input w-full" v-model="form.salutation" disabled/>
      <select v-else id="salutation" class="select w-full" v-model="form.salutation">
        <option disabled value="">-- Select one --</option>
        <option v-for="item in salutationList" :key="item" :value="item">{{ item }}</option>
      </select>
    </fieldset>
    <fieldset class="profile-spouse--first-name fieldset">
      <legend class="fieldset-legend text-base">First name</legend>
      <input type="text" class="input w-full" v-model="form.firstName" :disabled="!editMode"/>
    </fieldset>
    <fieldset class="profile-spouse--last-name fieldset">
      <legend class="fieldset-legend text-base">Last Name</legend>
      <input type="text" class="input w-full" v-model="form.lastName" :disabled="!editMode"/>
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
      salutationList: ["Mr.", "Ms.", "Mrs."],
      form: {
        salutation: "",
        firstName: "",
        lastName: "",
      }
    }
  },
  watch: {
    spouse(value){
      this.form = {
        salutation: value && value.salutation || "",
        firstName: value && value.firstName || "",
        lastName: value && value.lastName || "",
      }
    }
  },
  methods: {
    onClickSave(){
      this.$emit("onSaveProfileSpouse", this.form)
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
