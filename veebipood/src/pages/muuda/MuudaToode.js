import React from 'react'
import { useParams } from "react-router-dom"
import tootedFailist from "../../data/tooted.json"

function MuudaToode() {
  const {index} = useParams();
  const leitud = tootedFailist[index];

  return (
    <div>
      <label>Toode</label><br />
        <input type="text" defaultValue={leitud} /><br />
        <button>Muuda</button><br />
    </div>
  )
}

export default MuudaToode