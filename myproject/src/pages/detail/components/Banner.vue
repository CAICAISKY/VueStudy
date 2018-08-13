<template>
  <div>
    <div class="banner" @click="handleGallaryShow">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_600x330_3b1186e2.jpg">
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6e5;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animal>
      <common-gallary :imgs="gallaryImgs" v-show="gallaryShow" @gallaryClose="handleGallaryClose"></common-gallary>
    </fade-animal>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimal from 'common/fade/FadeAnimal'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimal
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      gallaryShow: false
    }
  },
  methods: {
    handleGallaryShow () {
      this.gallaryShow = true
    },
    handleGallaryClose () {
      this.gallaryShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex   //弹性盒子
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      //背景颜色渐变，从头部开始，从透明度0到0.8
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1     //未知，需要查证
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .3rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)   //设置透明背景
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
