import React, {useState, useRef} from 'react'
import hinnadJson from "../../data/hinnad.json"
import {Link} from "react-router-dom"

function HaldaHinnad() {
    const [hinnad, muudaHinnad] = useState(hinnadJson.slice());
    const hindRef = useRef();


    const kustuta = (index) => {
        hinnadJson.splice(index,1);
        muudaHinnad(hinnadJson.slice());
    }

    const lisa = () => {
        hinnadJson.push(hindRef.current.value);
        muudaHinnad(hinnadJson.slice());
    }

  return (
    <div>
        <label >Hind</label><br />
        <input ref={hindRef} type="number" /><br />
        <button onClick={lisa}>Lisa</button>

      {hinnad.map((hind, index) =>
        <div>
            {hind}
           <button onClick={() => kustuta(index)}>x</button>
           <Link to= {"/muuda-hind/" + index}>
              <button>Muuda</button>
           </Link>
        </div>)}

    </div>
  )
}

export default HaldaHinnad