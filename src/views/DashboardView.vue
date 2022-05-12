<script>
import TaskBar from '../components/TheTaskbar.vue'
import StudentDashboard from '../components/dashboards/StudentDashboard.vue'
import AdminDashboard from '../components/dashboards/AdminDashboard.vue'

export default {
  data() {
    return {
      taskBarVisible: false
    }
  },
  methods: {
    toggleShowTaskBar() {
      if (this.taskBarVisible == false) {
        this.taskBarVisible = true
      } else {
        this.taskBarVisible = false
      }
    }
  },
  components: { TaskBar, StudentDashboard, AdminDashboard }
}
</script>

<template> 
  <TaskBar :visible="taskBarVisible" @close="toggleShowTaskBar()"></TaskBar>
  <div class="container">
    <header>
      <div @click="toggleShowTaskBar()" class="menu-mask"></div>
      <object data="/MenuIcon.svg" type="image/svg+xml"></object>
      <h2>DASHBOARD</h2>
    </header>
    <div class="date">
      {{ new Date().toDateString() }}
    </div>
    <AdminDashboard></AdminDashboard>
    <!-- <StudentDashboard></StudentDashboard> -->
  </div>
</template>

<style scoped>
.container {
  font-size: 1rem;
  background-color: white;
  width: 100%;
  height: 667px;
}

header {
  background-color: #002147;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem;
  font-weight: 700;
  font-size: 0.9em;
}

.date {
  padding: 1.1em 1.5em;
}

.menu-mask {
  position: absolute;
  z-index: 10;
  width: 40px;
  height: 40px;
}
</style>