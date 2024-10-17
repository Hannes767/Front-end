import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import AddProfessions from './pages/AddProfessions';
import ChangeProfessions from './pages/ChangeProfessions';
;

function App() {
  return (
    <div className="App">
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
