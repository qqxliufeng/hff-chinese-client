import Axios from 'axios'
import qs from 'qs'

const axios = Axios.create()

axios.defaults.timeout = 100000
axios.defaults.baseURL = 'http://ht.youcanedu.net:8881'

axios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data)
    config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    return config
  },
  error => {
    return Promise.reject(error.response)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // return response.data
      const a = null
      return a.name
    } else {
      throw new Error(response.status)
    }
  },
  error => {
    if (process.env.NODE_ENV === 'development') {
      console.log(error)
    }
    return Promise.reject(error)
  }
)

export default axios