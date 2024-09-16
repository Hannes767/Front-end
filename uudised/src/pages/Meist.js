import React, {useState} from 'react'
import {Link} from "react-router-dom"
import tootajadFailist from "../tootajad.json"
// import '../App.css';

function Meist() {
  // const[kontakt, n2itaKontakt] = useState("");
  // const[nimi, n2itaNimi] = useState("")

  

  const [kontakt, muudaKontakt] = useState("");
  const [nimi, muudaNimi] = useState();

  const tootajad = tootajadFailist;

  const [valitud, uuendaValitud] = useState("");

  const v6tayhendust = (tootaja) => {
    muudaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);

  }

  return ( 
    
    <div>
        <Link to="/">
            <button>Meist</button>
        </Link>        
        <br /><br />

        <div>Meie inimesed</div>

        {/* VALITUD INIMESED: {valitud} */}
        <br />

        <div>{tootajad.map((tootaja, jrknr)=>
          <div className={tootaja.nimi === valitud ? 'valitud' : undefined} key={tootaja.nimi}>
            {jrknr + 1}. {tootaja.nimi}: {tootaja.ala} <br />
            {/* <button onClick={()=> {muudaKontakt(tootaja.telefon); muudaNimi(tootaja.nimi)}}>Võta ühendust</button><br /><br /> */}
            {/* <button onClick={()=> v6tayhendust(tootaja)}>Võta ühendust</button><br /><br /> */}
            <button onClick={()=> {v6tayhendust(tootaja); muudaNimi(tootaja.nimi)}}>Võta ühendust</button><br /><br />
          </div>)}
        </div>

        {/* <div>Arvo Pärt</div>        
        <div>Uudisteklippide taustamuusika</div>
        <button onClick={() => {n2itaKontakt(42985690238); n2itaNimi("Arvo Pärt")}}>Võta ühendust</button>
        <br /><br />
        <div>Kelli Sildaru</div>        
        <div>Püstolreporter</div>
        <button onClick={() => {n2itaKontakt(62896482); n2itaNimi("Kelli Sildaru")}}>Võta ühendust</button>
        <br /><br />
        <div>Edward von Lõngus</div>
        <div>Uudiste kujundamine</div>
        <button onClick={() => {n2itaKontakt(459829855); n2itaNimi("Edward von Lõngus")}}>Võta ühendust</button>
        <br /><br />
        <div>Kerli Kõiv</div>        
        <div>Välisturgude spetsialist</div>
        <button onClick={() => {n2itaKontakt(86923869028); n2itaNimi("Kerli Kõiv")}}>Võta ühendust</button>
        <br /><br />
        {kontakt !=="" && <div>{nimi} kontakt on {kontakt}</div>} */}
        <br />
        {/* {kontakt === "" && <div>Tema kontakt on: {kontakt}</div>} */}
        {kontakt !== "" || <div>Tema kontakt on: {kontakt}</div>}
        {kontakt !== "" && <div>{nimi} kontakt on: {kontakt}</div>}
    </div>
  )
}

export default Meist
