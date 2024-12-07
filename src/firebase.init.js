// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBq9bt1rTzNWU_ciewiRY2hYGMCwkVBpjQ",
  // authDomain: "heart-lift.firebaseapp.com",
  // projectId: "heart-lift",
  // storageBucket: "heart-lift.firebasestorage.app",
  // messagingSenderId: "609874140981",
  // appId: "1:609874140981:web:d7fc27d58e5acb7a3e767c"

  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);