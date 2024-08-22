import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';
import Navbar from './components/Navbar';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



function App() {

  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1QSkX2uwF2CriMVJIJwhpvxxHWPE5xY",
  authDomain: "portfell-15e40.firebaseapp.com",
  projectId: "portfell-15e40",
  storageBucket: "portfell-15e40.appspot.com",
  messagingSenderId: "34161533688",
  appId: "1:34161533688:web:e8d6f293cc15c48219510d",
  measurementId: "G-8XPNJFEG2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <div>
      
      <Routes>
        <Route path="" element={<Navbar/>}/>
        <Route path="work" element={ <Work/> } />
        <Route path="hobbies" element={ <Hobbies/> } />
        <Route path="courses" element={ <Courses/> } />
        
      </Routes>

      
    </div>
  );
}

export default App;
