import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDx8PNhG45_tqevg0UatOXFLrM2k-QWm20",
    authDomain: "crown-clothing-db-3b19a.firebaseapp.com",
    projectId: "crown-clothing-db-3b19a",
    storageBucket: "crown-clothing-db-3b19a.appspot.com",
    messagingSenderId: "337597561652",
    appId: "1:337597561652:web:df757b44e95b92a987c361",
    measurementId: "G-J3XLEBGQ9W"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;