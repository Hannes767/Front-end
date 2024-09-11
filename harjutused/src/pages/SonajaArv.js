import React, {useState, useRef} from 'react'
import { Link } from "react-router-dom"

function SonajaArv() {
  const [tooteKogus, muudaTootekogus] = useState(10);
  const toodeRef = useRef();
  const [tooteNimi, muudaTootenimi] = useState("Püksid");
   

  return (
    <div>

        <Link to="/">
            <button>Sõna ja arv</button>
        </Link>
        <br/><br/>

        <div>{tooteNimi}:  {tooteKogus}</div>
        <button disabled={tooteKogus === 1} onClick={() => muudaTootekogus( tooteKogus - 1)}>-</button>
        <span>{tooteKogus} tk</span>
        <button onClick={() => muudaTootekogus (tooteKogus + 1)}>+</button>
        <br /><br />
        <label>Toode</label>
        <input ref={toodeRef} type="text" />
        <button onClick={() => muudaTootenimi(toodeRef.current.value)}>Lisa toode</button>
    </div>
  )
}

export default SonajaArv