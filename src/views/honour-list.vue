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
        :default-date="now"
        :min-date="minDate"
        :max-date="now"
        :formatter="formatter"
        @month-show="onMonthShow"
        @select="onSelect"
      />
      <div class="bottom-wrapper flex-sub flex align-center justify-around">
        <div>
          <span class="circle1"></span>
          已学习
        </div>
        <div>
          <span class="circle3"></span>
          未学习
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
      dataList: [],
      now: new Date(),
      cacheMonth: [],
      isNeedCompare: true
    }
  },
  computed: {
    minDate() {
      return new Date(this.now.getFullYear(), this.now.getMonth() - 6, this.now.getDate());
    }
  },
  mounted() {
  },
  methods: {
    formatMonth(date = new Date(), showDay = false) {
      const month = date.getMonth() + 1
      if (showDay) {
        const day = date.getDate()
        return date.getFullYear() + '-' + (month < 10 ? `0${month}` : month) + '-' + (day < 10 ? `0${day}` : day)
      } else {
        return date.getFullYear() + '-' + (month < 10 ? `0${month}` : month)
      }
    },
    getData(dateMonth) {
      if (this.cacheMonth.indexOf(dateMonth) !== -1) {
        return
      }
      this.$post({
        url: this.$urlPath.szMonthStastic,
        data: {
          dateMonth
        }
      }).then(res => {
        this.cacheMonth.push(dateMonth)
        this.dataList.push(...res.data)
      }).catch(error => {
        this.error = true
        this.cacheMonth.push(dateMonth)
        this.$toast(error.message)
      })
    },
    onMonthShow(data) {
      if (this.isNeedCompare) {
        const diffDays = parseInt((this.now - data.date) / 1000 / 3600 / 24)
        if (diffDays > 63) {
          return
        } else {
          this.isNeedCompare = false
        }
      }
      this.getData(this.formatMonth(data.date))
    },
    onSelect(date) {
      const dateStr = this.formatMonth(date, true)
      const result = this.dataList.find(it => it.date === dateStr)
      if (result) {
        this.$router.push({ name: 'todayStudy', query: { date: dateStr } })
      } else {
        this.$toast('该日期还没有学习记录呢~')
      }
    },
    formatter(day) {
      if (this.error) {
        day.className = 'calendar-no-study'
        return day
      }
      if (day.date > new Date()) {
        day.className = 'calendar-no-study'
        return day
      }
      const dateStr = this.formatMonth(day.date, true)
      const item = this.dataList.find(it => it.date === dateStr)
      if (item) {
        day.className = 'calendar-studied'
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
/* .van-calendar >>> .van-calendar__header {
  background-color: #fcfcfc;
} */
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