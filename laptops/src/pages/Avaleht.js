import React from 'react'
import{Link} from "react-router-dom"

function Avaleht() {
  return (
    <div className='avaleht-text'>
        <div>Tere</div>
        <div>Siin lehel saad sülearvuteid vaadata ja lisada.</div>
        
        <Link to= "/all">
          <button>Vaata sülearvuteid</button>
        </Link>
        <Link to= "/add">
          <button>Lisa sülearvuti</button>
        </Link>
    </div>
  )
}

export default Avaleht