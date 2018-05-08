<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>
<script>
  import HomeHeader from './components/header.vue'
  import HomeSwiper from './components/swiper.vue'
  import HomeIcons from './components/icons.vue'
  import HomeRecommend from './components/recommend.vue'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend
    }
  }
</script>
<style>

</style>
