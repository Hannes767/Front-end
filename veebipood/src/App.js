//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">

      <Link to="avaleht">
      <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4-1800x650.jpg" alt="" />
      </Link>

      <Link to="kinkekaart">
      <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="esindused">
      <button className="nupp">Esindused</button>
      </Link>

      <Link to="lisa-toode">
      <button className="nupp">Lisa uus toode</button>
      </Link>

      <Link to="ostukorv">
      <button className="nupp">Ostukorvi</button>
      </Link>

      <Routes>
      <Route path='avaleht' element={ <div>Olen avalehel</div> }/>
      <Route path='kinkekaart' element={ <div>Kinkekaart</div> }/>
      <Route path='esindused' element={ <div>Olen avalehel</div> }/>
      <Route path='lisa-toode' element={ <div>Olen avalehel</div> }/>
      <Route path='ostukorv' element={ <div>Olen avalehel</div> }/>
      </Routes>
    </div> 
  ); 
}

export default App;
