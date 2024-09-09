import React from 'react'
import { useParams } from  "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"

//"eesnimi", "telefon", "email"
// tühikut, koolonit, sidekriipsu jne mitte kasutada, ainult tähti, numbrit, alumist kriipsu kasutada
// Tootajad.js -> panna võti juurde, et ei kuvaks errorit
// Objects are not valid as a React child (found: object with keys {number, lisaja})

function YksTootaja() {
  const {index} = useParams();

  const vastus = tootajadFailist[index];

  return (
    <div>
      <div>
      <div>Järjekorranumber, mis on URLis: {index}</div>
        <div>Töötaja, kellele klikiti: {vastus}</div>
        <div>Jne mingid omadused...</div>
        <div>Toote lisaja süsteemi: {}</div>
    </div>

    </div>
  )
}

export default YksTootaja