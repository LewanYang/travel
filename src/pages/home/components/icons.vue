<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="轮播图">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        iconList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
          desc: '景点门票'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '景点门票'
        }, {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '景点门票'
        }, {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '景点门票'
        }, {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '景点门票'
        }, {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '景点门票'
        }, {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
          desc: '景点门票'
        }, {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'}],
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~@style/varibles.styl"
  @import "~@style/mixins.styl"
  .icons >>>.swiper-container
    width: 100%
    height 0
    padding-bottom: 50%
  .icons >>> .swiper-pagination-bullets
    bottom: 0 !important
  .icons
    margin-top .2rem
    margin-bottom: .1rem
    .icon
      position relative
      width: 25%
      overflow hidden
      float: left
      padding-bottom: 25%
      height: 0
      .icon-img
        position absolute
        left 0
        right 0
        top 0
        bottom .44rem
        background #ffffff
        /*这里不是很理解为什么要用border-box*/
        box-sizion border-box
        padding: .1rem
        .icon-img-content
          display block
          height: 100%
          margin: 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color: $darkTextColor
        ellipsis()
</style>
