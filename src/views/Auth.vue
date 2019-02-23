<template>
    <div>
        <h1>Sign in</h1>
    </div>
</template>

<script lang="ts">
import firebase from 'firebase';
import firebaseui from 'firebaseui';

const config = {
    apiKey: 'AIzaSyBsKhTEU3XP-e5KUSaz9m23hrRgZjgIc4M',
    authDomain: 'gnag-b4f67.firebaseapp.com',
    databaseURL: 'https://gnag-b4f67.firebaseio.com/',
    projectId: 'gnag-b4f67',
    storageBucket: 'gnag-b4f67.appspot.com',
    messagingSenderId: '358531339316',
};

firebase.initializeApp(config);
const uiConfig = {
    signInSuccessUrl: 'dashboard',
    signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());

firebase.auth().onAuthStateChanged((user) => {
    this.context.$store.dispatch('user/setCurrentUser');

    const requireAuth = this.context.$route.matched.some((record) => record.meta.requireAuth);
    const guestOnly = this.context.$route.matched.some((record) => record.meta.guestOnly);

    if (requireAuth && !user) { this.context.$router.push('auth'); }
    else if (guestOnly && user) { this.context.$router.push('dashboard'); }
});

ui.start(this.config, uiConfig);
export default {
    name: 'Auth',
};
</script>

<style scoped>

</style>
