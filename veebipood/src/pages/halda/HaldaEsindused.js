import React, {useState, useRef} from 'react'
import keskusedJSON from "../../data/keskused.json";
import {Link} from "react-router-dom";

function HaldaEsindused() {
    
    const [keskused, muudaKeskused] = useState(keskusedJSON.slice());
    const keskusRef = useRef();

    const kustuta = (index) => {
        keskusedJSON.splice(index,1);
        muudaKeskused(keskusedJSON.slice());
    }

    const lisa = () => {
        // keskused.push(keskusRef.current.value) muudab ainult html-is;
        keskusedJSON.push(keskusRef.current.value);// muudab .json failis
        muudaKeskused(keskusedJSON.slice());

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
                {/* App.js: muuda-esindus/:jrknr */}
                <Link to={"/muuda-esindus/" + index}>                
                <button>Muuda</button>
                </Link>
            </div>)}
    </div>
  )
}

export default HaldaEsindused