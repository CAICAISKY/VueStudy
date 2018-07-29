<template>
  <div>
    <home-header></home-header>
    <home-swider></home-swider>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwider from '@/pages/home/components/HomeSwider'
import HomeIcons from '@/pages/home/components/Icons'
export default {
  name: 'hello',
  components: {
    HomeHeader,
    HomeSwider,
    HomeIcons
  }
}
</script>

<style>
</style>
