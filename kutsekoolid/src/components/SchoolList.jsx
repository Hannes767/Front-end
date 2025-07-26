import React from "react";
import { Button } from "react-bootstrap";

function SchoolList({ schools, setEditIndex, saveSchools }) {
  const deleteSchool = (index) => {
    if (!window.confirm("Oled kindel, et soovid kustutada?")) return;
    const updated = [...schools];
    updated.splice(index, 1);
    saveSchools(updated);
  };

  return (
    <div>
      {schools.length === 0 && <div>Koolid puuduvad</div>}
      {schools.map((school, i) => (
        <div key={i} style={{ borderBottom: "1px solid #ccc", padding: "1rem 0" }}>
          <h4>{school.name}</h4>
          <div>{school.location}</div>
          <div>{school.county}</div>
          <div>{school.address}</div>
          <div>{school.contactPhone}</div>
          <div>
            <a href={school.homepageUrl} target="_blank" rel="noopener noreferrer">
              {school.homepageUrl}
            </a>
          </div>
          <div>{school.email}</div>
          <Button variant="outline-primary" onClick={() => setEditIndex(i)} className="me-2">
            Muuda
          </Button>
          <Button variant="outline-danger" onClick={() => deleteSchool(i)}>
            Kustuta
          </Button>
        </div>
      ))}
    </div>
  );
}

export default SchoolList;
