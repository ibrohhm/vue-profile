<template>
  <div class="profile-action px-10">
    <div v-if="editMode" class="profile-action--back link" @click="onGoBackClick"> <font-awesome-icon class="mr-1" :icon="['fas', 'chevron-left']" /> Go back to My Profile</div>
    <div v-else class="profile-action--edit link" @click="onEditClick">Edit profile <font-awesome-icon class="mr-1" :icon="['fas', 'pen']" /></div>
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
    onEditClick(){
      this.$router.push({ name: 'EditProfile' })
    },
    onGoBackClick(){
      this.$router.push({ name: 'MyProfile' })
    }
  }
}
</script>