import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Auth from "../utils/auth";
import "../App.scss";

//If user is loggidIn , show the ccompareProperty and myHomes pages to the user
//If user is not loggedIn, show only searchCity,login and signup pages
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
              {Auth.loggedIn() ? (
                <Nav.Link activeclassname="active" as={Link} to="/compare">
                  <h4>Compare Property</h4>
                </Nav.Link>
              ) : null}
              <Nav.Link activeclassname="active" as={Link} to="/search">
                <h4>Search City</h4>
              </Nav.Link>
              {/* <Nav.Link activeclassname="active" as={Link} to="/myhomes">
                <h4>My Homes</h4>
              </Nav.Link> */}
              {/* if user is logged in show saved homes and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/myhomes">
                    <h4>My Homes</h4>
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>
                    <h4>Logout</h4>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link activeclassname="active" as={Link} to="/login">
                    <h4>Login</h4>
                  </Nav.Link>
                  <Nav.Link activeclassname="active" as={Link} to="/signup">
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
