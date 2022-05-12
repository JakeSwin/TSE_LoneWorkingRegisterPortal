<script>
import SignedInList from '../admin_dashboard_components/SignedInList.vue'
import StatisticsBanner from '../statistics/StatisticsBanner.vue'

export default {
  data() {
    return {
      stats: [{
        id: 1,
        value: 24,
        message: "students signed in" 
      }, {
        id: 2,
        value: 104,
        message: "total door footfall"
      }]
    }
  },
  components: { SignedInList, StatisticsBanner }
}
</script>

<template>
  <StatisticsBanner :stats="stats"></StatisticsBanner>
  <SignedInList></SignedInList>
</template>

<style>

</style>