<script>
export default {
  props: ["studentData"]
}
</script>

<template>
  <div class="student-item">
    <div class="id">
      <a href="">{{studentData.studentID}}</a>
    </div>
    <div class="room">
      <p>{{studentData.roomID}}</p>
    </div>
    <div class="time">
      <p>{{studentData.time}}</p>
    </div>
  </div>
</template>

<style scoped>
.student-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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