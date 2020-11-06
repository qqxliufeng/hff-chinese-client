<template>
  <div class="study-review-container">
    <div class="score-wrapper flex flex-direction align-center justify-center">
      <div>
        <span class="score">96</span>
        <span class="score-pre">%</span>
      </div>
      <div class="score-tip">复习正确率</div>
    </div>
    <div class="word-wrapper">
      <div class="correct">正解字</div>
      <van-grid
        :column-num="5"
        :border="false"
      >
        <van-grid-item
          v-for="value in 20"
          :key="value"
          text="文"
        />
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
          v-for="value in 20"
          :key="value"
          text="文"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudyReview',
  props: {
    knowlegeType: {
      type: Number,
      default: 1 // 1字，2词，3句，4短文
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
        console.log(res)
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
.study-review-container {
  padding-bottom: 20px;
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
