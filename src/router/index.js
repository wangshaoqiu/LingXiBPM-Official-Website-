
import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)


export default new Router({
    routes: [
        {
          path: '/',
          component:  () => import('../views/index/index')
        },
        {
          path: '/product',
          component:  () => import('../views/index/product')
        },
        {
          path: '/contact',
          component:  () => import('../views/index/contact')
        },
        {
            path: '/404',
            component: () => import('../views/404'),
            hidden: true
          },



            // 404 page must be placed at the end !!!
          { path: '*', redirect: '/404', hidden: true }
      ]
  })