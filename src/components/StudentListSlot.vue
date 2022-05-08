<script>
export default {
  props: ["studentData"]
}
</script>

<template>
  <div class="student-item">
    <div class="id">
      <slot name="first"></slot>
    </div>
    <div class="room">
      <slot name="second"></slot>
    </div>
    <div class="time">
      <slot name="third"></slot>
    </div>
  </div>
</template>

<style scoped>
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