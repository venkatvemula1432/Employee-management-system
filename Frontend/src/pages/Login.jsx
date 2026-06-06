import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axiosInstance from '../axiosInstance';
import "./Login.css";
import { toast } from 'react-toastify';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    const loginData = {
      username,
      password
    }
    console.log(loginData);

    try {
      const response = await axiosInstance.post('http://localhost:8083/login', loginData);
      if (response.status === 200) {
        login();
        navigate('/')
      } else {

        alert('Login failed for user. Please retry!')
      }
    } catch (error) {
      toast.error(error.response?.data || "Login failed");
      // alert('And error occurred. please retry')
    }
  }


  return (
    <Container fluid className="login-page">
      <div className="login-box">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue</p>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username </Form.Label>
            <Form.Control type="text" placeholder="username"
              name='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password"
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              type="submit"
              value="Login"
              className="login-btn"
            />
          </Form.Group>
        </Form>
        <p className="register-link">
          <span>Don't have an account?</span>
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </Container>
  )
}

export default Login