import React from 'react'
import { Link } from "react-router-dom"

function Avaleht() {
  return (
    <div>
       <Link to="/">
            <button>Avaleht</button>
        </Link>

        <Link to="/tagasiside">
            <button>Tagasiside</button>
        </Link>

        <Link to="/tagasiside-andjad">
            <button>Tagasiside andjad</button>
        </Link> 
    </div>
  )
}

export default Avaleht