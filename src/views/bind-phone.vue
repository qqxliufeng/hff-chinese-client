<template>
  <div class="container">
    <navi
      :showBack="true"
      title="绑定手机号"
    />
    <div class="content flex flex-direction">
      <div class="filed-wrapper">
        <van-field
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
          maxlength="11"
          label-width="3.2em"
          size="large"
          clearable
        />
        <van-field
          v-model="smsCode"
          clearable
          label="验证码"
          label-width="3.2em"
          size="large"
          placeholder="请输入验证码"
          class="flex align-center"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              :disabled="disabledSMS"
              @click="sendSMS"
            >{{ smsTip }}</van-button>
          </template>
        </van-field>
      </div>
      <div class="button-wrapper">
        <div @click="bindPhone">确定绑定</div>
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
import { validatePhone } from '../utils/utils'
export default {
  name: 'BindPhone',
  data() {
    return {
      phone: '',
      smsCode: '',
      disabledSMS: false,
      smsTip: '发送验证码'
    }
  },
  methods: {
    sendSMS() {
      if (!validatePhone(this.phone)) {
        this.$toast('请输入合法的手机号')
        return
      }
      this.$post({
        url: this.$urlPath.sendSms,
        data: {
          mobile: this.phone
        }
      }).then(res => {
        if (res.code === 200) {
          this.$toast('验证码已发送，请注意查收')
          this.disabledSMS = true
          let countNum = 60
          const countInterval = setInterval(() => {
            if (countNum === 0) {
              clearInterval(countInterval)
              this.disabledSMS = false
              this.smsTip = '重新发送？'
            } else {
              this.smsTip = '剩余时间' + (--countNum) + 's'
            }
          }, 1000)
        } else {
          this.$toast(res.msg)
        }
      }).catch(error => {
        this.$toast(error)
      })
    },
    bindPhone() {
      if (!validatePhone(this.phone)) {
        this.$toast('请输入合法的手机号')
        return
      }
      if (!this.smsCode) {
        this.$toast('请输入验证码')
        return
      }
      this.$post({
        url: this.$urlPath.bindMobile,
        data: {
          mobile: this.phone,
          code: this.smsCode
        }
      }).then(res => {
        if (res.code === 200) {
          this.$toast('手机号绑定成功')
          this.$router.back()
        } else {
          this.$toast(res.msg)
        }
      }).catch(error => {
        this.$toast(error)
      })
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
