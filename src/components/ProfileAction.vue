<template>
  <div class="profile-action px-10">
    <div v-if="editMode" class="profile-action--back link" @click="OnGoBackClick"> <font-awesome-icon class="mr-1" :icon="['fas', 'chevron-left']" /> Go back to My Profile</div>
    <div v-else class="profile-action--edit link" @click="OnEditClick">Edit profile <font-awesome-icon class="mr-1" :icon="['fas', 'pen']" /></div>
  </div>
</template>
<script>
export default {
  name: "ProfileAction",
  props: {
    editMode: {
      type: Boolean
    },
  },
  methods: {
    OnEditClick(){
      this.$router.push({ name: 'EditProfile' })
    },
    OnGoBackClick(){
      this.$router.push({ name: 'MyProfile' })
    }
  }
}
</script>