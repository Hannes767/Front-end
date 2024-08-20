import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from "react"

function Harjutus4() {
    const [sisselogitud, muudaSisselogitud] = useState("Sisselogimine");
    const nimiViide = useRef();
    const [sonum, muudaSonum] = useState("");

    const lisa = () => {
        if (nimiViide.current.value === "") {
          muudaSisselogitud("Nime pole sisestatud");
          return; // funktsioon lõppeb
        }

        if (nimiViide.current.value.startsWith("o", 3) === false) {
            muudaSonum("Neljas täht ei ole O!");
            return;
        }
       
        muudaSisselogitud(nimiViide.current.value);
    }

  return (
    <div>
        <Link to="/">
            <button>Harjutus4</button>
        </Link>
        <br /><br />

        <div>{sonum}</div>
        <div>{sisselogitud}</div>
        <label>Nimi</label>
        <input ref={nimiViide} type="text" />
        <button onClick={lisa}>Logi sisse</button>


    </div>
  )
}

export default Harjutus4