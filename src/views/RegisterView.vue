<script>
import Register from '../components/Register.vue'
import Verify from '../components/Verify.vue'

export default {
    data() {
        return {
            registerPage: true
        }
    },
    components: {
        Register,
        Verify
    }
}
</script>

<template>
    <Register v-if="registerPage" @submit-me="registerPage = false"></Register>
    <Verify v-else></Verify>
</template>

<style scoped>

</style>