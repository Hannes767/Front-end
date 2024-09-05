import React from 'react'
import { Link } from 'react-router-dom'

function Avaleht() {
  return (
    <div>
        <Link to="/">
            <button>Avaleht</button>
        </Link>

        <Link to="/harjutused1">
            <button>Harjutused1</button>
        </Link>

        <Link to="/harjutused2">
            <button>Harjutused2</button>
        </Link>

        <Link to="harjutused-uurimine">
            <button>Harjutus Uurimine</button>
        </Link>

        <Link to="harjutus4">
            <button>Harjutus4</button>
        </Link>

        <Link to="months">
            <button>Months</button>
        </Link>

        <Link to="animals">
            <button>Animals</button>
        </Link>

        <Link to="words">
            <button>Words</button>
        </Link>

        <Link to="sonajaarv">
            <button>Sõna ja arv</button>
        </Link>

        <Link to="toesusvaartused">
            <button>Tõesusväärtused</button>
        </Link>

        <Link to="algabkindlatahemargiga">
            <button>Algab kindla tähemärgiga</button>
        </Link>

        <Link to="pikkusekontroll">
            <button>Pikkuse kontroll</button>
        </Link>

        <Link to="books">
            <button>Books</button>
        </Link>


    </div>
  )
}

export default Avaleht