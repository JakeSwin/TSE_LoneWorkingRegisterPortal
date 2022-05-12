<script>
export default {
  data() {
    return {
      roomNumber: '',
      errorMessage: '',
    }
  },
  methods: {
    sendChangeRooms() {
      const Url = 'https://jakesjsonplaceholder.com/change-rooms'
      const Data = {
        roomNumber: this.roomNumber
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
          this.errorMessage = 'Change room request failed'
      })
    }
  }
}
</script>

<template>
  <div class="rooms">
    <h3>Update Room:</h3>
    <form action="" method="post" @submit.prevent="">
      <div class="form-field">
        <label for="room-num">Room Number:</label>
        <input type="text" name="room-num" id="room-field" v-model="roomNumber">
        <p v-if="errorMessage" class="error">{{errorMessage}}</p>
      </div>
      <button @click="sendChangeRooms()">Change Rooms</button>
    </form>
  </div>
</template>

<style scoped>
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

.error {
    color: red;
    font-size: 0.7em;
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

.rooms h3 {
  margin-bottom: 1em;
}
</style>