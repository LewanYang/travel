<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="stylus" scoped>
  @import "~@style/varibles.styl";
  .header
    overflow hidden
    height: $headerHeight
    line-height $headerHeight
    text-align center
    color: #ffffff
    background $bgColor
    font-size: .32rem
    position relative
    .header-back
      position absolute
      left 0
      top 0
      width: .64rem
      text-align center
      font-size .4rem
      color: #fff
</style>
