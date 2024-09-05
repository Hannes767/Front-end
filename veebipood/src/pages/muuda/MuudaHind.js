import React from 'react'
import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function MuudaHind() {
    const {index} = useParams();
    const leitud = hinnadFailist[index];

  return (
    <div>
        <label>Hind</label><br />
        <input type="text" defaultValue={leitud} /><br />
        <button>Muuda</button><br />
    </div>
  )
}

export default MuudaHind