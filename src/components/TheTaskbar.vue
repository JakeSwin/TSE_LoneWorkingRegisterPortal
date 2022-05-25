<script>
import store from '../store.js'

export default {
    props: ['visible'],
    emits: ['close'],
    methods: {
        closeTaskBar() {
            this.$emit('close')
        },
        logOut() {
            fetch("/api/sign-out", { method: "POST" })
            .then(res => {
                console.log(res)
                store.setLoggedIn(false)
                this.$router.push({ name: 'login' })
            })
        }
    }
}
</script>

<template>
    <div class="task-bar-content" v-if="visible">
        <div class="bar">
            <object data="/task-bar-top.svg" type="image/svg+xml"></object>
            <img src="@/assets/LincolnLogo.png" alt="" class="logo">
            <div class="log-out" @click="logOut">
                <h2>Log Out</h2>
                <object data="/sign-out.svg" type="image/svg+xml"></object>
            </div>
        </div>
        <div class="invis" @click="closeTaskBar()">

        </div>
    </div>
</template>

<style scoped>
.task-bar-content {
    width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    z-index: 100;
}

.bar {
    width: 14em;
    height: 100%;
    background-color: #002147;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.log-out {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
}

.log-out object {
    width: 1.3em;
}

.logo {
    width: 120px;
    position: fixed;
    left: 5px;
    top: 5px;
}

.bar h2 {
    color: white;
    margin: 15px;
    font-size: 1.3em;
}

.invis {
    flex-grow: 2;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>