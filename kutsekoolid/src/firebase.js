// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAM8Wan3z2TAuTc126EYJ1IqdH4pb2GEk",
  authDomain: "kutsekoolid.firebaseapp.com",
  databaseURL: "https://kutsekoolid-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kutsekoolid",
  storageBucket: "kutsekoolid.firebasestorage.app",
  messagingSenderId: "457036086151",
  appId: "1:457036086151:web:09638c69d93621d9c5b122",
  measurementId: "G-DQ8WJZVXNT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
