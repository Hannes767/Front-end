import React, { useState } from 'react'
import { ContactUs } from '../../components/Email';

function Avaleht() {
  const [kogus, muudaKogus] = useState(0);
  const [sonum, muudaSonum] = useState("Muuda kogust!");
  const [laigitud, muudaLaigitud] =useState(false);

function v2henda() {
  muudaKogus(kogus-1);
  muudaSonum("Vähendasid kogust!");
}

function suurenda() {
  muudaKogus(kogus+1);
  muudaSonum("Suurendasid kogust!");
}

function nulli() {
  muudaKogus(0);
  muudaSonum("Nullisid koguse!");
}

  return (
    <div>
      <br />
      <div>Anna meile tagasisidet</div>
      <ContactUs/>
      <br /><br />

      <div>{laigitud === true && <img src='/laigitud.svg' alt=""/>}</div>
      <div>{laigitud === false && <img src='/mittelaigitud.svg' alt=""/>}</div>
      <button onClick={() => muudaLaigitud(true)} >Pane laik peale</button>
      <button onClick={() => muudaLaigitud(false)} >Võta laik maha</button>
      <button onClick={() => muudaLaigitud(!laigitud)} >Muuda laiki</button>

      <br /><br />

      <div>{sonum}</div>
      <button disabled={kogus === 0} onClick={v2henda}>-</button>
      <button onClick={suurenda}>+</button>
      <br />
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <div className={kogus >= 10 ? 'kuldne' : undefined} >{kogus}pcs</div> 
    </div>
  )
}

//ternary operator
//if (true) {tee seda} else {kui ei olnud tõsi} ? :

export default Avaleht