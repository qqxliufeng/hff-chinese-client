<template>
  <div class="container">
    <navi
      title="我的"
      bg-color="#00000000"
      :show-bottom-line="false"
    />
    <div class="top-wrapper"></div>
    <div class="content-wrapper">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/scss-utils.scss";
.container {
  @include container-base;
  .top-wrapper {
    background-image: url("../assets/images/bg_wode.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 6rem;
    margin-top: -1px;
  }
  .content-wrapper {
    transform: translateY(-1rem);
    width: 80%;
    margin: 0 auto;
    height: 5rem;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
  }
}
</style>