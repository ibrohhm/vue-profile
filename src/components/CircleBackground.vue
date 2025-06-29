<template>
  <div id="circle-background" class="flex justify-center items-center w-full h-screen fixed top-0 left-0">
    <div class="circle circle-background-0"></div>
    <div class="circle circle-background-1"></div>
    <div class="circle circle-background-2"></div>
    <div class="circle circle-background-3"></div>
    <div class="circle circle-background-4"></div>
  </div>
</template>

<style scoped>
#circle-background{
  z-index: -1;
  background-color: rgba(76, 76, 92);
  .circle-background-0{
    width: 1550px;
    height: 1550px;
    position: absolute;
    border-radius: 800px;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .circle-background-1{
    width: 1500px;
    height: 1500px;
    position: absolute;
    border-radius: 750px;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .circle-background-2{
    width: 1450px;
    height: 1450px;
    position: absolute;
    border-radius: 725px;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .circle-background-3{
    width: 1400px;
    height: 1400px;
    position: absolute;
    border-radius:700px;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .circle-background-4{
    width: 1350px;
    height: 1350px;
    position: absolute;
    border-radius: 675px;
    background-color: #ffffff;
  }
}
</style>
