import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBg1jg7C2e6sbSd5-Z-J1PpanogJkyA3n0",
    authDomain: "auth-development-b0647.firebaseapp.com",
    databaseURL: "https://auth-development-b0647.firebaseio.com",
    projectId: "auth-development-b0647",
    storageBucket: "auth-development-b0647.appspot.com",
    messagingSenderId: "382515371673",
    appId: "1:382515371673:web:69545b601bdf58b18a2208"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire