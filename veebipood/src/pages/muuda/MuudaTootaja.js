import React from 'react'
import { useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"

function MuudaTootaja() {
  const {index} = useParams();
  const leitud = tootajadFailist[index];

  return (
    <div>
      <label>Töötaja</label><br />
      <input type="text" defaultValue={leitud} /><br />
      <button>Muuda</button><br />

    </div>
  )
}

export default MuudaTootaja