<template>
  <div class="container">
    <div class="content flex flex-direction align-center">
      <div class="logo-wrapper">
        <img :src="require('../assets/logo.png')" />
      </div>
      <div class="title">
        欢迎来到绘翻翻识字课程
      </div>
      <div class="bottom-wrapper flex-sub flex flex-direction align-center justify-center">
        <div class="tip">把最好的课程带给我最爱的孩子</div>
      </div>
      <div class="action-wrapper">
        <div class="vip-wrapper">开始学习</div>
        <div class="experience-wrapper">体验课程</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    getData() {
      this.$post({
        url: 'doLogin',
        data: {
          phone: '18800000000',
          password: '123123'
        }
      }).then((res) => {
        console.log(res.aa.aa)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-image: url("../assets/images/bg_my_honour.png");
  background-color: #fcf3e4;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .content {
    .logo-wrapper {
      width: 3rem;
      padding-top: 2.5rem;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      width: 80%;
      text-align: center;
      font-size: 0.5rem;
      line-height: 0.5rem;
      margin-top: 0.2rem;
      & i {
        display: inline-block;
        color: #ff6f60;
        font-weight: bold;
        font-size: 0.45rem;
        margin: 0 0.15rem;
      }
    }
    .bottom-wrapper {
      margin-top: 20%;
      .tip {
        margin-top: 0.5rem;
        color: #7c5b23;
        font-size: 0.5rem;
        font-weight: bold;
        letter-spacing: 4px;
      }
      .share-button {
        border-radius: 30px;
        background-color: #ffb047;
        width: 2.5rem;
        text-align: center;
        color: #ffffff;
        padding: 0.2rem 0;
        margin-top: 0.5rem;
        font-size: 0.35rem;
      }
    }
    .action-wrapper {
      position: fixed;
      bottom: 12%;
      left: 0;
      right: 0;
      .base-wrapper {
        width: 45%;
        color: #ec4d4d;
        margin: 0 auto;
        border: 1px solid #ec4d4d;
        border-radius: 30px;
        padding: 12px 0;
        text-align: center;
        font-size: 0.4rem;
        letter-spacing: 8px;
      }
      .experience-wrapper {
        @extend .base-wrapper;
        margin-top: 20px;
      }
      .vip-wrapper {
        @extend .base-wrapper;
        background-color: #ec4d4d;
        color: #fff;
      }
    }
  }
}
</style>
