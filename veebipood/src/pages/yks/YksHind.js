import React from 'react'
import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function YksHind() {
    const {hinnaIndex} = useParams();
    const leitud = hinnadFailist[hinnaIndex];

  return (
    <div>
        <div>Järjekorranumber, mis on URLis: {hinnaIndex}</div>
        <div>Hind, millele klikiti: {leitud.number}</div>
        <div>Jne mingid omadused...</div>
        <div>Hinna lisaja süsteemi: {leitud.lisaja}</div>
    </div>
  )
}

export default YksHind