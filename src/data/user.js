export const STUDY_MODE_VIP = 'vip'
export const STUDY_MODE_EXPERIENCE = 'experience'

const user = {
  state: {
    id: sessionStorage.getItem('id') || undefined,
    name: sessionStorage.getItem('name') || undefined,
    phone: sessionStorage.getItem('phone') || undefined,
    avatar: sessionStorage.getItem('avatar') || undefined,
    experienceAccount: sessionStorage.getItem('experience_account') || undefined,
    token: localStorage.getItem('token') || undefined,
    studyMode: ''
  },
  isLogin() {
    return !!this.state.id && !!this.state.token
  },
  isBindPhone() {
    return !!this.state.phone
  },
  hasExperienceAccount() {
    return !!this.state.experienceAccount
  },
  hasToken() {
    return !!this.state.token
  },
  isVipMode() {
    return this.state.studyMode === 'vip'
  },
  isExperienceMode() {
    return this.state.studyMode === 'experience'
  },
  saveUser(user) {
    this.state.id = user.id
    this.state.name = user.name
    this.state.phone = user.phone
    this.state.avatar = user.avatar
    this.state.token = user.token
    this.state.experienceAccount = user.experienceAccount
    this.state.id && sessionStorage.setItem('id', this.state.id)
    this.state.name && sessionStorage.setItem('name', this.state.name)
    this.state.phone && sessionStorage.setItem('phone', this.state.phone)
    this.state.experienceAccount && sessionStorage.setItem('experience_account', this.state.experienceAccount)
    this.state.avatar && sessionStorage.setItem('avatar', this.state.avatar)
    this.state.token && localStorage.setItem('token', this.state.token)
  },
  setStudyMode(mode = '') {
    this.state.studyMode = mode
  }
}

export default user