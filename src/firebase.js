import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyA3kbSiijPFP088YPywVhakCk7STDJxU2k",
    authDomain: "grocery-project-29a02.firebaseapp.com",
    databaseURL: "https://grocery-project-29a02.firebaseio.com",
    projectId: "grocery-project-29a02",
    storageBucket: "grocery-project-29a02.appspot.com",
    messagingSenderId: "182143333394",
    appId: "1:182143333394:web:1dfc5a9829830b56f814cb",
    measurementId: "G-DME54WZH49"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;