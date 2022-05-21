<script>
import SignedInList from '../admin_dashboard_components/SignedInList.vue'
import StatisticsBanner from '../statistics/StatisticsBanner.vue'
import Histogram from '../statistics/Histogram.vue'

// session value will be sent with every sensitive data request to ensure the
// identity of the person sending the request

export default {
  data() {
    return {
      bannerStats: [
        {
          id: 1,
          value: 24,
          message: "students signed in" 
        }, 
        {
          id: 2,
          value: 104,
          message: "total door footfall"
        }
      ],
      studentList: [
        {
          studentID: "25105508",
          roomID: "INB1104",
          time: "19:14"
        },
        {
          studentID: "25107512",
          roomID: "IN2102",
          time: "18:46"
        },
        {
          studentID: "25123418",
          roomID: "INB1103",
          time: "20:28"
        },
        {
          studentID: "24112596",
          roomID: "INB3101",
          time: "21:32"
        },
        {
          studentID: "25205508",
          roomID: "INB1104",
          time: "19:14"
        },
        {
          studentID: "25207512",
          roomID: "IN2102",
          time: "18:46"
        },
        {
          studentID: "25223418",
          roomID: "INB1103",
          time: "20:28"
        },
        {
          studentID: "24212596",
          roomID: "INB3101",
          time: "21:32"
        },
        {
          studentID: "25305508",
          roomID: "INB1104",
          time: "19:14"
        },
        {
          studentID: "25307512",
          roomID: "IN2102",
          time: "18:46"
        }
      ],
      histogramData: [2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  mounted() {
    
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
      <Histogram :histogramData="histogramData"></Histogram>
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