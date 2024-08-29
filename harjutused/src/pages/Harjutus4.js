import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Harjutus4() {
    const [sisselogitud, muudaSisselogitud] = useState("ei");
    const paroolRef = useRef();
    const [sonum, muudaSonum] = useState("Sõnum");
    const kasutajaNimiRef = useRef();

    // const lisa = () => {
    //     if (paroolRef.current.value === "") {
    //       muudaSisselogitud("Nime pole sisestatud");
    //       return; // funktsioon lõppeb
    //     }

    //     if (paroolRef.current.value.startsWith("o", 3) === false) {
    //         muudaSonum("Neljas täht ei ole O!");
    //         return;
    //     }
       
    //     muudaSisselogitud(paroolRef.current.value);
    // }

    function logiSisse() {
      // if (paroolRef.current.value === "123") {      
      //   muudaSisselogitud("jah");
      //   muudaSonum(kasutajaNimiRef.current.value +  " ,oled sisselogitud");
      // } else {
      //   muudaSonum("Vale parool");
      // }
      

      

      if (paroolRef.current.value.length <= 5) {
        muudaSonum("Parool on liiga lühike!")        
        toast.error("Parool on liiga lühike");
        return;
      }     
        


      if (paroolRef.current.value === paroolRef.current.value.toLowerCase()) {
          muudaSonum("Paroolis peab olema vähemalt üks suur ja üks väike täht!")
          toast.error("Vaja on vähemalt ühte suurt ja väikest tähte");
          return;
      }

      

      if (paroolRef.current.value === paroolRef.current.value.toUpperCase()) {
              muudaSonum("Paroolis peab olema vähemalt üks suur ja üks väike täht!")
              toast.error("Vaja on vähemalt ühte väikest ja suurt tähte");
          return;
                }
    
            

      if (paroolRef.current.value.includes("%") === true) {
                  muudaSonum("Paroolis ei tohi olla % märki");
              return;
      }
          
      
      if (paroolRef.current.value === "Aa1234") {     //muuda parool pikemaks ja if-ide lõppu  
        muudaSisselogitud("jah");
        muudaSonum(kasutajaNimiRef.current.value +  " ,oled sisselogitud");
        toast.success("Sees!");
        
        return;
      } 


  }
  
    function logiValja() {
      muudaSisselogitud("ei");
      muudaSonum("Oled väljalogitud");
    }

  return (
    <div>
        <Link to="/">
            <button>Harjutus4</button>
        </Link>
        <br /><br />
        

        {/* <div>{lisa}</div> */}
        <div>{sonum}</div>
      {sisselogitud === "ei" && <div >
        <label>Kasutajanimi</label><br />
        <input ref={kasutajaNimiRef} type="text" /><br />
        <label>Parool</label><br />
        <input ref={paroolRef} type="password" /><br />
      </div>}

      {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}

      <br /><br />

        {/* <div>{sonum}</div>
        <div>{sisselogitud}</div>
        <label>Nimi</label>
        <input ref={paroolRef} type="text" />
        <button onClick={lisa}>Logi sisse</button> */}

          <ToastContainer
          position="bottom-right"
          autoClose={4000}          
          theme="dark"
          />

    </div>
  )
}

export default Harjutus4