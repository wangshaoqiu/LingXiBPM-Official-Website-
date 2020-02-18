
<style scoped>
.header {
  width: 100%;
  height: 95px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.logo {
  width: 178px;
  height: 46px;
  cursor: pointer;
}
.menu {
  height: 30px;
  width: 309px;
}
.menu-item {
  font-size: 22px;
  color: #666;
  cursor: pointer;
  position: relative;
}
.select {
  color: #333333;
}
.XHX1 {
  width: 36px;
  height: 2px;
  background: rgba(51, 51, 51, 1);
  border-radius: 1px;
  position: absolute;
  top: 45px;
  left: 4px;
}
.XHX2 {
  width: 36px;
  height: 2px;
  background: rgba(51, 51, 51, 1);
  border-radius: 1px;
  position: absolute;
  top: 45px;
  left: 26px;
}
.login {
  width: 100px;
  background: #53b4b3;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
@media(max-width: 600px){
  .menu {
  width: 209px;
}
}

</style>

<template>
  <div class="header flex align-center justify-around">
    <img class="logo" @click="goto0" src="../assets/images/logo2.svg" alt="">
    <div  class="menu flex justify-between">
      <div :class="currentIndex==1?'select':''" class="menu-item" @click="goto1">产品
        <div v-if="currentIndex==1" class="XHX1"></div>
      </div>
      <div :class="currentIndex==2?'select':''" class="menu-item" @click="goto2">联系我们
        <div v-if="currentIndex==2" class="XHX2"></div>
      </div>
    </div>
    <div class="login" @click="login">立即登录

    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  props: {
    toSonData: {
      type: Number,
      default: function () {
        return ""
      }
    }
  },
  data () {
    return {
      currentIndex: this.toSonData
    }
  },
  methods: {
    goto0 () {
      this.$router.push({
        path: '/'
      })
    },
    goto1 () {
      this.$router.push({
        path: '/product'
      })
    },
    goto2 () {
      this.$router.push({
        path: '/contact'
      })
    },
    login () {
      window.open('http://bpm.xiniu.pro', '_blank')
    }
  }
}
</script>


