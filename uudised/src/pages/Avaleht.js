import React from 'react'
import {Link} from "react-router-dom"

function Avaleht() {
  return (
    <div>

      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>
    </div>
  )
}

export default Avaleht