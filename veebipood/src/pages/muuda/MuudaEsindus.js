import React, {useRef} from 'react'
import { useParams, Link } from "react-router-dom"
import esindusedFailist from "../../data/keskused.json"

function MuudaEsindus() {
    /* App.js: muuda-esindus/:jrknr */
    const {jrknr} = useParams();
    const vastus = esindusedFailist[jrknr];
    const nimiRef = useRef();
    const telefonRef = useRef();
    const aadressRef = useRef();

    const muuda = () => {
      esindusedFailist[jrknr] = {
        "nimi": nimiRef.current.value,
        "tel": telefonRef.current.value,
        "aadr": aadressRef.current.value
      }
    }

    //kui ei leia õiget ülesse, siis tuleb vastuse koha peale tühjus
    //kui on string, siis näitas tühjana
    //kui on objekt, siis viskab errori
    //errori leiab brauseri consolist.

    if (vastus === undefined) {
      //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
    return <div>Esindust ei leitud</div>
    }

  return (
    <div>
        <label>Esinduse nimi</label><br />
        <input type="text" ref={nimiRef} defaultValue={vastus.nimi}/><br />
        <label>Esinduse telefon</label><br />
        <input type="text" ref={telefonRef} defaultValue={vastus.tel}/><br />
        <label>Esinduse aadress</label><br />
        <input type="text" ref={aadressRef} defaultValue={vastus.aadr}/><br />
        <Link to="/halda-esindused">
          <button onClick={muuda}>Muuda</button><br />
        </Link>
    </div>
  )
}

export default MuudaEsindus