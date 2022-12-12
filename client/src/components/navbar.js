import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Auth from "../utils/auth";

function AppNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <h1>InvestorRest</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/compare">
                <h4>Compare Property</h4>
              </Nav.Link>
              <Nav.Link as={Link} to="/search">
                <h4>Search City</h4>
              </Nav.Link>
              <Nav.Link as={Link} to="/myhomes">
                <h4>My Homes</h4>
              </Nav.Link>
              {/* if user is logged in show saved homes and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/saved">
                    <h4>My Homes</h4>
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <h4>Login</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <h4>Signup</h4>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default AppNavbar;
