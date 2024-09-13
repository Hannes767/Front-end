import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Numbrid() {
    const [numbrid, muudaNumbrid]= useState ([4, 23, 7, 39, 19, 0, 9, 14, 135, 43934, 54304325]);

    const reset = () => {
        muudaNumbrid ([4, 23, 7, 39, 19, 0, 9, 14, 135, 43934, 54304325]);
    }

    const sorteeriKasvavalt = () => {
        numbrid.sort(((a, b) => a - b));
        muudaNumbrid(numbrid.slice());
      }
    
      const sorteeriKahanevalt = () => {
        numbrid.sort(((a, b) => b - a));
        muudaNumbrid(numbrid.slice());
      }

      const sorteeriAZ = () => {
        // numbrid.sort((a,b) => String (a).localeCompare(String(b)));
        numbrid.sort((a,b) => a.toString().localeCompare(b.toString()));
        muudaNumbrid(numbrid.slice());
      }

      const sorteeriZA = () => {
        // numbrid.sort((a,b) => String (a).localeCompare(String(b)));
        numbrid.sort((a,b) => b.toString().localeCompare(a.toString()));
        muudaNumbrid(numbrid.slice());
      }

      const filtreeriSuuremadKui8 = () => {
        const vastus = numbrid.filter(number => number > 8);
        muudaNumbrid(vastus);
      }
    
      const filtreeriVaiksemadKui10 = () => {
        const vastus = numbrid.filter(number => number < 10);
        muudaNumbrid(vastus);
      }

      const filtreeriPaarisarvud = () => {
        const vastus = numbrid.filter(number => number % 2  === 0);
        muudaNumbrid(vastus);
      }

      const filtreeriPaaritudarvud = () => {
        const vastus = numbrid.filter(number => number % 2  !== 0);
        muudaNumbrid(vastus);
      }

      const filtreeriAlgavad1 = () => {
        const vastus = numbrid.filter(number => number.toString().startsWith("1"));
        muudaNumbrid(vastus);        
      }
    
      const filtreeriSisaldavadNumbrid = () => {
        const vastus = numbrid.filter(number => String(number).includes("3"));
        muudaNumbrid(vastus);        
      }


  return (
    <div>
        <Link to="/">
            <button>Harjutus Numbrid</button>
        </Link>
        <br/><br/>

        <button onClick={reset}>Reset</button>
        <br /><br />

        <div>
            <div>Kokku: {numbrid.length}</div>
            {numbrid.length > 0 && <button onClick={() => muudaNumbrid([])}>Tühjenda</button>}
            <br/>
        </div>
        <div>{numbrid.map(number => 
            <div>{number}</div>)}
        </div>
        {numbrid.length === 0 && <div>Numbreid ei kuvata</div>}

        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={sorteeriAZ}>Sorteeri esimese numbri järgi tähestiku järjekorras</button>
        <button onClick={sorteeriZA}>Sorteeri esimese numbri järgi vastupidi tähestiku järjekorras</button>

        <br /><br />
      <button onClick={filtreeriSuuremadKui8}>Filtreeri suuremad kui 8</button>
      <button onClick={filtreeriVaiksemadKui10}>Filtreeri väiksemad kui 10</button>
      <button onClick={filtreeriPaarisarvud}>Filtreeri paarisarvud</button>
      <button onClick={filtreeriPaaritudarvud}>Filtreeri paaritud arvud</button>
      <button onClick={filtreeriAlgavad1}>Filtreeri numbrid, mis algavad 1-ga</button>
      <button onClick={filtreeriSisaldavadNumbrid}>Filtreeri kellel on 3</button>


    </div>
  )
}

export default Numbrid