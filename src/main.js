import Vue from 'vue'
import axios from 'axios'
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
import { Button } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Icon } from 'vant'
import { Toast } from 'vant'
import { Field } from 'vant'

import user from './data/user.js'

import * as urlPath from './data/url-path'

import http from './utils/http'

Vue.use(Button)
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
Vue.use(Toast)
Vue.use(Field)
Vue.component('navi', Navi)

const noNeedLoginPageList = ['auth']

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

// 把所有的url添加到原型链上
Vue.prototype.$urlPath = urlPath

// 添加loading提示
Vue.prototype.$showLoading = function (tip = '加载中...') {
  Toast.loading({
    message: tip, forbidClick: false, loadingType: 'spinner'
  })
}
// 关闭loading提示
Vue.prototype.$closeLoading = function () {
  Toast.clear()
}

// 添加网络请求
Vue.prototype.$http = function ({ url, methods = 'POST', data = {}, beforeRequest = null, afterRequest = null }) {
  if (!url) {
    throw new Error('url is null or undefined')
  }
  this.$showLoading()
  beforeRequest && beforeRequest(methods)
  const handleThenFun = res => {
    this.$closeLoading()
    afterRequest && afterRequest()
    return res
  }
  const handleErrorFun = error => {
    this.$closeLoading()
    afterRequest && afterRequest()
    return error
  }
  return methods === 'POST' ? http.post(url, data).then(handleThenFun, handleErrorFun) : http.get(url, { params: data }).then(handleThenFun, handleErrorFun)
}

Vue.prototype.$post = function ({ url, data = {}, beforeRequest = null, afterRequest = null }) {
  return this.$http({ url, methods: 'POST', data, beforeRequest, afterRequest })
}

Vue.prototype.$get = function ({ url, data = {}, beforeRequest = null, afterRequest = null }) {
  return this.$http({ url, methods: 'GET', data, beforeRequest, afterRequest })
}

router.beforeEach((to, form, next) => {
  if (noNeedLoginPageList.includes(to.name)) {
    next()
  } else {
    if (location.search && location.search.indexOf('code') !== -1) {
      // 说明是从微信回调回来的
      handleWeixinAuth(next)
    } else {
      if (user.isLogin()) { // 判断有没有登录
        if (user.isVipMode()) { // 判断学习模式，是不是vip模式
          if (user.isBindPhone()) {
            next()
          } else {
            next({ name: 'bindPhone' }) // 没绑定手机号，去绑定手机号
          }
        } else if (user.isExperienceMode()) { // 判断学习模式，是不是体验模式
          if (user.hasExperienceAccount()) {
            next()
          } else {
            next({ name: 'experienceLogin' }) // 没绑定体验账号，去绑定体验账号
          }
        } else { // 没有设置任何模式
          next()
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
  if (user.hasToken()) {
    axios.post().then(res => {
      console.log(res)
    })
  } else {
    next()
    // if (isWeiXin) {
    //   window.location.href = urlPath.weixinAuthUrl
    // } else {
    //   next()
    // }
  }
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
