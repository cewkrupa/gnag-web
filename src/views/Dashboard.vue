<template>
    <div>
        <h1>HELLO USER!</h1>
        <button @click='logOut'>Log out</button>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        methods: {
            logOut() {
                this.$firebase.auth().signOut();
            }
        }
    }
</script>

<style scoped>

</style>
