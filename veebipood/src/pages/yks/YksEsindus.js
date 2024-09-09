import React from 'react'
import { useParams } from  "react-router-dom"
import esindusedFailist from "../../data/keskused.json"

function YksEsindus() {
    //mis pandi kooloni sisse URLis
    const {index} = useParams();

    const vastus = esindusedFailist[index];
    //järjekorranumbriga seotud näited

    if (vastus === undefined) {
      //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
    return <div>Esindust ei leitud</div>
    }

  return (
    <div>
        <div>URLis olev muutuja: {index}</div>
        <h2>Esinduse nimi: {vastus.nimi}</h2>
        <hr />
        <p>Aadress: {vastus.aadr}</p>
        <p>Telefon: {vastus.tel}</p>
    </div>
  )
}

export default YksEsindus