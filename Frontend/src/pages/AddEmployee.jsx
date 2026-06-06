
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../axiosInstance';
import "./AddEmployee.css";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dept: ""
  });
  const navigate = useNavigate();

  let handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    try {
      await axiosInstance.post("http://localhost:8083/addEmployee", formData);
      toast.success("data submitted successfully");
      navigate("/")
    }
    catch (err) {
      toast.error(err);
    }
  };

  let handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <Container fluid className="employee-page">
      <div className="employee-card">
        <h1 className="employee-title">
          Add Employee
        </h1>

        <p className="employee-subtitle">
          Create a new employee record
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee name</Form.Label>
            <Form.Control type="text" placeholder="employee name"
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee age</Form.Label>
            <Form.Control type="text" placeholder="employee age"
              name='age'
              value={formData.age}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Department</Form.Label>
            <Form.Control type="text" placeholder="employee department"
              name='dept'
              value={formData.dept}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Group className="mb-3">
              <button type="submit" className="employee-btn">
                Add Employee
              </button>
            </Form.Group>
          </Form.Group>
        </Form>
        <div className="back-link">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </Container>
  )
}

export default AddEmployee