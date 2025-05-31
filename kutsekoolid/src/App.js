import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import AddProfessions from './pages/AddProfessions';
import ChangeProfessions from './pages/ChangeProfessions';
import { Container, Button } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import LoginForm from "./components/LoginForm";
import { logout } from "./authService";

function App() {

  const { user } = useAuth();

  return (

    
    <div className="App">

      <Container style={{ padding: "2rem" }}>
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
    </Container>

      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/add-professions" element={<AddProfessions/>}/>
          <Route path="/change-professions/:schoolIndex/:fieldIndex" element={<ChangeProfessions/>}/> 
          {/* <Route path="/jook/:number" element={<Jook/>}/>           */}
      </Routes>
    </div>
  );
}

export default App;
