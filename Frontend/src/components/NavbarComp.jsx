import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./NavbarComp.css";
const NavbarComp = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout()
    navigate("/login")
  }

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand-logo">
          Employee Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/">
              View Employee
            </Nav.Link>

            <Nav.Link as={Link} to="/addEmp">
              Add Employee
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
          <Button
            className="logout-btn"
            onClick={logoutUser}
          >
            Logout
          </Button>
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default NavbarComp