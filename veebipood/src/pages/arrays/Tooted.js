import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ostukorvFailist from "../../data/ostukorv.json"


function Tooted() {
  const [tooted, muudaTooted] = useState (["Audi", "BMW", "Skoda", "Kia", "Toyota", "Mazda"]);


  const lisaOstukorvi = (uusToode) => {
    ostukorvFailist.push(uusToode);//ostukorv ei pea siin htmlis uuenema
  }


  return (
    <div>
      <div>
        <div>Kokku: {tooted.length}</div>
        {tooted.length > 0 && <button onClick={() => muudaTooted([])}>Tühjenda</button>}
        <br/><br/>
      </div>
        {tooted.map(toode => 
          <div>
            {toode}
            <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
            </div>)
            }

        {tooted.length === 0 && <div>Tooteid ei ole</div>}
      

      <Link to="/avaleht">Mine avalehele</Link>


    </div>
  )
}

export default Tooted