import React, {useState} from 'react'
import { Link } from "react-router-dom"
import ostukorvFailist from "../../data/ostukorv.json"

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState (ostukorvFailist.slice());

  const lisaRedBull = () => {
    // muudaOstukorv(["Coca", "Fanta", "Sprite", "Red bull"])
    ostukorvFailist.push("Red bull");
    muudaOstukorv(ostukorvFailist.slice());
  }

  const lisaVichy = () => {
    // muudaOstukorv(["Coca", "Fanta", "Sprite", "Vichy"])
    ostukorvFailist.push("Vichy");
    muudaOstukorv(ostukorvFailist.slice());
  }
    //saan kätte onClick abil
  const lisa = (uusToode) => {
    ostukorvFailist.push(uusToode);
    muudaOstukorv(ostukorvFailist.slice());
  }
      //kui tuleb sulgude sees tühjus/sõna,siis konverteerib asukoha nulliks
  const kustuta = (index) => {
    ostukorvFailist.splice(index, 1);
    muudaOstukorv(ostukorvFailist.slice());
  }

  const tyhenda = () => {
    ostukorvFailist.splice(0);
    muudaOstukorv(ostukorvFailist.slice()); //alates 0st, lõpuni välja kustutab
  }

  return (
    <div>

      <div>
        <div>Kokku: {ostukorv.length}</div>
        <button onClick={lisaRedBull}>Lisa lõppu Red bull juurde</button>
        <button onClick={lisaVichy}>Lisa lõppu Vichy juurde</button>
        <div>{ostukorv.map((toode, index )=> 
          <div>
            {toode} 
            <button onClick={() => lisa(toode)}>Lisa lõppu</button>
            <button onClick={() => kustuta(index)}>x</button>
          </div>)}
        </div>
        {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
        {ostukorv.length > 0 && <button onClick={tyhenda}>Tühjenda</button>}

      </div>

      <Link to="/avaleht">Mine avalehele</Link>         
        
        
    </div>
  )
}

export default Ostukorv