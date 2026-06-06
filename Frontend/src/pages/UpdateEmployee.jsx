
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../axiosInstance';
import "./UpdateEmployee.css";
const UpdateEmployee = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dept, setDept] = useState("");
  const navigate = useNavigate();
  const { empid } = useParams();
  useEffect(() => {
    axiosInstance.get(`http://localhost:8083/emp/${empid}`)
      .then(res => {
        const data = res.data;
        // console.log(data);
        setId(data.id);
        setName(data.name);
        setAge(data.age);
        setDept(data.dept);
      }).catch(err => console.log(err));
  }, [])


  let handleSubmit = async e => {
    e.preventDefault();
    const formData = {
      id,
      name,
      age,
      dept
    };
    console.log(formData);
    try {
      await axiosInstance.put(`http://localhost:8083/updateEmp`, formData);
      toast.success("data updated successfully");
      navigate("/")
    }
    catch (err) {
      toast.error(err);
    }
  }
  return (
    <Container fluid className="update-page">
      <div className="update-card">
        <h1 className="update-title">
          Update Employee
        </h1>

        <p className="update-subtitle">
          Modify employee information
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control type="text" placeholder="employee id"
              readOnly
              name='id'
              value={id}
              onChange={e => setId(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee name</Form.Label>
            <Form.Control type="text" placeholder="employee name"
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee age</Form.Label>
            <Form.Control type="text" placeholder="employee age"
              name='age'
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Department</Form.Label>
            <Form.Control type="text" placeholder="employee department"
              name='dept'
              value={dept}
              onChange={e => setDept(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Group className="mb-3">
              <button
                type="submit"
                className="update-btn"
              >
                Update Employee
              </button>
            </Form.Group> </Form.Group>
        </Form>
        <div className="home-link">
          <Link to="/">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default UpdateEmployee