<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleChangeCity(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(city, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="item of city" :key="item.id" @click="handleChangeCity(item.name)">
          <div class="item border-bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleChangeCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const elem = this.$refs[this.letter][0]
        this.scroll.scrollToElement(elem)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {mouseWheel: true, click: true, tap: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom   //border-topbottom是引入的一像素边框样式中自带的
    &:before
      border-color: #ccc  //设置border-topbottom的伪元素before的边框颜色
    &:after
      border-color: #ccc
  .border-bottom   //border-bottom是引入的一像素边框样式中自带的
    &:before
      border-color: #ccc
  .list   //.list部分的样式是使列表超过长度时不会自动扩展，也就是不使用浏览器自带的向下滑动
    position: absolute
    top: 1.58rem
    left: 0
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
      overflow: hidden  //子元素中存在float: left样式，因此需要通过本样式来自动包含子元素
      padding: .1rem .6rem .1rem .1rem //上右下左内边距,给右边留空来摆放字母
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem  //上右下左外边距
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
