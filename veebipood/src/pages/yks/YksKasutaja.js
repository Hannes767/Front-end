import React from 'react'
import { useParams } from 'react-router-dom'

function YksKasutaja() {
  // kasutaja/:nimi
  const {nimi} = useParams();

  return (
    <div>
      Kasutajanimi: {nimi}
    </div>
  )
}

export default YksKasutaja