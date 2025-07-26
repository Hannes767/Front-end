import React, { useRef, useState, useEffect } from 'react'
import { Spinner } from "react-bootstrap";
import '../App.css';
import { Button, Form, Card, Container, ListGroup} from "react-bootstrap";


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
        <Container className="py-4">
        <Form.Control
            type="text"
            placeholder="Otsi eriala..."
            ref={searchRef}
            onChange={findProfessions}
            className="mb-3"
        />

        <br /><br />

        <div className="mb-4">
            <Button onClick={sortAZ} variant="outline-secondary" className="me-2">Sorteeri A-Z</Button>
            <Button onClick={sortZA} variant="outline-secondary">Sorteeri Z-A</Button>
        </div>

        <br /><br />
        {professions.map((school, index) => (
    <Card className="mb-4" key={index}>
      <Card.Body>
        <Card.Title>{school.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{school.location}, {school.county}</Card.Subtitle>
        <div>
          <div><strong>Aadress:</strong> {school.address}</div>
          <div><strong>Telefon:</strong> {school.contactPhone}</div>
          <div><strong>Email:</strong> {school.email}</div>
          <div>
            <strong>Veebileht:</strong> <a href={school.homepageUrl} target="_blank" rel="noreferrer">{school.homepageUrl}</a>
          </div>
        </div>

        <hr />

        <h5>Erialad</h5>
        <ListGroup variant="flush">
          {school.fields.map((field, i) => (
            <ListGroup.Item key={i}>
              <strong>{field.name}</strong><br />
              <a href={field.url} target="_blank" rel="noreferrer">Õppekava</a><br />
              <a href={field.qualificationStandard} target="_blank" rel="noreferrer">Kutse standard</a><br />
              <span className="text-muted">{field.category}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  ))}
</Container>
    </div>
  )
}

export default HomePage