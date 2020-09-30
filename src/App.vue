<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // mounted() {
  //   if (!this.$isWeiXin) {
  //     this.$toast('请在微信浏览器中打开此页面')
  //   }
  // }
}
</script>
