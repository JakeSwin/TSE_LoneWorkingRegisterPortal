<script>
export default {
    emits: ['registerSubmitted'],
    data() {
        return {
            email: '',
            password: '',
            rePassword: '',
            errorMessage: '',
            errorEmail: '',
            errorPassword: '',
            errorRePassword: ''
        }
    },
    watch: {
        email(newEmail) {
            const re = new RegExp(/(?<!\d)\d{8}(?!\d)@students\.lincoln\.ac\.uk/g)
            const matchArray = re.test(newEmail)

            if (!matchArray) {
                this.errorEmail = 'Email only accepts valid University Of Lincoln Emails'
            } else {
                this.errorEmail = ''
            }

            if (newEmail.length == 0) { this.errorEmail = '' }
        },
        password(newPassword) {
            const re = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/g)
            const matchArray = re.test(newPassword)

            if (!matchArray) {
                this.errorPassword = 'Password must be at least 8 characters long with digits, uppercase and lowercase'
            } else {
                this.errorPassword = ''
            }

            if (newPassword.length == 0) { this.errorPassword = '' }
        },
        rePassword(newRePassword) {
            const matchArray = (this.password == this.rePassword)
            
            if (!matchArray) {
                this.errorRePassword = 'Passwords do not match'
            } else {
                this.errorRePassword = ''
            }

            if (newRePassword.length == 0) { this.errorRePassword = '' }
        }
    },
    methods: {
        checkValidFields() {
            const emailRe = new RegExp(/(?<!\d)\d{8}(?!\d)@students\.lincoln\.ac\.uk/g)
            const passwordRe = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/g)
            
            const matchEmail = emailRe.test(this.email)
            const matchPassword = passwordRe.test(this.password)
            const matchRePassword = (this.password == this.rePassword)

            if (matchEmail && matchPassword && matchRePassword) {
                return true
            } else {
                return false
            }
        },
        submitForm() {
            this.$emit('registerSubmitted', this.email)
        },
        sendRegisterRequest() {
            if (this.checkValidFields()) {

                const Url = 'https://jakesjsonplaceholder.com/register'
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
                .then(res=>{
                    console.log(res)
                    //this.submitForm()
                })
                .catch(error=>{
                    this.submitForm()
                    console.log(error)
                    this.errorMessage = 'One or more form fields are incorrect'
                })

            } else {
                this.errorMessage = 'One or more form fields are incorrect'
            }
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
                <p v-if="errorEmail" class="error-message">{{errorEmail}}</p>
            </div>
            <div class="form-field">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password-field" v-model="password">
                <p v-if="errorPassword" class="error-message">{{errorPassword}}</p>
            </div>
            <div class="form-field">
                <label for="password">Re-enter Password:</label>
                <input type="password" name="re-password" id="re-password-field" v-model="rePassword">
                <p v-if="errorRePassword" class="error-message">{{errorRePassword}}</p>
            </div>
            <button @click="sendRegisterRequest()">Register</button>
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

header p {
    font-size: 0.9em;
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

.error-message {
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