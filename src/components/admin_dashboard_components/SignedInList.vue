<script>
import StudentListIcon from "./StudentListIcon.vue"

export default {
  props: ['studentList'],
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
    <StudentListIcon v-for="item in studentList" :key="item.studentID" :studentData="item" class="student-item"></StudentListIcon>
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