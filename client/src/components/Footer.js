import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

function Footer() {
  return (
    <div className="fixed-bottom text-center">
      <Navbar bg="dark" variant="dark" expand="lg" color="dark" dark>
        <Container fluid style={{ justifyContent: "center" }}>
          <NavbarBrand>Copyright &copy;2022 InvestorRest</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
