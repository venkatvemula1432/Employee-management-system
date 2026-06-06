import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import "./ViewEmployee.css";

const ViewEmployee = () => {

  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const fetchEmployee = async () => {
    const res = await axiosInstance.get("http://localhost:8083/getEmployees");
    // console.log(res.data);
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  // to delete employee based on id
  const deleteEmp = async (id) => {
    try {
      //  let url = "http://localhost:8083/deleteEmp/";
      // let x = await axios.delete(url+id);
      // console.log(x);
      await axiosInstance.delete(`http://localhost:8083/deleteEmp/${id}`);
      fetchEmployee();
    }
    catch (err) {
      console.log(err);
    }
  }

  // to navigate into update component
  const handleUpdate = id => {
    navigate(`/updateEmp/${id}`)
  }
  return (
    <Container fluid className="employee-view-page">
      <Row>
        <Col className='mt-4 mb-2 d-flex align-items-center justify-content-center'><h1 className="employee-heading">
  Employee Dashboard
</h1></Col>
      </Row>
      <Row>
        <Col>
         <Link
  to="/addEmp"
  className="add-employee-btn"
>
  + Add Employee
</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            employees && employees.length > 0 ? (
            <Table
  striped
  bordered
  hover
  className="employee-table text-center"
>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    employees && employees.map((emp, i) => {
                      return (
                        <tr key={i}>
                          <td>{emp.id}</td>
                          <td>{emp.name}</td>
                          <td>{emp.age}</td>
                          <td>{emp.dept}</td>
                          <td>
                           <Button
  onClick={() => handleUpdate(emp.id)}
  className="edit-btn me-3"
>
  Edit
</Button>

<Button
  onClick={() => deleteEmp(emp.id)}
  className="delete-btn"
>
  Delete
</Button> </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            ) : <h1 className="no-data">
  No Employees Found 
</h1>
          }

        </Col>
      </Row>
    </Container>
  )
}

export default ViewEmployee