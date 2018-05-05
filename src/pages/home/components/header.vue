<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe61a;</span>
      <input class="input-content" type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="header-right">
      城市 <span class="iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" scoped>
  /* 1rem = 50px* 由于看的图片是2倍图，所以这里的height实际是43px */
  @import "~@style/varibles.styl"
  .header
    line-height: .86rem
    display: flex
    background-color: $bgColor
    color: #ffffff
    .header-left
      width: .64rem
      float: left
      text-align: center
      padding-left .1rem
    .header-input
      flex: 1
      height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background #fff
      border-radius: .1rem
      color: #ccc
      line-height .64rem
      text-indent .1rem
      .input-content
        margin-top: -.1rem
        width: 80%
    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
