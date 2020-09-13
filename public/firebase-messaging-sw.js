importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyCmxtjmBAE2bTxl4QLcdSkJT6IYMZ596fQ",
    authDomain: "timer-app-4c1a5.firebaseapp.com",
    databaseURL: "https://timer-app-4c1a5.firebaseio.com",
    projectId: "timer-app-4c1a5",
    storageBucket: "timer-app-4c1a5.appspot.com",
    messagingSenderId: "141904267605",
    appId: "1:141904267605:web:1636e50f6ef8c62f2a87dc"
  })

//Now have to call the messaging function

firebase.messaging();