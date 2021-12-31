import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAHZdWy8cRktG1YZM4Qu-8qGyfO_yIuIvY",

  authDomain: "clwn-db-b863e.firebaseapp.com",

  projectId: "clwn-db-b863e",

  storageBucket: "clwn-db-b863e.appspot.com",

  messagingSenderId: "585094961491",

  appId: "1:585094961491:web:49bed6a5fae6458daca9a6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
