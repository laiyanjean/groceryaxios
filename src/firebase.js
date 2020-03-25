import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    authDomain: "grocery-axios.firebaseapp.com",
    databaseURL: "https://grocery-axios.firebaseio.com",
    projectId: "grocery-axios",
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;