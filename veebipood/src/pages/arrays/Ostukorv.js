import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Pakiautomaadid from '../api/Pakiautomaadid';
// import ostukorvFailist from "../../data/ostukorv.json"

function Ostukorv() { //lehele  tulles võetakse algväärtus useState sulgude seest eht ostukorvist, mitte failist, lähen ära kustub lehelt
  const [ostukorv, muudaOstukorv] = useState (JSON.parse(localStorage.getItem("ostukorv")) || []);

  const lisaPakiautomaat = () => {
    // muudaOstukorv(["Coca", "Fanta", "Sprite", "Red bull"])
    ostukorv.push({"mark":"Red bull", "hind": 3, "pilt": "pilt.jpg", "aktiivne": true});
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    muudaOstukorv(ostukorv.slice());

  }

  // const lisaVichy = () => {
  //   // muudaOstukorv(["Coca", "Fanta", "Sprite", "Vichy"])
  //   ostukorvFailist.push("Vichy");
  //   muudaOstukorv(ostukorvFailist.slice());
  // }
    //saan kätte onClick abil
  const lisa = (uusToode) => {
    ostukorv.push(uusToode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    muudaOstukorv(ostukorv.slice());
  }
      //kui tuleb sulgude sees tühjus/sõna,siis konverteerib asukoha nulliks
  const kustuta = (index) => {
    ostukorv.splice(index, 1);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    muudaOstukorv(ostukorv.slice());
  }

  const tyhenda = () => {
    ostukorv.splice(0);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    muudaOstukorv(ostukorv.slice()); //alates 0st, lõpuni välja kustutab
  }

  const arvutaHinnadKokku = () => {
    let summa = 0;

    ostukorv.forEach(toode => summa = summa + toode.hind);
    
    return summa;
  }

  return (
    <div>

      <div>
        {ostukorv.length > 0 && <div>Kokku: {ostukorv.length}</div>}

        {ostukorv.length > 0 && <button onClick={lisaPakiautomaat}>Lisa lõppu pakiautomaadi juurde</button>}
        {/* <button onClick={lisaVichy}>Lisa lõppu Vichy juurde</button> */}
        <div>{ostukorv.map((toode, index )=> 
          <div>
            {index}. {toode.mark} {toode.mudel} {toode.hind}
            <img style={{width: "100px"}} src={toode.pilt} alt="" /> {}
             {toode.aktiivne}
            <button onClick={() => lisa(toode)}>Lisa lõppu</button>
            <button onClick={() => kustuta(index)}>x</button>
          </div>)}
        </div>
        {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
        {ostukorv.length > 0 && <button onClick={tyhenda}>Tühjenda</button>}

      </div>

      <Link to="/avaleht">Mine avalehele</Link>  
      
      <br />
      {ostukorv.length > 0 && <Pakiautomaadid />}
      <br />
      {ostukorv.length > 0 && <div>Kokku: {arvutaHinnadKokku()} €</div>}       
        
        
    </div>
  )
}

export default Ostukorv