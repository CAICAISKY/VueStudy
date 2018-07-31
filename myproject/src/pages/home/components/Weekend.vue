<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul v-for="item of list" :key="item.id">
      <li class="item border-bottom">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.info}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height: .6rem
    background: #eee
    text-indent: .2rem  //设置缩进
  .item
    ouverflow: hidden
    height: 38%
    .item-img
      width: 100%
    .item-info
      padding: .2rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
</style>
