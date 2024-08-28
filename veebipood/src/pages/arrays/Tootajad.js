import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Tootajad() {
  const [tootajad, muudaTootajad] = useState (["Jüri", "Mari", "Jaan", "Leena", "Mati", "Kati"]);

  return (
    <div>

<div>
        <div>Kokku: {tootajad.length}</div>
          {tootajad.length > 0 && <button onClick={() => muudaTootajad([])}>Tühjenda</button>}
          <br/>
        </div>
        <div>{tootajad.map(tootaja => <div>{tootaja}</div>)}</div>
        {tootajad.length === 0 && <div>Töötajaid ei ole</div>}
        

      <Link to="/avaleht">Mine avalehele</Link>

    </div>
  )
}

export default Tootajad