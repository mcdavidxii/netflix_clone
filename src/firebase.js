import firebase from firebase;


const firebaseConfig = {
    apiKey: "AIzaSyCt1LxhUqReKiHIePRXmLtzanInA8HBWkI",
    authDomain: "netflix-clone-429e3.firebaseapp.com",
    projectId: "netflix-clone-429e3",
    storageBucket: "netflix-clone-429e3.appspot.com",
    messagingSenderId: "369014573815",
    appId: "1:369014573815:web:c903245de3b36a111621f2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;