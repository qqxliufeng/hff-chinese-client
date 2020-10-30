import Vue from 'vue'
import qs from 'qs'
Vue.prototype.$startGame = function (params = null) {
  const basePath = 'web-mobile/index.html'
  if (params) {
    return basePath + '?' + qs.stringify(params)
  }
  return basePath
}

export const weixinAuthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9ea7f0838b6db24a&redirect_uri=http://hff.youcanedu.net/&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'

const baseModule = '/user-api/'

const userModule = baseModule + 'user/'

const courseModule = baseModule + 'course/'

const appStasticModeul = baseModule + 'appStastic/'

export const login = baseModule + 'login'

export const sendSms = baseModule + 'sendSms'

export const getInfo = userModule + 'getInfo'

export const bindMobile = userModule + 'bindMobile'

export const bindAccount = userModule + 'bindAccount'

export const dayList = courseModule + 'day/list'

export const szReadingRoom = appStasticModeul + 'szReadingRoom'