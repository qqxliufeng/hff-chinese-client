import Axios from 'axios'
import qs from 'qs'
import { apiAddress } from '../data/url-path'
import user from '../data/user'

export const CONTENT_TYPE = 'Content-Type'

export const FORM_URLENCODED = 'application/x-www-form-urlencoded; charset=UTF-8'

export const APPLICATION_JSON = 'application/json; charset=UTF-8'

export const TEXT_PLAIN = 'text/plain; charset=UTF-8'

const axios = Axios.create()

axios.defaults.timeout = 100000
axios.defaults.baseURL = apiAddress

axios.interceptors.request.use(
  config => {
    if (!config.headers[CONTENT_TYPE]) {
      config.headers = { 'Content-Type': APPLICATION_JSON }
    }
    if (config.headers[CONTENT_TYPE] === FORM_URLENCODED) {
      config.data = qs.stringify(config.data)
    }
    if (user.getToken()) {
      config.headers['Authorization'] = 'token_' + user.getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error.response)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(response.status)
    }
  },
  error => {
    if (process.env.NODE_ENV === 'development') {
      console.log(error)
    }
    // throw new Error('网络连接失败…')
    return Promise.reject({ code: 501, msg: '网络连接失败…' })
  }
)

export default axios