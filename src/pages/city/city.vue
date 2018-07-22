<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"
    >
    </city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>
<script>
  import axios from 'axios'
  import CityHeader from './components/header.vue'
  import CitySearch from './components/search.vue'
  import CityList from './components/list.vue'
  import CityAlphabet from './components/Alphabet.vue'
  export default{
    name: 'City',
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    mounted() {
      this.getCityInfo()
    },
    methods: {
      getCityInfo() {
        axios.get('/api/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc(res) {
        let result = res.data
        this.cities = result.data.cities
        this.hotCities = result.data.hotCities
        console.log(this.cities)
      },
      handleLetterChange(letter) {
        this.letter = letter
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
  }
</script>
<style lang="">

</style>
