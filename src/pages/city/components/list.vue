<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="(item,key) of hotCities "
               :key="item.id"
               @click="handleClickCity(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item,key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="(innerItem,key) of item"
               :key="innerItem.id"
               @click="handleClickCity(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    props: {
      hotCities: {
        type: Array
      },
      cities: {
        type: Object
      },
      letter: {
        type: String
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    computed: {
      ...mapGetters([
        'city'
      ])
    },
    watch: {
      letter() {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
    methods: {
      handleClickCity(city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(
        [
          'changeCity'
        ]
      )
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~@style/varibles.styl";
  /*1rem = 50px*/
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    position: absolute;
    top: 1.58rem
    left 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.3%
        .button
          border: .02rem solid #ccc
          margin: .1rem
          text-align: center
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      .item
        line-height .76rem
        padding-left: .2rem
</style>
