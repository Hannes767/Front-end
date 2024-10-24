import React, { useRef, useState, useEffect } from 'react'
// import schoolsFromFile from "../vocationalinstitutions.json"
import {Link} from "react-router-dom"

function AddProfessions() {
    const [message, setMessage] = useState("Lisa eriala");
    const [professions, setProfessions] = useState([]);
    const [schoolIndex, setSchoolIndex] = useState(0);
    const nameRef = useRef('');
    const urlRef = useRef('');
    const qualificationStandardRef = useRef('');
    const url = "https://kutsekoolid-default-rtdb.europe-west1.firebasedatabase.app/professions.json"

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => setProfessions(json || [])); 
    }, []);

    const add = () => {
        const newProfession = {
            name: nameRef.current.value,
            url: urlRef.current.value,
            qualificationStandard: qualificationStandardRef.current.value,
        };

        // Lisage uus eriala valitud kooli fields massiivi
        professions[schoolIndex].fields.push(newProfession);
        fetch (url, {method: "PUT", body: JSON.stringify(professions)});  
        

        setProfessions([...professions]); // Uuendage professionide olekut
        setMessage("Eriala lisatud");
        // Tühjendage sisestusväljad
        nameRef.current.value = '';
        urlRef.current.value = '';
        qualificationStandardRef.current.value = '';
    };

    // const add = () => {
    //     schoolsFromFile.push(
    //        {
    //         "name": nameRef.current.value,
    //         "url": urlRef.current.value,
    //         "qualificationStandard": qualificationStandardRef.current.value,
    //        }
    //     )
    //     setProfessions(schoolsFromFile.slice());
    //     setMessage("Eriala lisatud");
    //     }
    
  return (
    <div>
        <div>{message}</div>

        <select onChange={(e) => setSchoolIndex(Number(e.target.value))} value={schoolIndex}>
            {professions.map((school, index) => (
            <option key={index}>{school.name}</option>
            ))}
        </select><br /><br />

        <label>Eriala nimetus</label><br />
        <input ref={nameRef} type="text" /><br />
        <label>Eriala koduleht</label><br />
        <input ref={urlRef} type="url" /><br />
        <label>Eriala kutsestandard</label><br />
        <input ref={qualificationStandardRef} type="url" /><br />
        <button onClick={add}>Lisa</button><br /><br />
        {professions.map((profession, profIndex) => (
                <div key={profIndex}>
                    <h3>{profession.name}</h3>
                    {profession.fields.map((field, index) => (
                        <div key={index}>
                            <div>{field.name}</div>
                            <a href={field.url} target="_blank" rel="noopener noreferrer">{field.url}</a> <br />
                            <a href={field.qualificationStandard} target="_blank" rel="noopener noreferrer">{field.qualificationStandard}</a>
                            <br />
                            <Link to= {"/change-professions/" + profIndex + "/" + index}>
                                <button>Muuda</button>
                            </Link>
                            <br /><br />
                        </div>
                    ))}
                    
                </div>
            ))}
    </div>
  )
}

export default AddProfessions