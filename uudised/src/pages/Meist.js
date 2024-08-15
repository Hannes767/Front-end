import React, { useState } from 'react'

function Meist() {
  const[kontakt, n2itaKontakt] = useState("");
  const[nimi, n2itaNimi] = useState("")

  return ( <div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <br />
        <div>Arvo Pärt</div>        
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
        {kontakt !=="" && <div>{nimi} {kontakt}</div>}
    </div>
  )
}

export default Meist
