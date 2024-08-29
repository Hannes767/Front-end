
import './App.css';
import {Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Harjutused1 from "./pages/Harjutused1"
import Harjutused2 from "./pages/Harjutused2"
import HarjutusedUurimine from "./pages/HarjutusedUurimine"
import Harjutus4 from './pages/Harjutus4';
import Months from './pages/Months';
import Animals from './pages/Animals';
import Words from './pages/Words';
import SonajaArv from './pages/SonajaArv';

function App() {
  return (
    <div className="App">

        
      

      <Routes>
          <Route path="/" element={<Avaleht/>}/>
          <Route path="/harjutused1" element={<Harjutused1/>}/>
          <Route path="/harjutused2" element={<Harjutused2/>}/>
          <Route path="/harjutused-uurimine" element={<HarjutusedUurimine/>}/>
          <Route path="/harjutus4" element={<Harjutus4/>}/>
          <Route path="/months" element={<Months/>}/>
          <Route path="/animals" element={<Animals/>}/>
          <Route path="/words" element={<Words/>}/>
          <Route path="/sonajaarv" element={<SonajaArv/>}/>
      </Routes>
    </div>
  );
}

export default App;
