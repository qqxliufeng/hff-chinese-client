export const weixinAuthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9ea7f0838b6db24a&redirect_uri=http://hff.youcanedu.net/&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'

const baseModule = '/user-api/'

const userModule = baseModule + 'user/'

export const login = baseModule + 'login'

export const getInfo = userModule + 'getInfo'