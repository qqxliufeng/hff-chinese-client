<template>
  <div class="container flex flex-direction align-center justify-center">
    <div class="img-wrapper">
      <img :src="require('../../assets/images/img_empty_icon.png')">
    </div>
    <div class="text-wrapper">{{ tip }}</div>
  </div>
</template>

<script>
export default {
  name: 'EmptyTip',
  props: {
    tip: {
      type: String,
      default: '暂无数据…'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .img-wrapper {
    width: 3rem;
    & > img {
      width: 100%;
    }
  }
  .text-wrapper {
    color: #666666;
    margin-top: 0.5rem;
    font-size: 16px;
  }
}
</style>