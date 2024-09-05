import React, {useState} from 'react'
import { Link } from "react-router-dom"

function Books() {
    const [raamatud, muudaRaamatud] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Tõde ja õigus", "Nipernaadi"]);
    
        
    const reset = () => {
        muudaRaamatud (raamatud.slice());
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
    
    const sorteeriEsimeneTahtAZ = () => {
        raamatud.sort((a,b) => a[0].localeCompare(b[0], "et"));
        muudaRaamatud(raamatud.slice());
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
        <button onClick={sorteeriEsimeneTahtAZ}>Sorteeri esimene täht A-Z</button>
      <br /><br />

    </div>
  )
}

export default Books