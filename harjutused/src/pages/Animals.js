import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Animals() {
  const [loomad, muudaLoomad] = useState (["Pig", "Lion", "Ape", "Giraffe", "Tiger", "Snake"]);

  return (
    <div>

        <Link to="/">
            <button>Harjutus Animals</button>
        </Link>
        <br/><br/>

        <div>
          <div>Kokku: {loomad.length}</div>
          {loomad.length > 0 && <button onClick={() => muudaLoomad([])}>Tühjenda</button>}
          <br/>
        </div>
          <div>{loomad.map(loom => 
            <div>{loom}</div>)}
          </div>
            {loomad.length === 0 && <div>Loomi ei kuvata
        </div>}
        

      
    </div>
  )
}

export default Animals