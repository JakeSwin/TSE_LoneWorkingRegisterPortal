<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        }
    },
    methods: {
        sendLoginRequest() {
            const Url = 'https://jakesjsonplaceholder.com/login'
            const Data = {
                email: this.email,
                password: this.password
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
                this.errorMessage = 'Username or Email is incorrect'
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
            <p v-if="errorMessage">{{errorMessage}}</p>
        </header>
        <form action="" method="post" @submit.prevent="">
            <div class="form-field">
                <label for="email">Email:</label>
                <input type="text" name="email" id="email-field" v-model="email">
            </div>
            <div class="form-field">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password-field" v-model="password">
            </div>
            <button @click="sendLoginRequest()">Sign In</button>
        </form>
        <footer>
            <router-link to="/register">Not Signed Up? Register Now</router-link>
        </footer>
    </div>
</template>

<style scoped>
.container {
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
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

header p {
    font-size: 0.9em;
    color: red;
}

form {
    width: 100%;
    max-width: 25em;
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
</style>