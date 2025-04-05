import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};



const firebaseapp = initializeApp(firebaseConfig);
const FireBaseContext = createContext(null);
const firebaseAuth = getAuth(firebaseapp);
const database = getDatabase(firebaseapp);
const getCurrentUser = () => firebaseAuth.currentUser;

export const usefirebase = () => useContext(FireBaseContext);

export const FirebaseProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
          setCurrentUser(user);
        })
        return () => unsubscribe();
      }, []);
  const createUser = async (email, password, extraData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      await set(ref(database, "users/" + userId), {
        email,
        ...extraData,
      });

      return userCredential;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  const loginUser = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;
  
      await set(ref(database, "users/" + user.uid), {
        email: user.email,
        name: user.displayName,
        profilePicture: user.photoURL,
      });
  
      return user;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  const getData = async (key, data) => {
    try {
      await set(ref(database, key), data);
    } catch (error) {
      console.error("Error writing to database:", error);
    }
  };
  return (
    <FireBaseContext.Provider value={{ createUser, loginUser, getData, currentUser, signInWithGoogle }}>
  {props.children}
</FireBaseContext.Provider>
  );
}