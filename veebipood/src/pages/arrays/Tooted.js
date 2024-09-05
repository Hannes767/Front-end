import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ostukorvFailist from "../../data/ostukorv.json"
import tootedFailist from "../../data/tooted.json"
import { ToastContainer, toast } from 'react-toastify';


function Tooted() {
  const [tooted, muudaTooted] = useState (tootedFailist.slice());
  const reset = () => {
    muudaTooted (tootedFailist.slice());
  }

  const lisaOstukorvi = (uusToode) => {
    ostukorvFailist.push(uusToode);    //ostukorv ei pea siin htmlis uuenema
    toast.success("Ostukorvi lisatud!");
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.localeCompare(b, "et"));
    muudaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.localeCompare(a, "et"));
    muudaTooted(tooted.slice());

  }

  const sorteeriTahedKasvavalt = () => {
    tooted.sort((a,b) => a.length - b.length);
    muudaTooted(tooted.slice());
  }

  const sorteeriTahedKahanevalt = () => {
    tooted.sort((a,b) => b.length - a.length);
    muudaTooted(tooted.slice());
  }

  const filtreeriAlgav = (taht) => {
    const vastus = tootedFailist.filter(toode => toode.startsWith(taht));
    muudaTooted(vastus);
  }

  // const filtreeriKelleEsimeneTahtB = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("B"));
  //   muudaTooted(vastus);
  // }

  // const filtreeriKelleEsimeneTahtN = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("N"));
  //   muudaTooted(vastus);
  // }

  // const filtreeriKelleEsimeneTahtT = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("T"));
  //   muudaTooted(vastus);
  // }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <br /><br />
      <div>
        <div>Kokku: {tooted.length}</div>
        {tooted.length > 0 && <button onClick={() => muudaTooted([])}>Tühjenda</button>}
        <br/><br/>
      </div>
        {tooted.map(toode => 
          <div>
            {toode}
            <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          </div>)
            }

        {tooted.length === 0 && <div>Tooteid ei ole</div>}

      <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
      <br /><br />

      <button onClick= {filtreeriAlgav("B")}>Filtreeri kellel on esimene täht B</button>
      <button onClick={filtreeriAlgav("N")}>Filtreeri kellel on esimene täht N</button>
      <button onClick={filtreeriAlgav("T")}>Filtreeri kellel on esimene täht T</button>
      <br />
      

      <Link to="/avaleht">Mine avalehele</Link>

      <ToastContainer
          position="bottom-right"
          autoClose={4000}          
          theme="dark"
          />


    </div>
  )
}

export default Tooted