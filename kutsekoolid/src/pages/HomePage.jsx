import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from "react-bootstrap";



// import schoolsFromFile from "../vocationalinstitutions.json"

function HomePage() {
    // const professions = schoolsFromFile.slice();
    const searchRef = useRef();
    const [professions, setProfessions] = useState([]);
    const [localProfessions, setLocalProfessions] = useState([]);
    // const url = "https://front-end-production-46aa.up.railway.app/professions"

  useEffect(() => {
  fetch("https://front-end-production-46aa.up.railway.app/professions")
    .then(res => res.json())
    .then(json => {
      const array = Array.isArray(json)
        ? json
        : Object.values(json || {});
      setProfessions(array);
      setLocalProfessions(array);
    })
    .catch(err => console.error("Ei saanud elukutseid laadida", err));
}, []);
    

    // useEffect(() => {
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       user.getIdToken().then(token => {
    //         fetch(url, {
    //           headers: {
    //             "Authorization": `Bearer ${token}`
    //           }
    //         })
    //         .then(res => res.json())
    //         .then(json => {
    //         setProfessions(json || []);
    //         setLocalProfessions(json || []);
    //         });
    //       });
    //     }
    //   });

    //   return () => unsubscribe();
    // }, []);
    
    

    const findProfessions = () => {
      const searchTerm = searchRef.current.value.toLowerCase();
        if (!searchTerm) {
          setProfessions(localProfessions);
          return;
        }

      const result = localProfessions.map(kool => ({
        ...kool, //jäta kõik ülejäänud alles, välja arvatud mis hakkab allpool tulema
        "fields": kool.fields.filter(field =>          
          field.name.toLowerCase().includes(searchTerm)
        )
      }));
      console.log(result[1].fields);
      setProfessions(result);
    }

      if (localProfessions.length === 0) {
        console.log("Ootame andmeid või kasutaja pole tuvastatud");
        return <Spinner/>
      }

        // const sortAZ = () => {
        //   professions.sort((a,b) => a.fields.name.localeCompare(b.fields.name, "et"));
        //   setProfessions(professions.slice());
        // }

        // Jah, sinu koodis on loogiline viga selles, kuidas andmeid sorteeritakse. Probleem on
        //  selles,
        //  et sa eeldad, et iga a ja b on objektid, millel on otse fields.name olemas — aga 
        // tegelikult sinu andmestruktuuris on:

        // professions on koolide list

        // Igal koolil on fields, mis on massiv erialadest

        // Seega fields.name ei ole olemas — fields on massiv, mitte objekt.

        const sortAZ = () => {
         const sorted = professions.map(school => ({
            ...school,
            fields: [...school.fields].sort((a, b) =>
              a.name.localeCompare(b.name, "et")
            )
          }));
        setProfessions(sorted);
        };


      // const sortZA = () => {
      //   professions.sort((a,b) => b.name.localeCompare(a.name, "et"));
      //   setProfessions(professions.slice());
      // }

      const sortZA = () => {
        const sorted = [...professions].sort((a, b) =>
          b.name.localeCompare(a.name, "et")
        );
        setProfessions(sorted);
      };


  return (
    <div>
        <Link to="/add-professions">
            <button>Lisa ja muuda erialasid</button>
        </Link>
        

        <input ref={searchRef} onChange={findProfessions} type="text" />
        <br /><br />
        <button onClick={sortAZ}>Sorteeri A-Z</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>

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
                    <div>{field.category}</div> <br />
                    <br /><br />
                    </div>))}
            </div>))}
    </div>
  )
}

export default HomePage