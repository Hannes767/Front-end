import './App.css';
import { Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuti from './pages/LisaArvuti';

function App() {
  return (
    <div>
        
        
        
      <Routes>
        <Route path="" exact element={ <Avaleht/>} />
        <Route path="all" exact element={<VaataArvuteid/>} />
        <Route path="add" exact element={<LisaArvuti/>} />
      </Routes>
    </div>
  );
}

export default App;
