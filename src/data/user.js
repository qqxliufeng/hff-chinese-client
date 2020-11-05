export const STUDY_MODE_VIP = 'vip'
export const STUDY_MODE_EXPERIENCE = 'experience'

const user = {
  state: {
    userId: sessionStorage.getItem('userId') || undefined,
    nickName: sessionStorage.getItem('nickName') || undefined,
    userName: sessionStorage.getItem('userName') || undefined,
    wxNickName: sessionStorage.getItem('wxNickName') || undefined,
    phonenumber: sessionStorage.getItem('phonenumber') || undefined,
    phonenumberCheck: sessionStorage.getItem('phonenumberCheck') || undefined,
    accountCheck: sessionStorage.getItem('accountCheck') || undefined,
    avatar: sessionStorage.getItem('avatar') || undefined,
    token: localStorage.getItem('token') || undefined,
    studyMode: sessionStorage.getItem('studyMode') || ''
  },
  getToken() {
    return this.state.token || undefined
  },
  getWXCode() {
    return this.state.wxCode || undefined
  },
  isLogin() {
    return !!this.state.token
  },
  isBindPhone() {
    return !!this.state.phonenumberCheck
  },
  isBindExpAccount() {
    return !!this.state.accountCheck
  },
  isVipMode() {
    return this.state.studyMode === 'vip'
  },
  isExperienceMode() {
    return this.state.studyMode === 'experience'
  },
  saveUser(user) {
    this.state.userId = user.useruserId
    this.state.nickName = user.nickName
    this.state.userName = user.userName
    this.state.phonenumber = user.phonenumber
    this.state.phonenumberCheck = user.phonenumberCheck || 0
    this.state.avatar = user.avatar
    this.state.wxNickName = user.wxNickName
    this.state.accountCheck = user.accountCheck || 0
    this.state.userId && sessionStorage.setItem('userId', this.state.userId)
    this.state.nickName && sessionStorage.setItem('nickName', this.state.nickName)
    this.state.userName && sessionStorage.setItem('userName', this.state.userName)
    this.state.phonenumber && sessionStorage.setItem('phonenumber', this.state.phonenumber)
    sessionStorage.setItem('phonenumberCheck', this.state.phonenumberCheck)
    sessionStorage.setItem('accountCheck', this.state.accountCheck)
    this.state.avatar && sessionStorage.setItem('avatar', this.state.avatar)
    this.state.wxNickName && sessionStorage.getItem('wxNickName', this.state.wxNickName)
  },
  saveToken(token = '') {
    this.state.token = token
    token && localStorage.setItem('token', token)
  },
  saveBindAccountState(isBindAccount = 0) {
    this.state.phonenumberCheck = isBindAccount
    sessionStorage.setItem('phonenumberCheck', isBindAccount)
  },
  saveBindExpAccountState(isBindExpAccount = 0) {
    this.state.accountCheck = isBindExpAccount
    sessionStorage.setItem('accountCheck', isBindExpAccount)
  },
  clearToken() {
    localStorage.removeItem('token')
    this.state.token = undefined
  },
  setStudyMode(mode = '') {
    this.state.studyMode = mode
    sessionStorage.setItem('studyMode', mode)
  }
}

export default user