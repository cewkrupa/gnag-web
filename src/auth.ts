import firebase from 'firebase'
import firebaseui from 'firebaseui';

let config = {
    apiKey: 'AIzaSyBsKhTEU3XP-e5KUSaz9m23hrRgZjgIc4M',
    authDomain: 'gnag-b4f67.firebaseapp.com',
    databaseURL: 'https://gnag-b4f67.firebaseio.com/',
    projectId: 'gnag-b4f67',
    storageBucket: 'gnag-b4f67.appspot.com',
    messagingSenderId: '358531339316'
};

const auth = {
    context: null,
    uiConfig: null,
    ui: null,

    init(context) {
        this.context = context;

        firebase.initializeApp(config);
        this.uiConfig = {
            signInSuccessUrl: 'dashboard',
            signInOptions: [
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        }
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());

        firebase.auth().onAuthStateChanged((user) => {
            this.context.$store.dispatch('user/setCurrentUser')

            let requireAuth = this.context.$route.matched.some((record) => record.meta.requireAuth)
            let guestOnly = this.context.$route.matched.some((record) => record.meta.guestOnly)

            if(requireAuth && !user) { this.context.$router.push('auth') }
            else if (guestOnly && user) { this.context.$router.push('dashboard') }
        });
    },
    authForm(container) {
        this.ui.start(container, this.uiConfig);
    },
    user() {
        return this.context ? firebase.auth().currentUser : null;
    },
    logout() {
        firebase.auth().signOut();
    }
}

export default auth;
