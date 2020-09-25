import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAYiBci-lNZfIb8KG9rlslaCq1t7dgmrGs',
  authDomain: 'crwn-db-97a76.firebaseapp.com',
  databaseURL: 'https://crwn-db-97a76.firebaseio.com',
  projectId: 'crwn-db-97a76',
  storageBucket: 'crwn-db-97a76.appspot.com',
  messagingSenderId: '2905731324',
  appId: '1:2905731324:web:2c379102a06ab69dac2779',
  measurementId: 'G-TX6NLXYRQ8',
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
