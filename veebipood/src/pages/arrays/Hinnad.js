import React, {useState, useRef} from 'react'

function Hinnad() {
  const [hinnad, muudaHinnad] = useState([5, 99, 42, 8, 491, 71, 123, 321, 2120, 33])
  const hindRef = useRef();

  //mitu  tk välja näidatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole

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

  return (
    <div>
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

      {hinnad.map(hind => <button onClick={() => lisa(hind)}>{hind}</button>)}
    </div>
  )
}

export default Hinnad