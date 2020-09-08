import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBhB1edqW9F65m97INjokOUZ716NOq9AMg",
    authDomain: "fir-auth-52cb2.firebaseapp.com",
    databaseURL: "https://fir-auth-52cb2.firebaseio.com",
    projectId: "fir-auth-52cb2",
    storageBucket: "fir-auth-52cb2.appspot.com",
    messagingSenderId: "941442137914",
    appId: "1:941442137914:web:d71d249b8ccc6540bb1a03",
    measurementId: "G-61YNBGGDBJ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth, firebaseApp }