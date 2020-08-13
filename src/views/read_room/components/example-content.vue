<template>
  <div class="example-content-container">
    <div
      class="content-wrapper"
      v-for="(item, index) of list"
      :key="index"
      v-html="item.content"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleContent',
  data() {
    return {
      list: [
        {
          content: '<b>春天来了，小花开了，小草冒出头来， 小燕子也从南方飞回来了。</b>'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.example-content-container {
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
}
</style>