// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu_RXg1frkvBnw7w6kLmwoAkjN92BBJio",
  authDomain: "hear-us-out.firebaseapp.com",
  projectId: "hear-us-out",
  storageBucket: "hear-us-out.firebasestorage.app",
  messagingSenderId: "431471096155",
  appId: "1:431471096155:web:65673836dbac8c5f2faa7e",
  measurementId: "G-N5SH6ZYP1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication & Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export authentication functions for easy use in other components
export {
  auth,
  provider,
  signOut,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
