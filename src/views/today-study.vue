<template>
  <div class="container">
    <navi title="今日学习" />
    <van-tabs
      class="tabs-container"
      v-model="active"
      animated
      sticky
      offset-top="1.2rem"
      background="#fcf3e4"
      title-inactive-color="#888"
      title-active-color="#AF6838"
      color="#AF6838"
    >
      <van-tab title="复习">
        <study-review />
      </van-tab>
      <van-tab title="游戏">
        <study-review />
      </van-tab>
      <van-tab title="运用">
        <study-review />
      </van-tab>
      <van-tab title="闯关">
        <study-review />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import StudyReview from './components/study-review'
export default {
  name: 'ToadyStudy',
  components: {
    StudyReview
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fcf3e4;
  min-height: 100vh;
  .tabs-container {
    position: fixed;
    top: 1.2rem;
    left: 0;
    right: 0;
    height: calc(100vh - 1.2rem);
    overflow-y: scroll;
  }
}
</style>