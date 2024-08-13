import React, { useRef, useState } from 'react'

function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa juurde üks toode");
    const nimiRef = useRef();

    function sisesta() {
      //nimiRef.current.value; saame ref seest väärtust kätte
      // true ? _ : _ ternary operator
      if (nimiRef.current.value === "") {
        muudaSonum("Tühja nimega toodet ei saa lisada");
        } else {
        muudaSonum("Toode lisatud: " + nimiRef.current.value);
        }
    }

  return (
    <div>
        <div>Sõnum: {sonum}</div>
        <label>Toote nimi</label><br />
        <input ref={nimiRef} type="text" /><br />
        <button onClick={sisesta}>Sisesta</button><br />
    </div>
  )
}

export default LisaToode