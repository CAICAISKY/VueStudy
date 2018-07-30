<template>
  <div>
    <home-header></home-header>
    <home-swider></home-swider>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwider from '@/pages/home/components/HomeSwider'
import HomeIcons from '@/pages/home/components/Icons'
import HomeRecommend from '@/pages/home/components/Recommend'
export default {
  name: 'hello',
  components: {
    HomeHeader,
    HomeSwider,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style>
</style>
