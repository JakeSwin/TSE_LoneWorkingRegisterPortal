<script>
import SignedInList from '../admin_dashboard_components/SignedInList.vue'
import StatisticsBanner from '../statistics/StatisticsBanner.vue'
import Histogram from '../statistics/Histogram.vue'

// session value will be sent with every sensitive data request to ensure the
// identity of the person sending the request

export default {
  data() {
    return {
      bannerStats: [],
      studentList: [],
      histogramData: [],
      histogramTimes: []
    }
  },
  mounted() {
    fetch('/backend/api/students')
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
    fetch('/backend/api/sensor-data')
    .then(res => {
      res.json()
      .then(json => {
        var totalFootFall = 0
        var times = []
        var timeData = []
        json.forEach(item => {
          console.log(item)
          times.push(item.timeSent)
          var totalTenMinFootFall = 0
          for(let x in item.timeRecieved) {
            totalTenMinFootFall += item.timeRecieved[x]
            totalFootFall += item.timeRecieved[x]
          }
          timeData.push(totalTenMinFootFall)
        })
        this.bannerStats[1] = {
          id: 2,
          value: totalFootFall,
          message: "total door footfall" 
        }
        console.log(times)
        this.histogramTimes = times
        // this.histogramData = timeData
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