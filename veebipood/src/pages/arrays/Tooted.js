import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Tooted() {
  const [tooted, muudaTooted] = useState (["Audi", "BMW", "Skoda", "Kia", "Toyota", "Mazda"]);

  return (
    <div>
      <div>
        <div>Kokku: {tooted.length}</div>
        {tooted.length > 0 && <button onClick={() => muudaTooted([])}>Tühjenda</button>}
        <br/><br/>
      </div>
        <div>{tooted.map(toode => <div>{toode}</div>)}</div>

        {tooted.length === 0 && <div>Tooteid ei ole</div>}
      

      <Link to="/avaleht">Mine avalehele</Link>


    </div>
  )
}

export default Tooted