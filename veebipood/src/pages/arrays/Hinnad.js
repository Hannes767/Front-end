import React, {useState, useRef} from 'react'
import hinnadFailist from "../../data/hinnad.json";
import {Link} from "react-router-dom"

function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadFailist.slice())
  const hindRef = useRef();

  //mitu  tk välja näidatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole

  const reset = () => {
    muudaHinnad(hinnadFailist.slice());
  }

  const lisaLoppu878 = () => {
    hinnad.push(878);
    muudaHinnad(hinnad.slice());
  }

  const lisa = (hind) => {
    hinnad.push(hind);
    muudaHinnad(hinnad.slice());
  }

  const kustuta = (jrknr) => {
    hinnad.splice(jrknr, 1); //mitmendat, mitu tk
    muudaHinnad(hinnad.slice());
  }

  const lisaVormist = () => {
    hinnad.push(hindRef.current.value);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort(((a, b) => a - b));
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort(((a, b) => b - a));
    muudaHinnad(hinnad.slice());
  }

  const sorteeriAZ = () => {
    hinnad.sort();
    muudaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui100 = () => {
    const vastus = hinnad.filter(hind => hind > 100);
    muudaHinnad(vastus);
  }

  const filtreeriVaiksemadKui50 = () => {
    const vastus = hinnad.filter(hind => hind < 50);
    muudaHinnad(vastus);
  }

  const filtreeri1SisaldavadNumbrid = () => {
    const vastus = hinnad.filter(hind => String(hind).includes("1"));
    muudaHinnad(vastus);
    
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <br /><br />

      <label >Hind</label><br />
      <input ref={hindRef} type="number" /><br />
      <button onClick={lisaVormist}>Sisesta</button>


      <br /><br />
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
      <button onClick={() => kustuta(3)}>Kustuta neljas</button>
      <button onClick={() => kustuta(4)}>Kustuta viies</button>
      <div>Kokku: {hinnad.length}</div>
      {hinnad.length > 0 && <button onClick={() => muudaHinnad([])}>Tühjenda</button>}
      {hinnad.length === 0 && <div>Ühtegi hinda pole</div>}
      {/* {[5, 99, 42, 8, 491, 71, 123, 321, 2120, 33].map(hind => <button>{hind}</button>)} */}
      
      <button onClick={lisaLoppu878}>Lisa lõppu 878</button>

      <br /><br />

      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>

      <br /><br />
      <button onClick={filtreeriSuuremadKui100}>Filtreeri suuremad kui 100</button>
      <button onClick={filtreeriVaiksemadKui50}>Filtreeri väiksemad kui 50</button>
      <button onClick={filtreeri1SisaldavadNumbrid}>Filtreeri kellel on 1</button>

      <br /><br />

      {hinnad.map((hind, index)=> 
        <div>
          <button onClick={() => lisa(hind)}>{hind}</button>
          {/* esimene kaldkriips ära lisa  olemasolevale URL-ile 
          teine kaldkriips URL ja muutuja oleksid eraldatud */}
          
          <Link to={"/hind/" + index}>
            <button>Vt lähemalt</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Hinnad