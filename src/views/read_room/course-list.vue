<template>
  <div class="container">
    <navi title="阅读屋" />
    <div class="content-wrapper">
      <div v-if="!showEmptyTip">
        <div class="content">
          <div class="title text-cut">第一单元：{{$route.query.title}}</div>
          <div
            v-for="item of courseList"
            :key="item.id"
            class="item"
            @click="startNext(item)"
          >
            {{item.name}}
          </div>
        </div>
      </div>
      <EmptyTip v-else />
    </div>
  </div>
</template>

<script>
import EmptyTip from '@/views/components/empty-tip'
export default {
  name: 'CourseList',
  components: { EmptyTip },
  data() {
    return {
      courseList: [],
      showEmptyTip: true
    }
  },
  methods: {
    getData() {
      this.$post({
        url: this.$urlPath.szReadingRoomCourse,
        data: {
          bookId: this.$route.query.unitId
        }
      }).then(res => {
        this.showEmptyTip = !res || !res.data || res.data.length === 0
        if (!this.showEmptyTip) {
          this.courseList = res.data
        }
      }).catch(error => {
        this.$toast(error.message)
        this.showEmptyTip = true
      })
    },
    startNext(item) {
      this.$router.push({ name: 'contentList', query: { courseId: item.id } })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/scss-utils.scss";
.container {
  @include container-base;
  .content-wrapper {
    @include content-wrapper-base;
    padding-top: 2rem;
    margin: 0 auto;
    width: 80%;
    .content {
      border-radius: 10px;
      border: 2px solid #ffffff;
      background-color: #ffe3a5;
      padding: 0.2rem;
      margin-bottom: 0.3rem;
      .title {
        width: 60%;
        margin: 0 auto;
        background-color: #fba97c;
        color: #fff;
        padding: 0.3rem 0.2rem;
        text-align: center;
        border-radius: 30px;
        transform: translateY(-50%);
      }
      .item {
        border-bottom: 1px dashed #ffffff;
        padding: 0.4rem 0;
        font-size: 0.4rem;
      }
    }
  }
}
</style>