<script>
import Register from '../components/register_pages/Register.vue'
import Verify from '../components/register_pages/Verify.vue'

import store from '../store.js'

export default {
    components: {
        Register,
        Verify
    },
    data() {
        return {
            registerPage: true, //true by default
            email: ''
        }
    },
    mounted() {
        fetch('/api/check-session')
        .then(res => {
            console.log(res)
            if (res.status == 200) {
                res.json()
                .then(json => { 
                    console.log(json)
                    if (json.verified) {
                        store.setLoggedIn(true)
                        store.setStudentID(json.id)
                        store.setIsAdmin(json.admin)
                        store.setRoomNumber(json.currentRoom)
                        this.$router.push({name: 'dashboard'})
                    } else {
                        this.switchToVerify(json.email)
                    }
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
    },
    methods: {
        switchToVerify(email) {
            this.registerPage = false
            this.email = email
        }
    }
}
</script>

<template>
    <Register v-if="registerPage" @registerSubmitted="switchToVerify"></Register>
    <Verify v-else :email="email"></Verify>
</template>

<style scoped>

</style>