import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import ostukorvFailist from "../../data/ostukorv.json";

//värvid
//tumesinine - JavaScriptis liigitus, htlm liigitus
//function const


function Kinkekaart() {
    const [summa, muudaSumma] = useState(20);
    const [kogus, muudaKogus] = useState(1);
    const emailViide = useRef();
    // const [sonum, muudaSonum] = useState("");
    const showEmailRef = useRef();
    const [showEmail, setShowEmail] = useState(false);

    //function lisa() {
    // }

    const lisa = () => {
      // current - kontrollib kas ta on HTMLs
      // null - tühjus, teab tüüpi, mis see tühjus on
      // HTMLis olek on tühjus
      //undefined - tühjus täielik
        if (emailViide.current === undefined){
          //if (showEmailRef.current.checked === false)
            toast.info("Lisasid ostukorvi, aga ilma e-mailita")
          return;
        }

        if (emailViide.current.value === "") {
          toast.error("Tühja e-mailiga ei saa ostukorvi lisada!");

          return; // funktsioon lõppeb
        }

        if (emailViide.current.value[4] !== "@") { //.value.chartAt(4) === "@"
          toast.error("Viies täht peab olema @ märk");// .startsWith("@", 4) === false

          return; // funktsioon lõppeb
        }

          // ostukorvFailist.push({"nimi":"Kinkekaart "+ kogus + "tk", "hind": summa * kogus + " eurot", "pilt": "pilt.jpg", "aktiivne": true});
          ostukorvFailist.push({
            //"nimi":"Kinkekaart "+ kogus + "tk"
            "mark": `Kinkekaart ${summa}€ - ${kogus} tk`,
            "hind": summa * kogus, 
            "pilt": "pilt.jpg",
            "aktiivne": true});
          toast.success("Ostukorvi lisatud!");
          // muudaSonum("Ostukorvi lisatud");
          //back-tick, siia sisse saab muutujaid kirjutada sõnade vahele
      }

      const muudaShowEmail = () => {
        setShowEmail(showEmailRef.current.checked);//checkboxist lugemine
      }
    
      

  return (
    <div>
        <button className={summa === 20 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(20)}>20 eurot</button>
        <button className={summa === 50 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(50)}>50 eurot</button>
        <button className={summa === 100 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(100)}>100 eurot</button>

        <div>Kinkekaart {summa} eurot</div>

        <br /><br />

        <button disabled={kogus === 1} onClick={ () => muudaKogus(kogus - 1)} >-</button>
        <span>{kogus} tk</span>
        {kogus !== 0 && <button onClick={ () => muudaKogus(kogus + 1)}>+</button>}

        <div>Kokku: {summa * kogus} eurot</div>

        <br /><br />

        <input onClick={muudaShowEmail} ref={showEmailRef} id="email_checkbox" type="checkbox" />
        <label htmlFor="email_checkbox">Saada kinkekaart e-mailile</label>

        <br />
        {/* <div>{sonum}</div> */}

        { showEmail === true &&
        <React.Fragment>
          <label htmlFor="email">E-mail</label>
          <input id="email" ref={emailViide} type="text" />
        </React.Fragment>}
        {/* React Fragment - tühjus, sama mis tühjad nokad */}

        <br /><br />
        <button onClick={lisa}>Lisa ostukorvi</button>

        <ToastContainer
          position="bottom-right"
          autoClose={4000}          
          theme="dark"
          />



    </div>
  )
}

export default Kinkekaart