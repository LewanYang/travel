<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
  import HomeHeader from './components/header.vue'
  import HomeSwiper from './components/swiper.vue'
  import HomeIcons from './components/icons.vue'
  import HomeRecommend from './components/recommend.vue'
  import HomeWeekend from './components/weekend.vue'
  import { mapGetters } from 'vuex'
  import axios from 'axios'
  export default {
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    computed: {
      ...mapGetters(['city'])
    },
    mounted() {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    }
  }
</script>
<style>

</style>
