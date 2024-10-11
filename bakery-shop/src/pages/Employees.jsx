import React, { useEffect, useRef, useState } from 'react'
import { Button, Table } from "react-bootstrap";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef()

  // TODO: Load data from backend service

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(body => setEmployees(body.data))
  }, []);

  const addEmployee = () => {
    employees.push(
      {
        "id": idRef.current.value,
        "email": emailRef.current.value,
        "first_name": firstNameRef.current.value,
        "last_name" : lastNameRef.current.value,        
        "avatar": avatarRef.current.value,
      }
    );
    localStorage.setItem("employee", JSON.stringify(employees));
    setEmployees(employees.slice());
    // TODO: Add validations
    // TODO: Add an employee to the table
  }

  const deleteEmployee = (index) => {
    employees.splice(index, 1);
    localStorage.setItem("employee", JSON.stringify(employees));
    setEmployees(employees.slice());
    // TODO: Delete an employee from the table
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          {/* <!-- TODO: Add a column for an avatar --> */}
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) =>
        <tr key={index}>
          <td>{employee.id}</td>
          <td>{employee.first_name} {employee.last_name}</td>
          <td>{employee.email}</td>
          <td><img style={{width: "100px"}} src={employee.avatar} alt="" /></td>
          <td onClick={() => deleteEmployee(index)}><Button type="button" variant="danger">Delete</Button></td>
        </tr>)}
        

        <tr className="input-row">
          <td><input ref={idRef} type="text" placeholder="ID" className="form-control"  /></td>
          <td>
            <input ref={firstNameRef} type="text" placeholder="First Name" className="form-control"/>
            <input ref={lastNameRef} type="text" placeholder="Last Name" className="form-control"/>
          </td>
          <td><input ref={emailRef} type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={avatarRef} type="text"  placeholder="Avatar" className="form-control"/></td>
          <td onClick={addEmployee}><Button type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;