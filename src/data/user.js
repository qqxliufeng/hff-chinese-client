export const STUDY_MODE_VIP = 'vip'
export const STUDY_MODE_EXPERIENCE = 'experience'

const user = {
  state: {
    userId: sessionStorage.getItem('userId') || undefined,
    nickName: sessionStorage.getItem('nickName') || undefined,
    userName: sessionStorage.getItem('userName') || undefined,
    phonenumber: sessionStorage.getItem('phonenumber') || undefined,
    phonenumberCheck: sessionStorage.getItem('phonenumberCheck') || undefined,
    avatar: sessionStorage.getItem('avatar') || undefined,
    isBindAccount: sessionStorage.getItem('bind_account') || undefined,
    experienceAccount: sessionStorage.getItem('experience_account') || undefined,
    token: localStorage.getItem('token') || undefined,
    studyMode: ''
  },
  getToken() {
    return this.state.token || undefined
  },
  isLogin() {
    return !!this.state.token
  },
  isBindPhone() {
    return !!this.state.phonenumberCheck
  },
  hasExperienceAccount() {
    return !!this.state.experienceAccount
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
    this.state.phonenumberCheck = user.phonenumberCheck
    this.state.avatar = user.avatar
    this.state.experienceAccount = user.experienceAccount
    this.state.userId && sessionStorage.setItem('userId', this.state.userId)
    this.state.nickName && sessionStorage.setItem('nickName', this.state.nickName)
    this.state.userName && sessionStorage.setItem('userName', this.state.userName)
    this.state.phonenumber && sessionStorage.setItem('phonenumber', this.state.phonenumber)
    this.state.phonenumberCheck && sessionStorage.setItem('phonenumberCheck', this.state.phonenumberCheck)
    this.state.experienceAccount && sessionStorage.setItem('experience_account', this.state.experienceAccount)
    this.state.avatar && sessionStorage.setItem('avatar', this.state.avatar)
  },
  saveToken(token = '') {
    this.state.token = token
    token && localStorage.setItem('token', token)
  },
  saveBindAccountState(isBindAccount = false) {
    this.state.isBindAccount = isBindAccount
    sessionStorage.setItem('bind_account', isBindAccount)
  },
  clearToken() {
    localStorage.removeItem('token')
    this.state.token = undefined
  },
  setStudyMode(mode = '') {
    this.state.studyMode = mode
  }
}

export default user