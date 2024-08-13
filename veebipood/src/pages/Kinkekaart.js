import React, { useRef, useState } from 'react'

//värvid
//tumesinine - JavaScriptis liigitus, htlm liigitus
//function const


function Kinkekaart() {
    const [summa, muudaSumma] = useState(20);
    const [kogus, muudaKogus] = useState(1);
    const emailViide = useRef();
    const [sonum, muudaSonum] = useState("");

    //function lisa() {
    // }

    const lisa = () => {
        if (emailViide.current.value === "") {
          muudaSonum("Tühja e-mailiga ei saa ostukorvi lisada!");
          return; // funktsioon lõppeb
        }
          muudaSonum("Ostukorvi lisatud");
      }

    

  return (
    <div>
        <button className={summa === 20 ? "summa aktiivne" : "summa"} onClick={() => muudaSumma(20)}>20 eurot</button>
        <button className={summa === 50 ? "summa aktiivne" : "summa"} onClick={() => muudaSumma(50)}>50 eurot</button>
        <button className={summa === 100 ? "summa aktiivne" : "summa"} onClick={() => muudaSumma(100)}>100 eurot</button>

        <div>Kinkekaart {summa} eurot</div>

        <br /><br />

        <button disabled={kogus === 1} onClick={ () => muudaKogus(kogus - 1)} >-</button>
        <span>{kogus} tk</span>
        {kogus !== 1 && <button onClick={ () => muudaKogus(kogus + 1)}>+</button>}

        <div>Kokku: {summa * kogus} eurot</div>

        <br /><br />

        <div>{sonum}</div>
        <label>E-mail</label>
        <input ref={emailViide} type="text" />
        <button onClick={lisa}>Lisa ostukorvi</button>

    </div>
  )
}

export default Kinkekaart