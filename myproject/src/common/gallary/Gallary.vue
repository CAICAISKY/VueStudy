<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('gallaryClose')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit   //从父类继承overflow的属性值，swiper默认swiper-container有overflow: hidden属性，会将分页隐藏所以设置此样式
  .container
    display: flex    //弹性盒子模型
    flex-direction: column    //弹性盒子模型下，垂直显示
    justify-content: center   //弹性盒子模型下，相对于容器置中
    z-index: 99
    position: fixed   //生成绝对定位的元素，相对于浏览器窗口进行定位
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%             //让wrapper容器根据图片撑出空间
      padding-bottom: 100%    //让wrapper容器根据图片撑出空间
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem         //调整分页位置
</style>
