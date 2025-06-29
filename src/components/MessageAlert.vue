<template>
  <div id="message-alert" class="flex justify-center items-center w-full fixed left-0 bottom-0 text-white z-1000" :class="{hidden: !show}">
    <div class="message-alert--container flex justify-center p-2 w-1/2">
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
    .message-alert--container{
      background-color: var(--color-error);
      border-radius: 15px 15px 0px 0px;
    }
  }
</style>