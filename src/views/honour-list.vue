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
          学习中
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
      color: '#07c160',
      error: false,
      dataList: []
    }
  },
  computed: {
    minDate() {
      const now = new Date()
      return new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$post({
        url: this.$urlPath.szMonthStastic,
        data: {
          dateMonth: "2020-09"
        }
      }).then(res => {
        console.log(res)
      }).catch(error => {
        // this.error = true
        this.dataList.push({
          date: "2020-09-28",
          studyResult: "3"
        })
        this.$toast(error.message)
      })
    },
    formatter(day) {
      if (this.error) {
        day.className = 'calendar-no-study'
        return day
      }
      // const date = day.date.getDate()
      if (day.date > new Date()) {
        day.className = 'calendar-no-study'
        return day
      }
      const month = day.date.getMonth() + 1
      const date = day.date.getDate()
      const dateStr = day.date.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
      console.log(dateStr)
      const item = this.dataList.find(it => it.date === dateStr)
      if (item) {
        if (parseInt(item.studyResult) === 1) {
          day.className = 'calendar-no-study'
        } else if (parseInt(item.studyResult) === 2) {
          day.className = 'calendar-studying'
        } else {
          day.className = 'calendar-studied'
        }
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