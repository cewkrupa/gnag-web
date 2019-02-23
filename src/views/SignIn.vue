<template>
    <div>
        <h1>sign in</h1>
        <div id="firebase-auth-container"></div>
    </div>
</template>

<script>
import firebaseui from 'firebaseui'


export default {
    name: "SignIn",
    mounted() {
        const uiConfig = {
            signInSuccessUrl: '/dashboard',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                this.$firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
        };
        const ui = new firebaseui.auth.AuthUI(this.$firebase.auth());
        ui.start('#firebase-auth-container', uiConfig);
    }
}
</script>
