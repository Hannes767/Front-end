import React, { useState } from 'react'

function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa juurde üks toode");
  return (
    <div>
        <div>Sõnum: {sonum}</div>
        <label>Toote nimi</label><br />
        <input type="text" /><br />
        <button onClick={() => muudaSonum("Toode lisatud")}>Sisesta</button><br />
    </div>
  )
}

export default LisaToode