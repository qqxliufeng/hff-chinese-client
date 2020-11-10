<template>
  <div class="container">
    <navi :title="title" />
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
        <study-review :knowlegeType="1" />
      </van-tab>
      <van-tab title="游戏">
        <study-review :knowlegeType="3" />
      </van-tab>
      <van-tab title="运用">
        <study-review :knowlegeType="4" />
      </van-tab>
      <van-tab title="闯关">
        <study-review :knowlegeType="5" />
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
      active: 0,
      title: this.$route.query.date + '学习记录'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/scss-utils.scss";
.container {
  background-color: #fcf3e4;
  min-height: 100vh;
  .tabs-container {
    @include tabs-container-base;
  }
}
</style>