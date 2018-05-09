<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="图片">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      recommendList: Array
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~@style/mixins.styl"
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    overflow hidden
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: 0.1rem
    .item-info
      padding: .1rem
      flex: 1
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: dimgrey
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        padding: 0 .2rem
        border-radius:  .06rem
        color: #ffffff
        background-color: #ff9300
</style>
