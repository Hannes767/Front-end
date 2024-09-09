import React, { useRef, useState } from 'react'
import kasutajadFailist from "../../data/kasutajad.json";
import { Link } from 'react-router-dom';

function Profiil() {
    const aadressRef = useRef();
    const emailRef = useRef();
    const telefonRef = useRef();
    const[aadress, muudaAadress] = useState("Aadressi pole sisestatud");
    const[email, muudaEmail] = useState("Emaili pole sisestatud");
    const[telefon, muudaTelefon] = useState("Telefoni pole sisestatud");
    const[sonum, muudaSonum] = useState("");


    const sisestaAadress = () => {
        muudaAadress(aadressRef.current.value);
        if (aadressRef.current.value === "") {
            muudaSonum("Tühjalt ei saa aadressi sisestada!")
            return;
        }
        if (aadressRef.current.value.length < 5) {
            muudaSonum("Aadress on liiga lühike!")
            return;
        }
    
        muudaAadress(aadressRef.current.value);
    }

    const sisestaEmail = () => {
        if (emailRef.current.value.includes("@") === false) {
            muudaSonum("Email ei ole korrektne");
        return;
}

        muudaEmail(emailRef.current.value);
    }

    const sisestaTelefon = () => {
        if (telefonRef.current.value.startsWith("+372") === false) {
            muudaSonum("Suunakood on puudu");
        return;
}

        muudaTelefon(telefonRef.current.value);
    }


  return (
    <div>
        <div>Meie kõik kasutajad:</div>
        <div>{kasutajadFailist.map(kasutaja => 
            <div key={kasutaja}>
                {kasutaja}
                                    {/* {:nimi} */}
                <Link to={"/kasutaja/" + kasutaja}>
                    <button>VT detailsemalt</button>
                </Link>
            </div>
        )}</div>

        <div>{sonum}</div>
        <div>Sinu aadress: {aadress} </div>
        <div>Sinu email: {email}</div>
        <div>Sinu telefon: {telefon}</div>

        <br /><br />

        <label>Aadress</label><br />
        <input ref={aadressRef} type="text" /><br />
        <button onClick={sisestaAadress}>Sisesta</button><br />
        <br /><br />

        <label>Email</label><br />
        <input ref={emailRef} type="text" /><br />
        <button onClick={sisestaEmail}>Sisesta</button><br />
        <br /><br />

        <label>Telefon</label><br />
        <input ref={telefonRef} type="text" /><br />
        <button onClick={sisestaTelefon}>Sisesta</button><br />
        <br /><br />

    </div>
  )
}

export default Profiil