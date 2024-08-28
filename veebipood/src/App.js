//import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes} from "react-router-dom"
import Avaleht from './pages/usestate/Avaleht';
import Esindused from './pages/arrays/Esindused';
import LisaToode from './pages/useref/LisaToode';
import Ostukorv from './pages/arrays/Ostukorv';
import Kinkekaart from './pages/useref/Kinkekaart';
import MitteLeitud from './pages/usestate/MitteLeitud';
import Menyy from './components/Menyy';
import Seaded from './pages/usestate/Seaded';
import Profiil from './pages/useref/Profiil';
import LogiSisse from './pages/useref/LogiSisse';
import Registreeru from './pages/useref/Registreeru';
import Hinnad from './pages/arrays/Hinnad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';



function App() {
  return (
    <div className="App">

      <Menyy/>

      <Routes>
      <Route path='' element={<Navigate to="avaleht"/>  }/>
      <Route path='avaleht' element={<Avaleht/>  }/>
      <Route path='kinkekaart' element={ <Kinkekaart/> }/>
      <Route path='esindused' element={ <Esindused/> }/>
      <Route path='lisa-toode' element={ <LisaToode/> }/>
      <Route path='ostukorv' element={ <Ostukorv/> }/>
      <Route path='seaded' element={ <Seaded/> }/>
      <Route path="profiil" element={<Profiil/>}/>
      <Route path="logi-sisse" element={<LogiSisse/>}/>
      <Route path="registreeru" element={<Registreeru/>}/>
      <Route path="hinnad" element={<Hinnad/>}/>
      <Route path='*' element={ <MitteLeitud/> }/>
      <Route path="tootajad" element={<Tootajad/>}/>
      <Route path="tooted" element={<Tooted/>}/>
      </Routes>
    </div> 
  ); 
}

export default App;
