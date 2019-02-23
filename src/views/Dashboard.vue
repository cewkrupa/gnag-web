<template>
    <div>
        <h1>HELLO USER!</h1>
        <button @click='logOut'>Log out</button>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Dashboard",
        methods: {
            logOut() {
                firebase.auth().signOut();
            }
        }
    }
</script>

<style scoped>

</style>
