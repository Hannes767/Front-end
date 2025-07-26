import React, { useEffect, useRef } from "react";
import '../App.css';
import { Button, Form } from "react-bootstrap";


function SchoolForm({ schools, saveSchools, editIndex, setEditIndex }) {
  const nameRef = useRef();
  const locationRef = useRef();
  const countyRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const homepageRef = useRef();
  const emailRef = useRef();

  const isEditing = editIndex !== null;

  useEffect(() => {
    if (editIndex !== null && schools[editIndex]) {
      const school = schools[editIndex];
      nameRef.current.value = school.name || "";
      locationRef.current.value = school.location || "";
      countyRef.current.value = school.county || "";
      addressRef.current.value = school.address || "";
      phoneRef.current.value = school.contactPhone || "";
      homepageRef.current.value = school.homepageUrl || "";
      emailRef.current.value = school.email || "";
    } else {
      // tühjenda vorm
      if (nameRef.current) {
        nameRef.current.value = "";
        locationRef.current.value = "";
        countyRef.current.value = "";
        addressRef.current.value = "";
        phoneRef.current.value = "";
        homepageRef.current.value = "";
        emailRef.current.value = "";
      }
    }
  }, [editIndex, schools]);

  const handleSubmit = () => {
  

  const defaultField = {
    name: "",
    url: "",
    qualificationStandard: "",
    category: ""
  };

  const newSchool = {
    name: nameRef.current.value,
    location: locationRef.current.value,
    county: countyRef.current.value,
    address: addressRef.current.value,
    contactPhone: phoneRef.current.value,
    homepageUrl: homepageRef.current.value,
    email: emailRef.current.value,
    logo: "",
    fields: isEditing && Array.isArray(schools[editIndex]?.fields)
      ? schools[editIndex].fields
      : [defaultField],
  };

  const isFieldEmpty = (field) =>
    !field.name && !field.url && !field.qualificationStandard && !field.category;

    let updatedSchools = [...schools];

    if (newSchool.fields.length === 1) {
    // ainult üks field — ükskõik kas tühi või mitte, ära eemalda
    } else {
    // eemalda kõik tühjad, kui mitu
    newSchool.fields = newSchool.fields.filter(field => !isFieldEmpty(field));
    // kui kõik eemaldati, lisa vähemalt üks tühi tagasi
    if (newSchool.fields.length === 0) {
    newSchool.fields = [defaultField];
    }
  }



  if (editIndex !== null) {
    updatedSchools[editIndex] = newSchool;
  } else {
    updatedSchools.push(newSchool);
  }

  saveSchools(updatedSchools);
  setEditIndex(null);
};

  const handleCancel = () => {
    setEditIndex(null);
  };

  return (
    <Form style={{ marginBottom: "2rem" }}>
      <Form.Group>
        <Form.Label>Kooli nimi</Form.Label>
        <Form.Control type="text" ref={nameRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Asukoht</Form.Label>
        <Form.Control type="text" ref={locationRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Maakond</Form.Label>
        <Form.Control type="text" ref={countyRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Aadress</Form.Label>
        <Form.Control type="text" ref={addressRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Kontakttelefon</Form.Label>
        <Form.Control type="text" ref={phoneRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Koduleht</Form.Label>
        <Form.Control type="url" ref={homepageRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        {editIndex !== null ? "Muuda" : "Lisa"}
      </Button>{" "}
      {editIndex !== null && (
        <Button variant="secondary" onClick={handleCancel} style={{ marginTop: "1rem" }}>
          Tühista
        </Button>
      )}
    </Form>
  );
}

export default SchoolForm;
