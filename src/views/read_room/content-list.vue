<template>
  <div class="container">
    <navi title="阅读屋" />
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
      <van-tab title="词语">
        <word-content />
      </van-tab>
      <van-tab title="短文">
        <example-content />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import WordContent from './components/word-content'
import ExampleContent from './components/example-content'
export default {
  name: 'ContentList',
  components: {
    WordContent,
    ExampleContent
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/scss-utils.scss";
.container {
  @include container-base;
  .tabs-container {
    @include tabs-container-base;
  }
}
</style>