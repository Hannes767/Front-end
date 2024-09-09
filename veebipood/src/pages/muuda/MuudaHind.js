import React from 'react'
import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function MuudaHind() {
    const {index} = useParams();
    const leitud = hinnadFailist[index];

    if (leitud === undefined) {
      //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
    return <div>Hinda ei leitud</div>
    }

  return (
    <div>
        <label>Hind</label><br />
        <input type="text" defaultValue={leitud.number} /><br />
        <button>Muuda</button><br />
    </div>
  )
}

export default MuudaHind