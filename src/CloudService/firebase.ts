import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyATgmxFbbak-TW-bv5KVEJXjtFWI-E9mYI",
  authDomain: "timer-app-usingtdd.firebaseapp.com",
  databaseURL: "https://timer-app-usingtdd.firebaseio.com",
  projectId: "timer-app-usingtdd",
  storageBucket: "timer-app-usingtdd.appspot.com",
  messagingSenderId: "408675936992",
  appId: "1:408675936992:web:3684e7eb98468f256d3e85"
};

  // Initializing app 
  firebase.initializeApp(firebaseConfig);
  export default firebase;