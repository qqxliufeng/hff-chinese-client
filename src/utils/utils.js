/**
 * 校验手机号是否合法
 * @param {手机号} phone 
 */
export function validatePhone(phone) {
  return /^1[23456789]\d{9}$/.test(phone)
}