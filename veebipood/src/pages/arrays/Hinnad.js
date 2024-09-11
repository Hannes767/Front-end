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
    hinnadFailist.push({"number": 878, "lisaja": "Tavainimene"});
    muudaHinnad(hinnadFailist.slice());
  }

  const lisa = (hind) => {
    hinnadFailist.push(hind);
    muudaHinnad(hinnadFailist.slice());
  }

  const kustuta = (jrknr) => {
    hinnadFailist.splice(jrknr, 1); //mitmendat, mitu tk
    muudaHinnad(hinnadFailist.slice());
  }

  const lisaVormist = () => {
    hinnadFailist.push({"number": hindRef.current.value, "lisaja": "Vorm"});
    muudaHinnad(hinnadFailist.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort(((a, b) => a.number - b.number));
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort(((a, b) => b.number - a.number));
    muudaHinnad(hinnad.slice());
  }

  const sorteeriAZ = () => {
    hinnad.sort((a,b) => String (a.number).localeCompare(String(b.number)));
    muudaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui100 = () => {
    const vastus = hinnadFailist.filter(hind => hind.number > 100);
    muudaHinnad(vastus);
  }

  const filtreeriVaiksemadKui50 = () => {
    const vastus = hinnadFailist.filter(hind => hind.number < 50);
    muudaHinnad(vastus);
  }

  const filtreeri1SisaldavadNumbrid = () => {
    const vastus = hinnadFailist.filter(hind => String(hind.number).includes("1"));
    muudaHinnad(vastus);
    
  }

  const arvutaHinnadKokku = () => {
    let summa = 0;
    hinnad.forEach(hind => summa = summa + hind.number);    
    return summa;
  }

  const arvutaLisajaTahedKokku = () => {
    let summa = 0;
    hinnad.forEach(hind => summa = summa + hind.lisaja.length);    
    return summa;
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
        <div key={index}>
          <button onClick={() => lisa(hind)}>{hind.number}</button>
          {/* esimene kaldkriips ära lisa  olemasolevale URL-ile 
          teine kaldkriips URL ja muutuja oleksid eraldatud */}
          
          <Link to={"/hind/" + index}>
            <button>Vt lähemalt</button>
          </Link>
        </div>
      )}

      <div>{arvutaHinnadKokku()} €</div>
      <div>{arvutaLisajaTahedKokku()} tk</div>

    </div>
  )
}

export default Hinnad