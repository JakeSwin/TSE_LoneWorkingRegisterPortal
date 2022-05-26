<script>
import Heatmap from '../statistics/Heatmap.vue'
import SignInStatus from '../student_dashboard_components/StudentSignInStatus.vue'
import StudentRoomForm from '../student_dashboard_components/StudentRoomForm.vue'

import store from '../../store.js'

export default {
  data() {
    return {
      roomNumber: store.getRoomNumber(),
      studentID: store.getStudentID(),
    }
  },
  components: { Heatmap, SignInStatus, StudentRoomForm }
}
</script>

<template>
  <div class="content">
    <SignInStatus :roomNumber="roomNumber"></SignInStatus>
    <Heatmap :studentID="studentID"></Heatmap>
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