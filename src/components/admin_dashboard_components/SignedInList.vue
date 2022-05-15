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
      ]
    }
  },
  computed: {
    
  },
  components: {
    StudentListIcon
  }
}
</script>

<template>
  <div class="student-list">
    <h4>Signed In Students:</h4>
    <div class="student-item">
      <div class="id">
        <div class="labels">Id</div>
      </div>
      <div class="room">
        <div class="labels">Room</div>
      </div>
      <div class="time">
        <div class="labels">Time</div>
      </div>
    </div>
    <StudentListIcon v-for="item in list" :key="item.studentID" :studentData="item" class="student-item"></StudentListIcon>
  </div>
</template>

<style>
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

.student-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2em 2em;
}

.id {
  width: 45%;
}

.room {
  flex-grow: 1;
  text-align: left;
}

.time {
  flex-grow: 1;
  text-align: end;
}
</style>