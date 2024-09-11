import React, {useRef} from 'react'
import { useParams, Link } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"

function MuudaTootaja() {
  const {index} = useParams();
  const leitud = tootajadFailist[index];
  const nimiRef = useRef();
  const ametRef = useRef();

  const muuda = () => {
    tootajadFailist[index] = {
      "nimi": nimiRef.current.value,
      "amet": ametRef.current.value
    }
  }

  if (leitud === undefined) {
    //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
    return <div>Töötajat ei leitud</div>
    }

  return (
    <div>
      <label>Töötaja</label><br />
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /><br />
      <label>Amet</label><br />
      <input type="text" ref={ametRef} defaultValue={leitud.amet} /><br />
      <Link to="/halda-tootajad">
        <button onClick={muuda}>Muuda</button><br />
      </Link>

    </div>
  )
}

export default MuudaTootaja