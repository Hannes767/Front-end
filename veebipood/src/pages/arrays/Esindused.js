import React, { useState, useRef } from 'react'
import {Link} from "react-router-dom"
import keskusedFailist from "../../data/keskused.json"


function Esindused() {
    const [linn, muudaLinn] = useState("Tallinn");
    const [keskused, muudaKeskused] = useState(keskusedFailist.slice());
    const reset = () => {
        muudaKeskused (keskusedFailist.slice());
    }
    const otsinguRef = useRef();


    //localeCompare kui on vaja sõnu ja numbreid  sortida, objekte ei saa

    const sorteeriAZ = () => {
        // keskused.sort();
        keskused.sort((a,b) => a.nimi.localeCompare(b.nimi, "et"));
        muudaKeskused(keskused.slice());
    }

    const sorteeriZA = () => {
        // keskused.sort();
        // keskused.reverse();
        keskused.sort((a,b) => b.nimi.localeCompare(a.nimi, "et"));
        muudaKeskused(keskused.slice());

    }

    const sorteeriTahedKasvavalt = () => {
        keskused.sort((a,b) => a.nimi.length - b.nimi.length);
        muudaKeskused(keskused.slice());
    }

    const sorteeriTahedKahanevalt = () => {
        keskused.sort((a,b) => b.nimi.length - a.nimi.length);
        muudaKeskused(keskused.slice());
    }

    const sorteeriKolmasTahtAZ = () => {
        keskused.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2], "et"));
        muudaKeskused(keskused.slice());
    }

    const filtreeriTahemarkeRohkemKui17 = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.nimi.length >= 7);
        muudaKeskused(vastus);
    }

    const filtreeriTahemarkeTapselt9 = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.nimi.length === 9 && keskus.tel.startsWith("5"));
        muudaKeskused(vastus);
    }

    const filtreeriKesSisaldabIsLyhendit = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.nimi.includes("is"));
        muudaKeskused(vastus);
    }

    const filtreeriKellelViimaneTahtE = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.nimi.endsWith("e"));
        muudaKeskused(vastus);
    }

    const filtreeriKellelOnKolmasTahtI = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.nimi[2] === "i");
        muudaKeskused(vastus);
    }

    const arvutaEsinduseTahedKokku = () => {
        let summa = 0;
        keskused.forEach(keskus => summa = summa + keskus.nimi.length);    
        return summa;
      }
    
    const arvutaEsinduseTelefonidKokku = () => {
        let summa = 0;
        keskused.forEach(keskus => summa = summa + Number(keskus.tel));    
        return summa;
      }

      const otsiEsindustest = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.nimi.includes(otsinguRef.current.value));
        muudaKeskused(vastus);
      }


  return (
    <div>
        <input ref={otsinguRef} onChange={otsiEsindustest} type="text" />
        <br /><br />

        <div>Hetkel on aktiivne linn: {linn}</div>
        <button className={linn ==="Tallinn" ? 'linn-aktiivne' : "linn"} onClick={ () =>  muudaLinn("Tallinn")}>Tallinn</button>
        <button className={linn ==="Tartu" ? 'linn-aktiivne' : "linn"} onClick={ () =>  muudaLinn("Tartu")}>Tartu</button>
        <button className={linn ==="Narva" ? 'linn-aktiivne' : "linn"} onClick={ () =>  muudaLinn("Narva")}>Narva</button>
        <button className={linn ==="Pärnu" ? 'linn-aktiivne' : "linn"} onClick={ () =>  muudaLinn("Pärnu")}>Pärnu</button>

        {linn === "Tallinn" &&
            <div>
                <button onClick={reset}>Reset</button>
                <br /><br />

                <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
                <button onClick={sorteeriZA}>Sorteeri Z-A</button>
                <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
                <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
                <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
                <br /><br />

                <button onClick={filtreeriTahemarkeRohkemKui17}>Filtreeri kellel tähemärke rohkem kui  7</button>
                <button onClick={filtreeriTahemarkeTapselt9}>Filtreeri kellel tähemärke täpselt 9</button>
                <button onClick={filtreeriKesSisaldabIsLyhendit}>Filtreeri kes sisaldab is lühendit</button>
                <button onClick={filtreeriKellelViimaneTahtE}>Filtreeri kellel on viimane täht "e"</button>
                <button onClick={filtreeriKellelOnKolmasTahtI}>Filtreeri kellel on kolmas täht "i"</button>
                {/* <div>Ülemiste</div>        
                <div>Rocca al Mare</div>
                <div>Magistrali</div>        
                <div>Vesse</div>        
                <div>Kristiine</div>        
                <div>Järveotsa</div> */}
                {keskused.map((keskus, index) =>
                    <div key={keskus.nimi}>
                        {keskus.nimi} - {keskus.tel}
                        <Link to={"/esindus/" + index}>                        
                            <button>Vaata lähemalt</button>
                        </Link>
                    </div>)}
            </div>}

       { linn === "Tartu" &&
            <div>
                <div>Raatuse</div>        
                <div>Lõunakeskus</div>
            </div>}

        { linn === "Narva" && <div>Fama</div>}
        
        { linn === "Pärnu" && <div>Port Artur 2</div>}

        <div>Tähed kokku: {arvutaEsinduseTahedKokku()} tk</div>
        <div>{arvutaEsinduseTelefonidKokku()} tk</div>

    </div>
  )
}

export default Esindused