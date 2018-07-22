<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入搜索地区关键词">
    </div>
    <div
      class="search-content"
      v-show="keyword"
      ref="search"
    >
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-item border-bottom"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom"
            v-show="hasNoData"
        >没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default {
    data() {
      return {
        keyword: '',
        timer: null,
        list: []
      }
    },
    props: {
      cities: {
        type: Object
      }
    },
    computed: {
      hasNoData() {
        return !this.list.length
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.search)
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        // Throttling function
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              // can through spell and name search keyword
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~@style/varibles.styl"
  .search
    height: .72rem
    padding: 0 .1rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      width: 100%
      height: .62rem
      line-height .62rem
      text-align: center
      border-radius: .06rem
      padding 0 .1rem
      color: #666

  .search-content
    z-index: 1
    overflow hidden
    position absolute
    top: 1.58rem
    left: 0
    right 0
    bottom 0
    background: #eee
    .search-item
      line-height .62rem
      background #ffffff
      color: #666
      padding-left .2rem
</style>
