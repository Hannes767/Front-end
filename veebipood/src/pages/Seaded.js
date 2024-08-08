import React, { useState } from 'react'

function Seaded() {
    const [keel, muudaKeel] = useState("est");
  return (
    <div>
        <div>Hetkel aktiivne keel: {keel}</div>
        <button onClick={() => muudaKeel("est")}>EST</button>
        <button onClick={() => muudaKeel("eng")}>ENG</button>
        <button onClick={() => muudaKeel("rus")}>RUS</button>

        {keel === "est" && <div>Leht on eesti keelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Страница на русском языке</div>}
    </div>
  )
}

export default Seaded