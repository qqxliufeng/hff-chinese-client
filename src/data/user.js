const user = {
  state: {
    id: sessionStorage.getItem('id') || undefined,
    name: sessionStorage.getItem('name') || undefined,
    phone: sessionStorage.getItem('phone') || undefined,
    avatar: sessionStorage.getItem('avatar') || undefined,
    token: localStorage.getItem('token') || undefined
  },
  isLogin() {
    return !!this.state.id && !!this.state.token
  },
  isBindPhone() {
    return !!this.state.phone
  },
  saveUser(user) {
    this.state.id = user.id
    this.state.name = user.name
    this.state.phone = user.phone
    this.state.avatar = user.avatar
    this.state.token = user.token
    this.state.id && sessionStorage.setItem('id', this.state.id)
    this.state.name && sessionStorage.setItem('name', this.state.name)
    this.state.phone && sessionStorage.setItem('phone', this.state.phone)
    this.state.avatar && sessionStorage.setItem('avatar', this.state.avatar)
    this.state.token && localStorage.setItem('token', this.state.token)
  }
}

export default user