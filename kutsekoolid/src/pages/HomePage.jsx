import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from "react-bootstrap";
// import schoolsFromFile from "../vocationalinstitutions.json"

function HomePage() {
    // const professions = schoolsFromFile.slice();
    const searchRef = useRef();
    const [professions, setProfessions] = useState([]);
    const [localProfessions, setLocalProfessions] = useState([]);
    const url = "https://kutsekoolid-default-rtdb.europe-west1.firebasedatabase.app/professions.json"

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(json => {
            setProfessions(json || []);
            setLocalProfessions(json || []);
          })
      }, []);

      
    

    const findProfessions = () => {
        const result = localProfessions.filter(profession => 
          profession.name.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
          profession.fields(field => field.name.toLowerCase().includes(searchRef.current.value.toLowerCase()))
      );
        setProfessions(result);
      }

      if (localProfessions.length === 0) {
        return <Spinner/>
      }

      const sortAZ = () => {
        professions.sort((a,b) => a.fields.name.localeCompare(b.fields.name, "et"));
        setProfessions(professions.slice());
      }

  return (
    <div>
        <Link to="/add-professions">
            <button>Lisa erialasid</button>
        </Link>
        <Link to="/change-professions">
            <button>Muuda erialasid</button>
        </Link>

        <input ref={searchRef} onChange={findProfessions} type="text" />
        <br /><br />
        <button onClick={sortAZ}>Sorteeri A-Z</button>

        <br /><br />
        {professions.map((school, index) => (
            <div key={index}>
                <h3>{school.name}</h3>
                <div>{school.location}</div>
                <div>{school.county}</div>
                <div>{school.address}</div>
                <div>{school.contactPhone}</div>
                <div>{school.email}</div>
                <a href={school.homepageUrl} target="_blank" rel="noopener noreferrer">{school.homepageUrl}</a> <br />
                <br />
                {school.fields.map((field, fieldIndex) => (
                    <div key={fieldIndex}> 
                    <div>{field.name}</div>             
                    <a href={field.url} target="_blank" rel="noopener noreferrer">{field.url}</a> <br />
                    <a href={field.qualificationStandard} target="_blank" rel="noopener noreferrer">{field.qualificationStandard}</a>
                    <br /><br />
                    </div>))}
            </div>))}
    </div>
  )
}

export default HomePage