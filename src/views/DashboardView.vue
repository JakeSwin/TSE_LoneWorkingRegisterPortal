<script>
import TaskBar from '../components/TaskBar.vue'
import Heatmap from '../components/Heatmap.vue'
import SignInStatus from '../components/SignInStatus.vue'
import ChangeRoomForm from '../components/ChangeRoomForm.vue'

export default {
  data() {
    return {
      taskBarVisible: false,
      signedIn: true,
      heatmap: [
        [0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0]
      ],
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
  components: { TaskBar, Heatmap, SignInStatus, ChangeRoomForm }
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
    <div class="content">
      <SignInStatus :isSignedIn="signedIn"></SignInStatus>
      <Heatmap :heatmapData="heatmap"></Heatmap>
      <ChangeRoomForm></ChangeRoomForm>
    </div>
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

.content {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
  font-size: 1rem;
  background-color: white;
  width: 100%;
}

.menu-mask {
  position: absolute;
  z-index: 10;
  width: 40px;
  height: 40px;
}
</style>