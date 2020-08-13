<template>
  <div class="container">
    <navi title="阅读屋" />
    <div class="content-wrapper">
      <div class="content">
        <div
          v-for="(item, index) of courseList"
          :key="index"
          class="item"
        >
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseList',
  data() {
    return {
      courseList: [
        {
          title: '好好学习'
        },
        {
          title: '天天向上'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/scss-utils.scss";
.container {
  @include container-base;
  .content-wrapper {
    @include content-wrapper-base;
    margin: 0 auto;
    width: 80%;
    .content {
      border-radius: 10px;
      border: 2px solid #ffffff;
      background-color: #ffe3a5;
      padding: 0.5rem 0.2rem;
      .item {
        border-bottom: 1px dashed #ffffff;
        padding: 0.3rem 0;
        font-size: 0.35rem;
      }
    }
  }
}
</style>