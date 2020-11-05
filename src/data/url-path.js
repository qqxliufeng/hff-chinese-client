import Vue from 'vue'
import qs from 'qs'
Vue.prototype.$startGame = function (params = null) {
  const basePath = 'web-mobile/index.html'
  if (params) {
    return basePath + '?' + qs.stringify(params)
  }
  return basePath
}

export const apiAddress = 'http://segeg.free.idcfengye.com'

export const baseAddress = 'http://hff.youcanedu.net/'

export const weixinAuthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9ea7f0838b6db24a&redirect_uri=' + baseAddress + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'

// const baseModule = '/user-api/'
const baseModule = '/'

const userModule = baseModule + 'user/'

const courseModule = baseModule + 'course/'

const gameModule = baseModule + 'appGame/'

const appStasticModeul = baseModule + 'appStastic/'

export const login = baseModule + 'login'

export const sendSms = baseModule + 'sendSms'

export const getInfo = userModule + 'getInfo'

export const bindMobile = userModule + 'bindMobile'

export const bindAccount = userModule + 'bindAccount'

export const dayList = courseModule + 'day/list'

export const szReadingRoomBook = appStasticModeul + 'szReadingRoomBook'

export const szReadingRoomCourse = appStasticModeul + 'szReadingRoomCourse'

export const szHomePageInfo = appStasticModeul + 'szHomePageInfo'

export const szMonthStastic = appStasticModeul + 'szMonthStastic'

export const findKnowDetailByCourse = gameModule + 'findKnowDetailByCourse'