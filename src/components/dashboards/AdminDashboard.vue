<script>
import SignedInList from '../admin_dashboard_components/SignedInList.vue'
import StatisticsBanner from '../statistics/StatisticsBanner.vue'
import Histogram from '../statistics/Histogram.vue'

export default {
  data() {
    return {
      bannerStats: [],
      studentList: [],
    }
  },
  mounted() {
    fetch('/api/students')
    .then(res => {
      console.log(res)
      res.json()
      .then(json => {
        console.log(json)
        this.studentList = json
        this.bannerStats[0] = {
          id: 1,
          value: json.length,
          message: "students signed in" 
        }
      })
    })
  },
  computed: {
    switchStudentView() {
      return this.$route.name == 'dashboard' ? true : false
    }
  },
  components: { SignedInList, StatisticsBanner, Histogram }
}
</script>

<template>
  <div v-if="switchStudentView">
    <StatisticsBanner :stats="bannerStats"></StatisticsBanner>
    <SignedInList :studentList="studentList"></SignedInList>
    <div class="footfall-graph">
      <Histogram></Histogram>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.footfall-graph {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
</style>