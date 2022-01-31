import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCRUnPiSyyyBmxW0_eXaSCZv4YA8VKlCdE",
    authDomain: "crwn-db-536d4.firebaseapp.com",
    projectId: "crwn-db-536d4",
    storageBucket: "crwn-db-536d4.appspot.com",
    messagingSenderId: "465960656217",
    appId: "1:465960656217:web:0199744fa3ff4e5fd74048",
    measurementId: "G-REMC4J70RW"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            });
        } catch(error) {
            console.log('error creating user', error.message);

        }
    }

    return userRef;

};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();

}

export const convertCollectionsSnapshotToMap =(collections) =>{
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce( (accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] =collection;
        return accumulator;
    }, {});
    
};



export const auth= firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;


  