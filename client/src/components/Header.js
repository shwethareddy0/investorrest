import React from "react";
import { Jumbotron } from "react-bootstrap";
import AppNavbar from "./Navbar";

function Header() {
  return (
    <div>
      <Jumbotron fluid className="text-light bg-dark">
        <AppNavbar />
      </Jumbotron>
    </div>
  );
}

export default Header;
