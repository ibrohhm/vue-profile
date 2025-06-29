<template>
  <div id="slide-background" class="flex justify-center items-center w-full h-screen fixed top-0 left-0">
    <div class="circle slide-background-0"></div>
    <div class="circle slide-background-1"></div>
    <div class="circle slide-background-2"></div>
    <div class="circle slide-background-3"></div>
    <div class="circle slide-background-4"></div>
  </div>
</template>

<style scoped>
#slide-background{
  z-index: -1;
  background-color: rgba(76, 76, 92);
  .slide-background-0{
    width: 100%;
    height: calc(100vh - 10px);
    position: absolute;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .slide-background-1{
    width: 100%;
    height: calc(100vh - 20px);
    position: absolute;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .slide-background-2{
    width: 100%;
    height: calc(100vh - 30px);
    position: absolute;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .slide-background-3{
    width: 100%;
    height: calc(100vh - 40px);
    position: absolute;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .slide-background-4{
    width: 100%;
    height: calc(100vh - 50px);
    position: absolute;
    background-color: #ffffff;
  }
}
</style>
