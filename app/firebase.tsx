// Import the necessary functions from the Firebase SDKs
import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFOwp108eddMlrLK4K3_NlUojWlssxsY0",
  authDomain: "admin-auth-4d9d5.firebaseapp.com",
  databaseURL: "https://admin-auth-4d9d5-default-rtdb.firebaseio.com",
  projectId: "admin-auth-4d9d5",
  storageBucket: "admin-auth-4d9d5.appspot.com",
  messagingSenderId: "750342748569",
  appId: "1:750342748569:web:f3492d1fc3a8be2ed8bb08",
  measurementId: "G-QMTH06TEX3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getDatabase(app);
// export const adminsRef = ref(database, 'Admins');
export const firestore = getFirestore(app);
export const storage1 = getStorage(app);
// Export the authentication methods
export { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut };
