<template>
  <div>
    <navi
      :show-bottom-line="false"
      bg-color="#00000000"
    />
    <div class="bg" />
    <div class="content flex justify-center align-center flex-direction">
      <div class="image-wrapper">
        <img :src="require('@/assets/images/pic_yy_'+ typeModel.img +'.png')">
      </div>
      <div class="item-wrapper flex justify-center align-center">
        <a :href="$startGame({ type: typeModel.gameName, extra: '' })">开 始</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeGame',
  data() {
    return {
      typeModel: {
        img: 'dwct',
        gameName: 'game'
      }
    }
  },
  methods: {
    setTypeModel() {
      switch (parseInt(this.$route.query.type)) {
        case 1:
          this.typeModel.img = 'dwct'
          this.typeModel.gameName = 'game'
          break
        case 2:
          this.typeModel.img = 'cydzz'
          this.typeModel.gameName = 'apply'
          break
        case 3:
          this.typeModel.img = 'sldbp'
          this.typeModel.gameName = 'level'
          break
      }
    }
  },
  mounted() {
    this.setTypeModel()
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
  .image-wrapper {
    width: 80%;
    & img {
      width: 100%;
    }
  }
  .item-wrapper {
    margin-top: 4rem;
    width: 60%;
    height: 1rem;
    background: linear-gradient(to bottom, #ffea6a 0%, #ea9c00 100%);
    border-radius: 30px;
    border: 1px solid #ffffff;
    color: #ffffff;
    font-size: 0.5rem;
    font-weight: bold;
    & a {
      width: 100%;
      line-height: 1rem;
      color: white;
      text-align: center;
    }
  }
}
</style>