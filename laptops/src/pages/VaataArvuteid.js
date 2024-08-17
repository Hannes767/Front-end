import React from 'react'
import{Link} from "react-router-dom"

function VaataArvuteid() {
  return ( 
    <div>
    <div>Vaata arvuteid</div>
    <Link to="/">
    <button>Tagasi</button>
    </Link>
    </div>
  )
}

export default VaataArvuteid