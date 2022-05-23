<script>
import sha1 from 'crypto-js/sha1'

export default {
    data() {
        return {
            invalid: false
        }
    },
    mounted() {
        const routehash = this.$route.params.authhash
        console.log(routehash)

        const date = new Date()
        const hour = date.getHours()

        if (hour < 6) {
            date.setDate(date.getDate() - 1)
        }

        const day = date.getDate()
        const month = date.getMonth()

        const fulldate = day.toString() + month.toString() + hour.toString()

        console.log(fulldate)
        const todayhash = sha1(fulldate + "clank").toString()
        console.log(todayhash)

        // compare route params to hash generated
        if (routehash === todayhash) {
            // format: Thu, 25 May 2022 12:00:00 BST
            const expireDate = new Date()
            expireDate.setDate(date.getDate() + 1)
            expireDate.setHours(7, 0, 0)

            // if match create cookie that lasts until the next day at 6 am
            const expireDateString = expireDate.toUTCString()
            document.cookie = "qrsignedin=true; expires=" + expireDateString + "; SameSite=Lax; path=/";
            // then push to /login
            this.$router.push('/login')
        } else {
            this.invalid = true
        }
        // if not then display a tip asking users to scan the QR code
    }
}
</script>

<template>
    <div class="container">
        <header>
            <img src="@/assets/LincolnLogo.png" alt="Lincoln Logo" class="logo">
            <h1>QR Sign In</h1>
        </header>
        <div class="message">
            <p class="intro">
                To be able to sign into the register and change rooms, please scan the QR code
                at the front of the building. <br><br>

                Upon scanning today's valid QR code, you will automatically be redirected off this page. <br><br>

                Thank You
            </p>
            <p class="error" v-if="invalid">
                You have attempted to sign into the register with an expired or invalid QR code.
                Please re-scan the QR code at the front of the building to be able to sign in and change
                rooms.
            </p>
        </div>
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
.logo {
    width: 10em;
}

header h1 {
    font-size: 1.3em;
}

.message {
    text-align: center;
}

.intro {
    margin-bottom: 5em;
    font-size: 0.9em;
}

.error {
    font-size: 0.8em;
    color: red;
}
</style>
