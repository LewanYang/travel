<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img :src="item" alt="123" class="gallary-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 以下两个是监视器，主要作用是当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents: true,
        observer: true
      }
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container 
  overflow: inherit 
.container 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 90;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .wrapper 
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .gallary-img 
      width: 100%;
    .swiper-pagination
      color: #ffffff
      bottom: -1rem
</style>
