<script>
import sha1 from 'crypto-js/sha1'

export default {
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
        console.log(sha1(fulldate + "clank").toString())

        // compare route params to hash generated
        // if match create cookie that lasts until the next day at 6 am
        // then push to /login
        // if not then display a tip asking users to scan the QR code
    }
}
</script>

<template>
    <h1>QR Sign In</h1>
</template>

