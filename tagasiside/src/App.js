
import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import Tagasiside from './pages/Tagasiside';

function App() {
  return (
    <div className="App">
      

        <Link to="/">
            <button>Avaleht</button>
        </Link>

        <Link to="/tagasiside">
            <button>Tagasisided</button>
        </Link>

      <Routes>
          <Route path="/" element={<div>Tere</div>}/>
          <Route path="/tagasiside" element={<Tagasiside/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
