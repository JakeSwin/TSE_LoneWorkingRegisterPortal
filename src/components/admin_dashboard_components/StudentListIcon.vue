<script>
export default {
  props: ["studentData"],
  computed: {
    studentPage() {
      return "/dashboard/student/" + this.studentData.StudentID
    }
  }
}
</script>

<template>
  <div class="student-item">
    <div class="id">
      <router-link :to="studentPage">{{studentData.StudentID}}</router-link>
    </div>
    <div class="room">
      <p>{{studentData.RoomID}}</p>
    </div>
    <div class="time">
      <p>{{studentData.time}}</p>
    </div>
  </div>
</template>