import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from "react"

function HarjutusedUurimine() {
    const [nimi, muudaNimi] = useState("Jaan");
    const nimiViide = useRef();
    const [sonum, muudaSonum] = useState("");

    const lisa = () => {
        if (nimiViide.current.value === "") {
          muudaNimi("Nime pole sisestatud");
          return; // funktsioon lõppeb
        }

        if (nimiViide.current.value.includes(".") === false) {
            muudaSonum("Neljas täht ei ole O!");
            return;
        }

        if (nimiViide.current.value.includes(".") === true) {
            muudaSonum("");
            return;
        }

        
        muudaNimi(nimiViide.current.value);
    }

  return (
    <div>
        <Link to="/">
            <button>Harjutus Uurimine</button>
        </Link>
        <br /><br />

        <div>{sonum}</div>
        <div>{nimi}</div>
        <label>Nimi</label>
        <input ref={nimiViide} type="text" />
        <button onClick={lisa}>Lisa nimi</button>


    </div>
  )
}

export default HarjutusedUurimine