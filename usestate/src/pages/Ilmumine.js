import React, { useState } from 'react'

function Ilmumine() {
    const [n2itaLisainfot, uuendaN2itaLisainfot] = useState(false);

  return (
    <div>
        <div onClick={() => uuendaN2itaLisainfot(!n2itaLisainfot)}>
            Sooduskoodi sisestamine ja makse arvutuskäik..
            {n2itaLisainfot === true && <span>A</span>}
            {n2itaLisainfot === false && <span>V</span>}
        </div>
        {n2itaLisainfot === true && <div>Tellitavad tooted ja teenused
            Lisatud teenused
Family pakett

Soodustus kuni 15.09.2024	
0,00 €/kuu

39,65 €/kuu


Sulgen
Videolaenutus

Sisaldub paketis

Sulgen
Salvestamine

Sisaldub paketis

Sulgen
National Geographic keskkond

Sisaldub paketis

Sulgen
Lastele

Sisaldub paketis

Sulgen
5 vaatajakohta

Sisaldub paketis

Sulgen
Inspira+

Sisaldub paketis

Sulgen
Go3 Film / Paramount+

Sisaldub paketis

Sulgen
FX NOW

Sisaldub paketis

Sulgen
HBO
        </div> }
    </div>
  )
}

export default Ilmumine