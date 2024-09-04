import React, {useRef, useState} from 'react'
import { Link } from "react-router-dom"

function PikkuseKontroll() {
    const [parool, muudaParool] = useState("");
    const paroolRef = useRef();
    const [sonum, muudaSonum] = useState("");

    const sisestaParool = () => {
    if (paroolRef.current.value.length < 8) {
        muudaSonum("Parool peab olema vähemalt 8 märki pikk!") 
        muudaParool(paroolRef.current.value);      
        return;
      } 
      muudaParool(paroolRef.current.value);
      muudaSonum("");
    }


  return (
    <div>
        <Link to="/">
            <button>Pikkuse kontroll</button>
        </Link>

        <div>{sonum}</div>
        <div>{parool}</div>
        <label>Parool</label>
        <input ref={paroolRef} type="password" />
        <button onClick={sisestaParool}>Sisesta parool</button>

    </div>

    
  )
}

export default PikkuseKontroll