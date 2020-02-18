<style scoped>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
.container {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.main {
  width: 100vw;
  height: 100vh;
  background: rgba(83, 180, 179, 1);
  overflow: hidden;
  margin-left: -1px;
  box-sizing: border-box;
}
.company {
  font-size: 65px;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-top: 362px;
  margin-bottom: 49px;
}

.company_en {
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 36px;
}
.fgx {
  width: 118px;
  height: 2px;
  background: #fff;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 35px;
}
.describe1 {
  font-size: 18px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 20px;
}
.describe2 {
  width: 768px;
  height: 90px;
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 33px;
  text-align: center;
  margin: 0 auto;
}
.next {
  width: 160px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 52px;
  font-size: 22px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  cursor: pointer;
  line-height: 50px;
}
.footer{
  position:fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: rgba(13, 26, 26, 0.7);
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  line-height: 50px;
}
@media(min-width:960px) and (max-width:1600px){
  .company{
    margin-top:220px;
  }
}
@media(max-width:960px){
  .company{
    font-size: 45px;
    margin-top:200px;
  }
  .describe2{
    width: 92%;
    margin-left:4%;
  }
}
</style>
<template>
  <div class="container">
    <myHeader2></myHeader2>

    <div class="main">
      <div class="company">灵犀工作台，让办公变得简单、高效</div>
      <!-- <div class="company_en">QINGWUNETWORKTECHNOLOGY</div> -->
      <div class="fgx"></div>
      <!-- <div class="describe1">苏州尼特数据科技有限公司为工控行业搭建文库、资料分享交流的平台。</div> -->
      <div class="describe2">灵犀工作台帮助团队高效便捷的管理项目、多团队同步协作、多维度实时监控项目进<br>度、沉淀项目知识成果，让办公变得更加简单、高效。</div>
      <div class="next" @click="gogo">了解工作台</div>
    </div>

    <div class="footer">
      版权所有：© 2020 苏州青雾网络科技有限公司 ｜<span @click="goto" style="cursor:pointer"> ICP：苏ICP备19056318号-2</span>
      </div>
  </div>
</template>
<script>
import myHeader from "../../components/header.vue";
import myHeader2 from "../../components/header2.vue";
export default {
  data () {
    return {
    };
  },
  components: {
    myHeader,
    myHeader2
  },
  methods: {
    gogo () {
      this.$router.push({
        path: '/product'
      })
    },
    goto() {
      window.open('http://www.beian.miit.gov.cn', '_blank')
    }
  }
};
</script>

