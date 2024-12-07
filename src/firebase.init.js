// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq9bt1rTzNWU_ciewiRY2hYGMCwkVBpjQ",
  authDomain: "heart-lift.firebaseapp.com",
  projectId: "heart-lift",
  storageBucket: "heart-lift.firebasestorage.app",
  messagingSenderId: "609874140981",
  appId: "1:609874140981:web:d7fc27d58e5acb7a3e767c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);