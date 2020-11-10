/**
 * 校验手机号是否合法
 * @param {手机号} phone 
 */
export function validatePhone(phone) {
  return /^1[23456789]\d{9}$/.test(phone)
}

export function getAudioPath(path) {
  if (path) {
    return 'http://syadmin.qjia.tech' + path
  }
  return ''
}

export function formatMonth(date = new Date(), showDay = false) {
  const month = date.getMonth() + 1
  if (showDay) {
    const day = date.getDate()
    return date.getFullYear() + '-' + (month < 10 ? `0${month}` : month) + '-' + (day < 10 ? `0${day}` : day)
  } else {
    return date.getFullYear() + '-' + (month < 10 ? `0${month}` : month)
  }
}