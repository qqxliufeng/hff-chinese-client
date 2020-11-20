<template>
  <div class="container">
    <navi
      title="我的"
      bg-color="#00000000"
      :show-bottom-line="false"
    />
    <div class="top-wrapper flex align-center">
      <div class="avatar">
        <img :src="myAvatar" />
      </div>
      <div class="nickname">{{$user.state.wxNickName || $user.state.nickName}}</div>
    </div>
    <div class="content-wrapper">
      <div
        class="item-wrapper flex"
        v-for="(item, index) of actionItems"
        :key="index"
        @click="item.click"
      >
        <div class="image-wrapper">
          <img :src="require('@/assets/images/' + item.imgSrc)" />
        </div>
        <div class="title flex-sub">
          {{ item.title }}
        </div>
        <div class="icon-wrapper">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultAvatar from '@/assets/logo.png'
import { Dialog } from 'vant'
import { baseAddress } from '../data/url-path'
export default {
  name: 'Mine',
  data() {
    return {
      myAvatar: this.$user.state.avatar ? this.$user.state.avatar : defaultAvatar,
      actionItems: [
        {
          imgSrc: 'icon_wd_wrxx.png',
          title: '学习记录',
          click: () => {
            this.$router.push({ name: 'honourList' })
          },
        },
        {
          imgSrc: 'icon_wd_wdry.png',
          title: '我的荣誉',
          click: () => {
            this.$router.push({ name: 'myHonour' })
          }
        },
        {
          imgSrc: 'icon_wd_ryb.png',
          title: '荣誉分享',
          click: () => {
            this.$router.push({ name: 'myHonour' })
          }
        },
        {
          imgSrc: 'icon_wd_jbwx.png',
          title: '解绑微信',
          click: () => {
            Dialog.confirm({
              title: '提示',
              message: '是否要把当前账号和微信账号解除绑定？',
            })
              .then(() => {
                this.$post({
                  url: this.$urlPath.unBindAccount,
                  data: {}
                }).then(res => {
                  if (res.code === 200) {
                    this.$user.unBindAccount()
                    this.$toast('账号解绑成功')
                    window.location.href = baseAddress
                  }
                }).catch(error => {
                  this.$toast(error.message)
                })
              })
              .catch(() => {
                console.log('取消了')
              })
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
    height: 5rem;
    margin-top: -1px;
    .avatar {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: 0.6rem;
      margin-left: 0.5rem;
      & img {
        width: 100%;
        border-radius: 50%;
        border: 2px solid #f5f5f5;
        background-color: #ffffff;
      }
    }
    .nickname {
      margin-top: 0.6rem;
      color: #ffffff;
      font-size: 0.5rem;
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
        font-weight: bold;
        padding-left: 0.3rem;
        padding-top: 0.1rem;
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
