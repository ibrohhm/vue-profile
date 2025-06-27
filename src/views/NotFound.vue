<template>
  <div id="not-found" class="flex justify-center items-center flex-col w-full h-screen">
    <div class="header">404 - Page Not Found</div>
    <div class="subheader">
      <div>The page you are looking for does not exist.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style>
  .header{
    font-size: 42px;
  }

  .subheader{
    padding: 10px;
    font-size: 18px;
  }
</style>
