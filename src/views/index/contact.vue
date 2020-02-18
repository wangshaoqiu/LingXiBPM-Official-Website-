<style scoped>
div {
  text-align: left;
}
.main {
  width: 1130px;
  height: 530px;
  margin: 0 auto;

  margin-top: 255px;
  margin-bottom: 245px;
  /* margin-left:430px; */
  flex-wrap: wrap;
}
.part1 {
  width: 348px;
  height: 450px;
  position: relative;
  overflow: hidden;
}
.part2 {
  width: 660px;
  height: 530px;
  margin-left: 122px;
}
.HaHa {
  width: 118px;
  height: 10px;
  background: #53b4b3;
  border-radius: 5px;
  position: absolute;
  top: 28px;
  left: -3px;
  z-index: 0;
}
.contact {
  /* width:112px; */
  height: 40px;
  font-size: 28px;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}
.contact_en {
  margin-left: 15px;
  margin-top: 42px;
  /* width:82px; */
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
.phone {
  height: 30px;
  margin-top: 44px;
}
.email,
.address {
  height: 30px;
  margin-top: 37px;
}
.icon {
  width: 30px;
  height: 30px;
}
.info {
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  margin-left: 13px;
}
.FGX {
  width: 348px;
  height: 1px;
  background: rgba(216, 216, 216, 1);
  margin-top: 39px;
}
.chat {
  height: 28px;
  font-size: 20px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
  margin-top: 50px;
}
.phone2 {
  height: 30px;
  margin-top: 24px;
}
.ditu {
  width: 660px;
  height: 530px;
}
.footer{
  width: 100vw;
  height: 50px;
  background: rgba(13, 26, 26, 0.7);
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  line-height: 50px;
}
</style>
<template>
  <div>
    <myHeader :toSonData="2"></myHeader>
    <div class="main flex">
      <div class="part1">
        <div class="HaHa"></div>
        <div class="contact">联系我们</div>
        <div class="contact_en">Contact us</div>
        <div class="phone flex align-center">
          <img class="icon" src="../../assets/images/phone.png" alt="">
          <div class="info">18862241418</div>
        </div>
        <div class="email flex align-center">
          <img class="icon" src="../../assets/images/email.png" alt="">
          <div class="info">785852235@qq.com </div>
        </div>
        <div class="address flex align-center">
          <img class="icon" src="../../assets/images/address.png" alt="">
          <div class="info">苏州工业园区东长路2.5D产业园</div>
        </div>
        <div class="FGX"></div>
        <div class="chat">商务合作咨询</div>
        <div class="phone2 flex align-center">
          <img class="icon" src="../../assets/images/phone.png" alt="">
          <div class="info">18862241418</div>
        </div>

      </div>
      <div class="part2">
        <img class="ditu" src="../../assets/images/地图.png" alt="">
      </div>
    </div>

    <div class="footer">
      版权所有 ：© 2020 苏州青雾网络科技有限公司 ｜<span @click="goto" style="cursor:pointer"> ICP：苏ICP备19056318号-2</span>
      </div>
  </div>
</template>
<script>
import myHeader from "../../components/header.vue";
export default {
  data () {
    return {
    };
  },
  components: {
    myHeader
  },
  methods: {
    goto() {
      window.open('http://www.beian.miit.gov.cn', '_blank')
    }
  }
};
</script>

