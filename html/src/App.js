import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import {useRef} from "react"
import Sisendinput from './pages/Sisendinput';
import Loader from './pages/Loader';

function App() {
  const[sisselogitud, muudaSisselogitud] = useState("ei");
  const[sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  // const logiSisse = () => {}
  function logiSisse() {
    if (paroolRef.current.value === "123") {      
      muudaSisselogitud("jah");
      muudaSonum(kasutajaNimiRef.current.value +  " ,oled sisselogitud");
    } else {
      muudaSonum("Vale parool");
    }
  }

  function logiValja() {
    muudaSisselogitud("ei");
    muudaSonum("Oled väljalogitud");
  }

  return (
    <div>
      <div>{sonum}</div>
      {sisselogitud === "ei" && <div >
        <label>Kasutajanimi</label><br />
        <input ref={kasutajaNimiRef} type="text" /><br />
        <label>Parool</label><br />
        <input ref={paroolRef} type="password" /><br />
      </div>}

      {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}

      <br /><br />

    <Link to= "/">
        <button>Avaleht</button>
      </Link>
      <Link to= "/kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to= "/meist">
        <button>Meist</button>
      </Link>
      <Link to= "/seaded">
        <button>Seaded</button>
      </Link>
      <Link to="/sisendinput">
        <button>Sisendinput</button>
      </Link>
      <Link to="/loader">
        <button>Loader</button>
      </Link>

      <Routes>
        <Route path="" element={<Avaleht/>}/>
        <Route path="kontakt" element={<Kontakt/>}/>
        <Route path="meist" element={<Meist/>}/>
        <Route path="seaded" element={<Seaded/>}/>
        <Route path='sisendinput' element={<Sisendinput/>}/>
        <Route path="loader" element={<Loader/>}/>

      </Routes>

      {/* <div>
      <button>Nupp</button>
      <br />

      <p style={{ color: 'blue', fontStyle: "italic" }} className="tekst">Siin on uus tekst</p>
      <br />

      <p className='tekst2'>Siin on teine tekst</p>
      <br />

      <img src='https://www.interviewbit.com/blog/wp-content/uploads/2021/10/HTML-and-CSS-768x453.png' alt='HTML ja CSS pilt'></img>
      <br />
      <br />
      <br />
      <br />
    <table>
      <tr >
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>  
    </table>
    <br/>

    <iframe width="420" height="315" title="Kanad laulavad"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1?controls=1">
</iframe> 
</div> */}

      


    </div>
  ); 
}

export default App;
