import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Words() {
  const [sonad, muudaSonad] = useState (["päike", "lumi", "mägi", "auto", "karusell", "kuu"]);

  return (
    <div>

        <Link to="/">
            <button>Harjutus Words</button>
        </Link>
        <br/><br/>

<div>
        <div>Kokku: {sonad.length}</div>
          {sonad.length > 0 && <button onClick={() => muudaSonad([])}>Tühjenda</button>}
          <br/>
        </div>
        <div>{sonad.map(sona => <div>{sona}</div>)}</div>
        {sonad.length === 0 && <div>Sõnu ei kuvata</div>}
        

      
    </div>
  )
}

export default Words