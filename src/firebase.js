// import firebase from "firebase/app"
// require('firebase/auth');
// require('firebase/database');
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCDVJqSVyi500jlBRFBcBeVMPZ3Z0e2RUY",
    authDomain: "whatsapp-clone-ddf9c.firebaseapp.com",
    projectId: "whatsapp-clone-ddf9c",
    storageBucket: "whatsapp-clone-ddf9c.appspot.com",
    messagingSenderId: "369969907303",
    appId: "1:369969907303:web:221c61e7a1dedba08d76c2",
    measurementId: "G-JDWYGC8C9Y"
  };
  var firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  // //   firebase.analytics();
  
  export {auth, provider};
  export default db;