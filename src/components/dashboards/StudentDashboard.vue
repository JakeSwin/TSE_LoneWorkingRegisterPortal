<script>
import Heatmap from '../statistics/Heatmap.vue'
import SignInStatus from '../student_dashboard_components/StudentSignInStatus.vue'
import StudentRoomForm from '../student_dashboard_components/StudentRoomForm.vue'

export default {
  data() {
    return {
      signedIn: true,
      roomNumber: '',
      studentID: '25105508', //placeholder, value will be in global state
      heatmap: [
        [0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0]
      ]
    }
  },
  mounted() {
    const Url = 'https://jakesjsonplaceholder.com/student-data'
    const Data = {
        studentID: this.studentID,
    }

    const otherParams = {
			headers:{
				'content-type': 'application/json; charset=UTF-8'
			},
			body: {
				Data
			},
			method:'POST'
    }

		fetch(Url, otherParams)
		.then(data=>{return data.json()})
		.then(res=>console.log(res))
		.catch(error=>{
			console.log(error)
			this.roomNumber = 'INB1102'
		})
  },
  components: { Heatmap, SignInStatus, StudentRoomForm }
}
</script>

<template>
  <div class="content">
    <SignInStatus :isSignedIn="signedIn" :roomNumber="roomNumber"></SignInStatus>
    <Heatmap :heatmapData="heatmap"></Heatmap>
    <StudentRoomForm></StudentRoomForm>
  </div>
</template>

<style scoped>
.content {
  padding: 2em;
  padding-top: 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
  font-size: 1rem;
  background-color: white;
  width: 100%;
}
</style>