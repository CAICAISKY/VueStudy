<template>
  <div>
    <home-header></home-header>
    <home-swider></home-swider>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwider from '@/pages/home/components/HomeSwider'
import HomeIcons from '@/pages/home/components/Icons'
import HomeRecommend from '@/pages/home/components/Recommend'
import HomeWeekend from '@/pages/home/components/Weekend'
export default {
  name: 'hello',
  components: {
    HomeHeader,
    HomeSwider,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>
</style>
