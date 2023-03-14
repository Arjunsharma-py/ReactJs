import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtebdVX3GD-gRwroJlS1H2-yRKPKpsYq4",
  authDomain: "clone-2edd8.firebaseapp.com",
  projectId: "clone-2edd8",
  storageBucket: "clone-2edd8.appspot.com",
  messagingSenderId: "236754049797",
  appId: "1:236754049797:web:59348511be563923de756c",
  measurementId: "G-M225BTW8ZH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
