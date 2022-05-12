<script>
  export default {
    props: {
      'isSignedIn': Boolean
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