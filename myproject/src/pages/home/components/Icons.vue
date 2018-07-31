<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showIcons">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-image-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcons () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container //定义整个图标区域的大小
    height: 0
    padding-bottom: 50%
  .icon  //定义单个图标区域的大小
    position: relative
    //相对定位，通常是父级定义position:relative定位，子级定义position:absolute绝对定位属性，并且子级使用left或right和top或bottom进行绝对定位。
    float: left  //向左浮动
    overflow: hidden
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-image
      position: absolute
      //绝对定位，将对象从文档流中拖出，使用left，right，top，bottom等属性进行绝对定位，若父元素有`position: relative`相对定位则以父元素位置所在位置为准，否者以整个html页面为准
      top: 0
      left: 0
      right: 0
      bottom: .44rem  //留22像素给文本
      box-sizing: border-box  //告诉浏览器设置的边框和内边距的值是包含在width内
      padding: .1rem  //内边距
      .icon-image-content
        display: block  //将img元素设置为块级元素
        margin: 0 auto
        /*使盒子居中，有一定的使用条件：
            1.块级元素：给定要居中的块级元素的宽度。
            2.行内元素：设置display:block并设置宽度(行内元素设置成块级元素后可以对其宽高进行设置)
            3.行内块元素：设置display:block(如input、button、img等元素，自带宽度可以不用设置其宽度)
        */
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      //这里不指定top，会自动根据和它紧挨着的上一个元素来决定top值
      height: .44rem
      line-height: .44rem  //设置行高
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
