import React, { useState } from 'react'
import keskusedFailist from "../../data/keskused.json"

function Esindused() {
    const [linn, muudaLinn] = useState("Tallinn");
    const [keskused, muudaKeskused] = useState(keskusedFailist.slice());
    const reset = () => {
        muudaKeskused (keskusedFailist.slice());
    }

    const sorteeriAZ = () => {
        // keskused.sort();
        keskused.sort((a,b) => a.localeCompare(b, "et"));
        muudaKeskused(keskused.slice());
    }

    const sorteeriZA = () => {
        // keskused.sort();
        // keskused.reverse();
        keskused.sort((a,b) => b.localeCompare(a, "et"));
        muudaKeskused(keskused.slice());

    }

    const sorteeriTahedKasvavalt = () => {
        keskused.sort((a,b) => a.length - b.length);
        muudaKeskused(keskused.slice());
    }

    const sorteeriTahedKahanevalt = () => {
        keskused.sort((a,b) => b.length - a.length);
        muudaKeskused(keskused.slice());
    }

    const sorteeriKolmasTahtAZ = () => {
        keskused.sort((a,b) => a[2].localeCompare(b[2], "et"));
        muudaKeskused(keskused.slice());
    }

    const filtreeriTahemarkeRohkemKui17 = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.length >= 7);
        muudaKeskused(vastus);
    }

    const filtreeriTahemarkeTapselt9 = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.length === 9);
        muudaKeskused(vastus);
    }

    const filtreeriKesSisaldabIsLyhendit = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.includes("is"));
        muudaKeskused(vastus);
    }

    const filtreeriKellelViiamneTahtE = () => {
        const vastus = keskusedFailist.filter(keskus => keskus.endsWith("e"));
        muudaKeskused(vastus);
    }

    const filtreeriKellelOnKolmasTahtI = () => {
        const vastus = keskusedFailist.filter(keskus => keskus[2] === "i");
        muudaKeskused(vastus);
    }


  return (
    <div>
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
                <button onClick={filtreeriKellelViiamneTahtE}>Filtreeri kellel on viimane täht "e"</button>
                <button onClick={filtreeriKellelOnKolmasTahtI}>Filtreeri kellel on kolmas täht "i"</button>
                {/* <div>Ülemiste</div>        
                <div>Rocca al Mare</div>
                <div>Magistrali</div>        
                <div>Vesse</div>        
                <div>Kristiine</div>        
                <div>Järveotsa</div> */}
                {keskused.map(keskus => <div>{keskus}<button>Vaata lähemalt</button></div>)}
            </div>}

       { linn === "Tartu" &&
            <div>
                <div>Raatuse</div>        
                <div>Lõunakeskus</div>
            </div>}

        { linn === "Narva" && <div>Fama</div>}
        
        { linn === "Pärnu" && <div>Port Artur 2</div>}


    </div>
  )
}

export default Esindused