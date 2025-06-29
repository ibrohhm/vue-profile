<template>
  <div id="loading" class="flex justify-center items-center w-full h-screen fixed top-0 left-0 z-1000" :class="{hidden: !show}">
    <span class="loading loading-spinner loading-xl"></span>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    show: {
      type: Boolean,
      required: true
    },
  },
}
</script>

<style scope>
  #loading {
    background-color: #0000002e;
  }
</style>