<template>
  <div>
    <home-header></home-header>
    <home-swider></home-swider>
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwider from '@/pages/home/components/HomeSwider'
export default {
  name: 'hello',
  components: {
    HomeHeader,
    HomeSwider
  }
}
</script>

<style>
</style>
