import Vue from 'vue'
import App from './App.vue'
// 此为转换px为rem
import 'lib-flexible'

import router from './router'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
