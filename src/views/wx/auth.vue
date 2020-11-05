<template>
  <div></div>
</template>

<script>
import { TEXT_PLAIN } from '@/utils/http.js'
export default {
  name: 'Auth',
  methods: {
    login() {
      this.$post({
        url: this.$urlPath.login,
        data: this.$route.query.code,
        headers: {
          'Content-Type': TEXT_PLAIN
        }
      }).then(res => {
        this.$user.saveToken(res.token)
        this.$user.saveBindAccountState(res.bindAccount)
        // window.location.href = 'http://hff.youcanedu.net/'
      }).catch(error => {
        console.log(error)
        this.$toast(error.message || '微信绑定失败')
      })
    }
  },
  mounted() {
    // this.login()
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
</script>
