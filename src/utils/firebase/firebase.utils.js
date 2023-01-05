import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt3u_JtWRxuGX342DDxGTJkBhRGm7BF68",
  authDomain: "crwn-clothing-db-a65ef.firebaseapp.com",
  projectId: "crwn-clothing-db-a65ef",
  storageBucket: "crwn-clothing-db-a65ef.appspot.com",
  messagingSenderId: "677061181206",
  appId: "1:677061181206:web:a95b4ccd497ddfd175da37",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log(error.message);
    }
  }
  return userDocRef;
  //if user data exists 


  //return userDocRef

}
