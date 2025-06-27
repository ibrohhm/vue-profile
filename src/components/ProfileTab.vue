<template>
  <div class="profile-tab">
    <ul class="menu rounded-box w-full">
      <li v-for="item in profileTabs" :key="item.section" class="profile-tab-item text-base p-1"
        :class="{active: item.section == activeTab}" @click="OnClickProfileTab(item.section)">
        <a>{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ProfileTab",
    data() {
      return {
        activeTab: "basic",
        profileTabs: [{
          section: "basic",
          text: "Basic Details",
        }, {
          section: "additional",
          text: "Additional Details",
        }, {
          section: "spouse",
          text: "Spouse Details",
        }, {
          section: "preferences",
          text: "Preferences Details",
        }]
      }
    },
    methods: {
      OnClickProfileTab(section){
        this.activeTab = section
        this.$emit('OnClickProfileTab', section)
      }
    }
  }
</script>

<style scoped>
  .profile-tab-item {
    border-bottom: 1px solid;

    &:first-child {
      border-top: 1px solid;
    }

    &.active {
      border-bottom: 4px solid;
      font-weight: 900;
      font-size: 1.125rem;
    }
  }
</style>