<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul v-for="item of itemList" :key="item.id">
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
  data () {
    return {
      itemList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
        title: '欢乐长隆',
        info: '世界欢乐汇聚长隆'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
        title: '深圳必游TOP10',
        info: '来到深圳，你需要来这里签到'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        title: '当地人游深圳',
        info: '当地人带你发现不一样的深圳'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
        title: '情侣好去处',
        info: '手牵手，一起走到老'
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
