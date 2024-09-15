import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"

function Tagasiside() {
    const [tagasided, muudaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const tagasisideRef = useRef();

    const lisa = () => {
      tagasided.push(tagasisideRef.current.value);
      muudaTagasisided(tagasided.slice());   
   }

   const kustuta = (index) => {
    tagasided.splice(index,1);
    muudaTagasisided(tagasided.slice());
 }

  return (
    <div>
        <div>Tagasiside:
            <br /><br />
            {tagasided.map(tagasiside => <div>{tagasiside}</div>)}
        </div><br />

        {tagasided.map((tagasiside, jrknr)=>
       <div>
          {jrknr}. {tagasiside}
           <button onClick={() => kustuta(jrknr)}>x</button>
       </div>)}


        <label>Lisa uus tagasiside</label>
        <input ref={tagasisideRef} type="text" />
        {/* <div>Kokku: {tagasided.length}</div> */}
        <button onClick={lisa}>Sisesta</button><br /><br />

      <Link to="/">
            <button>Tagasi</button>
      </Link> 


    </div>
  )
}

export default Tagasiside