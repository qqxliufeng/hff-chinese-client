<template>
  <div class="container">
    <navi title="阅读屋" />
    <div class="content-wrapper">
      <div
        class="item-wrapper"
        :style="{ 'background-color': item.disabled ? item.disabledColor : item.actionColor  }"
        v-for="(item, index) of unitList"
        :key="index"
        @click="enterCourse(item)"
      >
        <div
          class="unit-name"
          :style="{ 'color': item.disabled ? '#989898' : '#7c2519'  }"
        >{{item.unitName}}</div>
        <div
          class="title"
          :style="{ 'color': item.disabled ? '#989898' : '#7c2519'  }"
        >{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnitList',
  data() {
    return {
      unitList: [
        {
          unitName: '第一单元',
          title: '好好上课，整天就知道玩',
          disabled: false,
          actionColor: '#FFDD8F',
          disabledColor: '#E5E5E5'
        },
        {
          unitName: '第二单元',
          title: '好好上课，整天就知道玩',
          disabled: false,
          actionColor: '#FFC596',
          disabledColor: '#E5E5E5'
        },
        {
          unitName: '第三单元',
          title: '好好上课，整天就知道玩',
          disabled: true,
          actionColor: '#FFA798',
          disabledColor: '#E5E5E5'
        },
        {
          unitName: '第四单元',
          title: '好好上课，整天就知道玩',
          disabled: false,
          actionColor: '#9CE99C',
          disabledColor: '#E5E5E5'
        }
      ]
    }
  },
  methods: {
    enterCourse(item) {
      this.$router.push({
        name: 'courseList', query: {
          title: item.title
        }
      })
    }
  }
}
</script>

<style lang="scss" scope>
@import "~@/assets/style/scss-utils.scss";
.container {
  @include container-base;
  .content-wrapper {
    margin: 0 auto;
    width: 80%;
    padding-top: 3rem;
    box-sizing: border-box;
  }
  .item-wrapper {
    border-radius: 30px;
    padding: 0.5rem;
    border: 3px solid #ffffff;
    margin-bottom: 0.5rem;
    text-align: center;
    .text-style {
      color: #7c2519;
    }
    .unit-name {
      @extend .text-style;
      font-size: 0.2rem;
    }
    .title {
      @extend .text-style;
      font-size: 0.45rem;
      margin-top: 0.2rem;
    }
  }
}
</style>
