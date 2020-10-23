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
        if (res.code === 200) {
          this.$user.saveToken(res.token)
          this.$user.saveBindAccountState(res.bindAccount)
          window.location.href = 'http://hff.youcanedu.net/'
        } else {
          this.$toast('微信绑定失败')
        }
      }).catch(error => {
        console.log(error)
        this.$toast('微信绑定失败')
      })
    }
  },
  mounted() {
    this.login()
  }
}
</script>
