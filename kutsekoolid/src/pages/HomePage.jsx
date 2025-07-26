import React, { useRef, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Spinner } from "react-bootstrap";
import '../HomePage.css';




// import schoolsFromFile from "../vocationalinstitutions.json"

function HomePage() {
    // const professions = schoolsFromFile.slice();
    const searchRef = useRef();
    const [professions, setProfessions] = useState([]);
    const [localProfessions, setLocalProfessions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [openCategories, setOpenCategories] = useState({});

const toggleCategory = (category) => {
  setOpenCategories(prev => ({
    ...prev,
    [category]: !prev[category]
  }));
};



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
    
    

    // 
    const findProfessions = () => {
        const searchTerm = searchRef.current.value.toLowerCase();

        if (!searchTerm) {
            setIsSearching(false); // ← tühjendatud otsing
            setProfessions(localProfessions);
            return;
        }

        setIsSearching(true); // ← kasutaja otsib midagi

        const result = localProfessions
            .map(school => {
                const filteredFields = school.fields?.filter(field =>
                    field.name?.toLowerCase().includes(searchTerm)
                ) || [];

                const schoolMatches =
                    school.name?.toLowerCase().includes(searchTerm) ||
                    school.location?.toLowerCase().includes(searchTerm) ||
                    school.county?.toLowerCase().includes(searchTerm) ||
                    school.address?.toLowerCase().includes(searchTerm) ||
                    school.email?.toLowerCase().includes(searchTerm);

                if (schoolMatches || filteredFields.length > 0) {
                    return {
                        ...school,
                        fields: filteredFields
                     };
                }

                return null; // ei vasta üldse
        })
        .filter(Boolean); // eemaldab `null` väärtused

    setProfessions(result);

    };


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

      const groupFieldsByCategory = (fields = []) => {
        return fields.reduce((acc, field) => {
          const category = field.category || "Määramata";
          if (!acc[category]) acc[category] = [];
          acc[category].push(field);
          return acc;
         }, {});
      };


  return (
    <div>
        <div className="homepage-container">
            <div className="top-bar">
                <input ref={searchRef} onChange={findProfessions} type="text" placeholder="Otsi eriala..." />
                {isSearching && professions.length === 0 && (
                  <p>Ühtegi vastet ei leitud.</p>
                )}

                
                <div className="sort-buttons">
                    <button onClick={sortAZ}>Sorteeri A-Z</button>
                    <button onClick={sortZA}>Sorteeri Z-A</button>
                </div>
            </div>

            <div className="content">
                <div className="left-sidebar">
                    <p><strong>Filtrid (Tulekul)</strong></p>
                </div>

                <div className="main-content">
                    
  {selectedSchool ? (
    <div className="school-card">
      <button className="btn btn-secondary mb-3" onClick={() => {
        setSelectedSchool(null)
        window.scrollTo(0, 0);
        }}>
        ← Tagasi koolide juurde
      </button>

      <h3 className="school-name">{selectedSchool.name}</h3>
      <div>{selectedSchool.location}</div>
      <div>{selectedSchool.county}</div>
      <div>{selectedSchool.address}</div>
      <div>{selectedSchool.contactPhone}</div>
      <div>{selectedSchool.email}</div>
      <a href={selectedSchool.homepageUrl} target="_blank" rel="noopener noreferrer">
        {selectedSchool.homepageUrl}
      </a>
      <br />
    {Object.entries(groupFieldsByCategory(selectedSchool.fields)).map(
      ([category, fields]) => (
        <div key={category} className="category-group">
        <h5
          className="category-header"
          onClick={() => toggleCategory(category)}
          style={{ cursor: "pointer", userSelect: "none" }}
      >
          {openCategories[category] ? "▼ " : "▶ "} {category}
        </h5>

      {openCategories[category] && (
        <div className="field-list">
          {fields.map((field, index) => (
            <div key={index} className="field-card">
              <div>{field.name}</div>
              {field.url && (
                <a href={field.url} target="_blank" rel="noopener noreferrer">
                  {field.url}
                </a>
              )}
              {field.qualificationStandard && (
                <a
                  href={field.qualificationStandard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {field.qualificationStandard}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
)}
</div>

  ) : (
    professions.map((school, index) => (
      <div className="school-card" key={index}>
        <h3 className="school-name">{school.name}</h3>
        <div>{school.location}</div>
        <div>{school.county}</div>
        <div>{school.address}</div>
        <div>{school.contactPhone}</div>
        <div>{school.email}</div>
        <a href={school.homepageUrl} target="_blank" rel="noopener noreferrer">
          {school.homepageUrl}
        </a>
        <br /><br />
        <button className="btn btn-primary" onClick={() => setSelectedSchool(school)}>
          Näita erialasid
        </button>

        {isSearching && school.fields?.length > 0 && (
          <div className="fields-container">
            {school.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="field-card">
                <div>{field.name}</div>
                {field.url && (
                  <a href={field.url} target="_blank" rel="noopener noreferrer">
                    {field.url}
                  </a>
                )}
                {field.qualificationStandard && (
                  <a href={field.qualificationStandard} target="_blank" rel="noopener noreferrer">
                    {field.qualificationStandard}
                  </a>
                )}
                <div>{field.category}</div>
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    ))
  )}
</div>

                            

                            {/* {school.fields.map((field, fieldIndex) => (
                                <div key={fieldIndex} className="field-card">
                                    <div>{field.name}</div>
                                    <a href={field.url} target="_blank" rel="noopener noreferrer">{field.url}</a>
                                    <a href={field.qualificationStandard} target="_blank" rel="noopener noreferrer">{field.qualificationStandard}</a>
                                    <div>{field.category}</div>
                                    <br />
                                </div>
                            ))} */}
                        
                    

                <div className="right-sidebar">
                    <p><strong>Google Ads (Tulevikus)</strong></p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage