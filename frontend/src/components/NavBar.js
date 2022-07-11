import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NavBar() {
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="nav-logo">
        <p>Fincance Buddy logo</p>
      </Link>
      <Button className="btn btn-primary">click</Button>
    </div>
  </nav>;
}

export default NavBar;
