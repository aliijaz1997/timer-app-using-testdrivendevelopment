importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

firebase.initializeApp( {
    apiKey: "AIzaSyATgmxFbbak-TW-bv5KVEJXjtFWI-E9mYI",
    authDomain: "timer-app-usingtdd.firebaseapp.com",
    databaseURL: "https://timer-app-usingtdd.firebaseio.com",
    projectId: "timer-app-usingtdd",
    storageBucket: "timer-app-usingtdd.appspot.com",
    messagingSenderId: "408675936992",
    appId: "1:408675936992:web:71d16bbc9ef4c8756d3e85"
  });
  // Calling service worker here

  firebase.messaging();