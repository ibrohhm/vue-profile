<template>
  <div id="loading" class="flex justify-center items-center w-full h-screen" :class="{hidden: !show}">
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #0000002e;
  }
</style>