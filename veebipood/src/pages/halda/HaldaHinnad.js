import React, {useState, useRef} from 'react'

function HaldaHinnad() {
    const [hinnad, muudaHinnad] = useState([5, 99, 42, 8, 491, 71, 123, 321, 2120, 33])
    const hindRef = useRef();


    const kustuta = (index) => {
        hinnad.splice(index,1);
        muudaHinnad(hinnad.slice());
    }

    const lisa = () => {
        hinnad.push(hindRef.current.value);
        muudaHinnad(hinnad.slice());
    }

  return (
    <div>
        <label >Hind</label><br />
        <input ref={hindRef} type="number" /><br />
        <button onClick={lisa}>Lisa</button>

      {hinnad.map((hind, index) =>
        <div>
            {hind}
           <button onClick={() => kustuta(index)}>x</button>
        </div>)}

    </div>
  )
}

export default HaldaHinnad