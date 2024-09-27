import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../../data/tooted.json"

function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa juurde üks auto");    
    const markRef = useRef();
    const mudelRef = useRef();
    const aastaRef = useRef();
    // const hindRef = useRef(); all puudub refi vastuvõtt!!!
    

    const lisa = () => {
      tootedFailist.push(
         {
            "mark": markRef.current.value,
            "mudel": mudelRef.current.value,
            "aasta": aastaRef.current.value,
            "hind": 78000,
            "pilt": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230511115728_20220609053905_Skoda%20Superb%20_2_.jpg&w=700&c=1",
            "aktiivne": true,
          }
      );
      // muudaTooted(tootedFailist.slice());
      muudaSonum("Edukalt toode lisatud!")
      toast.success("Edukalt toode lisatud!")

   }

    // function sisesta() {
    //   //nimiRef.current.value; saame ref seest väärtust kätte
    //   // true ? _ : _ ternary operator
    //   if (nimiRef.current.value === "") {
    //     muudaSonum("Tühja nimega toodet ei saa lisada");
    //     toast.error("Tühja nimega toodet ei saa lisada");
    //     } else {
    //     muudaSonum("Toode lisatud: " + nimiRef.current.value);
    //     toast.success("Toode lisatud: " + nimiRef.current.value);
    //     }
    // }

  return (
    <div>
        <div>Sõnum: {sonum}</div>
        {/* <label>Toote nimi</label><br />
        <input ref={nimiRef} type="text" /><br />
        <button onClick={sisesta}>Sisesta</button><br /> */}

      <label>Auto mark</label><br />
      <input ref={markRef} type="text" /><br />
      <label>Auto mudel</label><br />
      <input ref={mudelRef} type="text" /><br />
      <label>Tootmisaasta</label><br />
      <input ref={aastaRef} type="number" /><br />
      {/* <div>Kokku: {tooted.length}</div> */}
      <button onClick={lisa}>Lisa</button><br /><br />

        <ToastContainer
          position="bottom-right"
          autoClose={4000}          
          theme="dark"
          />

    </div>
  )
}

export default LisaToode