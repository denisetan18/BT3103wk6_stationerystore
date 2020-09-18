import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh7VL-LvKeUz4yWAT6mEf56o4v9BPi868",
  authDomain: "bt3103-1c839.firebaseapp.com",
  databaseURL: "https://bt3103-1c839.firebaseio.com",
  projectId: "bt3103-1c839",
  storageBucket: "bt3103-1c839.appspot.com",
  messagingSenderId: "350692644300",
  appId: "1:350692644300:web:67bb90234e60f1f840b969",
  measurementId: "G-DYW43VXBK2"
};

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
