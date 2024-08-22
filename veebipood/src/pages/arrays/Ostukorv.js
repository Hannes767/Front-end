import React, {useState} from 'react'
import { Link } from "react-router-dom"

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState (["Coca", "Fanta", "Sprite"]);

  return (
    <div>

      <div>Kokku: {ostukorv.length}</div>
      {ostukorv.length > 0 && <button onClick={() => muudaOstukorv([])}>Tühjenda</button>}

      <div>{ostukorv.map(toode => <div>{toode}</div>)}</div>

      {ostukorv.length === 0 && <div></div>}
      <div>Ostukorv on tühi</div>
      <Link to="/avaleht">Mine avalehele</Link>

      
      

        
        
        
    </div>
  )
}

export default Ostukorv