import React from 'react'
import { useState, useRef } from "react";

function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("")
    const nimiRef = useRef();

    //alternatiiv const lisaUusTegelane = () => {}
    function lisaUusTegelane() {
      if (nimiRef.current.value === "") {
        uuendaSonum("Tühja nimega ei saa sisestada")
      } else {
        uuendaSonum("Tegelane lisatud")
      }

    }

  return ( 
    <div>
        <div>{sonum}</div>
        <label >Tegelase nimi</label><br />
        <input ref={nimiRef} type="text" /><br />
        <button onClick={lisaUusTegelane}>Lisa uus</button>
    </div>
  )
}

export default LisaTegelane