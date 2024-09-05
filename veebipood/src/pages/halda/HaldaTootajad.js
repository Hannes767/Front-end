import React,{useRef, useState} from 'react'
import tootajadFailist from "../../data/tootajad.json"

function HaldaTootajad() {
   const [tootajad, muudaTootajaid] = useState(tootajadFailist.slice());
   const tootajaRef = useRef();

   const kustuta = (index) => {
      tootajadFailist.splice(index,1);
      muudaTootajaid(tootajadFailist.slice());
      }

   const lisa = () => {
      tootajadFailist.push(tootajaRef.current.value);
      muudaTootajaid(tootajadFailist.slice());
      }


return (
<div>
   <label>Töötaja nimi</label><br />
   <input ref={tootajaRef} type="text" /><br />
   <div>Kokku: {tootajad.length}</div>
   <button onClick={lisa}>Lisa</button><br /><br />

   {tootajad.map((tootaja, mitmes)=>
       <div>
          {mitmes}. {tootaja}
           <button onClick={() => kustuta(mitmes)}>x</button>
       </div>)}

       
   {tootajad.length > 0 && <button onClick={() => muudaTootajaid([])}>Tühjenda</button>}
   <br/><br/>
</div>
)
}

export default HaldaTootajad