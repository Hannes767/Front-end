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



  return (
    <div>
      <div>Järjekorranumber, mis on URLis: {index}</div>
        <div>Toode, millele klikiti: {vastus}</div>
        <div>Jne mingid omadused...</div>
        <div>Toote lisaja süsteemi: {}</div>
    </div>
  )
}

export default YksToode