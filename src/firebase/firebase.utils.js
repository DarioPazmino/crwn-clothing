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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef =  firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;