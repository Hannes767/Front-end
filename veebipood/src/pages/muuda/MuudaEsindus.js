import React from 'react'
import { useParams } from "react-router-dom"
import esindusedFailist from "../../data/keskused.json"

function MuudaEsindus() {
    /* App.js: muuda-esindus/:jrknr */
    const {jrknr} = useParams();
    const vastus = esindusedFailist[jrknr];

  return (
    <div>
        <label>Esinduse nimi</label><br />
        <input type="text" defaultValue={vastus}/><br />
        <button>Muuda</button><br />

    </div>
  )
}

export default MuudaEsindus