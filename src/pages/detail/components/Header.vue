<template>
  <div>
    <div>
      <router-link 
      tag="div"
      class="header-abs"
      to="/"
      v-show="showAbs">
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
    </div>
    <div 
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 当页面被隐藏的时候，进行这部操作
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 180
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@style/varibles.styl";
  .header-abs
    position: absolute;
    top: .2rem;
    left: .2rem;
    width 0.8rem
    height 0.8rem
    line-height: .8rem
    border-radius .4rem
    background: rgba(0, 0, 0, .8)
    text-align center
    .header-abs-back
      color: #ffffff
      font-size .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height $headerHeight
    text-align center
    color: #ffffff
    background $bgColor
    font-size: .32rem
    .header-fixed-back
      position absolute
      left 0
      top 0
      width: .64rem
      text-align center
      font-size .4rem
      color: #fff
</style>

