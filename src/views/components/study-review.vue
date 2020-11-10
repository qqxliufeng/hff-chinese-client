<template>
  <div class="study-review-container">
    <div v-if="!showEmptyTip">
      <div class="score-wrapper flex flex-direction align-center justify-center">
        <div>
          <span class="score">{{dataModel.correctRate && dataModel.correctRate.replace('%','')}}</span>
          <span class="score-pre">%</span>
        </div>
        <div class="score-tip">正确率</div>
      </div>
      <div class="word-wrapper">
        <div class="correct">正确字</div>
        <van-grid
          :column-num="5"
          :border="false"
        >
          <van-grid-item
            v-for="(value, index) of dataModel.correctList"
            :key="index"
          >
            <div v-html="value" />
          </van-grid-item>
        </van-grid>
      </div>
      <div
        class="word-wrapper"
        style="margin-top: 1.5rem"
      >
        <div class="error">错误字</div>
        <van-grid
          :column-num="5"
          :border="false"
        >
          <van-grid-item
            v-for="(value, index) of dataModel.errorList"
            :key="index"
          >
            <div v-html="value" />
          </van-grid-item>
        </van-grid>
      </div>
      <audio id="correctAudio" />
    </div>
    <EmptyTip v-else />
  </div>
</template>

<script>
import EmptyMixin from '@/mixins/EmptyMixin'
import { getAudioPath } from '@/utils/utils'
export default {
  name: 'StudyReview',
  mixins: [EmptyMixin],
  props: {
    knowlegeType: {
      type: Number,
      default: 1 // 1复习  2知新 3游戏 4运用 5闯关
    }
  },
  data() {
    return {
      dataModel: {}
    }
  },
  methods: {
    getData() {
      this.$post({
        url: this.$urlPath.szReviewDetail,
        data: {
          recordDate: this.$route.query.date,
          type: this.knowlegeType
        }
      }).then(res => {
        if (!res.data) {
          this.setEmptyState(true)
          return
        }
        this.setEmptyState(false)
        this.dataModel = res.data
        this.dataModel.correctList = res.data.correctList.map(it => it.replace(/<a/g, '<i class="href-correct-class"').replace(/a>/g, 'i>'))
        this.dataModel.errorList = res.data.errorList.map(it => it.replace(/<a/g, '<i class="href-correct-class"').replace(/a>/g, 'i>'))
        this.$nextTick(() => {
          document.getElementsByClassName('href-correct-class').forEach(it => {
            it.style.fontSize = '18px'
            it.style.color = '#333333'
            it.onclick = () => {
              const audio = document.getElementById('correctAudio')
              const audioPath = getAudioPath(it.attributes.href.value)
              if (audioPath && !audio.paused && audio.src === audioPath) {
                return
              }
              audio.src = audioPath
              audio.play()
            }
          })
        })
      }).catch(error => {
        this.setEmptyState(true)
        this.$toast(error.message)
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.study-review-container {
  padding-bottom: 20px;
  min-height: 80vh;
  position: relative;
  .container-empty {
    position: absolute;
  }
  .score-wrapper {
    margin: 1rem 0;
    .score {
      color: #f76565;
      font-size: 1rem;
      font-weight: bold;
    }
    .score-pre {
      color: #808080;
    }
    .score-tip {
      @extend .score-pre;
      font-size: 0.3rem;
      margin-top: 0.2rem;
    }
  }
  .word-wrapper {
    border-radius: 5px;
    background-color: #fff;
    margin: 0 auto;
    width: 80%;
    padding: 0 5px;
    box-sizing: border-box;
    .title {
      border-radius: 10px;
      width: 40%;
      margin: 0 auto;
      text-align: center;
      padding: 5px 0;
      transform: translateY(-50%);
      color: #fff;
      font-size: 0.4rem;
    }
    .correct {
      @extend .title;
      background-color: #71dc80;
    }
    .error {
      @extend .title;
      background-color: #f76565;
    }
  }
}
</style>
<style scoped>
.word-wrapper >>> .van-grid-item__text {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}
</style>
