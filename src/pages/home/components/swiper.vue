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
        }
      }
    },
    props: {
      swiperList: Array
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
    padding-bottom 30.67%
    background #ccc
    .swiper-img
      width: 100%
</style>
