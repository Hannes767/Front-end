import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Months() {
  const [kuud, muudaKuud] = useState (["Jan", "Feb", "March", "April", "Dec", "Nov"]);

  return (
    <div>

        <Link to="/">
            <button>Harjutus Months</button>
        </Link>
        <br/><br/>

<div>
        <div>Kokku: {kuud.length}</div>
          {kuud.length > 0 && <button onClick={() => muudaKuud([])}>Tühjenda</button>}
          <br/>
        </div>
        <div>{kuud.map(kuu => <div>{kuu}</div>)}</div>
        {kuud.length === 0 && <div>Kuusid ei kuvata</div>}
        

      
    </div>
  )
}

export default Months