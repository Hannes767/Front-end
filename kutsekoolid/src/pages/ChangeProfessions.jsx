import React, { useRef } from 'react'
import { useParams, Link } from "react-router-dom"
import schoolsFromFile from "../vocationalinstitutions.json"


function ChangeProfessions() {
    const {schoolIndex, fieldIndex} = useParams();
    const found = schoolsFromFile[schoolIndex];
    const nameRef = useRef('');
    const urlRef = useRef('');
    const qualificationStandardRef = useRef('');

    const change = () => {
        schoolsFromFile[schoolIndex].fields[fieldIndex] = {       
          "name": nameRef.current.value,
          "url": urlRef.current.value,
          "qualificationStandard": qualificationStandardRef.current.value,       
        }    
      }
    
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

        <Link to="/add-professions/">
          <button onClick={change}>Muuda</button><br />
        </Link>
    </div>
  )
}

export default ChangeProfessions