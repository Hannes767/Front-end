
import './App.css';
import {Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Harjutused1 from "./pages/Harjutused1"
import Harjutused2 from "./pages/Harjutused2"
import HarjutusedUurimine from "./pages/HarjutusedUurimine"

function App() {
  return (
    <div className="App">
      

      <Routes>
          <Route path="/" element={<Avaleht/>}/>
          <Route path="/harjutused1" element={<Harjutused1/>}/>
          <Route path="/harjutused2" element={<Harjutused2/>}/>
          <Route path="/harjutused-uurimine" element={<HarjutusedUurimine/>}/>
      </Routes>
    </div>
  );
}

export default App;
