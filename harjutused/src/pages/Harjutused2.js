import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from "react"

function Harjutused2() {
    const [meil, muudaMeil] = useState("Lisa meil");
    const emailViide = useRef();
    const [sonum, muudaSonum] = useState("");

    const lisa = () => {
        if (emailViide.current.value === "") {
          muudaMeil("E-mail on tühi");
          return; // funktsioon lõppeb
        }

        if (emailViide.current.value.includes(".") === false) {
            muudaSonum("Punkt on puudu!");
            return;
        }

        if (emailViide.current.value.includes(".") === true) {
            muudaSonum("");
            return;
        }
            
        
          muudaMeil(emailViide.current.value);
    }

  return (
    <div>
        <Link to="/">
            <button>Harjutused2</button>
        </Link>
        <br /><br />

        {/* {emailViide.current.value.includes(".") === false && muudaSonum("Punkt on puudu!")}; */}
        
        
        <div>{sonum}</div>
        <div>{meil}</div>
        <label>E-mail</label>
        <input ref={emailViide} type="text" />
        <button onClick={lisa}>Lisa e-mail</button>


        

    </div>
  )
}

export default Harjutused2