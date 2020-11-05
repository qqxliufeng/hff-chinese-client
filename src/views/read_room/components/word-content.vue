<template>
  <div class="word-content-container">
    <div class="content-wrapper">
      <van-row
        v-for="(itemArray, index) of tempList"
        :key="index"
      >
        <van-col
          span="8"
          v-for="(word, i) of itemArray"
          :key="i"
        >
          <div
            class="item-wrapper text-center"
            v-html="word.lore"
          />
        </van-col>
      </van-row>
      <audio id="wordAudio" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordContent',
  data() {
    return {
      wordList: [],
      tempList: [],
      showEmptyTip: true
    }
  },
  methods: {
    getData() {
      this.$post({
        url: this.$urlPath.findKnowDetailByCourse,
        data: {
          type: 2,
          courseId: this.$route.query.courseId
        }
      }).then(res => {
        this.wordList = res.data
        if (this.wordList && this.wordList.length > 0) {
          this.tempList = []
          this.wordList.forEach((it, index) => {
            const tempIndex = parseInt(index / 3)
            if (!this.tempList[tempIndex]) {
              this.tempList[tempIndex] = []
            }
            it.lore = it.lore.replace(/<a/g, '<i class="href-word-class"').replace(/a>/g, 'i>')
            this.tempList[tempIndex].push(it)
          })
          this.$nextTick(() => {
            document.getElementsByClassName('href-word-class').forEach(it => {
              it.onclick = () => {
                const audio = document.getElementById('wordAudio')
                const audioPath = 'http://syadmin.qjia.tech' + it.attributes.href.value
                console.log(audio.paused)
                if (!audio.paused && audio.src === audioPath) {
                  return
                }
                audio.src = audioPath
                audio.play()
              }
            })
          })
        }
      }).catch(error => {
        this.$toase(error.message)
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/scss-utils.scss";
.word-content-container {
  padding: 0.5rem 0;
  .content-wrapper {
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 0.1rem;
    .item-wrapper {
      font-size: 0.4rem;
      padding: 0.4rem 0;
    }
  }
}
</style>