<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/pages/city/components/Header'
import CitySearch from '@/pages/city/components/Search'
import CityList from '@/pages/city/components/List'
import CityAlphabet from '@/pages/city/components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityListInfo () {
      axios.get('/api/city.json').then(this.handleCityListInfo)
    },
    handleCityListInfo (response) {
      response = response.data
      if (response.ret && response.data) {
        const data = response.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityListInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
