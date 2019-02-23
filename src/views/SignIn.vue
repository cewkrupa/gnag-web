<template>
    <div>
        <h1>sign in</h1>
        <div id="firebase-auth-container"></div>
    </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import {config} from '../firebaseConfig'


export default {
    name: "SignIn",
    mounted() {
        const uiConfig = {
            signInSuccessUrl: '/dashboard',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
        };
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebase-auth-container', uiConfig);
    }
}
</script>
