<script>
import StudentListIcon from "./StudentListIcon.vue"

export default {
  data() {
    return {
      list: [
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
          studentID: "25105508",
          roomID: "INB1104",
          time: "19:14"
        },
        {
          studentID: "25107512",
          roomID: "IN2102",
          time: "18:46"
        }
      ]
    }
  },
  components: {
    StudentListIcon
  }
}
</script>

<template>
  <div class="student-list">
    <h4>Signed In Students:</h4>
    <StudentListIcon v-for="item in list" :key="item.studentID" :studentData="item" class="student-item"></StudentListIcon>
  </div>
</template>

<style scoped>
.student-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.student-item:nth-child(even) {
  background: #eeeeee;
}
</style>