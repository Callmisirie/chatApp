// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATqdwHbOFbZUjGhrKZjlS0FKaBwWFgAMs",
  authDomain: "chatapp-d3ec7.firebaseapp.com",
  projectId: "chatapp-d3ec7",
  storageBucket: "chatapp-d3ec7.appspot.com",
  messagingSenderId: "829554363995",
  appId: "1:829554363995:web:2f232a6ece33e8969f397e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)