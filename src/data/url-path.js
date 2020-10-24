export const weixinAuthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9ea7f0838b6db24a&redirect_uri=http://hff.youcanedu.net/&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'

const baseModule = '/user-api/'

const userModule = baseModule + 'user/'

const courseModule = baseModule + 'course/'

export const login = baseModule + 'login'

export const sendSms = baseModule + 'sendSms'

export const getInfo = userModule + 'getInfo'

export const bindMobile = userModule + 'bindMobile'

export const bindAccount = userModule + 'bindAccount'

export const dayList = courseModule + 'day/list'