import React from 'react'
import { Link } from 'react-router-dom'
import joogidFailist from "../joogid.json"

function Avaleht() {
    // const [joogid, uuendaJoogid] = useState(joogidFailist.slice());
    const joogid = joogidFailist.slice();

  return (
    <div>
        <Link to="/">
            <button>Avaleht</button>
        </Link>

        <Link to="/halda-jooke">
            <button>Halda jooke</button>
        </Link>

        <Link to="/lisa-jook">
            <button>Lisa jook</button>
        </Link>

        

        <br /><br />
        <div>Kokku: {joogid.length} tk</div>
        <br />

        {joogid.map((jook, jrknr) => 
        <div key={jook}>
            <Link to={"/jook/" + jrknr}>
                <span>{jrknr + 1}. {jook}</span>
            </Link>            
        </div>)}
    </div>
  )
}

export default Avaleht