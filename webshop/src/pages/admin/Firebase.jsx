
import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

// Firebase'i seadistus
const firebaseConfig = {
    apiKey: "AIzaSyB0iXp0zlQOXBV9Jj3H8bJ12FqaXyJYYHI",
    authDomain: "webshop-37564.firebaseapp.com",
    databaseURL: "https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "webshop-37564",
    storageBucket: "webshop-37564.appspot.com",
    messagingSenderId: "545233997730",
    appId: "1:545233997730:web:a760d452a9415f6a7b2cfb",
    measurementId: "G-8BP1E6BKZ6"
};

// Initsialiseeri Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Saad autentimise objekt

// Google'i sisselogimine
const GoogleLogin = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider(); // Kasuta Google'i autentimise pakkujat
    signInWithPopup(auth, provider) // Kasuta signInWithPopup funktsiooni
      .then((result) => {
        console.log("User signed in: ", result.user);
      })
      .catch((error) => {
        console.error("Google sign-in error: ", error);
      });
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

// Kasutaja oleku jälgimine
const UserStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { // Kasuta onAuthStateChanged
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Puhasta vaataja
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={() => signOut(auth)}>Sign Out</button> {/* Kasuta signOut funktsiooni */}
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
};

// Peamine rakenduse komponent
const App = () => {
  return (
    <div>
      <h1>Google Login Example</h1>
      <GoogleLogin />
      <UserStatus />
    </div>
  );
};

export default App;
