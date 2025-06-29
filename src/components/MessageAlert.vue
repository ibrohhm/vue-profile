<template>
  <div id="message-alert" class="flex justify-center items-center w-full" :class="{hidden: !show}">
    <div class="message-alert--container flex justify-center">
      <div class="messsage-alert--text">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageAlert",
  props: {
    show: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
    },
  },
}
</script>

<style scope>
  #message-alert {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    .message-alert--container{
      color: white;
      width: 50%;
      height: 40px;
      background-color: var(--color-error);
      border-radius: 15px 15px 0px 0px;
      padding: 10px;
    }
  }
</style>