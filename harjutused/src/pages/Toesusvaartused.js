import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Toesusvaartused() {
    const [sisselogitud, muudaSisselogitud] = useState(true);
    

  return (
    <div>
        <Link to="/">
            <button>Tõesusväärtused</button>
        </Link>
        <br/><br/>
        <div>{sisselogitud === true && "Kasutaja on sisse logitud"}</div>
        <div>{sisselogitud === false && "Kasutaja pole sisse logitud" }</div>
        
        <button onClick = {() => muudaSisselogitud(!sisselogitud)}>Logi sisse</button>  
             
    </div>
  )
}

export default Toesusvaartused