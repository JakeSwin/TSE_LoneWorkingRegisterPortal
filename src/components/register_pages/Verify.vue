<script>
export default {
    props: ['email'],
    data() {
        return {
            errorMessage: '',
            code: ''
        }
    },
    methods: {
        sendConfirmationCode() {
            const Url = 'https://jakesjsonplaceholder.com/confirm'
            const Data = {
                confirmationCode: this.code
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
                this.errorMessage = 'Invalid Confirmation Code'
            })
        }
    }
}
</script>

<template>
    <div class="container">
        <header>
            <img src="@/assets/LincolnLogo.png" alt="Lincoln Logo" class="logo">
            <h1>Lone Working Register</h1>
        </header>
        <div class="alert">
            <p>We have sent a 6 digit verification Code to: {{ email }}</p>
            <p v-if="errorMessage" class="error">{{errorMessage}}</p>
        </div>
        <form action="" method="post" @submit.prevent="">
            <div class="form-field">
                <label for="email">Confirmation Code:</label>
                <input type="text" name="conf-code" id="conf-field" v-model="code">
            </div>
            <button @click="sendConfirmationCode()">Verify Account</button>
        </form>
        <footer>
            <router-link to="/login">Back to Sign In</router-link>
        </footer>
    </div>
</template>

<style scoped>
.container {
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    font-size: 1rem;
    background-color: white;
    width: 100%;
    height: 667px;
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

header h1 {
    font-size: 1.3em;
}

.error {
    margin-top: 1em;
    font-size: 0.8em;
    color: red;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

footer {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.logo {
    width: 10em;
}

.form-field {
    display: flex;
    flex-direction: column;
}

.alert {
    text-align: center;
}
</style>