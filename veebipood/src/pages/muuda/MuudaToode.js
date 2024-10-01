import React, {useRef} from 'react'
import { useParams, Link } from "react-router-dom"
import tootedFailist from "../../data/tooted.json"

function MuudaToode() {
  const {index} = useParams();
  const leitud = tootedFailist[index];
  const markRef = useRef();
  const mudelRef = useRef();
  const aastaRef = useRef();

  const muuda = () => {
    tootedFailist[index] = {       
      "mark": markRef.current.value,
      "mudel": mudelRef.current.value,
      "aasta": aastaRef.current.value,       
    }    
  }

  if (leitud === undefined) {
    //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
    return <div>Autot ei leitud</div>
  }

  return (
    <div>
      <label>Mark</label><br />
      <input type="text" ref={markRef} defaultValue={leitud.mark} /><br />
      <label>Mudel</label><br />
      <input type="text" ref={mudelRef} defaultValue={leitud.mudel} /><br />
      <label>Aasta</label><br />
      <input type="number" ref={aastaRef} defaultValue={leitud.aasta} /><br />

      <Link to="/halda-tooted">
        <button onClick={muuda}>Muuda</button><br />
      </Link>
    </div>
  )
}

export default MuudaToode