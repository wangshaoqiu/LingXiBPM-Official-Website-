
<style scoped>
.header {
  width: 100%;
  height: 95px;
  background: rgba(83, 180, 179, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
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
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.login {
  width: 100px;
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
    <img class="logo" @click="goto0" src="../assets/images/logo.svg" alt="">
    <div class="menu flex justify-between">
      <div class="menu-item" @click="goto1">产品</div>
      <div class="menu-item" @click="goto2">联系我们</div>
    </div>
    <div class="login" @click="login">立即登录</div>
  </div>
</template>

<script>
export default {
  name: 'myHeader2',
  props: {
    toSonData: {
      type: String,
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


