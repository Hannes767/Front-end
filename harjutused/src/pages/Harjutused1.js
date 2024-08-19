import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react"

function Harjutused1() {
    const [kasutajanimi, muudakasutajaNimi] = useState("Jaan");
    const [kogus, muudaKogus] = useState(5);
    const [teade, muudaTeade] = useState("Tere");
    const [vanus, muudaVanus] = useState(65);
    // const [sonum, muudaSonum] = useState("Oled pensionil");
    

    
        // if (vanus < 65) {
        //   muudaVanuseTeade("Oled tööealine");
        //   return; // funktsioon lõppeb
        // }
        //   muudaVanuseTeade("Oled tööealine");
    
    // const erinevVanus = vanus >= 65 ! "Oled pensionil" : "Oled tööealine";

  return (
    <div>
        <Link to="/">
            <button>Harjutused1</button>
        </Link>
        <br /><br />

        <div>{kasutajanimi}</div>
        <button onClick={() => muudakasutajaNimi("Jüri")}>Muuda kasutajanime</button>
        <br /><br />

        <div>{kogus}</div>
        <button onClick={() => muudaKogus(kogus * 3)}>Muuda kogus</button>
        <br /><br />

        {teade === "Tere Maailm!" && <div>{teade}</div>}
        <button onClick={() => muudaTeade(teade + " Maailm!")}>Tere maailm!</button>
        <br /><br />

        <div>{vanus}</div>
        {/* <div>{sonum}</div> */}
       
        {vanus >= 65 && "Oled pensionil"}
        {vanus < 65 && "Oled tööealine"}

        {/* {vanus >= 65 ! () => muudaSonum("Oled pensionil") : () => muudaSonum("Oled tööealine")} */}
            
        
        <br />

        
        <button onClick={() => muudaVanus(vanus - 1)}>-</button>
        <button onClick={() => muudaVanus(vanus + 1)}>+</button>
        
        


    </div>
  )
}

export default Harjutused1