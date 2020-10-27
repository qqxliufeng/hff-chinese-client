<template>
  <div>
    <navi
      :show-bottom-line="false"
      bg-color="#00000000"
    />
    <div class="bg" />
    <div class="content flex justify-center align-center flex-direction">
      <div class="bg1 flex justify-center align-center">
        温故
      </div>
      <div class="bg2 flex justify-center align-center">
        知新
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$post({
        url: this.$urlPath.dayList,
        data: {
          pageNum: 1,
          pageSize: 10,
          date: '2020-10-10',
          type: 1
        }
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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