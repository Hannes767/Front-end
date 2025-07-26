import 'bootstrap/dist/css/bootstrap.min.css'; // <-- kõige enne!
import './App.css'; // <-- siis sinu oma stiilid
import {Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import AddProfessions from './pages/AddProfessions';
import ChangeProfessions from './pages/ChangeProfessions';
import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import ManageSchools from "./components/ManageSchools";

function App() {
  

  return (

    
    <div className="App">

        {/* <Container style={{ padding: "2rem" }}>
        {!user ? (
          <LoginForm />
        ) : (
          <>
            <h2>Tere, {user.email}!</h2>
            <Button variant="secondary" onClick={logout}>
              Logi välja
            </Button>
          </>
        )}
      </Container> */}

      <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/add-professions" element={<AddProfessions/>}/> */}

          <Route path="/change-professions/:schoolIndex/:fieldIndex" element={<ChangeProfessions/>}/> 
          {/* <Route path="/jook/:number" element={<Jook/>}/>           */}
          
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/add-professions"
            element={
              <ProtectedRoute>
                <AddProfessions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/schools"
            element={
              <ProtectedRoute>
                <ManageSchools />
              </ProtectedRoute>
            }
          />
          
      </Routes>      
      
    </div>
  );
}

export default App;
