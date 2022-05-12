<script>
import Register from '../components/register_pages/Register.vue'
import Verify from '../components/register_pages/Verify.vue'

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