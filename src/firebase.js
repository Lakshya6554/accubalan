import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAyqqCAsNrALWFpKgjG8IHHQG9qLuOfhkc",
  authDomain: "accubalance-31b85.firebaseapp.com",
  projectId: "accubalance-31b85",
  storageBucket: "accubalance-31b85.appspot.com",
  messagingSenderId: "849771426334",
  appId: "1:849771426334:web:3b10f0a32cc7faa91c740f",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleauthprovider = new firebase.auth.GoogleAuthProvider();

export { auth, googleauthprovider };
