<style scoped>
div {
  text-align: left;
}
.container {
  width: 100vw;
}
.title {
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  font-size: 40px;
  margin: 0 auto;
  margin-top: 240px;
  text-align: center;
}
.pic1_wrap {
  width: 840px;
  height: 467px;
  margin: 0 auto;
  margin-top: 61px;
}
.pic1 {
  width: 840px;
  height: 467px;
  margin: 0 auto;
  /* margin-top:61px; */
}
.table {
  width: 1182px;
  height: 100%;
  margin: 0 auto;
}
.item {
  width: 100%;
  height: 458px;
  margin-top: 139px;
}
.info {
  width: 460px;
  height: 396px;
}
.picArea {
  width: 662px;
  height: 458px;
  position: relative;
}

.name {
  font-size: 36px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-top: 31px;
}
.name2 {
  margin-top: 66px;
}
.name3 {
  margin-top: 96px;
}
.name4 {
  margin-top: 49px;
}
.describe {
  margin-top: 36px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-bottom: 24px;
}
.list {
  height: 36px;
}
.dot {
  width: 8px;
  height: 8px;
  background: rgba(83, 180, 179, 1);
  border-radius: 50%;
  margin-right: 10px;
}
.text {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.round {
  position: absolute;
  top: 0;
  margin-right: 10px;
  z-index: 0;
  top: -25px;
  left: -35px;
  width: 199px;
  height: 199px;
}
.square {
  position: absolute;
  top: 0;
  z-index: 0;
  width: 134px;
  height: 90px;
  top: 387px;
  right: 154px;
}
.round2 {
  position: absolute;
  top: 0;
  margin-right: 10px;
  z-index: 0;
  top: 297px;
  left: -35px;
  width: 199px;
  height: 199px;
}
.square2 {
  position: absolute;
  top: 0;
  z-index: 0;
  width: 134px;
  height: 90px;
  top: -15px;
  right: 211px;
}
.round3 {
  position: absolute;
  margin-right: 10px;
  z-index: 0;
  top: -49px;
  left: 64px;
  width: 199px;
  height: 199px;
}
.square3 {
  position: absolute;
  top: 0;
  z-index: 0;
  width: 134px;
  height: 90px;
  top: 320px;
  right: 213px;
}
.picture {
  width: 662px;
  height: 458px;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.picture2 {
  width: 662px;
  height: 400px;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.subTitle {
  margin-top: 112px;
  font-size: 36px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
}
.loginNow {
  width: 140px;
  height: 50px;
  background: rgba(83, 180, 179, 1);
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 190px;
  cursor: pointer;
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
  <div class="container">
    <myHeader :toSonData="1"></myHeader>
    <div class="title">灵犀工作台，办公可以如此简单</div>
    <div class="pic1_wrap">
      <img preview="0" class="pic1" src="../../assets/images/1.png" alt="">
    </div>
    <div class="table">
      <div class="item flex justify-between">
        <div class="info">
          <div class="name">项目</div>
          <div class="describe">工作台提供多套项目模板来帮助不同业务场景的团队设置规范的执行流程。同时支持自定义模板的功能，团队可根据实际业务需要自主制定工作流程。</div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">自定义工作流程环节</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">设置/添加 环节审核人</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">标记项目优先级</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">项目保密性设置</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">关联多项资料</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">支持项目评论，@通知团队成员</div>
          </div>
        </div>
        <div class="picArea">
          <img preview="1" class="picture" src="../../assets/images/2.png" alt="">
          <img class="round" src="../../assets/images/round.png" alt="">
          <img class="square" src="../../assets/images/square.png" alt="">
        </div>
      </div>

      <div class="item flex justify-between">

        <div class="picArea">
          <img preview="2" class="picture" src="../../assets/images/3.png" alt="">
          <img class="round" src="../../assets/images/round.png" alt="">
          <img class="square" src="../../assets/images/square.png" alt="">
        </div>
        <div class="info">
          <div class="name name2">项目看板</div>
          <div class="describe">在简洁优雅的「看板」上，随时获知「谁」、要「做什么」、在「何时」完成、协同进展很轻松，跨团队合作项目也可以高效落实到位。</div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">支持关键词搜索查找特定项目</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">查找逾期项目</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">跨时间段筛选项目</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">即将逾期项目着重标记、</div>
          </div>
        </div>
      </div>

      <div class="item flex justify-between">
        <div class="info">
          <div class="name name3">任务表格</div>
          <div class="describe">「我执行的」、「我参与的」、「我审批的」，个人任务列表，管理查看每日需要完成的工作。</div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">标记任务紧急度、重要任务不遗漏</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">每日工作单独展示，专注当前任务，避免其他任务干扰</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">展示每个项目的当前执行状态，便于把控项目进度</div>
          </div>
        </div>
        <div class="picArea">
          <img preview="3" class="picture" src="../../assets/images/4.png" alt="">
          <img class="round2" src="../../assets/images/round.png" alt="">
          <img class="square2" src="../../assets/images/square.png" alt="">
        </div>
      </div>

      <div class="item flex justify-between">

        <div class="picArea">
          <img preview="4" class="picture2" src="../../assets/images/5.png" alt="">
          <img class="round3" src="../../assets/images/round.png" alt="">
          <img class="square3" src="../../assets/images/square.png" alt="">
        </div>
        <div class="info">
          <div class="name name4">团队知识库</div>
          <div class="describe">将团队项目执行过程中的成果沉淀下来，为每个想表达所思所想的人提供展示平台，让知识能得以记录和传播。</div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">支持图片、视频、文本等多种格式的资料上传</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">一键上传多个本地文件</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">设置文件查阅权限、指定特定成员可见</div>
          </div>
          <div class="list flex align-center">
            <div class="dot"></div>
            <div class="text">对外分享知识库的文档和文件</div>
          </div>
        </div>
      </div>

      <div class="subTitle">就是现在，开始便捷、高效的工作方式</div>
      <div class="loginNow" @click="loginNow">立即登录</div>
      
    </div>
    <div class="footer">
      版权所有 ：©  2020 苏州青雾网络科技有限公司 ｜<span @click="goto" style="cursor:pointer"> ICP：苏ICP备19056318号-2</span>
      </div>
    <!-- <myFooter /> -->
    
  </div>
</template>
<script>
import myHeader from "../../components/header.vue";
export default {
  data () {
    return {
      index: 0
    };
  },
  components: {
    myHeader
  },
  methods: {
    loginNow () {
      window.open('http://bpm.xiniu.pro', '_blank')
    },
    goto() {
      window.open('http://www.beian.miit.gov.cn', '_blank')
    }
  }
};
</script>

