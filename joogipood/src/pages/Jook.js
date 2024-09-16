import React from 'react'
import joogidFailist from "../joogid.json"
import { Link, useParams } from 'react-router-dom'



function Jook() {
    const {number} = useParams();
    const leitud = joogidFailist[number];
  
    if (leitud === undefined) {
      //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
    return <div>Jooki ei leitud</div>
    }

  return (
    <div>
        <Link to="/">
            <button>Jook</button>
        </Link>
        <br /><br />
        <div>{leitud}</div>

    </div>
  )
}

export default Jook