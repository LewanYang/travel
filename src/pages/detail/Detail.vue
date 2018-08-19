<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content-demo"></div>
  </div>  
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
<style lang="stylus" scoped>
  .content-demo 
    height: 50rem
</style>

