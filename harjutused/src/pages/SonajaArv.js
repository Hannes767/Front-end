import React from 'react'
import { Link } from "react-router-dom"

function SonajaArv() {
    const tootekogus = 10;
    const tootenimi = "Püksid";

  return (
    <div>

        <Link to="/">
            <button>Sõna ja arv</button>
        </Link>
        <br/><br/>

        <div>{tootenimi}:  {tootekogus}</div>

    </div>
  )
}

export default SonajaArv