import React from 'react'
import { Link } from 'react-router-dom'
import schoolsFromFile from "../vocationalinstitutions.json"

function HomePage() {
    const professions = schoolsFromFile.slice();

  return (
    <div>
        <Link to="/add-professions">
            <button>Lisa erialasid</button>
        </Link>
        <Link to="/change-professions">
            <button>Muuda erialasid</button>
        </Link>
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