<script>
import Heatmap from '../components/statistics/Heatmap.vue'
import SignInStatus from '../components/student_dashboard_components/StudentSignInStatus.vue'

export default {
  data() {
    return {
      signedIn: true,
      roomNumber: '',
      studentID: this.$route.params.id,
    }
  },
  components: { Heatmap, SignInStatus }
}
</script>

<template>
  <div class="content">
    <SignInStatus :isSignedIn="signedIn" :roomNumber="roomNumber"></SignInStatus>
    <Heatmap :studentID="studentID"></Heatmap>
    <router-link to="/dashboard">Back</router-link>
  </div>
</template>

<style scoped>
.content {
  padding: 2em;
  padding-top: 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
  font-size: 1rem;
  background-color: white;
  width: 100%;
}
</style>