import React from 'react'
import { useParams } from  "react-router-dom"
import esindusedFailist from "../../data/keskused.json"

function YksEsindus() {
    //mis pandi kooloni sisse URLis
    const {index} = useParams();

    const vastus = esindusedFailist[index];
    //järjekorranumbriga seotud näited

  return (
    <div>
        <div>URLis olev muutuja: {index}</div>
        <h2>Esinduse nimi: {vastus}</h2>
        <hr />
        <p>E-mail: {}</p>
        <p>Telefon: {}</p>
    </div>
  )
}

export default YksEsindus