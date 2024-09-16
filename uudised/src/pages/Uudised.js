import React from 'react'
import {Link} from "react-router-dom"

function Uudised() {
  return ( 
    <div>
      <Link to="/">
         <button>Uudised</button>
      </Link>
      <br /><br />
      
      <div>Ühtegi uudist hetkel pole. Lisame õige pea!</div>
    </div>
  )
}

export default Uudised