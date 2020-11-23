<template>
  <div class="container">
    <div class="content flex flex-direction align-center">
      <div class="logo-wrapper">
        <img :src="require('../assets/logo.png')">
      </div>
      <div class="title">
        我在绘翻翻快乐识字完成了第<i>{{dataModel.daysNum}}</i>天的学习。
      </div>
      <!-- <div class="cup-wrapper">
        <img :src="require('../assets/images/pic_my_jiangbei.png')">
      </div> -->
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
          </div>
        </div>
      </div>
      <div class="bottom-wrapper flex-sub flex flex-direction align-center justify-center">
        <div class="tip">把最好的课程带给我最爱的孩子</div>
      </div>
      <div class="code-wrapper">
        <img :src="require('../assets/service_code.jpg')">
        <div>
          关注公众号，获取更多知识
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decode } from 'js-base64'
export default {
  name: 'MyHonour',
  data() {
    return {
      dataModel: {
        name: '',
        days: 0,
        wordsNum: 0,
        sentencesNum: 0
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const base64string = this.$route.query.data
      console.log(base64string)
      const json = decode(base64string)
      console.log(json)
      const tempObj = JSON.parse(json)
      this.dataModel.daysNum = tempObj.d
      this.dataModel.wordsNum = tempObj.w
      this.dataModel.sentencesNum = tempObj.s
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
      width: 2.5rem;
      padding-top: 1.5rem;
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
      width: 2rem;
      & img {
        width: 100%;
      }
    }
    .info-wrapper {
      margin-top: -0.9rem;
      width: 80%;
      .ziti-wrapper {
        width: 100%;
        margin-top: 2rem;
        & img {
          width: 100%;
        }
      }
      .info {
        height: 2.5rem;
        width: 100%;
        margin-top: 1.5rem;
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
    .code-wrapper {
      position: fixed;
      bottom: 0;
      text-align: center;
      padding-bottom: 0.5rem;
      & img {
        width: 2.5rem;
      }
      & div {
        color: #333333;
        font-weight: bold;
      }
    }
  }
}
</style>