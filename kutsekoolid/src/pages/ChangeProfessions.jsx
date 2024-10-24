import React, { useRef, useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
// import schoolsFromFile from "../vocationalinstitutions.json"


function ChangeProfessions() {
  const [professions, setProfessions] = useState([]);
    const {schoolIndex, fieldIndex} = useParams();
    const found = professions[schoolIndex];
    const nameRef = useRef('');
    const urlRef = useRef('');
    const qualificationStandardRef = useRef('');
    const url = "https://kutsekoolid-default-rtdb.europe-west1.firebasedatabase.app/professions.json"

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => setProfessions(json || [])); 
    }, []);

    const change = () => {
        professions[schoolIndex].fields[fieldIndex] = {       
          "name": nameRef.current.value,
          "url": urlRef.current.value,
          "qualificationStandard": qualificationStandardRef.current.value,       
        }  
        fetch (url, {method: "PUT", body: JSON.stringify(professions)});  
      };
      
    
      if (found === undefined) {
        //kui on tingimused täidetud, siis siin  HTML väljakuvamine lõppeb
        return <div>Eriala ei leitud</div>
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

        <Link to="/">
          <button onClick={change}>Muuda</button><br />
        </Link>
    </div>
  )
}

export default ChangeProfessions