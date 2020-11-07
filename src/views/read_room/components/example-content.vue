<template>
  <div class="example-content-container">
    <div v-if="!showEmptyTip">
      <div
        class="content-wrapper"
        v-for="item of list"
        :key="item.id"
        v-html="item.lore"
      >
      </div>
      <audio id="exampleAudio" />
    </div>
    <EmptyTip v-else />
  </div>
</template>

<script>
import EmptyMixin from '@/mixins/EmptyMixin'
export default {
  name: 'ExampleContent',
  mixins: [EmptyMixin],
  data() {
    return {
      list: []
    }
  },
  methods: {
    getData() {
      this.$post({
        url: this.$urlPath.findKnowDetailByCourse,
        data: {
          type: 4,
          courseId: this.$route.query.courseId
        }
      }).then(res => {
        this.list = res.data
        if (this.list && this.list.length > 0) {
          this.setEmptyState(false)
          this.list.forEach(it => {
            it.lore = it.lore.replace(/<a/g, '<i class="href-content-class"').replace(/a>/g, 'i>')
          })
          this.$nextTick(() => {
            document.getElementsByClassName('href-content-class').forEach(it => {
              it.onclick = () => {
                const audio = document.getElementById('exampleAudio')
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
.example-content-container {
  position: relative;
  min-height: 80vh;
  .content-wrapper {
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #fff;
    padding: 0.2rem;
    margin-top: 0.5rem;
    font-size: 0.4rem;
    line-height: 1.7;
  }
  .container-empty {
    position: absolute;
  }
}
</style>