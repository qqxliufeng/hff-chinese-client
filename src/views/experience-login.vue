<template>
  <div class="container">
    <navi
      :showBack="false"
      title="登录体验账号"
    />
    <div class="content flex flex-direction">
      <div class="filed-wrapper">
        <van-field
          v-model="account"
          label="账号"
          placeholder="请输入体验账号"
          label-width="3.2em"
          size="large"
          clearable
        />
        <van-field
          v-model="password"
          clearable
          label="密码"
          label-width="3.2em"
          size="large"
          type="password"
          placeholder="请输入账号密码"
        >
        </van-field>
      </div>
      <div class="button-wrapper">
        <div @click="login">登录</div>
      </div>
      <div
        class="back-index"
        @click="backIndex"
      >
        返回首页
      </div>
    </div>
    <div class="logo-wrapper">
      <div class="logo">
        <img :src="require('../assets/logo.png')">
      </div>
      <div class="text">绘翻翻识字课程</div>
    </div>
  </div>
</template>

<script>
import { baseAddress } from '../data/url-path'
export default {
  name: 'ExperienceLogin',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (!this.account) {
        this.$toast('请输入体验账号')
        return
      }
      if (!this.password) {
        this.$toast('请输入账号密码')
        return
      }
      this.$post({
        url: this.$urlPath.bindAccount,
        data: {
          username: this.account,
          password: this.password,
          code: this.$route.query.code
        }
      }).then(res => {
        this.$toast('体验账号绑定成功')
        this.$user.saveToken(res.token)
        this.$user.saveBindExpAccountState(1)
        this.getData()
      }).catch(error => {
        this.$toast(error.message)
      })
    },
    getData() {
      if (this.$user.getToken()) {
        this.$get({
          url: this.$urlPath.getInfo,
          loadingTip: '登录中…'
        }).then((res) => {
          this.$user.saveUser(res.user)
          window.location.href = baseAddress + '#/index'
        })
      }
    },
    backIndex() {
      window.location.href = baseAddress
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fcf3e4;
  min-height: 100vh;
  position: relative;
  .content {
    position: absolute;
    top: 1.2rem;
    left: 0;
    right: 0;
    bottom: 0;
    .filed-wrapper {
      padding: 0.2rem;
      margin-top: 0.3rem;
      background-color: #ffffff;
    }
    .button-wrapper {
      margin: 0 auto;
      margin-top: 2rem;
      width: 70%;
      padding: 13px;
      font-size: 0.4rem;
      color: #fff;
      text-align: center;
      background-color: #07c160;
      border-radius: 30px;
    }
    .back-index {
      margin-top: 30px;
      text-align: center;
      font-size: 14px;
    }
  }
  .logo-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;
    text-align: center;
    .logo {
      width: 2rem;
      display: inline-block;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      margin-top: 0.2rem;
      font-size: 0.3rem;
      color: #666;
      font-weight: bold;
      letter-spacing: 3px;
    }
  }
}
</style>
