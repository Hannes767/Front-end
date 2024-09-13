import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"
import nimedFailist from "../nimed.json"

function TagasisideAndjad() {
    const [nimed, muudaNimed] = useState(nimedFailist.slice());
    const nimedRef = useRef();

    const kustuta = (index) => {
        nimedFailist.splice(index,1);
        muudaNimed(nimedFailist.slice());
    }

    const lisa = () => {
        nimedFailist.push(nimedRef.current.value);
        muudaNimed(nimedFailist.slice());
    }

    const sorteeriZA = () => {
        nimed.sort();
        nimed.reverse();
        // nimed.sort((a,b) => b.localeCompare(a, "et"));
        // nimed.sort().reverse();
        muudaNimed(nimed.slice());    
    }

    const filtreeriKellelAlgavadMga = () => {
        const vastus = nimedFailist.filter(nimi => nimi.startsWith("M"));
        muudaNimed(vastus);
      }

      const filtreeri6KohalisedNimed = () => {
        const vastus = nimedFailist.filter(nimi => nimi.length  === 6);
        muudaNimed(vastus);
      }

      const filtreeriKellelLoppevadYTahega = () => {
        const vastus = nimedFailist.filter(nimi => nimi.endsWith("y"));
        muudaNimed(vastus);
      }

      const insertEST = () => {
        const vastus = nimed.map(nimi => "EST-" + nimi)
        muudaNimed(vastus);
      }


  return (
    <div>
        <Link to="/">
            <button>Tagasiside andjad</button>
      </Link>
      <br /><br />

      <div>Kokku: {nimed.length} nime</div>

      <label>Lisa uus nimi</label>
      <input ref={nimedRef} type="text" />
      <button onClick={lisa}>Sisesta</button>
      <br /><br />

      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriKellelAlgavadMga}>Filtreeri sõnad, mis algavad "M" tähega</button>
      <button onClick={filtreeri6KohalisedNimed}>Filtreeri sõnad, mis on kuue tähe pikkused</button>
      <button onClick={filtreeriKellelLoppevadYTahega}>Filtreeri sõnad, mis lõppevad "y" tähega</button>
      <button onClick={insertEST}>Proovi .map funktsiooni - kirjuta iga nime ette "EST"</button>
      <br /><br />

      {nimed.map((nimi, jrknr)=>
      <div>
        {jrknr + 1}. {nimi}
        <button onClick={() => kustuta(jrknr)}>x</button>
      </div>)}

      
      

    </div>
  )
}

export default TagasisideAndjad