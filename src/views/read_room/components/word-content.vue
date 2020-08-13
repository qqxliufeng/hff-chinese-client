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
            v-html="word.title"
          />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordContent',
  data() {
    return {
      wordList: [
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<a src="1335"><b>阳春</b></a><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三</i><b>月</b>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        },
        {
          title: '<b>阳春</b><i>三月</i>'
        }
      ],
      tempList: []
    }
  },
  mounted() {
    this.tempList = []
    this.wordList.forEach((it, index) => {
      const tempIndex = parseInt(index / 3)
      if (!this.tempList[tempIndex]) {
        this.tempList[tempIndex] = []
      }
      it.title = it.title.replace(/<b/g, '<b style="color: red"').replace(/<i/g, '<i style="color: blue"')
      this.tempList[tempIndex].push(it)
    })
    this.$nextTick(() => {
      document.getElementsByTagName('a').forEach(it => {
        it.onclick = () => {
          const audio = document.createElement('audio')
          audio.src = 'http://114.55.209.161/adminFile/books/zip/12/words//' + it.attributes.src.value + '.mp3'
          audio.play()
        }
      })
    })
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