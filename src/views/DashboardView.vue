<script>
import TaskBar from '../components/TaskBar.vue'
import Heatmap from '../components/Heatmap.vue'
import SignInStatus from '../components/SignInStatus.vue'

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
  components: { TaskBar, Heatmap, SignInStatus }
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
      <SignInStatus isSignedIn="true"></SignInStatus>
      <Heatmap></Heatmap>
      <div class="rooms">
        <p>Update Room:</p>
        <form action="" method="post" @submit.prevent="">
          <div class="form-field">
            <label for="room-num">Room Number:</label>
            <input type="text" name="room-num" id="room-field">
          </div>
          <button>Change Rooms</button>
        </form>
      </div>
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

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-field {
    display: flex;
    flex-direction: column;
}
form .form-field {
    width: 100%;
    margin-bottom: 1em;
}

form .form-field input {
    border: 2px solid #6B6E70;
    background-color: #E7E9EC;
    border-radius: 10px;
    height: 2.8em;
}

form .form-field label {
    font-size: 0.8em;
}

form button {
    width: 15em;
    height: 2.4em;
    color: white;
    font-size: 1.2em;
    font-weight: 700;
    background-color: #002147;
    border-radius: 10px;
    margin-top: 0.9em;
}

.rooms p {
  margin-bottom: 1em;
}
</style>