<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{item}}
    </li>
  </ul>
</template>
<script>
  export default{
    data() {
      return {
        /**
         * 表示是否在滑动状态
         * */
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    props: {
      cities: {
        type: Object
      }
    },
    updated() {
      // A字母里list顶部
      this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
      /**
       * 计算属性
       * for in 的使用，for(let i in items)
       * 这里的i 是 key
       **/
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        /**
         * 思路：关于如何判断手指滑动到哪个字母
         * 1、A这个字母与顶部的距离
         * 2、手指当前字母与顶部的距离，然后通过与1的差值，
         *    就可以计算当前是哪个字母
         */
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            // 手指滑动位置理List顶部
            const touchY = e.touches[0].clientY - 79
            // 当前在哪个字母位置
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              // 当前字母
              const currentLetter = this.letters[index]
              // 把他传回给父组件
              this.$emit('change', currentLetter)
            }
          }, 16)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~@style/varibles.styl";
  .list
    display: flex;
    flex-direction column;
    justify-content center;
    position absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width .4rem;
    .item
      line-height .4rem
      text-align center;
      color: $bgColor
</style>
