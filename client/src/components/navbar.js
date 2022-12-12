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
                <h3>Compare Property</h3>
              </Nav.Link>
              <Nav.Link as={Link} to="/search">
                <h3>Search A City</h3>
              </Nav.Link>
              <Nav.Link as={Link} to="/myhomes">
                <h3>My Homes</h3>
              </Nav.Link>
              {/* if user is logged in show saved homes and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/saved">
                    <h3>My Homes</h3>
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <h3>Login</h3>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <h3>Signup</h3>
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
