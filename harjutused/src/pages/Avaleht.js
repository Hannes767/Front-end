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


    </div>
  )
}

export default Avaleht