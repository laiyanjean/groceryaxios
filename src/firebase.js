import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;