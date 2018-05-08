<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="图片">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        weekendList: [
          {
            id: '0001',
            imgUrl: 'https://imgs.qunarzz.com/sight/source/1508/f8/cadd4e229d3402.jpg_r_640x214_c38fb221.jpg',
            title: '周杰伦',
            desc: 'ABCDEFG哈利波特与死亡圣器'
          },
          {
            id: '0001',
            imgUrl: 'https://imgs.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
            title: '周杰伦',
            desc: 'ABCDEFG哈利波特与死亡圣器'
          },
          {
            id: '0001',
            imgUrl: 'https://imgs.qunarzz.com/sight/source/1506/45/313877f3917dbe.jpg_r_640x214_1c113e46.jpg',
            title: '周杰伦',
            desc: 'ABCDEFG哈利波特与死亡圣器'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~@style/mixins.styl"
  .recommend-title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    .item-img-wrapper
      overflow 0
      padding-bottom: 39%
      height 0
      .item-img
        width: 100%
    .item-info
      padding .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color: dimgray
        ellipsis()
</style>

