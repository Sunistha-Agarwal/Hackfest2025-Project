import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, get, child } from "firebase/database";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
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
    });
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
        createdAt: new Date().toISOString(),
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

  const logoutUser = async () => {
    try {
      await signOut(firebaseAuth);
      return true;
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;
      
      // Check if user already exists before setting data
      const userRef = ref(database, "users/" + user.uid);
      const snapshot = await get(userRef);
      
      if (!snapshot.exists()) {
        // Only set initial data if user doesn't exist
        await set(userRef, {
          email: user.email,
          firstName: user.displayName?.split(' ')[0] || '',
          lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
          profilePicture: user.photoURL,
          levelOfPlay: "Beginner",
          rating: 1200,
          createdAt: new Date().toISOString(),
        });
      }
  
      return user;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  const setData = async (key, data) => {
    try {
      await set(ref(database, key), data);
      return true;
    } catch (error) {
      console.error("Error writing to database:", error);
      throw error;
    }
  };

  const getLeaderboardData = async () => {
    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, "users"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        
        const playerArray = Object.values(data)
          .filter(player => player.rating !== undefined)
          .sort((a, b) => b.rating - a.rating)
          .map((player, index) => ({
            ...player,
            rank: index + 1
          }));
          
        return playerArray;
      } else {
        console.warn("No user data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      return [];
    }
  };
  const updateUserRatingAndLevel = async (uid) => {
    try {
      const userRef = ref(database, `users/${uid}`);
      const snapshot = await get(userRef);
  
      if (snapshot.exists()) {
        const userData = snapshot.val();
        let newRating = (userData.rating || 1200) + 50;
        let initialRating = userData.initialRating || userData.rating || 1200;
  
        // Calculate level up
        const ratingDifference = newRating - initialRating;
        let newLevel = userData.levelOfPlay;
  
        if (ratingDifference >= 400) {
          switch (userData.levelOfPlay) {
            case 'Beginner':
              newLevel = 'Intermediate';
              break;
            case 'Intermediate':
              newLevel = 'Advanced';
              break;
            case 'Advanced':
              newLevel = 'Pro';
              break;
            default:
              newLevel = userData.levelOfPlay;
          }
          // Reset the base rating after level-up
          initialRating = newRating;
        }
  
        await set(userRef, {
          ...userData,
          rating: newRating,
          levelOfPlay: newLevel,
          initialRating,
        });
  
        return { newRating, newLevel };
      }
    } catch (error) {
      console.error("Error updating user rating and level:", error);
      throw error;
    }
  };
  

  return (
    <FireBaseContext.Provider
  value={{
    createUser,
    loginUser,
    logoutUser,
    setData,
    currentUser,
    signInWithGoogle,
    getLeaderboardData,
    database,
    getCurrentUser: () => firebaseAuth.currentUser,
    updateUserRatingAndLevel
  }}
>
      {props.children}
    </FireBaseContext.Provider>
  );
};