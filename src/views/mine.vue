<template>
  <div class="container">
    <navi
      title="我的"
      bg-color="#00000000"
      :show-bottom-line="false"
    />
    <div class="top-wrapper flex align-center">
      <div class="avatar">
        <img src="">
      </div>
      <div class="nickname">清清玄~</div>
    </div>
    <div class="content-wrapper">
      <div
        class="item-wrapper flex align-center"
        v-for="(item, index) of actionItems"
        :key="index"
        @click="item.click"
      >
        <div class="image-wrapper">
          <img :src="require('@/assets/images/'+item.imgSrc)">
        </div>
        <div class="title flex-sub">
          {{item.title}}
        </div>
        <div class="icon-wrapper">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data() {
    return {
      actionItems: [
        {
          imgSrc: 'icon_wd_jrxx.png',
          title: '今日学习',
          click: () => {
            console.log('a')
          }
        },
        {
          imgSrc: 'icon_wd_wrxx.png',
          title: '往日学习',
          click: () => {
            console.log('b')
          }
        },
        {
          imgSrc: 'icon_wd_fuxi.png',
          title: '复习',
          click: () => {
            console.log('c')
          }
        },
        {
          imgSrc: 'icon_wd_ryb.png',
          title: '荣誉分享',
          click: () => {
            console.log('d')
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/scss-utils.scss";
.container {
  @include container-base;
  .top-wrapper {
    background-image: url("../assets/images/bg_wode.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 6rem;
    margin-top: -1px;
    .avatar {
      width: 1.4rem;
      height: 1.4rem;
      margin-top: 0.6rem;
      border: 2px solid #ffffff;
      border-radius: 50%;
      margin-left: 0.5rem;
      & img {
        width: 100%;
      }
    }
    .nickname {
      margin-top: 0.6rem;
      color: #ffffff;
      font-size: 0.4rem;
      font-weight: bold;
      margin-left: 0.3rem;
    }
  }
  .content-wrapper {
    transform: translateY(-1rem);
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    .item-wrapper {
      padding: 0.4rem 0.2rem;
      border-bottom: 1px solid #f5f5f5;
      .image-wrapper {
        width: 0.5rem;
        & img {
          width: 100%;
        }
      }
      .title {
        font-size: 0.35rem;
        padding-left: 0.3rem;
      }
      .icon-wrapper {
        font-size: 0.4rem;
        color: #b3b3b3;
      }
    }
    & div:last-child {
      border-bottom: 0px;
    }
  }
}
</style>