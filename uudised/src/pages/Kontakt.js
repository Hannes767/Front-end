import React, { useState } from 'react'
import {Link} from "react-router-dom"

function Kontakt() {
  const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
  const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
  const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);



  return ( 
    <div>
        <Link to="/">
            <button>Kontakt</button>
        </Link>
        <br /><br />
        <div className= {n2itaTelKristiine === true ? "valitud" : undefined} onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)} >Kristiine keskus</div>
        {n2itaTelKristiine && <div className='valitud'>458634262</div>}
        <div className= {n2itaTelKristiine === true ? "valitud" : undefined}>Endla 45</div>
        <br />
        <div className= {n2itaTelYlemiste === true ? "valitud" : undefined} onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)} >Ülemiste keskus</div>
        {n2itaTelYlemiste && <div className='valitud'>6286286823</div>}
        <div className= {n2itaTelYlemiste === true ? "valitud" : undefined}>Suur-Sõjamäe 4</div>
        <br />
        <div className= {n2itaTelTasku === true ? "valitud" : undefined} onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)} >Tasku keskus</div>
        {n2itaTelTasku && <div className='valitud'>602062658</div>}
        <div className= {n2itaTelTasku === true ? "valitud" : undefined}>Turu 2</div>
    </div>
  )
}

export default Kontakt