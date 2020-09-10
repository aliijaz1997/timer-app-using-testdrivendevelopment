import firebase from 'firebase';

const config  = {
    apiKey: "AIzaSyCmxtjmBAE2bTxl4QLcdSkJT6IYMZ596fQ",
    authDomain: "timer-app-4c1a5.firebaseapp.com",
    databaseURL: "https://timer-app-4c1a5.firebaseio.com",
    projectId: "timer-app-4c1a5",
    storageBucket: "timer-app-4c1a5.appspot.com",
    messagingSenderId: "141904267605",
    appId: "1:141904267605:web:1636e50f6ef8c62f2a87dc"
};

firebase.initializeApp(config);
export default firebase;