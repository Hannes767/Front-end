import React, { useRef } from 'react'
import { useParams, Link } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"


function MuudaHind() {
    const {index} = useParams();
    const leitud = hinnadFailist[index];
    const numberRef = useRef();

    const muuda = () => {
      hinnadFailist[index] = {"number": numberRef.current.value, "lisaja": "Toomas"};
    }

    if (leitud === undefined) {
      //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
    return <div>Hinda ei leitud</div>
    }

  return (
    <div>
        <label>Hind</label><br />
        <input ref={numberRef} type="text" defaultValue={leitud.number} /><br />
        <Link to="/halda-hinnad">
          <button onClick={muuda}>Muuda</button><br />
        </Link>
    </div>
  )
}

export default MuudaHind