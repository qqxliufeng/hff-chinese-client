<template>
  <div class="index-container">
    <div class="bg" />
    <div class="content-wrapper">
      <div
        class="top-img-wrapper"
        style="height: 4.6rem"
      >
        <img
          class="top-img"
          :src="require('@/assets/images/'+ bookType +'/bg_top.jpg')"
        />
      </div>
      <div
        class="top-img-wrapper"
        style="margin-top: -15%"
      >
        <img
          class="top-img"
          :src="require('@/assets/images/'+ bookType +'/pic_center_img.png')"
        />
      </div>
      <div class="top-img-wrapper title-bg">
        <img
          class="top-img"
          :src="require('@/assets/images/pic_mupai.png')"
        />
        <span class="title">{{ bookTitle }}</span>
      </div>
      <div class="day-wrapper flex justify-center align-center">
        <span class="day-num">第一天</span>
      </div>
      <div
        class="flex-sub"
        style="margin-top: 0.5rem"
      >
        <div class="action-wrapper flex justify-center">
          <div
            class="item-wrapper"
            @click="$router.push({ name: 'review' })"
          >
            <img
              class="item"
              :src="require('@/assets/images/'+ bookType +'/pic_fuxi.jpg')"
            />
            <div class="item-title flex justify-center align-center">复习</div>
          </div>
          <div class="item-wrapper">
            <img
              class="item"
              :src="require('@/assets/images/'+ bookType +'/pic_youxi.jpg')"
            />
            <div class="item-title flex justify-center align-center">游戏</div>
          </div>
        </div>
        <div class="action-wrapper flex justify-center margin-top-sm">
          <div class="item-wrapper">
            <img
              class="item"
              :src="require('@/assets/images/'+ bookType +'/pic_yunyong.jpg')"
            />
            <div class="item-title flex justify-center align-center">运用</div>
          </div>
          <div class="item-wrapper">
            <img
              class="item"
              :src="require('@/assets/images/'+ bookType +'/pic_chuangguan.jpg')"
            />
            <div class="item-title flex justify-center align-center">闯关</div>
          </div>
        </div>
      </div>
      <div class="nav-wrapper flex justify-around  align-center">
        <div
          class="item-wrapper"
          @click="$router.push({ name: 'todayStudy' })"
        >
          今日阅读
        </div>
        <div
          class="item-wrapper"
          style="width: 15%"
          @click="$router.push({ name: 'honourList' })"
        >
          荣誉榜
        </div>
        <div
          class="item-wrapper"
          style="width: 15%"
          @click="$router.push({ name: 'unitList' })"
        >
          阅读屋
        </div>
        <div
          class="item-wrapper"
          style="width: 15%"
        >
          我的
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      bookType: 'book2',
      bookTitle: '具有特异功能的植物'
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "@/assets/style/scss-utils.scss";
.index-container {
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url("../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    z-index: -1;
  }

  .content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 99;
    display: flex;
    flex-direction: column;

    .top-img-wrapper {
      width: 100%;
      box-sizing: border-box;
      .top-img {
        height: 100%;
        width: 100%;
        object-fit: fill;
      }
    }
    .title-bg {
      position: relative;
      padding: 0 25%;
      margin-top: -7%;
    }
    .title {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.6rem;
      color: white;
      font-size: 0.5rem;
      font-weight: bold;
    }
    .day-wrapper {
      margin-top: 0.5rem;
      .day-num {
        border-radius: 30px;
        background-color: #c1d986;
        padding: 0.1rem 0.3rem;
        color: #586e21;
        font-size: 0.35rem;
      }
    }
    .action-wrapper {
      margin-top: 5%;
      .item-wrapper {
        width: 50%;
        height: 2.3rem;
        text-align: center;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        .item {
          height: 90%;
          width: 80%;
          border-radius: 0.3rem;
        }
        .item-title {
          position: absolute;
          top: 0;
          left: 40%;
          width: 50%;
          height: calc(100% - 10px);
          color: #684a06;
          font-size: 0.5rem;
          font-weight: bold;
        }
      }
    }
    .nav-wrapper {
      min-height: 10vh;
      padding: 0 10px;
      .item-wrapper {
        position: relative;
        background-image: url("../assets/images/btn_rongyb.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 10px;
        color: white;
        text-align: center;
        font-size: 0.35rem;
      }
    }
  }
}
</style>
