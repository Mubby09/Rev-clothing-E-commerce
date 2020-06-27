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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
