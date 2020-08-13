<template>
  <div class="container">
    <navi title="荣誉榜" />
    <div class="content flex flex-direction">
      <van-calendar
        :show-title="false"
        :poppable="false"
        :show-mark="false"
        :show-confirm="false"
        :style="{ height: '80%' }"
        :color="color"
        :min-date="minDate"
        :max-date="new Date()"
        :formatter="formatter"
      />
      <div class="bottom-wrapper flex-sub flex align-center justify-around">
        <div>
          <span class="circle1"></span>
          已学完
        </div>
        <div>
          <span class="circle2"></span>
          未学完
        </div>
        <div>
          <span class="circle3"></span>
          未开始
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HonourList',
  data() {
    return {
      color: '#07c160'
    }
  },
  computed: {
    minDate() {
      const now = new Date()
      return new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
    }
  },
  methods: {
    formatter(day) {
      const date = day.date.getDate()
      if (day.date > new Date()) {
        day.className = 'calendar-no-study'
        return day
      }
      if (date % 3 === 0) {
        day.className = 'calendar-studied'
      } else if (date % 3 === 1) {
        day.className = 'calendar-studying'
      } else {
        day.className = 'calendar-no-study'
      }
      return day
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fcf3e4;
  min-height: 100vh;
  position: relative;
  .content {
    position: absolute;
    top: 1.2rem;
    left: 0;
    right: 0;
    bottom: 0;
    .bottom-wrapper {
      font-size: 0.4rem;
      .circle {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        display: inline-block;
        margin-right: 0.2rem;
      }
      .circle1 {
        @extend .circle;
        background-color: #07c160;
      }
      .circle2 {
        @extend .circle;
        background-color: #ff9a39;
      }
      .circle3 {
        @extend .circle;
        background-color: #fff;
      }
    }
  }
}
</style>
<style scoped>
.van-calendar {
  background-color: transparent;
}
.van-calendar >>> .van-calendar__header {
  background-color: #fcfcfc;
}
.van-calendar >>> .van-calendar__selected-day {
  width: 0;
  height: 0;
  color: #000;
}
</style>
<style>
.calendar-studied {
  position: relative;
  z-index: 1;
  color: white;
}
.calendar-studied::before {
  position: absolute;
  content: "";
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #07c160;
  border-radius: 5px;
  z-index: -1;
}
.calendar-studying {
  position: relative;
  z-index: 1;
}
.calendar-studying::after {
  position: absolute;
  content: "";
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 1px solid #ff9a39;
  border-radius: 5px;
  z-index: -1;
}
.calendar-no-study {
  position: relative;
  z-index: 1;
}
.calendar-no-study::after {
  position: absolute;
  content: "";
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  z-index: -1;
}
</style>