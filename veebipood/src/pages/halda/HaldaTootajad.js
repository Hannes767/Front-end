import React,{useRef, useState} from 'react'
import tootajadFailist from "../../data/tootajad.json"
import {Link} from "react-router-dom"

function HaldaTootajad() {
   const [tootajad, muudaTootajaid] = useState(tootajadFailist.slice());
   const nimiRef = useRef();
   const ametRef = useRef();
   const otsinguRef = useRef();

   const kustuta = (index) => {
      tootajadFailist.splice(index,1);
      muudaTootajaid(tootajadFailist.slice());
      }

   const lisa = () => {
      tootajadFailist.push(
         {
            "nimi": nimiRef.current.value,
            "amet": ametRef.current.value,
         }
      )
      muudaTootajaid(tootajadFailist.slice());
      }

      const otsiTootajaid = () => {
         const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.includes(otsinguRef.current.value));
         muudaTootajaid(vastus);
       }


return (
<div>
   <input ref={otsinguRef} onChange={otsiTootajaid} type="text" />
   <br /><br />
   <label>Töötaja nimi</label><br />
   <input ref={nimiRef} type="text" /><br />
   <label>Töötaja amet</label><br />
   <input ref={ametRef} type="text" /><br />
   <div>Kokku: {tootajad.length}</div>
   <button onClick={lisa}>Lisa</button><br /><br />

   {tootajad.map((tootaja, mitmes)=>
       <div>
          {mitmes}. {tootaja.nimi} : {tootaja.amet}
           <button onClick={() => kustuta(mitmes)}>x</button>
           <Link to= {"/muuda-tootaja/" + mitmes}>
              <button>Muuda</button>
           </Link>
       </div>)}

       
   {tootajad.length> 0 && <button onClick={() => muudaTootajaid([])}>Tühjenda</button>}
   <br/><br/>
</div>
)
}

export default HaldaTootajad