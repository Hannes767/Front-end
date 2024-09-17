
import './App.css';
import {Route, Routes} from "react-router-dom"
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Avaleht from './pages/Avaleht';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div className="App">        

      <Routes>
          {/* <Route path="/" element={<div>Tere</div>}/> */}
          <Route path="/" element={<Avaleht/>}/>
          <Route path="/tagasiside" element={<Tagasiside/>}/>
          <Route path="/tagasiside-andjad" element={<TagasisideAndjad/>}/>
          <Route path="/tegevused" element={<Tegevused/>}/>
          <Route path="/kasutajad" element={<Kasutajad/>}/>

      </Routes>
    </div>
  );
}

export default App;
