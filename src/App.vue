<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}

body{
  padding:0;
  margin:0;
    overflow-x:hidden;
}
div,span{
  font-family:PingFangSC-Medium,PingFang SC;
}
.flex {
    display: flex;
  }
  .justify-between{
    justify-content: space-between;
  }
   .justify-around{
    justify-content: space-around;
  }
  .justify-center {
    justify-content: center;
  }
  .align-center {
    align-items: center;
  }
</style>
