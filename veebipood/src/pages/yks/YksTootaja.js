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

  if (vastus === undefined) {
    //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
  return <div>Töötajat ei leitud</div>
  }

  return (
    <div>
      <div>
      <div>Järjekorranumber, mis on URLis: {index}</div>
        <div>Töötaja: {vastus.nimi}</div>    
        <div>Amet: {vastus.amet}</div>    
      </div>

    </div>
  )
}

export default YksTootaja