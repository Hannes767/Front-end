import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import joogidFailist from "../joogid.json"

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState(joogidFailist.slice());

    const kustuta = (index) => {
        joogidFailist.splice(index,1);
        uuendaJoogid(joogidFailist.slice());
    }

  return (
    <div>
        <Link to="/">
            <button>Halda jooke</button>
        </Link>
        <br /><br />

        <div>Kokku {joogid.length} tk</div>

        <br />
        {joogid.map((jook, jrknr) => 
        <div>
            {jrknr + 1}. {jook}
            <button onClick={() => kustuta(jrknr)}>x</button>
        </div>)}
    </div>
  )
}

export default HaldaJooke