<template>
  <div>
    <navi
      :show-bottom-line="false"
      bg-color="#00000000"
    />
    <div class="bg" />
    <div class="content flex justify-center align-center flex-direction">
      <div
        class="bg1 flex justify-center align-center"
        @click="reivew()"
      >
        <a id="review">温 故</a>
      </div>
      <div
        class="bg2 flex justify-center align-center"
        @click="study()"
      >
        <a id="study">知 新</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  data() {
    return {
      schedule: Math.max(parseInt(this.$route.query.schedule), -1) // -1 代表是一个新用户，可以不用复习，直接学习新知识
    }
  },
  methods: {
    reivew() {
      if (this.schedule === -1) {
        this.$toast('还没有开始学习任何知识哦~')
      } else {
        document.getElementById('review').href = this.$startGame({ type: 'review', extra: '' })
      }
    },
    study() {
      if (this.schedule >= 1 || this.schedule === -1) {
        document.getElementById('study').href = this.$startGame({ type: 'study', extra: '' })
      } else {
        this.$toast('请先复习一下上次学习的知识哦~')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #ffffff;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/images/bg_wgzx.jpg");
  z-index: -1;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  .item-wrapper {
    width: 60%;
    height: 2rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .bg1 {
    @extend .item-wrapper;
    background-image: url("../assets/images/btn_wengu.png");
  }
  .bg2 {
    @extend .item-wrapper;
    background-image: url("../assets/images/btn_zhixin.png");
    margin-top: 10%;
  }
}
</style>