<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul v-for="item of itemList" :key="item.id">
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
  data () {
    return {
      itemList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg',
        title: '深圳欢乐谷',
        info: '深圳欢乐谷'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_200x200_21b03a9c.jpg',
        title: '世界之窗',
        info: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
        title: '深圳小梅沙海洋世界',
        info: '一天穿越四大洋'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
        title: '海洋奇梦馆',
        info: '这里最近很火哦，好多人都在点评它呢！'
      }]
    }
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
