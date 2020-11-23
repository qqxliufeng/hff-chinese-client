<template>
  <div class="container">
    <navi
      bgColor="transparent"
      :showBottomLine="false"
    />
    <div class="content flex flex-direction align-center">
      <div class="logo-wrapper">
        <img :src="require('../assets/logo.png')">
      </div>
      <div class="title">
        我家宝贝<i>{{ dataModel.userName }}</i>在绘翻翻快乐识字完成了第<i>{{dataModel.daysNum}}</i>天的学习。
      </div>
      <div class="cup-wrapper">
        <img :src="require('../assets/images/pic_my_jiangbei.png')">
      </div>
      <div class="info-wrapper">
        <div class="ziti-wrapper">
          <img :src="require('../assets/images/bg_my_study_info.png')">
        </div>
        <div class="info">
          <div class="inner-info flex flex-direction">
            <div class="top flex-sub flex justify-center align-center">
              <div class="left flex-sub">
                <div class="count-title">
                  {{dataModel.wordsNum}}个
                </div>
                <div>
                  累计识字
                </div>
              </div>
              <div class="center" />
              <div class="right flex-sub">
                <div class="count-title">
                  {{dataModel.sentencesNum}}个
                </div>
                <div>
                  累计阅读
                </div>
              </div>
            </div>
            <div class="bottom">
              数据截止到：{{dataModel.endDate}}
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-wrapper flex-sub flex flex-direction align-center justify-center">
        <div class="tip">把最好的课程带给我最爱的孩子</div>
        <div
          class="share-button"
          @click="share"
        >立即分享</div>
      </div>
    </div>
  </div>
</template>

<script>
import { encode } from 'js-base64'
import { formatMonth } from '../utils/utils'
import wx from 'weixin-js-sdk'
import { baseAddress } from '../data/url-path'
import { Dialog } from 'vant'
export default {
  name: 'MyHonour',
  data() {
    return {
      dataModel: {
        userName: '',
        daysNum: 0,
        wordsNum: 0,
        sentencesNum: 0,
        endDate: ''
      },
      shareModel: {
        appId: '',
        nonceStr: '',
        signature: '',
        timestamp: 0
      },
      canShare: false
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$post({
        url: this.$urlPath.szShareStastic,
        data: {}
      }).then(res => {
        this.dataModel = res.data
        this.dataModel.endDate = formatMonth(new Date(), true)
        this.shareModel.appId = res.data.appId
        this.shareModel.nonceStr = res.data.nonceStr
        this.shareModel.timestamp = res.data.timestamp
        this.shareModel.signature = res.data.signature
        wx.config({
          debug: false,
          appId: this.shareModel.appId,
          timestamp: this.shareModel.timestamp,
          nonceStr: this.shareModel.nonceStr,
          signature: this.shareModel.signature,
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
        })
        wx.ready(() => {
          const data = encode(JSON.stringify({
            d: this.dataModel.daysNum,
            w: this.dataModel.wordsNum,
            s: this.dataModel.sentencesNum
          }))
          console.log(decodeURIComponent(data))
          wx.updateTimelineShareData({
            title: '绘翻翻识字平台', // 分享标题
            link: baseAddress + '#/share?data=' + data,
            imgUrl: baseAddress + 'static/img/logo.0d0c9c53.png', // 分享图标
            success: () => {
              this.canShare = true
            }
          })
        })
      }).catch(error => {
        this.canShare = false
        this.$toast(error.message)
      })
    },
    share() {
      if (this.canShare) {
        Dialog.confirm({
          title: '提示',
          message: '请点击右上角更多按钮分享到朋友圈',
        })
      }
    }
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
      padding-top: 2rem;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      width: 80%;
      text-align: center;
      font-size: 0.4rem;
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
    .cup-wrapper {
      width: 4.5rem;
      & img {
        width: 100%;
      }
    }
    .info-wrapper {
      margin-top: -0.9rem;
      width: 80%;
      .ziti-wrapper {
        width: 100%;
        & img {
          width: 100%;
        }
      }
      .info {
        height: 3rem;
        width: 100%;
        background-color: #ff6f60;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 0.2rem;
        .inner-info {
          border: 1px solid #ffffff;
          height: 100%;
          border-radius: 5px;
          .top {
            color: #ffffff;
            .count-title {
              font-weight: bold;
              font-size: 0.5rem;
              margin-bottom: 0.3rem;
            }
            .left {
              text-align: center;
            }
            .center {
              border-left: 0.5px solid #ffffff;
              height: 60%;
            }
            .right {
              text-align: center;
            }
          }
          .bottom {
            width: 60%;
            text-align: center;
            background-color: #f05c4c;
            border-radius: 30px;
            padding: 0.1rem 0;
            margin: 0 auto;
            margin-bottom: 0.1rem;
            color: #fff;
          }
        }
      }
    }
    .bottom-wrapper {
      padding-bottom: 0.5rem;
      .tip {
        margin-top: 0.5rem;
        color: #7c5b23;
        font-size: 0.35rem;
      }
      .share-button {
        border-radius: 30px;
        background-color: #ffb047;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        color: #ffffff;
        padding: 0.2rem 0;
        margin-top: 0.5rem;
        font-size: 0.35rem;
      }
    }
  }
}
</style>