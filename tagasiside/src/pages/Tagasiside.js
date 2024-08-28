import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Tagasiside() {
    const [tagasided, määraTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])

  return (
    <div>
        <div>Tagasisided:
            {tagasided.map(element => <div>{element}</div>)}

        </div>

      <Link to="/">
            <button>Tagasi</button>
        </Link> 


    </div>
  )
}

export default Tagasiside