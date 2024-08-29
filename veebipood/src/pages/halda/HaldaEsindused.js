import React, {useState, useRef} from 'react'

function HaldaEsindused() {
    
    const [keskused, muudaKeskused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali",
         "Vesse", "Kristiine", "Järveotsa"]);
    const keskusRef = useRef();

    const kustuta = (index) => {
        keskused.splice(index,1);
        muudaKeskused(keskused.slice());
    }

    const lisa = () => {
        keskused.push(keskusRef.current.value);
        muudaKeskused(keskused.slice());

    }

    
  return (
    <div>
        <label>Keskuse nimi</label><br />
        <input ref={keskusRef} type="text" /><br />
        <button onClick={lisa}>Lisa</button><br />

        {keskused.map((keskus, index )=>
            <div>
               {index}. {keskus}
                <button onClick={() => kustuta(index)}>x</button>
            </div>)}
    </div>
  )
}

export default HaldaEsindused