<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="新垣结衣"
      class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon"></span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary 
    :imgs="bannerImgs" 
    v-show="showGallary" 
    @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from '@/common/gallary/Gallary.vue'
export default {
  components: {
    CommonGallary
  },
  props: {
    sightName: {
      type: String
    },
    bannerImg: {
      type: String
    },
    bannerImgs: {
      type: Array
    }
  },
  data() {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img
      width 100%
    .banner-info
      position: absolute;
      left 0;
      right: 0;
      bottom 0;
      line-height .6rem
      color: #ffffff
      display flex;
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8));
      .banner-title
        flex: 1;
        padding: 0 .2rem;
        font-size: .32rem;
      .banner-number 
        height .32rem;
        line-height .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius .2rem
        background reba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>


