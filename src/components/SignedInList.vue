<script>
import StudentListIcon from "./StudentListIcon.vue"
import StudentListSlot from "./StudentListSlot.vue"

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
    StudentListIcon, StudentListSlot
  }
}
</script>

<template>
  <div class="student-list">
    <h4>Signed In Students:</h4>
    <StudentListSlot>
      <template #first><div class="labels">Id</div></template>
      <template #second><div class="labels">Room</div></template>
      <template #third><div class="labels">Time</div></template>
    </StudentListSlot>
    <!-- <StudentListIcon v-for="item in list" :key="item.studentID" :studentData="item" class="student-item"></StudentListIcon> -->
    <StudentListSlot v-for="item in list" :key="item.studentID">
      <template #first> {{item.studentID}} </template>
      <template #second> {{item.roomID}} </template>
      <template #third> {{item.time}} </template>
    </StudentListSlot>
  </div>
</template>

<style scoped>
.student-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

h4 {
  margin-top: 1.5em;
  margin-left: 2em;
}

.labels {
  font-size: 0.8em;
  font-weight: 300;
  margin: 0.5em 0;
}

.student-item:nth-child(odd) {
  background: #f8f8f8;
}
</style>