<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl" alt="轮播图">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_750x200_b423f532.jpg'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/e5/82b53c47166cfc02.jpg_750x200_0d3a0066.jpg'
        }]
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper >>>  .swiper-pagination-bullet-active
    background-color #fff !important
  .wrapper
    overflow hidden
    width: 100%
    height: 0
    padding-bottom 26.67%
    background #ccc
    .swiper-img
      width: 100%
</style>
