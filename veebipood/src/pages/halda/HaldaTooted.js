import React,{useState, useRef} from 'react'
import tootedFailist from "../../data/tooted.json"
import {Link} from "react-router-dom"

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());
  const markRef = useRef();
  const mudelRef = useRef();
  const aastaRef = useRef();
  const hindRef = useRef();

const kustuta = (index) => {
   tootedFailist.splice(index,1);
   muudaTooted(tootedFailist.slice());
}

const lisa = () => {
   tootedFailist.push(
      {
         "mark": markRef.current.value,
         "mudel": mudelRef.current.value,
         "aasta": aastaRef.current.value,
         "hind": hindRef.current.value
      }
   );
   muudaTooted(tootedFailist.slice());

}


return (
<div>
   <label>Auto mark</label><br />
   <input ref={markRef} type="text" /><br />
   <label>Auto mudel</label><br />
   <input ref={mudelRef} type="text" /><br />
   <label>Tootmisaasta</label><br />
   <input ref={aastaRef} type="number" /><br />
   <div>Kokku: {tooted.length}</div>
   <button onClick={lisa}>Lisa</button><br /><br />

   {tooted.map((toode, jrknr)=>
       <div key={jrknr}>
          {jrknr}. {toode.mark} {toode.mudel} : {toode.aasta}
           <button onClick={() => kustuta(jrknr)}>x</button>
           <Link to= {"/muuda-toode/" + jrknr}>
              <button>Muuda</button>
           </Link>
       </div>)}

       
        {tooted.length > 0 && <button onClick={() => muudaTooted([])}>Tühjenda</button>}
        <br/><br/>
</div>
)
}

export default HaldaTooted