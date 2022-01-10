import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCsRif3lI6nq6LXyaYABLISQoRdBNBAZoM",
    authDomain: "crwn-db-53ad3.firebaseapp.com",
    projectId: "crwn-db-53ad3",
    storageBucket: "crwn-db-53ad3.appspot.com",
    messagingSenderId: "470086382798",
    appId: "1:470086382798:web:cfd3133d5cbea7ab538c9f",
    measurementId: "G-EXC2W45WLG"
  };

firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;