<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入搜索地区关键词">
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="stylus" scoped>
  @import "~@style/varibles.styl"
  .search
    height: .72rem
    padding: 0 .1rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      width: 100%
      height: .62rem
      line-height .62rem
      text-align: center
      border-radius: .06rem
      padding 0 .1rem
      color: #666
</style>
