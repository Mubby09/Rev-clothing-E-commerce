import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqGgdjd8tiU_pIVyn79mIieexjBNe91Eg",
  authDomain: "rev-clothing.firebaseapp.com",
  databaseURL: "https://rev-clothing.firebaseio.com",
  projectId: "rev-clothing",
  storageBucket: "rev-clothing.appspot.com",
  messagingSenderId: "387542413557",
  appId: "1:387542413557:web:3509867b113a0603b995bc",
  measurementId: "G-TS0XH5VQ8N"
};

//To check if user alreadyd exists in Firebase and if not we create a new user and update the firebase Database with the new user
//When trying to perform any CRUD operation in the Database, You have to use the 'userRef' and not the 'snapShot'
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(("error creating user", err.messsage));
    }
  }
  return userRef;
};

// export const addCollectionsAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef);
//   });
//   await batch.commit();
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
