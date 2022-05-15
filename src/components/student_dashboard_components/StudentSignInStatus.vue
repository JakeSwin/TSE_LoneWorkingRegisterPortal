<script>
export default {
    props: {
    	'isSignedIn': Boolean,
      	'studentID': String
    },
    data() {
      	return {
    		roomNumber: ''
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
	methods: {
		getClass() {
			return {
				'status-off': !this.isSignedIn,
				'status-on': this.isSignedIn
			}
		}
    },
  }
</script>

<template>
	<div class="sign-in-status" :class="getClass()">
    	<p v-if="isSignedIn">Currently signed into room: {{ roomNumber }}</p>
    	<p v-else>Not currently signed into a room</p>
  	</div>
</template>

<style scoped>
.sign-in-status {
	border: 2px solid;
	text-align: center;
	padding: 0.5em;
	border-radius: 10px;
	font-size: 1.1em;
}

.status-on {
	color: #1cd325;
}

.status-off {
	color: #E93333;
}
</style>