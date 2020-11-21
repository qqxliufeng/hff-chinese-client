<template>
  <div></div>
</template>

<script>
import { baseAddress } from '../../data/url-path'
export default {
  name: 'Auth',
  methods: {
    login() {
      this.$post({
        url: this.$urlPath.login,
        data: {
          code: this.$route.query.code
        }
      }).then(res => {
        this.$user.saveToken(res.token)
        window.location.href = baseAddress
      }).catch(error => {
        console.log(error)
        this.$toast(error.message || '微信绑定失败')
      })
    }
  },
  mounted() {
    if (this.$user.state.tokenStatus === 401) {
      this.login()
    } else {
      if (this.$user.isVipMode()) {
        console.log('vip')
        this.$router.replace({ name: 'bindPhone', query: { code: this.$route.query.code } })
      } else if (this.$user.isExperienceMode()) {
        console.log('experience')
        this.$router.replace({ name: 'experienceLogin', query: { code: this.$route.query.code } })
      } else {
        console.log('other')
        this.$router.replace({ name: 'welcome' })
      }
    }
  }
}
</script>
