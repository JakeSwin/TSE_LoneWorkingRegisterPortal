<script>
export default {
  props: ["studentData"],
  computed: {
    studentPage() {
      return "/dashboard/student/" + this.studentData.studentID
    }
  }
}
</script>

<template>
  <div class="student-item">
    <div class="id">
      <router-link :to="studentPage">{{studentData.studentID}}</router-link>
    </div>
    <div class="room">
      <p>{{studentData.roomID}}</p>
    </div>
    <div class="time">
      <p>{{studentData.time}}</p>
    </div>
  </div>
</template>