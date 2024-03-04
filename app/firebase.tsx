// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN-Eh31Guhqffen9kEoTpEE5u7xwf_NvQ",
  authDomain: "test-8405a.firebaseapp.com",
  projectId: "test-8405a",
  storageBucket: "test-8405a.appspot.com",
  messagingSenderId: "166277598440",
  appId: "1:166277598440:web:16b3dc3d6ddfc1adf24d5d",
  measurementId: "G-CYFL7Z4LL8"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get authentication instance
export const auth = getAuth(app);

// Export the authentication methods
export { signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup };
