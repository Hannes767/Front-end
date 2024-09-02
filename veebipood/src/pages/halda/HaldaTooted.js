import React,{useState, useRef} from 'react'

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(["Audi", "BMW", "Skoda", "Kia", "Toyota", "Mazda"]);
  const tootajaRef = useRef();

const kustuta = (index) => {
   tooted.splice(index,1);
   muudaTooted(tooted.slice());
}

const lisa = () => {
   tooted.push(tootajaRef.current.value);
   muudaTooted(tooted.slice());

}


return (
<div>
   <label>Toote nimetus</label><br />
   <input ref={tootajaRef} type="text" /><br />
   <div>Kokku: {tooted.length}</div>
   <button onClick={lisa}>Lisa</button><br /><br />

   {tooted.map((toode, jrknr)=>
       <div>
          {jrknr}. {toode}
           <button onClick={() => kustuta(jrknr)}>x</button>
       </div>)}

       
        {tooted.length > 0 && <button onClick={() => muudaTooted([])}>Tühjenda</button>}
        <br/><br/>
</div>
)
}

export default HaldaTooted