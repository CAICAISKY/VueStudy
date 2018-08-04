<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
   @import '~styles/varibles.styl'
  .list
    display: flex             //弹性盒子模式
    flex-direction: column    //弹性盒子模式：按列排序；row为按行排序
    justify-content: center   //弹性盒子模式：置中
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
