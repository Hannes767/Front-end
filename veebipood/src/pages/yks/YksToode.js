import React from 'react'
import { useParams } from  "react-router-dom"
import tootedFailist from "../../data/tooted.json"

//[{"nimi":"BMW", "hind": 35000, "pilt": "URL.jpg", "aktiivne": true}
//{"nimi":"Bentley", "hind": 85000, "pilt": "URL.jpg", "aktiivne": true}]

function YksToode() {
  //mis pandi kooloni sisse URLis
  const {index} = useParams();

  const vastus = tootedFailist[index];
  //järjekorranumbriga seotud näited

  if (vastus === undefined) {
    //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
  return <div>Autot ei leitud</div>
  }

  return (
    <div>
      <div>Järjekorranumber, mis on URLis: {index}</div>
        <div>Mark: {vastus.mark}</div>
        <div>Mudel: {vastus.mudel}</div>
        <div>Aasta: {vastus.aasta}</div>
    </div>
  )
}

export default YksToode