<template>
  <div
    class="navi-container flex justify-center align-center"
    :style="style"
  >
    <img
      v-if="showBack"
      src="@/assets/images/btn_back.png"
      @click="$router.back()"
    >
    <div class="flex-sub text-center title">{{title}}</div>
    <!-- <div style="width: 0.8rem"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Navi',
  props: {
    title: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: true
    },
    showBottomLine: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: '#fcf3e4'
    }
  },
  data() {
    return {
      style: {
        borderBottom: this.showBottomLine ? '1px solid #eee' : '',
        backgroundColor: this.bgColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navi-container {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 1.2rem;
  padding: 0.2rem;
  box-sizing: border-box;
  & img {
    width: 0.8rem;
  }
  .title {
    font: {
      size: 0.4rem;
      weight: bold;
    }
    color: #9a633e;
  }
}
</style>