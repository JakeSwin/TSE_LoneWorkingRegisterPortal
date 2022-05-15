<script>
import { reactive } from '@vue/reactivity'
import { RouterLink, RouterView } from 'vue-router'

// const store = {
//   debug:true,
//   state: reactive({
//     isLoggedIn: false,
//     studentID: '',
//     isSignedIn: false
//   }),
//   setLoggedIn(newValue) {
//     if (this.debug) {
//       console.log('setLoggedIn triggered with ', newValue)
//     }

//     this.state.isLoggedIn = newValue
//   },
//   setStudentID(newValue) {
//     if (this.debug) {
//       console.log('setStudentID triggered with ', newValue)
//     }

//     this.state.studentID = newValue
//   },
//   setSignedIn(newValue) {
//     if (this.debug) {
//       console.log('setSignedIn triggered with ', newValue)
//     }

//     this.state.isSignedIn = newValue
//   }
// }

// export default {
//   data() {
//     return {
//       state: store
//     }
//   },
//   provide() {
//     return {
//       state: this.state
//     }
//   }
// }
</script>

<template>
  <header>
    <RouterView></RouterView>
  </header>
</template>

<style>
@import '@/assets/base.css';
</style>
