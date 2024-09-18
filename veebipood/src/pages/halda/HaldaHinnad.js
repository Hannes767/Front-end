import React, {useState, useRef} from 'react'
import hinnadJson from "../../data/hinnad.json"
import {Link} from "react-router-dom"

function HaldaHinnad() {
    const [hinnad, muudaHinnad] = useState(hinnadJson.slice());
    const hindRef = useRef();
    const otsinguRef = useRef();


    const kustuta = (index) => {
        hinnadJson.splice(index,1);
        muudaHinnad(hinnadJson.slice());
    }

    const lisa = () => {
        hinnadJson.push({"number": hindRef.current.value, "lisaja": "Peeter"});
        muudaHinnad(hinnadJson.slice());
    }

    const otsiHindadest = () => {
      const vastus = hinnadJson.filter(hind => String(hind.number).includes(otsinguRef.current.value));
      muudaHinnad(vastus);
    }
        // includes ei saa numbrile teha, tuleb teha stringiks.
  return (
    <div>

      <input type="text" ref={otsinguRef} onChange={otsiHindadest} />

      <br /><br />
        <label >Hind</label><br />
        <input ref={hindRef} type="number" /><br />
        <button onClick={lisa}>Lisa</button>

        <table className='halda'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Number</th>
              <th>Lisaja</th>              
              <th>Tegevused</th>
            </tr>
          </thead>
          <tbody>
            {hinnad.map((hind, index) =>
            <tr key={index}>
              <td>{index}</td>
              <td>{hind.number}</td>
              <td>{hind.lisaja}</td>
              <td>
                <button onClick={() => kustuta(index)}>x</button>
                <Link to= {"/muuda-hind/" + index}>
                <button>Muuda</button>
                </Link>
              </td>
            </tr>)}
          </tbody>
        </table>

    </div>
  )
}

export default HaldaHinnad