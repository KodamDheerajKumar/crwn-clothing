import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDDrfLh5sEqgf05XyBDtJST1uapz8DZZgc",
    authDomain: "crwn-db-13160.firebaseapp.com",
    projectId: "crwn-db-13160",
    storageBucket: "crwn-db-13160.appspot.com",
    messagingSenderId: "412591063013",
    appId: "1:412591063013:web:2ec0a4db2931034525b90c",
    measurementId: "G-FBVQCGFK8H"
};

firebase.initializeApp(config);


export const auth= firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;


  