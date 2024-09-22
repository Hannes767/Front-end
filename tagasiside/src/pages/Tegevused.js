import React, { useState } from 'react'
import { Link } from "react-router-dom"
import tegevusteFail from "../tegevused2.json"

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);
    }

    const n2itaKasutajaKaks = () => {
      const vastus = tegevused.filter(element => element.userId === 2);
      uuendaTegevused(vastus);
    }

    const n2itaKasutajaKolm = () => {
      const vastus = tegevused.filter(element => element.userId === 3);
      uuendaTegevused(vastus);
    }

    const n2itaValmisTegevused = () => {
      const vastus = tegevused.filter(element => element.completed === true);
      uuendaTegevused(vastus);
    }

    const n2itaMitteValmisTegevused = () => {
      const vastus = tegevused.filter(element => element.completed === false);
      uuendaTegevused(vastus);
    }

    const n2itaSgaAlgavadTegevused = () => {
      const vastus = tegevused.filter(element => element.title.startsWith("s"));
      uuendaTegevused(vastus);
    }

    const n2itaTahemarkeRohkemKui20 = () => {
      const vastus = tegevused.filter(element => element.title.length > 20);
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

      <div>Tegevuste arv: {tegevused.length}</div>
      <button onClick={n2itaKasutajaYks}>Kuva kõik kasutaja ID 1 tegevused</button>
      <button onClick={n2itaKasutajaKaks}>Kuva kõik kasutaja ID 2 tegevused</button>
      <button onClick={n2itaKasutajaKolm}>Kuva kõik kasutaja ID 3 tegevused</button>
      <button onClick={() => n2itaValmisTegevused()}>Kuva kõik valmis tegevused</button>
      <button onClick={() => n2itaMitteValmisTegevused()}>Kuva kõik mittevalmis tegevused</button>
      <button onClick={n2itaSgaAlgavadTegevused}>Kuva kõik "s" algavad tegevused</button>
      <button onClick={n2itaTahemarkeRohkemKui20}>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
      <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>

      {tegevused.map(element =>
        <div key={element.userId}>
            <div>{element.userId}</div>
            <div>{element.id}</div>
            <div>{element.title}</div>
            <div>{element.completed ? "Valmis" : "Mittevalmis"}</div><br />
        </div>
      )}
    </div>
  )
}

export default Tegevused