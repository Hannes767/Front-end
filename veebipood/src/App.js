//import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Kinkekaart from './pages/Kinkekaart';
import MitteLeitud from './pages/MitteLeitud';
import Menyy from './components/Menyy';
import Seaded from './pages/Seaded';
import Profiil from './pages/Profiil';


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
      <Route path='*' element={ <MitteLeitud/> }/>
      </Routes>
    </div> 
  ); 
}

export default App;
