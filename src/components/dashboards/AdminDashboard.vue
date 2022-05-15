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
  computed: {
    switchStudentView() {
      return this.$route.name == 'dashboard' ? true : false
    }
  },
  components: { SignedInList, StatisticsBanner }
}
</script>

<template>
  <div v-if="switchStudentView">
    <StatisticsBanner :stats="stats"></StatisticsBanner>
    <SignedInList></SignedInList>
  </div>
  <router-view></router-view>
</template>

<style>

</style>