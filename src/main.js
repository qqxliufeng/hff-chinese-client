import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/main.css'
import './assets/style/reset.css'
import 'vant/lib/index.css'

import Navi from '@/views/components/navi'
import EmptyTip from '@/views/components/empty-tip'

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
import { Dialog } from 'vant'

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
Vue.use(Dialog)
Vue.component('navi', Navi)
Vue.component('EmptyTip', EmptyTip)

// localStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjlkODlkMWEyLWVmMGQtNDcxZi1hOTI4LWE4NDMzMzVmNGY1YiJ9.YkKee3U_rQjtXwaM2FyvaLhpcJIQgWqdCybVyKm4aFl1q8t6udaqnfiPHXvQl_q0JdvXcofyGbqudN9DGvDmTw')

const noNeedLoginPageList = ['welcome', 'auth', 'bindPhone', 'experienceLogin']

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

Toast.setDefaultOptions({
  position: 'bottom'
})

// 添加loading提示
Vue.prototype.$showLoading = function (tip = '加载中...') {
  Toast.loading({
    message: tip,
    forbidClick: false,
    loadingType: 'spinner',
    position: 'middle'
  })
}
// 关闭loading提示
Vue.prototype.$closeLoading = function () {
  Toast.clear()
}

// 添加网络请求
Vue.prototype.$http = function ({ url, methods = 'POST', headers = {}, data = {}, loadingTip = '加载中…', beforeRequest = null, afterRequest = null }) {
  if (!url) {
    throw new Error('url is null or undefined')
  }
  if (loadingTip !== null) {
    this.$showLoading(loadingTip)
  }
  beforeRequest && beforeRequest(methods)
  const handleThenFun = res => {
    if (loadingTip !== null) {
      this.$closeLoading()
    }
    // 判断token有没有过期
    if (res.code === 401) {
      user.clearToken()
      user.setTokenStatus(401)
      if (isWeiXin) {
        window.location.href = urlPath.weixinAuthUrl
      }
      throw new Error('登录已过期，请重新登录…')
    }
    afterRequest && afterRequest()
    if (res.code && res.code === 200) {
      return res
    } else {
      throw new Error(res.msg || '请求失败…')
    }
  }
  const handleErrorFun = error => {
    this.$closeLoading()
    afterRequest && afterRequest()
    throw new Error(error.msg || '请求失败…')
  }
  return methods === 'POST' ? http.post(url, data, { headers }).then(handleThenFun, handleErrorFun) : http.get(url, { params: data }).then(handleThenFun, handleErrorFun)
}

Vue.prototype.$post = function ({ url, data = {}, headers = {}, loadingTip = '加载中…', beforeRequest = null, afterRequest = null }) {
  return this.$http({ url, methods: 'POST', headers, data, loadingTip, beforeRequest, afterRequest })
}

Vue.prototype.$get = function ({ url, data = {}, loadingTip = '加载中…', beforeRequest = null, afterRequest = null }) {
  return this.$http({ url, methods: 'GET', data, loadingTip, beforeRequest, afterRequest })
}

router.beforeEach((to, form, next) => {
  if (noNeedLoginPageList.includes(to.name)) {
    if (to.name === 'welcome' && location.search && location.search.indexOf('code') !== -1) {
      handleWeixinAuth(next)
    } else {
      next()
    }
  } else {
    if (user.isLogin()) { // 判断有没有登录
      next()
    } else {
      // 没有登录，去登录
      autoLogin(next)
    }
  }
})

function handleWeixinAuth(next) {
  const urlParams = new URLSearchParams(location.search)
  const code = urlParams.get('code')
  next({ name: 'auth', query: { code } })
}

function autoLogin(next) {
  next()
  // if (isWeiXin) {
  //   window.location.href = urlPath.weixinAuthUrl
  // } else {
  //   next()
  // }
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
