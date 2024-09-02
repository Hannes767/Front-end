import React,{useRef, useState} from 'react'

function HaldaTootajad() {
  const [tootajad, muudaTootajaid] = useState(["Jaan", "Jüri", "Mari",
    "Vello", "Kristiina", "Jane"]);
const tootajaRef = useRef();

const kustuta = (index) => {
   tootajad.splice(index,1);
   muudaTootajaid(tootajad.slice());
}

const lisa = () => {
   tootajad.push(tootajaRef.current.value);
   muudaTootajaid(tootajad.slice());

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