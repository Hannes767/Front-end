
import './App.css';
import {Route, Routes} from "react-router-dom"
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Avaleht from './pages/Avaleht';

function App() {
  return (
    <div className="App">        

      <Routes>
          {/* <Route path="/" element={<div>Tere</div>}/> */}
          <Route path="/" element={<Avaleht/>}/>
          <Route path="/tagasiside" element={<Tagasiside/>}/>
          <Route path="/tagasiside-andjad" element={<TagasisideAndjad/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
