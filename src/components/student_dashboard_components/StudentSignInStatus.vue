<script>
export default {
    props: {
      	'roomNumber': String
    },
	data() {
		return {
			isSignedIn: false
		}
	},
	mounted() {
		if (this.roomNumber === '' || !this.roomNumber) {
			this.isSignedIn = false
		} else {
			this.isSignedIn = true
		}
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