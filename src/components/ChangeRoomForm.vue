<script>

</script>

<template>
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