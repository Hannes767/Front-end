import React, { useState } from 'react'
import { Link } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"


function Tootajad() {
  const [tootajad, muudaTootajad] = useState (tootajadFailist.slice());
  const reset = () => {
    muudaTootajad (tootajadFailist.slice());
}

  const sorteeriAZ = () => {
    tootajad.sort((a,b) => a.localeCompare(b, "et"));
    muudaTootajad(tootajad.slice());
}

const sorteeriZA = () => {
    tootajad.sort((a,b) => b.localeCompare(a, "et"));
    muudaTootajad(tootajad.slice());

}

const sorteeriTahedKasvavalt = () => {
    tootajad.sort((a,b) => a.length - b.length);
    muudaTootajad(tootajad.slice());
}

const sorteeriTahedKahanevalt = () => {
    tootajad.sort((a,b) => b.length - a.length);
    muudaTootajad(tootajad.slice());
}

const sorteeriTeineTahtAZ = () => {
    tootajad.sort((a,b) => a[1].localeCompare(b[1], "et"));
    muudaTootajad(tootajad.slice());
}

const filtreeriTahemarkeRohkemKui5 = () => {
  const vastus = tootajadFailist.filter(tootaja => tootaja.length >= 5);
  muudaTootajad(vastus);
}

const filtreeriTahemarkeTapselt3 = () => {
  const vastus = tootajadFailist.filter(tootaja => tootaja.length === 3);
  muudaTootajad(vastus);
}

const filtreeriKesSisaldabIsLyhendit = () => {
  const vastus = tootajadFailist.filter(tootaja => tootaja.includes("ai"));
  muudaTootajad(vastus);
}

const filtreeriKelleEsimeneTahtM = () => {
  const vastus = tootajadFailist.filter(tootaja => tootaja.startsWith("M"));
  muudaTootajad(vastus);
}

const filtreeriKellelOnNeljasTahtI = () => {
  const vastus = tootajadFailist.filter(tootaja => tootaja[3] === "i");
  muudaTootajad(vastus);
}

const filtreeriPaarisarvTahti = () => {
  const vastus = tootajadFailist.filter(tootaja => tootaja.length % 2  === 0);
  muudaTootajad(vastus);
}



  return (
    <div>
      <button onClick={reset}>Reset</button>
      <br /><br />
      <div>
        <div>Kokku: {tootajad.length}</div>
        {tootajad.length > 0 && <button onClick={() => muudaTootajad([])}>Tühjenda</button>}
        <br/>
      </div>
      <div>{tootajad.map((tootaja, index )=> 
        <div key={index}>
          {tootaja}
          <Link to={"/tootaja/" + index}>                        
            <button>Vaata lähemalt</button>
          </Link>
        </div>)}
      </div>

        {tootajad.length === 0 && 
        <div>Töötajaid ei ole</div>}

      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht A-Z</button>
      <br /><br />

      <button onClick={filtreeriTahemarkeRohkemKui5}>Filtreeri kellel tähemärke rohkem kui  5</button>
      <button onClick={filtreeriTahemarkeTapselt3}>Filtreeri kellel tähemärke täpselt 3</button>
      <button onClick={filtreeriKesSisaldabIsLyhendit}>Filtreeri kes sisaldab ai lühendit</button>
      <button onClick={filtreeriKelleEsimeneTahtM}>Filtreeri kellel on esimene täht M</button>
      <button onClick={filtreeriKellelOnNeljasTahtI}>Filtreeri kellel on neljas täht "i"</button>
      <button onClick={filtreeriPaarisarvTahti}>Filtreeri kellel on paarisarv tähti</button>
        
      <br /><br />
      <Link to="/avaleht">Mine avalehele</Link>

    </div>
  )
}

export default Tootajad