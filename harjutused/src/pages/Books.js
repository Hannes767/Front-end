import React, {useState} from 'react'
import { Link } from "react-router-dom"

function Books() {
    const koopia = ["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Tõde ja õigus", "Nipernaadi", "Aabits", "Ahvide planeet"]
    const [raamatud, muudaRaamatud] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Tõde ja õigus", "Nipernaadi", "Aabits", "Ahvide planeet"]);
    
    const reset = () => {
        muudaRaamatud(koopia.slice());
        // muudaRaamatud (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Tõde ja õigus", "Nipernaadi"]);
    }

    const sorteeriAZ = () => {
        raamatud.sort((a,b) => a.localeCompare(b, "et"));
        muudaRaamatud(raamatud.slice());
    }
    
    const sorteeriZA = () => {
        raamatud.sort((a,b) => b.localeCompare(a, "et"));
        muudaRaamatud(raamatud.slice());
    
    }
    
    const sorteeriTahedKasvavalt = () => {
        raamatud.sort((a,b) => a.length - b.length);
        muudaRaamatud(raamatud.slice());
    }
    
    const sorteeriTahedKahanevalt = () => {
        raamatud.sort((a,b) => b.length - a.length);
        muudaRaamatud(raamatud.slice());
    }
    
    const sorteeriTeineTahtAZ = () => {
        raamatud.sort((a,b) => a[1].localeCompare(b[1], "et"));
        muudaRaamatud(raamatud.slice());
    }
    
    const sorteeriSonadeArv = () => {
        raamatud.sort((a,b) => a.split(" ").length - b.split(" ").length);
        muudaRaamatud(raamatud.slice());
    }

    const sorteeriEelviimaseTaheJargi = () => {
        // raamatud.sort((a,b) => a[a.length - 2] - b[b.length - 2]);
        raamatud.sort((a,b) => a[a.length-2].localeCompare(b[b.length-2], "et"));
        muudaRaamatud(raamatud.slice());
    }

    const filtreeriTahemarkeRohkemKui10 = () => {
        const vastus = raamatud.filter(raamat => raamat.length >= 10);
        muudaRaamatud(vastus);
      }
      
      const filtreeriTahemarkeVahemKui7 = () => {
        const vastus = raamatud.filter(raamat => raamat.length <= 7);
        muudaRaamatud(vastus);
      }
      
      const filtreeriKesSisaldabTheLyhendit = () => {
        const vastus = raamatud.filter(raamat => raamat.includes("The"));
        muudaRaamatud(vastus);
      }
      
      const filtreeriKelleEsimeneTahtM = () => {
        const vastus = raamatud.filter(raamat => raamat.startsWith("M"));
        muudaRaamatud(vastus);
      }
      
      const filtreeriKellelOnNeljasTahtI = () => {
        const vastus = raamatud.filter(raamat => raamat[3] === "i");
        muudaRaamatud(vastus);
      }
      
      const filtreeriPaarisarvTahti = () => {
        const vastus = raamatud.filter(raamat => raamat.length % 2  === 0);
        muudaRaamatud(vastus);
      }

      const filtreeriKesSisaldabKeskelAndLyhendit = () => {
        const vastus = raamatud.filter(raamat => raamat.includes("and"));
        muudaRaamatud(vastus);
      }
      

return (
    <div>
        <Link to="/">
            <button>Harjutus Books</button>
        </Link>
        <br/><br/>

        <button onClick={reset}>Reset</button>
        <br /><br />

        <div>
            <div>Kokku: {raamatud.length}</div>
            {raamatud.length > 0 && <button onClick={() => muudaRaamatud([])}>Tühjenda</button>}
            <br/>
        </div>
        <div>{raamatud.map(raamat => 
            <div>{raamat}</div>)}
        </div>
        {raamatud.length === 0 && <div>Raamatuid ei kuvata</div>}

        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht A-Z</button>
        <button onClick={sorteeriSonadeArv}>Sorteeri sõnade arvu järgi</button>
        <button onClick={sorteeriEelviimaseTaheJargi}>Sorteeri eelviimase tähe järgi</button>
        <br /><br />

        <button onClick={filtreeriTahemarkeRohkemKui10}>Filtreeri kellel tähemärke rohkem kui 10</button>
        <button onClick={filtreeriTahemarkeVahemKui7}>Filtreeri kellel tähemärke vähem kui 7</button>
        <button onClick={filtreeriKesSisaldabTheLyhendit}>Filtreeri kes sisaldab "The" lühendit</button>
        <button onClick={filtreeriKelleEsimeneTahtM}>Filtreeri kellel on esimene täht M</button>
        <button onClick={filtreeriKellelOnNeljasTahtI}>Filtreeri kellel on neljas täht "i"</button>
        <button onClick={filtreeriPaarisarvTahti}>Filtreeri kellel on paarisarv tähti</button>
        <button onClick={filtreeriKesSisaldabKeskelAndLyhendit}>Filtreeri kes sisaldab keskel "and" lühendit</button>

    </div>
  )
}

export default Books