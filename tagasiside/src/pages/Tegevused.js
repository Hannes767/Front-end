import React, { useState } from 'react'
import { Link } from "react-router-dom"
import tegevusteFail from "../tegevused.json"

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);
    }

    const n2itaK6iki = () => {
        uuendaTegevused(tegevusteFail);
    }

  return (
    <div>
        <Link to="/">
            <button>Tegevused</button>
      </Link>

      <div>Näita kogu tegevuse arvu .length abil</div>
      <button onClick={() => n2itaKasutajaYks()}>Kuva kõik kasutaja ID 1 tegevused</button>
      <button>Kuva kõik kasutaja ID 2 tegevused</button>
      <button>Kuva kõik kasutaja ID 3 tegevused</button>
      <button>Kuva kõik valmis tegevused</button>
      <button>Kuva kõik mittevalmis tegevused</button>
      <button>Kuva kõik "t" algavad tegevused</button>
      <button>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
      <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>

      {tegevused.map(element =>
        <div key={element.userId}>
            <div>{element.userId}</div>
            <div>{element.id}</div>
            <div>{element.title}</div>
            <div>{element.completed}</div><br />
        </div>
      )}
    </div>
  )
}

export default Tegevused