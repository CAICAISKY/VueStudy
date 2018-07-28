<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe7eb;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe7e3;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem     //设置header区域行高
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center  //返回按钮置中
        font-size: .4rem    //按钮大小
    .header-input
      flex: 1
      height: .64rem        //输入框高度
      line-height: .64rem   //输入框行高
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem   //输入框文本左边距
      background: #fff
      border-radius: .1rem  //输入框弧度半径
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem //调整箭头与城市之间的距离
        font-size: .24rem    //调整箭头大小
</style>
