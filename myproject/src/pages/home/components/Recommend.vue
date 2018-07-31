<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul v-for="item of list" :key="item.id">
      <li class="item border-bottom">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.info}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
    display: flex //设置弹性布局，设置Flex布局以后，子元素的float、clear和vertical-align属性将失效。
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem  //上下为0左右为0.1rem
        border-radius: .06rem
        color: #fff
</style>
