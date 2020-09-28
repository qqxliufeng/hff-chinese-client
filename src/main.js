import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/main.css'
import './assets/style/reset.css'
import 'vant/lib/index.css'

import Navi from '@/views/components/navi'

import { Image as VanImage } from 'vant'
import { Col, Row } from 'vant'
import { Tab, Tabs } from 'vant'
import { Grid, GridItem } from 'vant'
import { Calendar } from 'vant'

import { Cell, CellGroup } from 'vant'

import { Icon } from 'vant'

import user from './data/user.js'

Vue.use(Icon)

Vue.use(Cell)
Vue.use(CellGroup)

Vue.use(Calendar)

Vue.use(Grid)
Vue.use(GridItem)

Vue.use(Tab)
Vue.use(Tabs)

Vue.use(VanImage)
Vue.use(Col)
Vue.use(Row)
Vue.component('navi', Navi)

const noNeedLoginPageList = ['auth', 'bindPhone']

Vue.config.productionTip = false

document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'

window.onresize = () => {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
}

//设置当前用户信息
Vue.prototype.$user = user
//判断当前浏览器是不是微信浏览器
const isWeiXin = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
Vue.prototype.$isWeiXin = isWeiXin

router.beforeEach((to, form, next) => {
  if (noNeedLoginPageList.includes(to.name)) {
    next()
  } else {
    if (location.search && location.search.indexOf('code') !== -1) {
      // 说明是从微信回调回来的
      handleWeixinAuth(next)
    } else {
      if (user.isLogin()) {
        if (user.isBindPhone()) {
          next()
        } else {
          next({ name: 'bindPhone' }) // 没绑定手机号，去绑定手机号
        }
      } else {
        // 没有登录，去登录
        autoLogin(next)
      }
    }
  }
})

function handleWeixinAuth(next) {
  const urlParams = new URLSearchParams(location.search)
  next({ name: 'auth', query: { code: urlParams.get('code') } })
}

function autoLogin(next) {
  next()
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
