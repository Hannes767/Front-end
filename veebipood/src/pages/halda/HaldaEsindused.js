import React, {useState, useRef} from 'react'
import keskusedJSON from "../../data/keskused.json";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function HaldaEsindused() {
    
    const [keskused, muudaKeskused] = useState(keskusedJSON.slice());
    const keskusRef = useRef();
    const telefonRef = useRef();
    const aadressRef = useRef();
    const otsinguRef = useRef();

    const kustuta = (index) => {
        keskusedJSON.splice(index,1);
        muudaKeskused(keskusedJSON.slice());
        toast.success("Keskus kustutatud!");
    }

    const lisa = () => {
        // keskused.push(keskusRef.current.value) muudab ainult html-is;
        keskusedJSON.push(
          {
            "nimi": keskusRef.current.value,
            "tel": telefonRef.current.value,
            "aadr": aadressRef.current.value
            }
           ); // muudab .json failis
        muudaKeskused(keskusedJSON.slice());

    }

    const otsiEsindustest = () => {
      const vastus = keskusedJSON.filter(keskus => keskus.nimi.includes(otsinguRef.current.value));
      muudaKeskused(vastus);
    }

    
  return (
    <div>
      <input ref={otsinguRef} onChange={otsiEsindustest} type="text" />
      <br /><br />

        <label>Keskuse nimi</label><br />
        <input ref={keskusRef} type="text" /><br />
        <label>Keskuse telefon</label><br />
        <input ref={telefonRef} type="text" /><br />
        <label>Keskuse aadress</label><br />
        <input ref={aadressRef} type="text" /><br />
        <button onClick={lisa}>Lisa</button><br />

        <table className='halda'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nimi</th>
              <th>Telefon</th>
              <th>Aadress</th>
              <th>Tegevused</th>
            </tr>
          </thead>
          <tbody>
              {keskused.map((keskus, index)=>
                <tr key={keskus.nimi}>
                  <td>{index}.</td>
                  <td>{keskus.nimi}</td>
                  <td>{keskus.tel}</td>
                  <td>{keskus.aadr}</td>
                  <td>
                    <button onClick={() => kustuta(index)}>x</button>
                    {/* App.js: muuda-esindus/:jrknr */}
                    <Link to={"/muuda-esindus/" + index}>                
                      <button>Muuda</button>
                    </Link>
                  </td>
                </tr>)}
          </tbody>
        </table>

            <ToastContainer
              position="bottom-right"
              autoClose={4000}          
              theme="dark"
            />
    </div>
  )
}

export default HaldaEsindused