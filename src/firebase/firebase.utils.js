import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYiBci-lNZfIb8KG9rlslaCq1t7dgmrGs",
  authDomain: "crwn-db-97a76.firebaseapp.com",
  databaseURL: "https://crwn-db-97a76.firebaseio.com",
  projectId: "crwn-db-97a76",
  storageBucket: "crwn-db-97a76.appspot.com",
  messagingSenderId: "2905731324",
  appId: "1:2905731324:web:2c379102a06ab69dac2779",
  measurementId: "G-TX6NLXYRQ8",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
