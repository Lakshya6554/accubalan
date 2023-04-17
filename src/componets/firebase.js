// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyqqCAsNrALWFpKgjG8IHHQG9qLuOfhkc",
  authDomain: "accubalance-31b85.firebaseapp.com",
  projectId: "accubalance-31b85",
  storageBucket: "accubalance-31b85.appspot.com",
  messagingSenderId: "849771426334",
  appId: "1:849771426334:web:3b10f0a32cc7faa91c740f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
