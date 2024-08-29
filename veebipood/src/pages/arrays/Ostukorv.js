import React, {useState} from 'react'
import { Link } from "react-router-dom"

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState (["Coca", "Fanta", "Sprite"]);

  const lisaRedBull = () => {
    // muudaOstukorv(["Coca", "Fanta", "Sprite", "Red bull"])
    ostukorv.push("Red bull");
    muudaOstukorv(ostukorv.slice());
  }

  const lisaVichy = () => {
    // muudaOstukorv(["Coca", "Fanta", "Sprite", "Vichy"])
    ostukorv.push("Vichy");
    muudaOstukorv(ostukorv.slice());
  }
    //saan kätte onClick abil
  const lisa = (uusToode) => {
    ostukorv.push(uusToode);
    muudaOstukorv(ostukorv.slice());
  }
      //kui tuleb sulgude sees tühjus/sõna,siis konverteerib asukoha nulliks
  const kustuta = (index) => {
    ostukorv.splice(index, 1);
    muudaOstukorv(ostukorv.slice());
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
        {ostukorv.length > 0 && <button onClick={() => muudaOstukorv([])}>Tühjenda</button>}

      </div>

      <Link to="/avaleht">Mine avalehele</Link>         
        
        
    </div>
  )
}

export default Ostukorv