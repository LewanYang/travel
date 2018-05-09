<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>
<script>
  import CityHeader from './components/header.vue'
  import CitySearch from './components/search.vue'
  export default{
    components: {
      CityHeader,
      CitySearch
    }
  }
</script>
<style lang="">

</style>
