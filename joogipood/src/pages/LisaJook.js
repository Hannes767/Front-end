import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import joogidFailist from "../joogid.json"

function LisaJook() {
    const joogidRef = useRef();

    const lisa = () => {
        joogidFailist.push(joogidRef.current.value);        
     }
  return (
    <div>
        <Link to="/">
            <button>Lisa jook</button>
        </Link>

        <br /><br />
        <label>Lisa uus jook</label>
        <input ref={joogidRef} type="text" />        
        <button onClick={lisa}>Sisesta</button><br /><br />

    </div>
  )
}

export default LisaJook