import './App.css';
import {Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import HaldaJooke from './pages/HaldaJooke';
import LisaJook from './pages/LisaJook';
import Jook from './pages/Jook';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Avaleht/>}/>
          <Route path="/halda-jooke" element={<HaldaJooke/>}/>
          <Route path="/lisa-jook" element={<LisaJook/>}/> 
          <Route path="/jook/:number" element={<Jook/>}/>          
      </Routes>
    </div>
  );
}

export default App;
