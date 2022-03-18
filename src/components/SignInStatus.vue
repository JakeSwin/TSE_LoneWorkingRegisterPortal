<script>
  export default {
    props: ['isSignedIn'],
    computed: {
      whichStatus() {
        console.log(this.isSignedIn);
        if (this.isSignedIn == true) {
          return 'status-on'
        } else {
          return 'status-off'
        }
      }
    }
  }
</script>

<template>
  <div class="sign-in-status" :class="[whichStatus]">
    <p>You are currently signed in Room INB1102</p>
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