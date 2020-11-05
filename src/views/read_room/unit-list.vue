<template>
  <div class="container">
    <navi title="阅读屋" />
    <div class="content-wrapper">
      <div v-if="!showEmptyTip">
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
          >{{item.unit}}</div>
          <div
            class="title"
            :style="{ 'color': item.disabled ? '#989898' : '#7c2519'  }"
          >{{item.name}}</div>
        </div>
      </div>
      <EmptyTip v-else />
    </div>
  </div>
</template>

<script>
import EmptyTip from '@/views/components/empty-tip'
export default {
  name: 'UnitList',
  components: {
    EmptyTip
  },
  data() {
    return {
      unitList: [],
      showEmptyTip: true
    }
  },
  methods: {
    enterCourse(item) {
      this.$router.push({
        name: 'courseList', query: {
          title: item.name,
          unitId: item.id,
        }
      })
    },
    getData() {
      this.$post({
        url: this.$urlPath.szReadingRoomBook,
        data: {}
      }).then(res => {
        this.showEmptyTip = !res || !res.data || res.data.length === 0
        if (!this.showEmptyTip) {
          this.unitList = res.data
          this.unitList.forEach((it, index) => {
            it.disabledColor = '#E5E5E5'
            switch (index) {
              case 0:
                it.actionColor = '#FFDD8F'
                break
              case 1:
                it.actionColor = '#FFC596'
                break
              case 2:
                it.actionColor = '#FFA798'
                break
              case 3:
                it.actionColor = '#9CE99C'
                break
              default:
                it.actionColor = '#FFDD8F'
                break
            }
            this.$set(it, 'disabled', it.studyResult === 1)
          })
        }
      }).catch(error => {
        console.log(error)
        this.showEmptyTip = true
      })
    }
  },
  mounted() {
    this.getData()
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
      font-size: 0.4rem;
    }
    .title {
      @extend .text-style;
      font-size: 0.45rem;
      margin-top: 0.3rem;
    }
  }
}
</style>
