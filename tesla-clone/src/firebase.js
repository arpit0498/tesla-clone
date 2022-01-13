import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCGYWReHAtx4v2Yfz1yK17rprNviJQwbu0",
    authDomain: "tesla-clone-cd1f7.firebaseapp.com",
    projectId: "tesla-clone-cd1f7",
    storageBucket: "tesla-clone-cd1f7.appspot.com",
    messagingSenderId: "411354250811",
    appId: "1:411354250811:web:1bf339c18e24da2848e61e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth }

