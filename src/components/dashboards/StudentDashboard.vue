<script>
import Heatmap from '../statistics/Heatmap.vue'
import SignInStatus from '../student_dashboard_components/StudentSignInStatus.vue'
import StudentRoomForm from '../student_dashboard_components/StudentRoomForm.vue'

export default {
  data() {
    return {
      signedIn: true,
      heatmap: [
        [0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0]
      ]
    }
  },
  components: { Heatmap, SignInStatus, StudentRoomForm }
}
</script>

<template>
  <div class="content">
    <SignInStatus :isSignedIn="signedIn"></SignInStatus>
    <Heatmap :heatmapData="heatmap"></Heatmap>
    <StudentRoomForm></StudentRoomForm>
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