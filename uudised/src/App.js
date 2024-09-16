
import './App.css';
import { Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='' element={ <Avaleht/> }/>
        <Route path='uudised' element={ <Uudised/> }/>
        <Route path='kontakt' element={ <Kontakt/> }/>
        <Route path='meist' element={ <Meist/> }/>
      </Routes>
    </div>
  );
}

export default App;
