import React, { useRef, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { auth } from '../firebase'; // lisa auth import
import { onAuthStateChanged } from 'firebase/auth';
// import schoolsFromFile from "../vocationalinstitutions.json"


function ChangeProfessions() {
    const [professions, setProfessions] = useState([]);
    const [user, setUser] = useState(null);
    const {schoolIndex, fieldIndex} = useParams();
    const found = professions[schoolIndex];
    const navigate = useNavigate();
    
    const nameRef = useRef('');
    const urlRef = useRef('');
    const qualificationStandardRef = useRef('');
    
    const url = "https://front-end-production-46aa.up.railway.app/professions"


    useEffect(() => {
      // Kuula sisselogimist
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);

    });
      fetch(url)
        .then(res => res.json())
        .then(json => setProfessions(json || []))
        .catch(err => console.error("Andmete laadimine ebaõnnestus:", err));

      return () => unsubscribe();

    }, []);

    
    if (!found) return <div>Eriala ei leitud</div>;

    const change = async () => {

      if (!user) {
      alert("Pead olema sisse logitud, et muudatusi teha");
      return;
    }

      try {
        const token = await user.getIdToken();
        // const urlWithAuth = `${url}?auth=${token}`;

        professions[schoolIndex].fields[fieldIndex] = {       
          "name": nameRef.current.value,
          "url": urlRef.current.value,
          "qualificationStandard": qualificationStandardRef.current.value,       
        }

        console.log("Salvestatakse andmed:", professions);
        console.log("Kooli indeks:", schoolIndex, "Eriala indeks:", fieldIndex);
        console.log("Token:", token);

        const res = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // ← ÕIGE KOHT
          },
          body: JSON.stringify(professions),
        });
 

        if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
        }

        alert("Eriala edukalt muudetud");
        navigate("/add-professions"); // pärast edukat salvestust mine tagasi avalehele
      } catch (err) {
      let serverResponse = "";
      try {
      serverResponse = await err?.response?.text?.();
      } catch (readErr) {
      serverResponse = "Serveri vastust ei saanud lugeda.";
      }

      console.error("Täielik viga:", err);
      console.log("Serveri vastus:", serverResponse);
      alert("Muudatuste salvestamisel tekkis viga");
  }
      
      
    
      // if (found === undefined) {
      //   //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
      //   return <div>Eriala ei leitud</div>
      // }

    }
  return (
    <div>
        <div>Muuda erialasid</div>

        <label>Eriala nimetus</label><br />
        <input  ref={nameRef} type="text" defaultValue={found.fields[fieldIndex].name}/><br />
        <label>Eriala koduleht</label><br />
        <input  ref={urlRef} type="url" defaultValue={found.fields[fieldIndex].url}/><br />
        <label>Eriala kutsestandard</label><br />
        <input ref={qualificationStandardRef} type="url" defaultValue={found.fields[fieldIndex].qualificationStandard}/><br />

      


          {/* <Link to="/"> Kui sa vajutad nuppu, siis Link navigatsioon toimub enne, 
          kui onClick={change} jõuab lõpuni töötada. Selle tulemusel kaotab komponent fookuse 
          ja ref muutub nulliks. ChangeProfessions.jsx:77 Täielik viga: TypeError: 
          Cannot read properties of null (reading 'value')
          at change (ChangeProfessions.jsx:50:1)change	@	ChangeProfessions.jsx:77 
          ChangeProfessions.jsx:78 Serveri vastus: undefined*/}
          <button onClick={change}>Muuda</button><br />
        {/* </Link> */}
    </div>
  )
}

export default ChangeProfessions